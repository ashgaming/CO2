import React, { useEffect, useState } from 'react'
import '../../CSS/Review.css'
import axios from 'axios'

export default function Check() {
  const [Is_loading_req,set_Is_loading_req]=useState(false);
  const [Isvalid,setIsvalid] = useState(false);

  const Checking = async() => {
  const id = document.getElementById('id').value;
  try{
    set_Is_loading_req(true);
    const res = await axios.get(`http://127.0.0.1:8000/backend/FeedBack/${id}/`).catch(error=>console.log(error));
    console.log(res.data.uid)
    setIsvalid(res.data.is_Valid)
  }catch(error){
      alert('Id does not exist...!')
      set_Is_loading_req(false)
  }
   }

  return (
    <div>
      <label>Enter Discount Id: </label>
      <div className='check_form'> 
        <input
         type='text'
         id='id'
        />
        <br/>
        {
          Is_loading_req ? (
            Isvalid?(
              <div>
                <p>Valid</p>
              </div>
            ):(
              <p>Invalid</p>
            )
          ):(
            <p>Check Discount validation</p>
           
          )
          
        } 
        <button 
        className="btn btn-primary m-2"
        onClick={Checking}
        >
          Validate
        </button>
      </div>
    </div>
  )
}
