<?php
$host = "localhost";     // Replace with your host name or IP address
$dbname = "CO2"; // Replace with your database name
$user = "root"; // Replace with your database username
$password = ""; // Replace with your database password

/*
$host = "localhost";     // Replace with your host name or IP address
$dbname = "id21192956_co2"; // Replace with your database name
$user = "id21192956_root"; // Replace with your database username
$password = "Wtya@7645"; // Replace with your database password
*/

$conn = mysqli_connect($host, $user, $password, $dbname);
if ($conn->connect_error) {
    echo "error";
}
?>