<?php
session_start();
include("init.php");
include("../../private/dbconnection.inc.php");
echo "<!doctype html>";
echo "<html><head>";
echo "<title>Termin hinzuf&uuml;gen</title>";
echo "<style>
table {
  font-family: arial, sans-serif;
  border: 1px solid black;
  width: 100%;
}";

echo "td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}";
echo "</style>";
echo "</head><body>";
/*if(!isset($_SESSION['name'])){
  die("No name for die session...");
}*/
$datum = $_POST["datum"];
$uhrzeit = $_POST["uhrzeit"];
$name = $_POST["name"];
//$nachname=$_POST["Nachname"];
$art = $_POST["art"];
$ziel = $_POST["zielort"];
$dauer = $_POST["buchungsdauer"];
$notizen = $_POST["notizen"];
$status = $_POST["status"];

//Vorbereitung der Verbindung zu Datenbank
$conn = mysqli_connect($servername, $username, $password, $db);
$abholort = mysqli_real_escape_string($conn, $_POST['abholort']);
//richtige Codierung, um Fehler zu vermeiden
mysqli_set_charset($conn, 'utf8');
mysqli_query($conn, "SET NAMES 'utf8'");

// Überprüfen, ob ein Termin für den gleichen Kunden mit den gleichen Daten bereits existiert
$query = "SELECT * FROM termine WHERE Datum = ? AND Uhrzeit = ? AND Vor_und_Nachname = ? AND Art = ? AND Abholort = ? AND Zielort = ? AND Buchungsdauer = ? AND SonstigeNotizen = ? AND Status = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 'sssssssss', $datum, $uhrzeit ,$name, $art, $abholort, $ziel, $dauer, $notizen, $status);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($result && mysqli_num_rows($result) > 0) {
  // Ein Termin mit denselben Daten existiert bereits
  echo "Der Kunde hat bereits einen Termin mit den gleichen Daten vereinbart.";
} else {
  // Ein Termin mit den angegebenen Daten existiert noch nicht, füge den neuen Termin hinzu
  $sql = "INSERT INTO termine (Datum, Uhrzeit, Vor_und_Nachname, Art, Abholort, Zielort, Buchungsdauer, SonstigeNotizen, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, 'sssssssss', $datum, $uhrzeit, $name, $art, $abholort, $ziel, $dauer, $notizen, $status);
  mysqli_stmt_execute($stmt);

  // Überprüfen, ob das Einfügen erfolgreich war
  if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Termin erfolgreich angelegt";
  } else {
    echo "Fehler beim Einf&uuml;gen des Termins";
  }
}
// SQL-Abfrage, um Kunden-ID basierend auf dem Kundenname abzurufen
$queryKundenID = "SELECT Kunden_ID FROM termine WHERE Vor_und_Nachname = ?";
$stmtKundenID = mysqli_prepare($conn, $queryKundenID);
mysqli_stmt_bind_param($stmtKundenID, 's', $name);
mysqli_stmt_execute($stmtKundenID);
$resultKundenID = mysqli_stmt_get_result($stmtKundenID);

//Überprüfung,ob die Abfrage erfolgreich war und Kunden_IDabrufen

if($resultKundenID && $rowKundenID = mysqli_fetch_assoc($resultKundenID)){
  $KundenID = $rowKundenID["Kunden_ID"];

  //neue sql Abfrage  mit Bedingung für die Kunden_ID
  $query = "SELECT * FROM termine WHERE Kunden_ID = ?";
  $stmt = mysqli_prepare($conn, $query);
  mysqli_stmt_bind_param($stmt,'s', $KundenID);
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);
    if($result){
    echo "<table>";
    echo "<tr><th>Kunden_ID</th>";
    echo "<th>Auftrags_ID</th>";
    echo "<th>Datum</th>";
    echo "<th>Uhrzeit</th>";
    echo "<th>Vor und Nachname</th>";
    echo "<th>Abholort</th>";
    echo "<th>Zielort</th>";
    echo "<th>Art</th>";
    echo "<th>Buchungsdauer</th>";
    echo "<th>Sonstige Notizen</th>";
    echo "<th>Status</th></tr>";

    while($row=mysqli_fetch_assoc($result)){
        echo ("<tr><td>".$row["Kunden_ID"]."</td>");
        echo "<td>".$row["Auftrags_ID"]."</td>";
        echo "<td>".$row["Datum"]."</td>";
        echo "<td>".$row["Uhrzeit"]."</td>";
        echo "<td>".$row["Vor_und_Nachname"]."</td>";
        echo "<td>".$row["Abholort"]."</td>";
        echo "<td>".$row["Zielort"]."</td>";
        echo "<td>".$row["Art"]."</td>";
        echo "<td>".$row["Buchungsdauer"]."</td>";
        echo "<td>".$row["SonstigeNotizen"]."</td>";
        echo "<td>".$row["Status"]."</td></tr>";
    }
    echo "</table>";
    mysqli_free_result($result);
  } else {
    echo "Fehler bei der Abfrage".mysqli_error($conn);
  }
}else {
  echo "Fehler bei der Abfrage oder Keine Kunden_ID gefunden";
}
// Anweisung schließen
mysqli_stmt_close($stmt);
mysqli_close($conn);
echo "</body>";
echo "</html>";
?>

