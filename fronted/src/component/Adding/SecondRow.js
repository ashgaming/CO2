import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../CSS/AddSales.css'

export default function SecondRow(props) {
    const [Tamount, setTamount] = useState([])
    const getPrice = async () => {

        try {
            const response = await axios.get(`http://127.0.0.1:8000/backend/Product`,{
                  param:{
                    pname:'Mango',
                    cat:'Softy',
                },
            }).then((res)=>{
                console.log(res.data[0].price);
                if (res.data && res.data.length > 0) {
                    setTamount(res.data[0].price);
                    
                } else {
                    console.error('Product not found');
                }
            }
            );
        }catch(error)
        {
            console.log(error);
        }

    }
    
    getPrice();
    return (

        <>
        
        <div>{Tamount}</div>

            <td className='Parent' id={props.Pname}>
                <div>
                    <center>
                        <select name="ptype" id="ptype" onChange={populateSecondDropdown} Style="margin: 5px;" required>
                            <option value="Select">Select</option>;
                            <option value="Soda">Soda</option>;
                            <option value="Softy">Softy</option>;
                            <option value="Food">Food</option>;
                            <option value="Milk">Milk</option>;
                            <option value="Coffee">Coffee</option>;
                            <option value="Burger">Burger</option>;
                            <option value="Sandwich">Sandwich</option>;

                        </select>

                    </center>
                </div>
            </td>
            <td>
                <center>
                    <div>
                        <select name="pname" id='pname' Style="margin: 5px;" required>
                            <option value="Select"> {props.pname} </option>
                            <option value="Select"> -- </option>


                        </select>
                    </div>
                </center>
            </td>
            <td>
                <center>
                    <div>
                        <input
                            type="number"
                            className="Quantity"
                            name="Quantity"
                            id="Quantity"
                            Style="margin: 5px;"
                            onInput={calcuteAmount}
                            required />
                    </div>
                </center>
            </td>
            <td>
                <center>
                    <input type="number" className="Amount" name="Amount" id="Amount" Style="margin: 5px;" required />
                </center>
            </td>
            <td>
                <center>
                    <div>
                        <button
                            type="button"
                            name="Cancel"
                            className="btn btn-primary btn"
                            Style="margin: 5px;width:80%"
                      /*      onClick={del(props.Pname)}*/
                        >Cancel
                        </button>
                    </div>
                </center>
            </td>

        </>
    )
}

const del=(id)=>
{
  /*  var ele = document.getElementById(id);
    if(ele){
        ele.remove();
    }
    console.log(id,"removed");*/
}

function calcuteAmount() {
    /*   var type = document.getElementById("ptype").value;
       var product = document.getElementById("pname").value;
       var quantity = document.getElementById("Quantity").value;
   
       var url = "";
       url += "?product=" + encodeURIComponent(product);
       url += "&type=" + encodeURIComponent(type);
       url += "&quantity=" + encodeURIComponent(quantity);
   
       */

}

function populateSecondDropdown(props) {

    var firstDropdown = document.getElementById("ptype");
    var secondDropdown = document.getElementById("pname");
    var selectedOption = firstDropdown.value;
    if (firstDropdown.value !== "Select") {
        console.log(firstDropdown.value);

    }

    // Clear existing options
    secondDropdown.innerHTML = "select";

    if (selectedOption === "Soda") {
        // Populate second dropdown based on option 1
        var option1Values = [
            { Pname: "Mango", Price: 15 }
            , { Pname: "Jerra", Price: 15 }
            , { Pname: "Green Apple", Price: 15 }
            , { Pname: "Pudina", Price: 15 }
            , { Pname: "Blueberry", Price: 15 }
            , { Pname: "Cola", Price: 15 }
            , { Pname: "Pineapple", Price: 15 }
            , { Pname: "Fruit beer", Price: 15 }
            , { Pname: "Orange", Price: 15 }
            , { Pname: "Lemon", Price: 15 }];
        for (let i = 0; i < option1Values.length; i++) {
            let option = document.createElement("option");
            option.text = option1Values[i].Pname;
            option.value = option1Values[i].Pname;
            secondDropdown.appendChild(option);
        }
    } else if (selectedOption === "Softy") {
        // Populate second dropdown based on option 2
        let option2Values = ["Chocolate", "Vanilla", "Pists", "Strawberry"];
        for (let i = 0; i < option2Values.length; i++) {
            let option = document.createElement("option");
            option.text = option2Values[i];
            option.value = option2Values[i];
            secondDropdown.appendChild(option);
        }
    } else if (selectedOption === "coffee") {
        // Populate second dropdown based on option 3
        var option3Values = ["Hot coffee", "cold coffee"];
        for (let i = 0; i < option3Values.length; i++) {
            var option = document.createElement("option");
            option.text = option3Values[i];
            option.value = option3Values[i];
            secondDropdown.appendChild(option);
        }
    } else if (selectedOption === "food") {
        // Populate second dropdown based on option 4
        let option3Values = ["Momos", "shourma"];
        for (let i = 0; i < option3Values.length; i++) {
            let option = document.createElement("option");
            option.text = option3Values[i];
            option.value = option3Values[i];
            secondDropdown.appendChild(option);
        }
    } else if (selectedOption === "milk") {
        // Populate second dropdown based on option 5
        let option3Values = ["Option 3-1", "Option 3-2", "Option 3-3"];
        for (let i = 0; i < option3Values.length; i++) {
            let option = document.createElement("option");
            option.text = option3Values[i];
            option.value = option3Values[i];
            secondDropdown.appendChild(option);
        }
    }
}