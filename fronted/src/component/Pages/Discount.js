import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Discount() {
  useEffect(()=>{
    Aos.init();
  },[])
    
        var namee = 'name';
        var t = '15'; //</div>date('h:i A');
        var d = '11/12/2023'; //date('d-m-y');
        var e = '12/12/2023'; //date('d-m-y', strtotime($d + ' +1 day'));;
    return (
        <>
        <div> 
                <center>
                    <p className="card-text">Take Screenshot of this card to get 10% discount</p>
                    <br/><br/>

                        <div className="card" Style="width: 18rem;">
                            <img className="card-img-top" src="/img/co2_banner.jpeg" Style="width:18rem;height:15rem" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">CO2</h5>
                                    <p className="card-text"> Dicount card</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Name: </b> {namee} </li>
                                    <li className="list-group-item"><b>Date:</b> { d} </li>
                                    <li className="list-group-item"><b>Valid Till:</b> { e} </li>
                                    <li className="list-group-item"><b>Time:</b> { t} </li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/" className="card-link"><button type="button" className="btn btn-primary">Back</button></Link>

                                </div>
                        </div>
                    </center>

                </div>
                    </>
                )

}