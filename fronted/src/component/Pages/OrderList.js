import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function OrderList() {

  useEffect(()=>{
    Aos.init();
  },[])
    return (
        <div>
            <div className='ItemSection' Style="width:90%">

                <h4 Style='color:red;background-color:green'>Your Order</h4>
                <strong>
                <div className='MenuItem'>
                    <div className='price' Style='width:33%;'><li>Item</li></div>
                    <div className='price' Style='width:33%;'><li>Quantity</li></div>
                    <div className='price' Style='width:33%;'><li>Price</li></div>
                </div>
                </strong>
                <div className='MenuItem'>
                    <div className='product'><li>Blue Lagoon</li></div>
                    <div className='price'><li>1</li></div>
                    <div className='price'><li>Rs 25</li></div>
                </div>
                <div className='MenuItem'>
                    <div className='product'><li>Khus</li></div>
                    <div className='price'><li>2</li></div>
                    <div className='price'><li>Rs 25</li></div>
                </div>
                <button className='btn-btn-primary'>Confirm</button>
            </div>
        </div>
    )
}
