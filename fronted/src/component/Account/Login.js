import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Login(props) {
    let loggedIN = false;
    useEffect(() => {
        Aos.init();
    }, [])


    const navigate = useNavigate();
    const LoginTO = () => {

        var id = document.getElementById('typeEmailX').value;
        var pass = document.getElementById('pass').value;
        var ltype = document.getElementById('ltype').value;
        console.log(id, pass, ltype);
        const apiEndpoint = 'http://127.0.0.1:8000/backend/Login/';


        // Make a GET request to the API endpoint with the ID and password as query parameters
        axios.get(apiEndpoint, {
            params: {
            uid: `${id}`,
                password: decodeURIComponent(pass),
            },
        })
            .then(response => {
                // Check the response for success or failure
                if (response.data.success) {
                    console.log('Credentials are valid.');
                } else {
                    console.log('Credentials are not valid.');
                }
            })
            .catch(error => {
                console.error('Error checking credentials:', error);
            });
       


        if (id !== "" && pass !== "") {
            if (ltype === 'cust') {

                if (id === "Vaibhav" && pass === "123") {
                    console.log("Welcome " + id)




                } else {
                    console.log("Sorry " + id + " your not Register")
                }
            }
            // Login for admin 
            else if (ltype === 'Admin') {

                if (id === "Ashish" && pass === "7645") {
                    loggedIN = true;
                    navigate('/AdminPage');
                }
                else {
                    ClearInput();
                    alert("Sorry " + id + " your not Admin")

                }
            }


        }
        else {
            alert('Enter Id And Password');

        }
    }





    const ClearInput = () => {
        let idInput = document.getElementById('typeEmailX');
        let passInput = document.getElementById('pass');

        idInput.value = '';
        passInput.value = '';
        idInput.focus();
    }

    return (
        <div className="container py-5 h-100 justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center h-100">
                {/*  <div className="col-12 col-md-8 col-lg-6 col-xl-5">*/}
                <div>
                    <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">CO2</h2>
                                <h2 className="fw-bold mb-2 text-uppercase">The Soda Bar and Cafe</h2>
                                <h2 className="fw-bold mb-2 text-uppercase" Style='color:Red'>{props.title}</h2>
                                <input type='hidden' id='ltype' value={props.ltype} />

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Enter your id</label>
                                    <input type="text" name="uname" id="typeEmailX" className="form-control form-control-lg" required />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="pass" id="pass" className="form-control form-control-lg" required />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <button type="submit" className="form-control form-control-md" onClick={LoginTO} required >Login</button>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    {props.end}
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
