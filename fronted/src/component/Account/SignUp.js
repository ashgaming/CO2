import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


function AddToLogin(uname, Email, pass, Rtype,navigate) {
   
    const Data = {
        "uid": uname,
        "email":Email,
        "password":pass,
        "ltype":Rtype,

    }
    const j = JSON.stringify(Data);
    console.log(j);

    axios.post("http://127.0.0.1:8000/backend/Login/", j, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(
        navigate('/Login')

    ).catch(err => console.log(err));
}

export default function SignUp(props) {

    const navigate = useNavigate();
    useEffect(() => {
        Aos.init();
    }, [])

    const SignUpTo = () => {
        var id = document.getElementById('id').value;
        var pass = document.getElementById('pass').value;
        var cpass = document.getElementById('cpass').value;
        var Email = document.getElementById('Email').value;
        var Rtype = document.getElementById('ltype').value;
        console.log("Rtype:", Rtype);


        if (id !== '' && pass !== '' && cpass !== '' && Email !== '') {
            console.log(id, pass, cpass, Email);
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(Email)) {
                console.log('Email is valid');
            } else {
                console.log('Email is not valid');
            }
            if (pass === cpass) {

                var lengthRegex = /.{8,}/;
                var uppercaseRegex = /[A-Z]/;
                var lowercaseRegex = /[a-z]/;
                var digitRegex = /\d/;
                var symbolRegex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
               // var symbolRegex = /[-!@#$%^&*()_+|~=`{}]:";'<>?,.]/;

                // Test the password against the regex
                if (lengthRegex.test(pass) &&
                    uppercaseRegex.test(pass) &&
                    lowercaseRegex.test(pass) &&
                    digitRegex.test(pass) &&
                    symbolRegex.test(pass)) {
                    // alert('Password is valid');
                    AddToLogin(id, Email, pass, Rtype,navigate);
                } else {
                    alert('Password is not valid');
                }
            }
            else {
                console.log('password Error ');
                document.getElementById('pass').focus();
            }

        }
        else {
            if (id === '') {
                console.log("Please Enter Id...! ");
                document.getElementById('id').focus();
            } else if (Email === '') {
                console.log("Please Enter Email Id...! ");
                document.getElementById('Email').focus();
            } else if (pass === '') {
                console.log("Please Enter password...! ");
                document.getElementById('pass').focus();
            } else if (cpass === '') {
                console.log("Please confirm your password...! ");
                document.getElementById('cpass').focus();
            }
        }

    }

    return (
        <div className="container py-5 h-100 justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center h-100">
                {/* <div className="col-12 col-md-8 col-lg-6 col-xl-5">*/}
                <div>
                    <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">CO2</h2>
                                <h2 className="fw-bold mb-2 text-uppercase">The Soda Bar and Cafe</h2>
                                <h2 className="fw-bold mb-2 text-uppercase" Style='color:yellow'>{props.title}</h2>
                                <input type='hidden' id='ltype' value={props.Rtype} />
                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Create your id</label>
                                    <input type="text" name="uname" id="id" className="form-control form-control-lg" required />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Enter your Email id</label>
                                    <input type="Email" name="uname" id="Email" className="form-control form-control-lg" required />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Create Password</label>
                                    <input type="password" name="pass" id="pass" className="form-control form-control-lg" required />
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="cpass" id="cpass" className="form-control form-control-lg" required />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <button type="submit" className="form-control form-control-md btn-btn-Primary" onClick={SignUpTo}>Create</button>
                                </div>
                                {props.end}

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
