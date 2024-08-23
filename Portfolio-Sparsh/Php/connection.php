<?php
$host = "localhost";
$username = "root";
$password = "@123Sparsh";
$db = "website";

// Establish the connection
$Conn = mysqli_connect($host, $username, $password, $db);

// Check connection
if (!$Conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
