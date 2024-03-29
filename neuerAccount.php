<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("./../../private/dbconnection.inc.php");
$name=$_POST['name'];
$passwort=$_POST['passwort'];
$name="Kevin";
$passwort="Ziesenitz";
 $conn=mysqli_connect($servername, $username, $password, $db);
$sql="INSERT INTO user (vorname, passwort) VALUES ('$name', '$passwort')";
if(mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
