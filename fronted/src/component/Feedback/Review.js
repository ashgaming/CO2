import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CSS/Review.css'

const Review = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, [startIndex]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/backend/Feedback/'); // Replace with your actual API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - 5));
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 5);
  };

  const StarRating = ({ rating }) => {
    const maxStars = 5; // Maximum number of stars

    // Create an array of stars based on the rating
    const stars = Array.from({ length: maxStars }, (_, index) => (
        <span key={index} className={`fa fa-star ${index < rating ? 'checked' : ''}`}></span>
    ));

    return (
        <li>
          {stars}
        </li>
       
    );
};

  return (
    <>
      <h1>Your Reviews</h1>
    <div className='Review_back_container'>
      {data.slice(startIndex, startIndex + 10).map(item => (
        <>
      <div className='Review_container'>
        <li key={item.id}><b>Id:</b> {item.id}</li>
         <li key={item.id}><b>User Id:</b>{item.uid}</li>
         <li key={item.id}><b>User Name:</b>{item.name} {item.surname}</li>
         <li key={item.id}><b>  
                           Rating: <StarRating rating={item.rating} />
                       </b>
          </li>
         <li key={item.id}><b>Comment:</b>{item.review}</li>
         </div>
        </>
      ))}
    </div>
    </>
  );
};

export default Review;