<?php
include("../../private/dbconnection.inc.php");
session_start();
if(isset($_SESSION['id'])){
  if($_SESSION['rolle']=="Admin"){
    $conn=mysqli_connect($servername, $username, $password, $db);
    if($_POST['datum']==null){
      $datum=date("Y-m-d");
    }else{
      $datum=$_POST['datum'];
    }
$result = mysqli_execute_query($conn, "select * from Anfragen where Datum=?", [$datum]);

echo "<table>";
echo "<tr><th>Kunden_ID</th>";
echo "<th>Auftrags_ID</th>";
echo "<th>Datum</th>";
echo "<th>Vor- und Nachname</th>";
echo "<th>Abholort</th>";
echo "<th>Zielort</th>";
echo "<th>Sonstige Notizen</th>";
echo "<th></th><th></th></tr>";

while($row=mysqli_fetch_assoc($result)){
  echo "<tr>";
  echo "<td>".$row["KundenID"]."</td>";
  echo "<td>".$row["AuftragsID"]."</td>";
  echo "<td>".$row["Datum"]."</td>";
  echo "<td>".$row["Name"]."</td>";
  echo "<td>".$row["Abholort"]."</td>";
  echo "<td>".$row["Zielort"]."</td>";
  echo "<td>".$row["Notiz"]."</td>";
  echo "</td>";
  echo("<td><button onclick='annehmen(this)'>Termin annehmen</button></td>");
  echo("<td><button onclick='ablehnen(this)'>Termin ablehnen</button></td>");
  echo "</tr>";
}

echo "</table>";
mysqli_close($conn);
  }
}
