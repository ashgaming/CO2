<?php
$a = $_GET['id'];
include("C:/xampp/htdocs/CO2/php/connection.php");
echo $a;
$date = date('Y-m-d');
echo $date;
$relSql = "update product_list set ref_date='$date' where product='$id';update product_list set sold=0 where product='$id'";
$result = mysqli_query($conn,$relSql);
if($result){
   echo "<script>alert('Product refeal entry successfully..!')</script>";
}else
{
    echo "<script>alert('Product refeal entry failed..!')</script>";
}
mysqli_close($conn);
//header("location:\CO2\html\stocks.php");
?>