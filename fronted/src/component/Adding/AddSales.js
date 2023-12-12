import React, { useState } from 'react'
import SecondRow from './SecondRow';
import '../../CSS/AddSales.css'
 

export default function AddSales() {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (Changedvalue, i) => {
        const inputData = [...val]
        inputData[i] = Changedvalue.target.value;
        setVal(inputData);
    }

    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal[i].splice(i, 1);
        setVal(deleteVal);
    }
    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents([...components, <SecondRow pname={"pname"+ components.length} />]);
    };

    const deleteComponent = () => {
        if (components.length > 0) {
            const newComponents = [...components];
            newComponents.pop();
            setComponents(newComponents);
        }
    };

    return (
        <>

            <div >
                <center>
                    <div className="Amount">
                        <b>
                            <h1> Welcome to CO2 </h1>
                        </b>
                    </div>
                </center>

                <form className='parent' onsubmit="validate()">
                    <center>
                        <table border="2" Style="margin: 5px; width: 80%">
                            <thead>
                                <td><center><b>Product type</b></center></td>
                                <td><center><b>Product Name</b></center></td>
                                <td><center><b>Quantity</b></center></td>
                                <td><center><b>Amount</b></center></td>
                                <td><center><b>Action</b></center></td>
                            </thead>
                            <tbody>
                            <SecondRow />
                            </tbody>
                            {
                                val.map((i) => {
                                    return <SecondRow id={i} pname={val.length} />
                                })
                            }

                            {components.map((component, index) => (
                                <tbody >
                                    {component}
                                </tbody>
                            ))}
                        </table>
                        <button type='button' className='btn btn-primary m-2' onClick={addComponent}>more</button>

                        <br />
                        <button type='submit' className='btn btn-primary m-2 '>Order</button>
                    </center>
                </form>
            </div>
        </>
    )
}




/*function validate() {
    var firstDropdown = document.getElementById("ptype");

    if (firstDropdown === "Select" || firstDropdown === "") {
        alert("select Product type");
    }
}*/