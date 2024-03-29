<?php
session_start();
include "./../../private/dbconnection.inc.php";
if($_SESSION['rolle']=='Admin'){
$conn = mysqli_connect("p:" .$servername, $username, $password, $db);
if (!$conn){
die("Connection failed: " . mysqli_connect_error());
}
  $KundenID = $_POST['KundenID'];
  $sql ="Delete FROM user2 WHERE Personid=?";
  mysqli_execute_query($conn, $sql, [$KundenID]);
  echo("Benutzerkonto Gelöscht!! Sie werden in Kürze wieder zurückgeleitet.");
  mysqli_close($conn);
}
