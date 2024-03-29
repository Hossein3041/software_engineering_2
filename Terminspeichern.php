<?php
include("../../private/dbconnection.inc.php");
session_start();
if(isset($_SESSION['email'])){ 
$datum = $_POST["datum"];
$uhrzeit = $_POST["Uhrzeit"];
$name = $_POST["name"];
$ziel = $_POST["zielort"];
$notizen = $_POST["Notizen"];
$id=$_POST['KundenID'];
$Auftragsid=$_POST['AuftragsID'];
//Vorbereitung der Verbindung zu Datenbank
$conn = mysqli_connect($servername, $username, $password, $db);
$abholort = mysqli_real_escape_string($conn, $_POST['abholort']);
//richtige Codierung, um Fehler zu vermeiden
mysqli_set_charset($conn, 'utf8');
mysqli_query($conn, "SET NAMES 'utf8'");

 // Ein Termin mit den angegebenen Daten existiert noch nicht, füge den neuen Termin hinzu
  $sql = "INSERT INTO Termine (KundenID,Name,Zielort,Abholort, Notiz,Datum,Uhrzeit) VALUES (?, ?, ?, ?, ?, ?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, 'sssssss',$id,$name,$ziel,$abholort, $notizen, $datum,$uhrzeit);
  mysqli_stmt_execute($stmt);

  // Überprüfen, ob das Einfügen erfolgreich war
  if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Termin erfolgreich angelegt";
    /*$query = "SELECT * FROM user2 WHERE Personid = ?";
    $result = mysqli_execute_query($conn, $query, [$name]);
    $row = mysqli_fetch_assoc($result);
    $row['']
      $empfaeger =*/ 
  } else {
    echo "Fehler beim Einfügen des Termins";
  }
$sql ="Delete FROM Anfragen WHERE AuftragsID=?";
  mysqli_execute_query($conn, $sql, [$Auftragsid]);
  echo("<br>Termin angenommen.");

mysqli_close($conn);
}
