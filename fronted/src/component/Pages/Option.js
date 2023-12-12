import React from 'react'
//import '../../css/Option.css'

export default function Option() {
    return (
        <div className='optionClass my-2'>
            <center>
                <h1> Welcome To CO2 </h1>

               <h5> <b> OPTIONS: </b> </h5>

                <a href="/CO2/php/data.php"><button className="btn btn-primary btn" Style="margin: 5px; width:50%">Watch Sales</button></a>
                <a href="/CO2/html/addSales.php"><button className="btn btn-primary btn" Style="margin: 5px; width:50%">Add Sale</button></a>
                <a href="/CO2/php/AddProduct.php"><button className="btn btn-primary btn" Style="margin: 5px; width:50%">Add Product</button></a>
                <a href="/CO2/html/stocks.php"><button className="btn btn-primary btn" Style="margin: 5px; width:50%">Watch Product</button></a>

            </center>

        </div>
    )
}
