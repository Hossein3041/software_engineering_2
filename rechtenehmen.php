<?php
include("../../private/dbconnection.inc.php");
session_start();

if($_SESSION['rolle']=="Admin"){
$ID = $_POST['ID'];
//Vorbereitung auf die Verbindung mit der Datenbank
$conn = mysqli_connect($servername, $username, $password, $db);

if(!$conn){
  die("Connection with database failed").mysqli_connect_error;
}

$result = mysqli_execute_query($conn, "UPDATE user2 SET rolle = 'Benutzer' WHERE PersonID = ?", [$ID]);

/*if(mysqli_num_rows($result) < 0){
  echo ("erfolgreich");
}
else
{
  echo ("fehlgeschlagen");
}*/
mysqli_close($conn);}
