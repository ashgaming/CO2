import React from 'react'
import { useState,useEffect  } from 'react';
import axios from 'axios';

export default function Api() {
  
    const [product,setProduct] = useState([])
    console.log(product.cat);
    

  useEffect(()=>{
    async function getAllProduct(){
      try{
        const product = await axios.get("http://127.0.0.1:8000/backend/Product/");
        console.log(product.data);
        setProduct(product.data);
      }catch(error)
      {

      }
    }getAllProduct()
  },[])
  return (
    <>
    <div>
      {
        product.map((product,i)=>{
            return (
                <h1>
                    {product.cat} <br/>
                    { product.pname}<br/>
                    {product.price}<br/>
                    {product.cap}<br/>
                    {product.rdate}<br/><br/>
                      </h1>
            )
        })
    }
    </div>
    </>
  )
}
