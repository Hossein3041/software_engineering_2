<?php
session_start();
include("init.php");
include("../../private/dbconnection.inc.php");
echo "<!doctype html>";
echo "<html><head>";
echo "<title>Kundendaten</title>";
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
echo "<table>";
echo "<tr><th>Kunden_ID</th><th>Vorname</th><th>Nachname</th><th>Email</th><th>Rolle</th><th></th><th></th></tr>";
$conn = mysqli_connect($servername, $username, $password, $db);
if(!$conn){
  die("Conneciton failed").mysqli_connect_error;
}
$sql = "SELECT * FROM user2";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)){
  if($row['Personid']==$_SESSION['id']){
    echo("");
  }else{
  echo ("<tr>");
  echo ("<td>".$row['Personid']."</td>");
  echo ("<td>".$row['Vorname']."</td>");
  echo ("<td>".$row['Nachname']."</td>");
  echo ("<td>".$row['Email']."</td>");
  echo ("<td>".$row['rolle']."</td>");
  if($row['rolle']=="Admin"){
    echo("<td><button onclick='new2(this)'>Adminrechte entfernen</button></td>");
  }else{
    echo("<td><button onclick='Admingeben(this)'>Adminrechte geben</button></td>");
  }
  echo ("<td><button onclick='loeschen(this)'>Benutzerkonto entfernen</button></td>");
  echo ("</tr>");
}}
echo "</table>";
mysqli_close($conn);
echo "</body></html>";
