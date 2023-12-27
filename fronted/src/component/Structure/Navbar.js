import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid" Style="text-color:white">
        <label className="navbar-brand" Style="color:white">{props.title}</label>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" aria-pressed="true">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/" Style="color:white">Home</Link>
            </li>
           {
/**
<li className="nav-item">
<Link className="nav-link" to="/MenuCard" path="" Style="color:white">MenuCard</Link>
</li>
*/
}
            <li className="nav-item">
              <Link className="nav-link" to="/AddSales" Style="color:white">Sales</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Stocks" Style="color:white">Stock</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Data" Style="color:white">Record</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback" Style="color:white">Feedback</Link>
            </li>
          </ul>
          <ul>
            <li className='nav-item'>
              <Link className="nav-link" to="/Login" Style="color:white">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
