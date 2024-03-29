<?php
include "./../../private/dbconnection.inc.php";
$conn = mysqli_connect("p:" .$servername, $username, $password, $db);
if (!$conn){
die("Connection failed: " . mysqli_connect_error());
}
    $fname = mysqli_real_escape_string($conn, $_POST['vorn']);
    $lname = mysqli_real_escape_string($conn, $_POST['nachn']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash(mysqli_real_escape_string($conn, $_POST['passw']),PASSWORD_DEFAULT);
    if(!empty($fname) && !empty($lname) && !empty($email) && !empty($password)){
            $sql = mysqli_query($conn, "SELECT * FROM user2 WHERE email = '$email'");
            if(mysqli_num_rows($sql) > 0){
              echo("$email - This email already exist!");
            }else{
              $sql = "INSERT INTO user2 (Vorname, Nachname, email, Passwort, rolle) VALUES (?, ?, ?, ?, ?)";
              $result = mysqli_execute_query($conn, $sql, [$fname,$lname,$email,$password,'Admin']);
              if($return){
                $select_sql2 = mysqli_query($conn, "SELECT * FROM user2 WHERE email = '$email'");
                if(mysqli_num_rows($select_sql2) > 0){
                  $result = mysqli_fetch_assoc($select_sql2);
                   echo("success");
                  }else{
                   echo("Something went wrong. Please try again!");
                  }}}}else{
                    echo("All input fields are required!");
                   }
mysqli_close($conn);
