<?php
// Establish a connection to your PostgreSQL database
include("C:/xampp/htdocs/CO2/php/connection.php");
$quantity=$_GET['quantity'];
$product=$_GET['product'];
$type=$_GET['type'];

// Fetch data from PostgreSQL based on the selected value
$query = "select * from product_list where type = '$type' and product='$product'";
$result = mysqli_query($conn, $query);

// Build the HTML options for the second dropdown
$amount = 0;

while($row = mysqli_fetch_assoc($result)) 
{
        $amount=$quantity * $row['price'];
}

// Return the options to the client-side JavaScript
echo $amount;

// Close the database connection
mysqli_close($conn);
?>
