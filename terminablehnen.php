<?php
session_start();
include "./../../private/dbconnection.inc.php";
$conn = mysqli_connect("p:" .$servername, $username, $password, $db);
if (!$conn){
  die("Connection failed: " . mysqli_connect_error());
}
 $kundenId = $_POST["KundenID"];
 $ID = $_POST["AuftragsID"];
 $datum = $_POST["datum"];
 $vorNachname = $_POST["name"];
 $abholort = $_POST["abholort"];
 $zielort = $_POST["zielort"];
 $sonstigeNotizen = $_POST["notizen"];
 if(isset($_SESSION['id'])){
   if($_SESSION['id']==$kundenId || $_SESSION['rolle']=="Admin"){
    echo("<div>Bitte nennen sie einen Ablehnungsgrund alle anderen Felder sind nicht bearbeitbar.</div><div id='output'></div>");
    echo("<form id='myformtest'><table><tr><th>Auftragsnummer</th><td><input type='text' name='AuftragsID' value='$ID' readonly></td></tr><tr><th>Datum:</th><td><input type='text' name='datum' value='$datum' readonly></td></tr>");
echo("<tr><th>Abholort:</th><td><input type='text' name='abholort' value='$abholort' readonly></td></tr>");
    echo("<tr><th>Zielort:</th><td><input type='text' name='zielort' value='$zielort' readonly></td></tr>");
   echo("<tr><th>Name:</th><td><input type='text' name='name' value='$vorNachname' readonly></td></tr>");
    echo("<tr><th>KundenID:</th><td><input type='text' name='KundenID' value='$kundenId' readonly></td></tr>");
 
    echo("<tr><th>Notizen:</th><td><input type='text' name='Notizen' value='$sonstigeNotizen' readonly></td></tr><tr> <th>Ablehnungsgrund:</th><td><input type='text' name='Ablehnungsgrund' required></tr></table>");
    echo("<br>");
    echo("<button onclick='aenderungspeichern2(this)' id='speichern'>Änderungen speichern</button>");
    echo("<button onclick='adminanfrage2(this)' id='zurueck'>Zurück</button></form>");
  }
 }
mysqli_close($conn);
