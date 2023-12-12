import React, { useEffect, useState } from 'react'
import '../../CSS/Review.css'
import axios from 'axios'

export default function Check() {
  const [Isvalid,setIsvalid] = useState(false);

   const checking = () => {
  const id = document.getElementById('id').value;
  try{
    const res = axios.get('http://127.0.0.1:8000/backend/Feedback/id');
    setIsvalid(true)
  }catch(error){

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

        <button 
        className="btn btn-primary m-2"
        onClick={checking}
        >
          Validate
        </button>
      </div>
    </div>
  )
}
