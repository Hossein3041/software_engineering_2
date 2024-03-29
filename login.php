<?php
include("./../../private/dbconnection.inc.php");

$conn = mysqli_connect($servername, $username, $password, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$email=$_POST['email'];
$passw=$_POST['passwort'];
$result = mysqli_execute_query($conn, "select * from user2 where Email = ?",[$email]);
  while($row = mysqli_fetch_assoc($result)) {
   if(password_verify($passw,$row['Passwort'])){
     echo("Willkommen"." ".$email." "."Sie sind angemeldet");     
     session_start();
     if (! isset($_SESSION['number'])) {
       $_SESSION['number']=0;
       $_SESSION['email']=$email;
       $_SESSION['id']=$row['Personid'];
       $_SESSION['rolle']=$row['rolle'];
       $_SESSION['name']=$row['Vorname']." ".$row['Nachname'];
     }
   }
   else
     echo("Leider existiert dieser User nicht.");
}
mysqli_close($conn);
?>

