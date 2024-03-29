<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("../../private/dbconnection.inc.php");
session_start();
if(isset($_SESSION['email'])){ 
$datum = $_POST["datum"];
$uhrzeit = $_POST["Uhrzeit"];
$name = $_POST["Name"];
$ziel = $_POST["zielort"];
$notizen = $_POST["notizen"];
$id=$_SESSION['id'];

//Vorbereitung der Verbindung zu Datenbank
$conn = mysqli_connect($servername, $username, $password, $db);
$abholort = mysqli_real_escape_string($conn, $_POST['abholort']);
//richtige Codierung, um Fehler zu vermeiden
mysqli_set_charset($conn, 'utf8');
mysqli_query($conn, "SET NAMES 'utf8'");

// Überprüfen, ob ein Termin für den gleichen Kunden mit den gleichen Daten bereits existiert
$query = "SELECT * FROM Termine WHERE Datum = ? AND Uhrzeit = ? AND Abholort = ? AND Zielort = ? AND Notiz = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 'sssss', $datum, $uhrzeit , $abholort, $ziel,$notizen);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($result && mysqli_num_rows($result) > 0) {
  // Ein Termin mit denselben Daten existiert bereits
  echo "Der Kunde hat bereits einen Termin mit den gleichen Daten vereinbart.";
} else {
  // Ein Termin mit den angegebenen Daten existiert noch nicht, füge den neuen Termin hinzu
  $sql = "INSERT INTO Termine (KundenID,Name,Zielort,Abholort, Notiz,Datum,Uhrzeit) VALUES (?, ?, ?, ?, ?, ?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, 'sssssss',$id,$name,$ziel,$abholort, $notizen, $datum,$uhrzeit);
  mysqli_stmt_execute($stmt);

  // Überprüfen, ob das Einfügen erfolgreich war
  if (mysqli_stmt_affected_rows($stmt) > 0) {
    echo "Termin erfolgreich angelegt"; 
  } else {
    echo "Fehler beim Einfügen des Termins";
  }
}
mysqli_close($conn);
}
