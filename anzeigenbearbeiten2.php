<?php
session_start();
include "./../../private/dbconnection.inc.php";
$conn = mysqli_connect("p:" .$servername, $username, $password, $db);
if (!$conn){
  die("Connection failed: " . mysqli_connect_error());
}
 $kundenId = $_POST["kundenid"];
 $ID = $_POST["AuftragsID"];
 $datum = $_POST["datum"];
 $uhrzeit = $_POST["uhrzeit"];
 $vorNachname = $_POST["name"];
 $abholort = $_POST["abholort"];
 $zielort = $_POST["zielort"];
 $buchungsdauer = $_POST["buchungsdauer"];
 $status = $_POST["status"];
 $sonstigeNotizen = $_POST["notizen"];
 if(isset($_SESSION['id'])){
   if($_SESSION['id']==$kundenId || $_SESSION['rolle']=="Admin"){
    echo("<div id='output'></div>");
    echo("<form id='myformtest'><table><tr><th>Auftragsnummer</th><td><input type='text' name='AuftragsID' value='$ID' readonly></td></tr><tr><th>Datum:</th><td><input type='text' name='datum' value='$datum'></td></tr>");
    echo("<tr><th>Uhrzeit:</th><td><input type='text' name='uhrzeit' value='$uhrzeit'></td></tr>");
    echo("<tr><th>Name:</th><td><input type='text' name='name' value='$vorNachname'></td></tr>");
    echo("<tr><th>Abholort:</th><td><input type='text' name='abholort' value='$abholort'></td></tr>");
    echo("<tr><th>Zielort:</th><td><input type='text' name='zielort' value='$zielort'></td></tr>");
    echo("<tr><th>Notizen:</th><td><input type='text' name='Notizen' value='$sonstigeNotizen'></td></tr></table>");
    echo("<br>");
    echo("<button onclick='aenderungspeichern(this)' id='speichern'>Änderungen speichern</button>");
    echo("<button onclick='admin2(this)' id='zurueck'>Zurück</button></form>");
  }
 }
mysqli_close($conn);
