import React, { useEffect, useState } from 'react'
import '../../CSS/Review.css'
import axios from 'axios'

export default function Check() {
  const [Is_loading_req, set_Is_loading_req] = useState(false);
  const [Isvalid, setIsvalid] = useState(false);
  const [Data, setData] = useState([]);

  const Checking = async () => {
    let id = document.getElementById('id');
    try {
      set_Is_loading_req(true);
      const res = await axios.get(`http://127.0.0.1:8000/backend/FeedBack/${id.value}/`).catch(error => console.log(error));
      console.log(res.data)
      setIsvalid(res.data.is_Valid)
      setData(res.data)
    } catch (error) {
      alert('Id does not exist...!')
      set_Is_loading_req(false)
      id.value='';
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
        <br />
        {
          Is_loading_req ? (
            Isvalid ? (
              <div id='errorDix'>
                <p>Valid</p>
                {
                  <>
                    <div className='Card'>
                      <article>
                        {Data.id}
                      </article>
                      <article>
                        <b>Username : </b>
                        {Data.uid}
                      </article>
                      <article>
                        <b>Review : </b>
                        {Data.review}
                      </article>
                      <article>
                        <b>Date : </b>
                        {Data.date}
                      </article>
                      <article>
                        <b>Time : </b>
                        {Data.time.slice(0, 5)}
                      </article>
                    </div>


                  </>

                }
              </div>
            ) : (
              <p>Invalid</p>
            )
          ) : (
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
