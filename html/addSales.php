<?php
include("C:/xampp/htdocs/CO2/php/connection.php");
if (session_status() === PHP_SESSION_ACTIVE) {
    echo "Session is active";
    session_start();
} else {
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>index</title>
    <style>
        .navi {
            flex: auto;
        }
    </style>
    <script>
        function loadSecondDropdown() {
            var selectedValue = document.getElementById("ptype").value;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var secondDropdown = document.getElementById("pname");
                    secondDropdown.innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "optionloaderAjax.php?selected_value=" + selectedValue, true);
            xhttp.send();
        }

        function calcuteAmount() {
            var type = document.getElementById("ptype").value;
            var product = document.getElementById("pname").value;
            var quantity = document.getElementById("Quantity").value;

            var url = "calAmountAjax.php";
            url += "?product=" + encodeURIComponent(product);
            url += "&type=" + encodeURIComponent(type);
            url += "&quantity=" + encodeURIComponent(quantity);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var amount = document.getElementById("Amount");
                    amount.value = this.response;
                }
            };
            xhttp.open("get", url, true);
            xhttp.send();
        }

        function populateSecondDropdown() {
            var firstDropdown = document.getElementById("ptype");
            var secondDropdown = document.getElementById("pname");
            var selectedOption = firstDropdown.value;

            // Clear existing options
            secondDropdown.innerHTML = "select";

            if (selectedOption === "Soda") {
                // Populate second dropdown based on option 1
                var option1Values = ["Mango", "Jerra", "Green Apple", "Pudina", "Blueberry", "Cola", "Pineapple", "Fruit beer", "Orange", "Lemon"];
                /*  for(var i = 0; i < option1Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option1Values[i];
                    option.value = option1Values[i];
                    secondDropdown.appendChild(option);
                }
*/
                while (i < length.option1Values) {
                    var option = document.createElement("option");
                    option.text = option1Values[i];
                    option.value = option1Values[i];
                    secondDropdown.appendChild(option);
                }
            } else if (selectedOption === "Softy") {
                // Populate second dropdown based on option 2
                var option2Values = ["Chocolate", "Vanilla", "Pists", "Strawberry"];
                for (var i = 0; i < option2Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option2Values[i];
                    option.value = option2Values[i];
                    secondDropdown.appendChild(option);
                }
            } else if (selectedOption === "coffee") {
                // Populate second dropdown based on option 3
                var option3Values = ["Hot coffee", "cold coffee"];
                for (var i = 0; i < option3Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option3Values[i];
                    option.value = option3Values[i];
                    secondDropdown.appendChild(option);
                }
            } else if (selectedOption === "food") {
                // Populate second dropdown based on option 4
                var option3Values = ["Momos", "shourma"];
                for (var i = 0; i < option3Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option3Values[i];
                    option.value = option3Values[i];
                    secondDropdown.appendChild(option);
                }
            } else if (selectedOption === "milk") {
                // Populate second dropdown based on option 5
                var option3Values = ["Option 3-1", "Option 3-2", "Option 3-3"];
                for (var i = 0; i < option3Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option3Values[i];
                    option.value = option3Values[i];
                    secondDropdown.appendChild(option);
                }
            }
        }

        function validate() {
            var firstDropdown = document.getElementById("ptype");

            if (firstDropdown === "Select" || firstDropdown === "") {
                alert("select Product type");
                exit();
            }
        }
    </script>
</head>

<body style="background-color: skyblue">

    <?php include("C:/xampp/htdocs/CO2/php/nav.php"); ?>

    <center>
        <div class="Amount">
            <b>
                <h1> Welcome to CO2 </h1>
            </b>
        </div>
    </center>

    <form action="/CO2/php/addDB.php" method="post" onsubmit="validate()">
        <center>
            <table border="2" style="margin: 5px; width: 80%">
                <tr>
                    <?php
                    $title = array("Date", "Product type", "Product Name", "Quantity", "Amount", "Action");

                    for ($i = 0; $i < count($title); $i++) {
                        echo "<td><center><b>$title[$i]</b></center></td>";
                    }
                    ?>

                </tr>
                <tr>
                    <td>
                        <?php
                        $date = date("Y-m-d");
                        echo " <div><center><input type=\"date\" name=\"date\" value=" . $date . " style=\"margin: 5px;></center></div>\"";
                        ?>
                    </td>
                    <td>
                        <div>
                            <center>
                                <select name="ptype" id="ptype" onchange="loadSecondDropdown()" style="margin: 5px;" required>
                                    <?php
                                    $list = array("Select", "Soda", "Softy", "Food", "Milk", "Coffee");

                                    for ($i = 0; $i < count($list); $i++) {
                                        echo "<option value=\"$list[$i]\">$list[$i]</option> ";
                                    }
                                    ?>
                                </select>

                            </center>
                        </div>
                    </td>
                    <td>
                        <center>
                            <div>
                                <select name="pname" id="pname" style="margin: 5px;" oninput="calcuteAmount()" required>
                                    <option value="Select"> -- </option>

                                </select>
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div><input type="number" class="Quantity" name="Quantity" value="Quantity" id="Quantity" style="margin: 5px;" oninput="calcuteAmount()" required></div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div><input type="number" class="Amount" name="Amount" id="Amount" value="Amount" style="margin: 5px;" required></div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div><input type="submit" name="Add" value="Add" class="btn btn-primary btn" style="margin: 5px;width:80%"></div>
                        </center>
                    </td>

                </tr>
            </table>

        </center>
    </form>
</body>
<?php mysqli_close($conn); ?>

</html>
<br><br>
<?php include("C:/xampp/htdocs/CO2/html/footer.html") ?>