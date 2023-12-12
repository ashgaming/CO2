<?php
include("C:/xampp/htdocs/CO2/php/connection.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>See form</title>
    <style>
        body{
            background-image: url('/CO2/image/bg_image.jpg');
            background-repeat: no-repeat;
            background-size: cover; 
            
        }
    </style>

</head>

<body>
<?php include("C:/xampp/htdocs/CO2/php/nav.php") ?>
    <center>
        <form action="" method="post">
            <?php
            if (isset($_POST['date'])) {
                $date = $_POST['date'];
            } else {
                $date = date("d-m-y"); // current date 
            }
            ?>
            <br>
            <h1 id="dat"><?php echo $date ?></h1>
            <br>
            <table border="2"style="margin: 5px; width: 80%">
                <tr style="background-color: cyan ; color:black">
                    <td><center><b>ID</b></center></td>
                    <td><center><b>-Product Type-</b></center></td>
                    <td><center><b>-Product Name-</b></center></td>
                    <td><center><b>-Price-</b></center></td>
                    <td><center><b>-Capacity-</b></center></td>
                    <td><center><b>-Sold-</b></center></td>
                    <td><center><b>-Refeal Date-</b></center></td>
                    <td><center><b>-Sales Percentage-</b></center></td>
                    <td><center><b>-Action-</b></center></td>
                </tr>
                <?php


                $sql = " select * from product_list";
                $re = mysqli_query($conn, $sql);
                if (mysqli_num_rows($re) > 0) {

                    while ($row = mysqli_fetch_assoc($re)) {
                        $id = $row['id'];
                        $product = $row['product'];
                        $color="white";
                        if(($row['sold']/$row['capacity'])*100 >=75)
                        {
                            $color ="red";
                        }else if (($row['sold']/$row['capacity'])*100 >50 && ($row['sold']/$row['capacity'])*100 <75){
                            $color ="yellow";
                        }else if (($row['sold']/$row['capacity'])*100 <=50)
                        {
                            $color="green";
                        }
                        echo '<tr style="background-color:'.$color.';color:black; ">',
                        '<td><center>' . $row['id'] . '</center></td>',
                        '<td><center>' . $row['type'] . '</center></td>',
                        '<td><center>' . $row['product'] . '</center></td>',
                        '<td><center>Rs ' . $row['price'] . '</center></td>',
                        '<td><center>' . $row['capacity'] . '</center></td>',
                        '<td><center>' . $row['sold'] . '</center></td>',
                        '<td><center>' . $row['ref_date'] . '</center></td>',
                        '<td><center>' . ($row['sold']/$row['capacity'])*100 .  '%</center></td>',
                        '<td><center>
                        <a href="/CO2/php/refealProduct.php?id='.$product.'"> <button type="button" name="btn" value="Refeal" style="margin: 1px;" class="btn btn-primary btn" >Refeal</button></a>
                        <a href="/CO2/php/EditProduct.php?id='.$product.'"> <button type="button" name="btn" value="Edit" style="margin: 1px;" class="btn btn-primary btn" >Edit</button></a>
                        <a href="/CO2/php/deleteProduct.php?id='.$id.'"> <button type="button" name="btn" value="delete" style="margin: 1px;" class="btn btn-primary btn" >Delete</button></a>
                       </center
                        </td>',
                        '</tr> ';
                        
                    }
                }
                
                ?>
                <tr>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                    <td>
                        <center><b>-</b></center>
                    </td>
                </tr>
            </table>
            <br>
        </form>
                <br>
        <a href="/CO2/html/home.php"><button class="btn btn-primary btn" style="margin: 5px;width:20%">Home</button></a>
        <a href="/CO2/php/AddProduct.php"> <button type="button" name="btn" value=" Add " class="btn btn-primary btn" style="margin: 5px;width:20%" > Add </button></a>
        <br><br>
    </center>
    <?php include("C:/xampp/htdocs/CO2/html/footer.html") ?>
</body>
</html>  
<?php mysqli_close($conn); ?>