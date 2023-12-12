<?php
include("C:/xampp/htdocs/CO2/php/connection.php");
$id = $_GET['id'];

$sel = "select * from sales where id=$id;";
$res = mysqli_query($conn,$sel);
$row = mysqli_fetch_assoc($res);
if (mysqli_num_rows($res)> 0)
{
    echo mysqli_num_rows($res);
    $quan = $row['quantity'];
    $pro = $row['product'];
    $ups = "update product_list set sold=sold-1*$quan where product='$pro';";
    mysqli_query($conn,$ups);
}


$delSql = "delete from sales where id=$id;";
$result = mysqli_query($conn,$delSql);
if($result){
   echo "<script>alert('Entry deleted..!')</script>";
}else
{
    echo "<script>alert('Entry failed delete..!')</script>";
}
mysqli_close($conn);
 header("location:\CO2\php\data.php");
?>