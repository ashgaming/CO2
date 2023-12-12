<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: skyblue;">
<?php include("C:/xampp/htdocs/CO2/php/nav.php"); ?>
    <center>
        <div>
            <b>
                <h1> Add Product In List </h1>
            </b>
        </div>
</center>
    <form action="/CO2/php/AddProductDB.php" method="post">
        <center>
            <table border="1" style="width: max-content;margin: 5px; width: 80%">
                <tr>
                    <td><center>Product type</center></td>
                    <td><center>Product Name</center></td>
                    <td><center>Price</center></td>
                    <td><center>Capacity</center></td>
                    <td><center>Action</center></td>

                </tr>
                <tr>
                    <td>
                        <div>
                        <center>
                                <select name="ptype" id="ptype" class="con" style="margin: 5px;">
                                    <option value="Soda">Soda</option>
                                    <option value="Softy">Softy</option>
                                    <option value="Food">Food</option>
                                    <option value="Milk">Milk</option>
                                    <option value="Coffee">Coffee</option>
                                    <option value="btn"><button>Add Catagoty</button></option>
                                </select>
                            </center>
                        </div>
                    </td>
                    <td>
                        <center>
                            <div>
                                <input type="text" name="pname" id="pname" placeholder="Name" class="con" style="margin: 5px;">
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>

                            <div><input type="number" class="Price" name="Price" value="Price" id="Price" style="margin: 5px;"></div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div><input type="number" class="capacity" name="capacity" id="capacity" value="capacity" style="margin: 5px;"></div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div><input type="submit" name="Add" value="Add Product" class="btn btn-primary btn" style="margin: 5px;"></div>
                        </center>
                    </td>

                </tr>
            </table>
            <?php include("C:/xampp/htdocs/CO2/html/footer.html") ?>
</body>
</html>