<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Document</title>
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

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" name="uname" id="typeEmailX" class="form-control form-control-lg" required />
                                        <label class="form-label" for="typeEmailX">Admin</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" name="pass" id="typePasswordX" class="form-control form-control-lg" required />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>


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

session_start();
$_SESSION['cnt'] = 0;

if ($_SESSION['cnt'] < 3) {
    if (isset($_POST['uname']) || isset($_POST['pass'])) {
        $name = $_POST['uname'];
        $pass = $_POST['pass'];


        $sql = "select * from login where uname='$name' and pass='$pass'";
        $res =  mysqli_query($conn, $sql);
        //  $sql = "select * from login where uname=$1 and pass=$2";
        //  $res =  mysqli_querry($conn, $sql, array($name, $pass));
        //  echo mysqli_num_rows($res);
        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_assoc($res);
            $_SESSION['user'] = $row['uname'];
            $_SESSION['cnt'] = $_SESSION['cnt'] + 1;
            header("location:\CO2\html\home.php");
        } else {
            echo '<script>alert("Wrong details...!")</script>';
            $_SESSION['cnt'] = $_SESSION['cnt']  + 1; // = $count + 1;
        }
    }
    echo $_SESSION['cnt'];
} else {
    echo '<script>alert("No attempts left .try again later...!")</script>';
    return;
}
mysqli_close($conn);
?>