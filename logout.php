<?php
session_start();
if ( isset($_SESSION['number'])){
  session_destroy();
  echo ("Sie wurden erfolgreich abgemeldet");
}
if (! isset($_SESSION['number'])){
echo ("Sie waren nicht angemeldet.");
}
