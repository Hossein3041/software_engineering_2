<?php
include("../../private/dbconnection.inc.php");
session_start();
if(isset($_SESSION['id'])){
$conn=mysqli_connect($servername, $username, $password, $db);
$id=$_SESSION['id'];
$result = mysqli_execute_query($conn, "select * from Termine where KundenID=?", [$id]);

echo "<div id='output'>Hallo hier sehen sie ihre Termine</div><table>";
echo "<tr><th>Kunden_ID</th>";
echo "<th>Auftrags_ID</th>";
echo "<th>Datum</th>";
echo "<th>Uhrzeit</th>";
echo "<th>Vor- und Nachname</th>";
echo "<th>Abholort</th>";
echo "<th>Zielort</th>";
echo "<th>Sonstige Notizen</th>";

while($row=mysqli_fetch_assoc($result)){
  echo "<tr>";
  echo "<td>".$row["KundenID"]."</td>";
  echo "<td>".$row["AuftragsID"]."</td>";
  echo "<td>".$row["Datum"]."</td>";
  echo "<td>".$row["Uhrzeit"]."</td>";
  echo "<td>".$row["Name"]."</td>";
  echo "<td>".$row["Abholort"]."</td>";
  echo "<td>".$row["Zielort"]."</td>";
  echo "<td>".$row["Notiz"]."</td>";
  echo"<td><button onclick='Terminstornieren(this)'>Termin stornieren</button></td>";
  echo "</td>";
  echo "</tr>";
}

echo "</table>";
$result = mysqli_execute_query($conn, "select * from Absagen where KundenID=?", [$id]);

echo "<div id='output'>Hallo hier sehen sie ihre Absagen</div><table>";
echo "<tr><th>Kunden_ID</th>";
echo "<th>Auftrags_ID</th>";
echo "<th>Datum</th>";
echo "<th>Uhrzeit</th>";
echo "<th>Vor- und Nachname</th>";
echo "<th>Abholort</th>";
echo "<th>Zielort</th>";
echo "<th>Sonstige Notizen</th>";

while($row=mysqli_fetch_assoc($result)){
  echo "<tr>";
  echo "<td>".$row["KundenID"]."</td>";
  echo "<td>".$row["AuftragsID"]."</td>";
  echo "<td>".$row["Datum"]."</td>";
  echo "<td>".$row["Name"]."</td>";
  echo "<td>".$row["Abholort"]."</td>";
  echo "<td>".$row["Zielort"]."</td>";
  echo "<td>".$row["Notiz"]."</td>";
  echo "<td>".$row["Absagegrund"]."</td>";
  echo "</td>";
  echo "</tr>";
}

echo "</table>";

mysqli_close($conn);
}
