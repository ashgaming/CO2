import React from 'react'
import '../../CSS/MenuCard.css'
import OrderList from './OrderList'
//import ReactDOMServer from 'react-dom/server';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function MenuCard() {
  useEffect(()=>{
    Aos.init();
  },[])
    const AddOrder = (itemName, itemPrice, Quantity) => {
        console.log('Name:', itemName);
        console.log('Price:', itemPrice);
        console.log('Quantity:', Quantity);
    };
    return (
        <>
            <OrderList data-aos="fade-up-right"/>
            <h1>MenuCard</h1>
            <div className='container'>

                <div className='ItemSection'>

                    <h4 Style='color:red;background-color:cyan'>Soda</h4>
                        <div className='MenuItem' onClick={() => AddOrder('Mango', 15, 15)}>
                            <div id='name' className='product'><li>Mango</li></div><div className='price' id='price'><li>Rs 15</li></div>
                        </div>
                    <div className='MenuItem' onClick={() => AddOrder('Pineapple', 15, 25)}>      
                            <div id='name' className='product'><li>Pineapple</li></div><div className='price' id='price'><li>Rs 15</li></div>
                    </div>
                    
                    <div className='MenuItem'>
                        <div className='product'><li>Jerra</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Pudina</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Green Apple</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>BlueBerry</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Cola</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Red Guava</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Lichy</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>FruitBeer</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Rum</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Wisky</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>StrawBerry</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Shahi Gulab</li></div><div className='price'><li>Rs 15</li></div>
                    </div>
                </div>

                <div className='ItemSection'>

                    <h4 Style='color:red;background-color:cyan'>Softy</h4>
                    <div className='MenuItem'>
                        <div className='product'><li>Mango</li></div>
                        <div className='price'><li>Rs 20</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Vanilla</li></div>
                        <div className='price'><li>Rs 20</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Chocolate</li></div>
                        <div className='price'><li>Rs 20</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>BlueBerry</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Mix Flovour</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Sprinnklers</li></div>
                        <div className='price'><li>Rs 35</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Choco-Dip</li></div>
                        <div className='price'><li>Rs 35</li></div>
                    </div>
                </div>

                <div className='ItemSection'>

                    <h4 Style='color:red;background-color:cyan'>Mocktails</h4>
                    <div className='MenuItem'>
                        <div className='product'><li>Blue Lagoon</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Ghus</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Mango Sunrise</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Virgin Mojito</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>kalakhatta MOjito</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>Cola-Berry Fusion</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                    <div className='MenuItem'>
                        <div className='product'><li>etc</li></div>
                        <div className='price'><li>Rs 25</li></div>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
function AddOrder(name,price)
{
    var  Oname = name;
    var  Oprice = price;
  // var Oname = document.getElementById('name').textContent;
  // var Oprice = document.getElementById('price').textContent;
   console.log(Oname);
   console.log(Oprice);
}
*/