<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>CO2-Order</title>
    <style>
        .gradient-custom {
            /* fallback for old browsers */
            background: #6a11cb;

            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
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

        function populateSecondDropdown() {
            var firstDropdown = document.getElementById("ptype");
            var secondDropdown = document.getElementById("pname");
            var selectedOption = firstDropdown.value;

            // Clear existing options
            secondDropdown.innerHTML = "select";

            if (selectedOption === "soda") {
                // Populate second dropdown based on option 1
                var option1Values = ["Mango", "Jerra", "Green Apple", "Pudina", "Blueberry", "Cola", "Pineapple", "Fruit beer", "Orange", "Lemon"];
                for (var i = 0; i < option1Values.length; i++) {
                    var option = document.createElement("option");
                    option.text = option1Values[i];
                    option.value = option1Values[i];
                    secondDropdown.appendChild(option);
                }
            } else if (selectedOption === "softy") {
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
    </script>
</head>

<body>
    <form action="" method="post">
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">CO2</h2>
                                    <h2 class="fw-bold mb-2 text-uppercase">The Soda Bar and Cafe</h2>
                                    <p class="text-white-50 mb-5">Make your order</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" name="uname" id="typeEmailX" class="form-control form-control-lg" required />
                                        <label class="form-label" for="typeEmailX">Enter your name</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <select name="ptype" id="ptype" onchange="loadSecondDropdown()" style="margin: 5px; width:80%; height:50px" required>
                                            <?php /*
                                            $list = array("Select", "Soda", "Softy", "Food", "Milk", "Coffee");

                                            for ($i = 0; $i < count($list); $i++) {
                                                echo "<option value=\"$list[$i]\">$list[$i]</option> ";
                                            }*/
                                            ?>
                                        </select>
                                    </div>

                                    <div>
                                        <select name="pname" id="pname" style="margin: 5px;" oninput="calcuteAmount()" required>
                                            <option value="Select"> -- </option>

                                        </select>
                                    </div>



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
</body>

</html>

<?php
include("C:/xampp/htdocs/CO2/php/connection.php");

?>

</html>