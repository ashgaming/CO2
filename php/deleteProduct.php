<?php
$a = $_GET['id'];
include("C:/xampp/htdocs/CO2/php/connection.php");

$delSql = "delete from product_list where id=$a";
$result = mysqli_query($conn,$delSql);
if($result){
   echo "<script>alert('Entry deleted..!')</script>";
}else
{
    echo "<script>alert('Entry failed delete..!')</script>";
}
mysqli_close($conn);
header("location:\CO2\html\stocks.php");
?>