<?php
include("../../private/dbconnection.inc.php");
session_start();
if(isset($_SESSION['email'])){ 
$datum = $_POST["datum"];
$grund = $_POST["Ablehnungsgrund"];
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
$Datum2=strtotime($datum);
$Datum=strtotime('+3 days');
if($Datum<$Datum2){
 // Ein Termin mit den angegebenen Daten existiert noch nicht, füge den neuen Termin hinzu
  $sql = "INSERT INTO Absagen (KundenID,Name,Zielort,Abholort, Notiz,Datum,Absagegrund) VALUES (?, ?, ?, ?, ?, ?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, 'sssssss',$id,$name,$ziel,$abholort, $notizen, $datum,$grund);
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
    echo "Fehler";
  }
  $sql ="Delete FROM Termine WHERE AuftragsID=?";
  mysqli_execute_query($conn, $sql, [$Auftragsid]);
  echo("<br>Termin abgelehnt.");
}else{
  echo("Es geht so kurzfristig nicht.");
}
mysqli_close($conn);

}
