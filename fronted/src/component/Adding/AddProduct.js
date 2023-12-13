import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* 
const [ptype, setType] = useState(""); 
const add = async () =>
{
let formfield = new FormData();
formfield.append('cat',ptype)
}

  console.log(formfield.values().value)
      for(const value of formfield.values()){

          console.log(value);
      }

<>

</>

*/

export default function AddProduct() {
    //  const [image,setImage] = useState(null); 
    const [ptype, setType] = useState("");
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [capacity, setCapacity] = useState("");
    let [rdate,setRdate] = useState(""); 

    const history = useNavigate();

    const AddTOLIST = async (e) => {
        e.preventDefault();
         rdate = new Date().toISOString().split('T')[0];
         setRdate(rdate);
      /*  let b = document.getElementById('ptype').value;
        console.log(b);*/
        // e.preventdefault();
        let formfield = new FormData();
        formfield.append('cat', ptype);
        formfield.append('pname', pname);
        formfield.append('pdes', description);
        formfield.append('price', price);
        formfield.append('cap', capacity);
        formfield.append('rdate', rdate);
        formfield.append('sold', '0')
        
        for (const value of formfield.values()) {

            console.log(value);
        }


        /* if(image != null){
             formfield.append('img',image)
   
         }*/
        const j = JSON.stringify(formfield)
        axios.post("http://127.0.0.1:8000/backend/Product/", formfield, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(()=>{
            console.log("Data Enter Suceesfully")
            alert("Product Added Sucessfully")
            clearInput()
        }).catch(err => console.log(err));

    }
    const clearInput=()=>
    {
        setType('');
        setPname('');
        setPrice('');
        setCapacity('');
        setDescription('');
    }

    return (
        <>

            <div>
                <div>
                    <b>
                        <h1> Add Product In List </h1>
                    </b>
                </div>


                <tbody border="1" Style="width: max-content;margin: 5px; width: 80%">
                    <tr>
                        {/*  <td><center>Image</center></td>*/}
                        <td><center>Product type</center></td>
                        <td>
                            <div >
                                <center>
                                    <select name='ptype'
                                        value={ptype}
                                        onChange={(e) => setType(e.target.value)}
                                        id="ptype">
                                        <option value='Select'>Select</option>
                                        <option value='Soda'>Soda</option>
                                        <option value='Mocktail'>Mocktail</option>
                                        <option value='Softy'>Softy</option>
                                        <option value='Food'>Food</option>
                                        <option value='Milk'>Milk</option>
                                        <option value='Coffee'>Coffee</option>
                                    </select>
                                </center>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><center>Product Name</center></td>
                        <td>
                            <center>
                                <div>
                                    <input type="text"
                                        id="pname"
                                        value={pname}
                                        onChange={(e) => setPname(e.target.value)}
                                        placeholder="Enter Product Name" className="con" Style="margin: 5px;" />
                                </div>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td><center>Price (Rs)</center></td>
                        <td>
                            <center>

                                <div><input type="number"
                                    className="Price"
                                    id="Price"
                                    Style="margin: 5px;"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                /></div>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td><center>Capacity</center></td>
                        <td>
                            <center>
                                <div><input type="number"
                                    value={capacity}
                                    onChange={(e) => setCapacity(e.target.value)}
                                    className="capacity" id="capacity" Style="margin: 5px;" /></div>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td><center>Description</center></td>
                        <td>
                            <center>
                                <div><textarea type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="des" id="des" Style="margin: 5px;" /></div>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td><center>Action</center></td>
                        <td>
                            <center>
                                <div><button id="Add" className="btn btn-primary btn" Style="margin: 5px;" onClick={AddTOLIST}>Add</button></div>
                            </center>
                        </td>
                    </tr>




                    {/*
                        <td>
                                <center>
                                    <div>
                                        <img src={image} alt='Product'/>
                                        <input type="file" 
                                         id="image"
                                         name="image"
                                        
                                         onChange={(e) => setImage(e.target.files[0])}
                                        placeholder="Enter Product Name" className="con" Style="margin: 5px;"  />
                                    </div>
                                </center>
                            </td>
                            */ }
                </tbody>


            </div>
        </>
    )
}

