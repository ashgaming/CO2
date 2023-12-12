<?php
if(isset($_POST['date']) && $_POST['date']!="")
{
    $date = $_POST['date'];
}
else 
{
    $date = date("Y-m-d");
}

$ptype = $_POST['ptype'];
$pname = $_POST['pname'];
$Quantity = $_POST['Quantity'];
$Amount = $_POST['Amount'];

include("C:/xampp/htdocs/CO2/php/connection.php");

echo $date;
$sql = "insert into sales (date,type,product,quantity,amount) values('$date','$ptype','$pname',$Quantity,$Amount);";//update product_list set sold=sold+$Quantity where product='$pname';";

$re = mysqli_query($conn,$sql);
if($re){
    header("location:\CO2\php\data.php");
}
else{
    echo "error";
}
mysqli_close($conn);




?>