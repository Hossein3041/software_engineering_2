<?php
include("init.php");
include("../../private/dbconnection.inc.php");
session_start();
echo "<!doctype html>";
echo "<html><head>";
echo "<title>Termine anzeigen</title>";
echo "</head><body>";
echo "<style>";
echo "table {
  font-family: arial, sans-serif;
  border: 1px solid black;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown.active .dropdown-content {
  display: block;
}";
echo "</style>";

$conn=mysqli_connect($servername, $username, $password, $db);
$sql="SELECT * FROM termine";
$result=mysqli_query($conn,$sql);

echo "<table>";
echo "<tr><th>Kunden_ID</th>";
echo "<th>Auftrags_ID</th>";
echo "<th>Datum</th>";
echo "<th>Uhrzeit</th>";
echo "<th>Vor- und Nachname</th>";
echo "<th>Abholort</th>";
echo "<th>Zielort</th>";
echo "<th>Art</th>";
echo "<th>Buchungsdauer</th>";
echo "<th>Sonstige Notizen</th>";
echo "<th>Status</th>";
echo "<th>Handlung</th></tr>";

while($row=mysqli_fetch_assoc($result)){
  echo "<tr>";
  echo "<td>".$row["Kunden_ID"]."</td>";
  echo "<td>".$row["Auftrags_ID"]."</td>";
  echo "<td>".$row["Datum"]."</td>";
  echo "<td>".$row["Uhrzeit"]."</td>";
  echo "<td>".$row["Vor_und_Nachname"]."</td>";
  echo "<td>".$row["Abholort"]."</td>";
  echo "<td>".$row["Zielort"]."</td>";
  echo "<td>".$row["Art"]."</td>";
  echo "<td>".$row["Buchungsdauer"]."</td>";
  echo "<td>".$row["SonstigeNotizen"]."</td>";
  echo "<td>".$row["Status"]."</td>";
  echo "<td>";
  echo '<div class="dropdown">';
  echo '<button class="dropbtn">&#8942;</button>';
  echo '<div class="dropdown-content">';
  echo '<a href="bearbeiten.php?Auftrags_ID=' . $row["Auftrags_ID"] . '">Bearbeiten</a>';
  echo '<a href="loeschen.php?Auftrags_ID=' . $row["Auftrags_ID"] . '">Löschen</a>';
  echo '<a href="absagen.php?Auftrags_ID=' . $row["Auftrags_ID"] . '">Absagen</a>';
  echo '</div>';
  echo '</div>';
  echo "</td>";
  echo "</tr>";
}

echo "</table>";
mysqli_close($conn);
echo "</body>";
echo "</html>";
?>

<script>
var dropdowns = document.getElementsByClassName("dropdown");

Array.prototype.forEach.call(dropdowns, function(dropdown) {
  var button = dropdown.querySelector(".dropbtn");
  var dropdownContent = dropdown.querySelector(".dropdown-content");
  
  button.addEventListener("click", function() {
    dropdown.classList.toggle("active");
    dropdownContent.style.display = dropdown.classList.contains("active") ? "block" : "none";
  });
});
</script>

