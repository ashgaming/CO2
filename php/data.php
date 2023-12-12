<?php
include("C:/xampp/htdocs/CO2/php/connection.php");
?>
<!DOCTYPE html>
<html>

<head>

    <title>See form</title>
    <script type="text/javascript">
        function GetDate() {
            var a = document.getElementById("date").innerHTML;
            var b = document.getElementById("div").innerHTML;
            var s = a.value;
            b.value = s;

        }
    </script>
</head>

<body style="background-color: skyblue;">
    <?php include("C:/xampp/htdocs/CO2/php/nav.php") ?>
    <center>
        <form action="" method="post">
            <b> Enter date : </b>
            <input type="date" name="date" id="date" required>
            <button class="btn btn-primary btn" style="margin: 5px;" onclick="GetDate()">Enter</button>
            <?php
            if (isset($_POST['date'])) {
                $date = $_POST['date'];
            } else {
                $date = date("Y-m-d"); // current date 
            }
            ?>
            <br>
            <h1 id="dat"><?php echo $date ?></h1>
            <br>
            <table border="2" style="margin: 5px; width: 80%">
                <tr>
                    <td>
                        <center><b>ID</b></center>
                    </td>
                    <td>
                        <center><b>Date</b></center>
                    </td>
                    <td>
                        <center><b>Product type</b></center>
                    </td>
                    <td>
                        <center><b>Product Name</b></center>
                    </td>
                    <td>
                        <center><b>Quantity</b></center>
                    </td>
                    <td>
                        <center><b>Amount</b></center>
                    </td>
                    <td>
                        <center><b>Action</b></center>
                    </td>
                </tr>
                <?php

                $sql = " select * from sales where date=$date;";
                $re = mysqli_query($conn, $sql);
                echo mysqli_num_rows($re);
                if (mysqli_num_rows($re) > 0) {
                    while ($row = mysqli_fetch_assoc($re)) {
                        $id = $row['id'];
                        echo '<tr>',
                        '<td><center> :: ' . $row['id'] . ' :: </center></td>',
                        '<td><center>' . $row['date'] . '</center></td>',
                        '<td><center>' . $row['type'] . '</center></td>',
                        '<td><center>' . $row['product'] . '</center></td>',
                        '<td><center>' . $row['quantity'] . '</center></td>',
                        '<td><center>' . $row['amount'] . '</center></td>',
                        '<td> <center>
                        <a href="/CO2/php/deleteSales.php?id=' . $id . '"> <button type="button" class="btn btn-primary btn" style="margin: 5px;" name="btn" value="delete" >Delete</button></a>
                        </center>
                        </td>',
                        '</tr> ';
                    }
                }
                function deleteData($id, $conn)
                {
                    $delSql = "delete from sales where id=$id";
                    $result = mysqli_query($conn, $delSql);
                    if ($result) {
                        echo "<script>alert('Entry deleted..!')</script>";
                    } else {
                        echo "<script>alert('Entry failed delete..!')</script>";
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
                </tr>
            </table>
            <br>
            <table border="2" style="margin: 5px; width: 50%">
                <tr>
                    <td>
                        <center><b>Type</b></center>
                    </td>
                    <td>
                        <center><b>Total Amount(Rs)</b></center>
                    </td>
                    <td>
                        <center><b>Total Quantity</b></center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>Soda</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Soda';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>

                <tr>
                    <td>
                        <center>Softy</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Softy';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>

                <tr>
                    <td>
                        <center>Food</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Food';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>

                <tr>
                    <td>
                        <center>Milk</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Milk';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>Coffee</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Coffee';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>Total</center>
                    </td>
                    <td>
                        <center>
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?></center>
                    </td>
                    <td>
                        <center><?php print_r($sum['qua']); ?></center>
                    </td>
                </tr>
            </table>
        </form>
        <br>
        <a href="/CO2/html/addSales.php"><button class="btn btn-primary btn" style="margin: 5px;">Add</button></a>
    </center>
    <?php include("C:/xampp/htdocs/CO2/html/footer.html") ?>
</body>
<?php mysqli_close($conn); ?>

</html>