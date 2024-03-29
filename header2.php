<?php
session_start();
if(isset ($_SESSION['email'])){
  if($_SESSION['rolle']=='Admin'){
 echo("<ul><li>");
 // echo("<li><a >Willkommen"." ".$_SESSION['email']."</a></li>");
  echo("<li><a id='Terminhinzufügen'>Termin hinzufügen</a></li>");
  echo("<li><a id='Alletermine'>Alle Termine ansehen</a></li>");
  echo("<li><a id='Alleanfragen'>Alle Anfragen einsehen</a></li>");
  echo("<li><a id='neuerAdmin'>Neuen Admin hinzufügen</a></li>");
  echo("<lI><a id='Nutzer'>Nutzer verwalten</a></li>");
  echo("<li><a id='logout'>Logout</a>");
  }else{
  echo("<ul><li>");
  echo("<a id='home'>Home</a></li>");
  echo("<li><a id='Kontakt'>Kontakt</a></li>");
  echo("<li><a id='about'>About</a></li>");
  echo("<li><a >Willkommen"." ".$_SESSION['email']."</a></li>");
  echo("<li><a id='terminbuchen'>Termin buchen</a></li>");
  echo("<li><a id='Meinetermine'>Meine Termine</a></li>");
  echo("<li><a id='logout'>Logout</a>");
  echo("</li></ul>");
  }}else{
  //echo("<img src='tsk-bilder/tsk-logo.jpg' alt='Unternehmenslogo' style='width: 100px; height: 100px; margin: 10px auto; float= left;>");
  echo("<ul><li>");
  echo("<a  id='home'>Home</a></li>");
  echo("<li><a id='Kontakt'>Kontakt</a></li>");
  echo("<li><a id='about'>About</a></li>");
  echo("<li><a id='youshallnotpass'>Termin buchen</a></li>");
  echo("<li><a id='Registrieren'>Registrieren</a></li>");
  echo("<li><a id='login'>Login</a>");
  echo("</li></ul>");
}

