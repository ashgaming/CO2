<?php
include("C:/xampp/htdocs/CO2/php/connection.php");
//$conn = mysqli_connect($host,$user,$password,$dbname);
$type = $_POST['ptype'];
$price = $_POST['Price'];
$cap = $_POST['capacity'];
$name = $_POST['pname'] ;

$querry = "select * from product_list where type='$type' and product='$name'";
$result= mysqli_query($conn , $querry);

if(mysqli_num_rows($result)==0){
    $sql = "insert into product_list (type, product, price, capacity) VALUES ('$type', '$name', $price, $cap);";
    $res= mysqli_query($conn , $sql);
    header("location:\CO2\html\stocks.php");
}
else
{
    error_log( "<script>alert(\"Product Already exist;\");</script>");
    header("location:\CO2\html\stocks.php");
}
mysqli_close($conn);
?>

