import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Data.css'
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';

export default function Data(props) {
    useEffect(() => {
        Aos.init();
    }, [])

    const [Record, setRecord] = useState([])

    useEffect(() => {
        async function getAllRecord() {
            try {
                const product = await axios.get("http://127.0.0.1:8000/backend/Record/");
                console.log(product.data);
                setRecord(product.data);
            } catch (error) {
                console.log(error);
            }
        } getAllRecord()
    }, [])

    return (
        <>
            <div>
                <b> Enter date : </b>
                <input type="date" name="date" id="date" required />
                <button className="btn btn-primary btn" Style="margin: 5px;" onclick="GetDate()">Enter</button>
                {
                    /*
                    <?php
                    if (isset($_POST['date'])) {
                        $date = $_POST['date'];
                    } else {
                        $date = date("Y-m-d"); // current date 
                    }
                    ?> */
                }
                <br />
                <h1 id="dat">{props.date}</h1>
                <br />
                <table border='2' className='tb'>
                    <tr className='td'>
                        <td className='td'>
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


                    {
                        Record.map((Record, i) => {
                            return (
                                <>

                                    <tr key={i}>
                                        <td ><center>:: {Record.id}  :: </center></td>
                                        <td><center>  {Record.date}  </center></td>
                                        <td><center>  {Record.ptype} </center></td>
                                        <td><center>  {Record.pname} </center></td>
                                        <td><center>  {Record.quantity} </center></td>
                                        <td><center>  {Record.amount} </center></td>
                                        <td> <center>
                                            <Link to="/CO2/php/deleteSales.php?id=' . $id . '"> <button type="button" className="btn btn-primary btn" Style="margin: 5px;" name="btn" value="delete" >Delete</button></Link>
                                        </center>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }





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
                < br />
                <table border="2" Style="margin: 5px; width: 50%">
                    <tr>
                        <td>
                            <center><b>type</b></center>
                        </td>
                        <td>
                            <center><b>Amount(Rs)</b></center>
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
                                {
                                /*
                                $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Soda';";
                                $res = mysqli_query($conn, $query);
                                $sum = mysqli_fetch_array($res);
                                print_r($sum['sum']);
                                ?>
                            */}
                            </center>
                        </td>
                        <td>
                            <center>{ /*<?php print_r($sum['qua']); ?> */}</center>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <center>Softy</center>
                        </td>
                        <td>
                            <center>
                                {/* 
                                                        <?php
                                                        $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Softy';";
                                                        $res = mysqli_query($conn, $query);
                                                        $sum = mysqli_fetch_array($res);
                                                        print_r($sum['sum']);
                                                        ?>
                                                        */}
                            </center>
                        </td>
                        <td>
                            <center>{/*<?php print_r($sum['qua']); ?>*/}</center>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <center>Food</center>
                        </td>
                        <td>
                            <center>
                                {/*
                                                    <?php
                                                    $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Food';";
                                                    $res = mysqli_query($conn, $query);
                                                    $sum = mysqli_fetch_array($res);
                                                    print_r($sum['sum']);
                                                    */}
                            </center>
                        </td>
                        <td>
                            <center>{/*<?php print_r($sum['qua']); ?>*/}</center>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <center>Milk</center>
                        </td>
                        <td>
                            <center>
                                {/*
                                                        <?php
                                                        $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Milk';";
                                                        $res = mysqli_query($conn, $query);
                                                        $sum = mysqli_fetch_array($res);
                                                        print_r($sum['sum']);
                                                        ?>
                                                        */ }
                            </center>
                        </td>
                        <td>
                            <center>{/*<?php print_r($sum['qua']); ?>*/}</center>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <center>Coffee</center>
                        </td>
                        <td>
                            <center>
                                {
                                /*
                            <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date' and type='Coffee';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?>
                        */                            }
                            </center>
                        </td>
                        <td>
                            {/*<?php print_r($sum['qua']); ?>*/}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <center>Total</center>
                        </td>
                        <td>
                            <center>
                                {/*  <?php
                            $query = "select SUM(amount) sum,SUM(quantity) as qua from sales where date='$date';";
                            $res = mysqli_query($conn, $query);
                            $sum = mysqli_fetch_array($res);
                            print_r($sum['sum']);
                            ?>
                    */}
                            </center>
                        </td>
                        <td>
                            <center>{/*<?php print_r($sum['qua']); ?>*/}</center>
                        </td>
                    </tr>
                </table>

                <br />
                <Link to="/CO2/html/addSales.php"><button className="btn btn-primary btn" Style="margin: 5px;">Add</button></Link>



            </div>
        </>


    )
}



/*       function GetDate()
       {
           let Link = document.getElementById("date").innerHTML;
       let b = document.getElementById("div").innerHTML;
       let s = Link.value;
       b.value = s;
           }


     /*  function deleteData(/*id, conn)
       {
         /*  $delSql = "delete from sales where id=$id";
       $result = mysqli_query($conn, $delSql);
       if ($result) {
           print("<script>alert('Entry deleted..!')</script>");
           } else {
           print("<script>alert('Entry failed delete..!')</script>");
           }
       }
       */