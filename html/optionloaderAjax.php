<?php
// Establish a connection to your PostgreSQL database
include("C:/xampp/htdocs/CO2/php/connection.php");

// Retrieve the selected value from the first dropdown
$selectedValue = $_GET["selected_value"];

// Fetch data from PostgreSQL based on the selected value
$query = "select * from product_list where type = '$selectedValue'";
$result = mysqli_query($conn, $query);

// Build the HTML options for the second dropdown
$options = "<option value=''>--</option>";
while ($row = mysqli_fetch_assoc($result)) 
{
        $options .= "<option value='" .$row['product']. "'>" .$row['product']. "</option>";
}

// Return the options to the client-side JavaScript
echo $options;

// Close the database connection
mysqli_close($conn);
?>
