import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../CSS/Feedback.css'
import 'aos/dist/aos.css';
import axios from 'axios';
import Review from './Review';



const AddFeedback = (selectedrating) => {

    //  const navigate = useNavigate();
    let id = document.getElementById('Id').value;
    let Name = document.getElementById('Name').value;
    let surname = document.getElementById('surname').value;
    let comment = document.getElementById('comment').value;

    const feedBack = {
        "uid": id,
        "name": Name,
        "surname": surname,
        "rating": selectedrating,
        "review": comment,
        "is_valid": true
    }
    const j = JSON.stringify(feedBack);
    console.log(j);
    try {

        axios.post("http://127.0.0.1:8000/backend/Feedback/", j, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            alert("We get your feedback sussessfully..!");
            //   navigate('/');
        });
    }
    catch (err) {
        alert("something went wrong . please check your form again..!")
    }


}

export default function Feedback() {

    // get feedback data stats
    const [feedstats, setFeedstats] = useState([]);
    const [avg, setAvg] = useState(20);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const TFeedBack = async () => {
            try {
                const feed = await axios.get("http://127.0.0.1:8000/backend/Feedback/stats")
                setFeedstats(feed.data)
                await new Promise(resolve => setTimeout(resolve, 200));
                setLoading(false);
            }
            catch (err) {
                //   console.log(err);
                setLoading(false);
                alert("Something Went wrong. Please check your form again..!")
            }
        }
        TFeedBack();
    }, []);

    useEffect(() => {
        try {
            const averageValue = parseFloat(feedstats['average']);
            if (!isNaN(averageValue)) {
                const formattedValue = averageValue.toFixed(1);
                setAvg(formattedValue);
               
            } else {

            }
        } catch (error) {
        }

    }, [feedstats]);


    // To get rating data 
    const [selectedrating, setSelectedrating] = useState('');
    let handleRadioChange = (event) => {
        setSelectedrating(event.target.value);
        console.log(selectedrating)
    };

    const handleSubmit = () => {
        // Call AddFeedback with the selected rating
        AddFeedback(selectedrating);
    };

    const StarRating = ({ rating }) => {
        const maxStars = 5; // Maximum number of stars

        // Create an array of stars based on the rating
        const stars = Array.from({ length: maxStars }, (_, index) => (
            <span key={index} className={`fa fa-star ${index < rating ? 'checked' : ''}`}></span>
        ));

        return (
            <div>
                {stars}
            </div>
        );
    };

    return (
        <>
            {loading ? (
                // Display a loading spinner or message while the component is loading
                <p>Loading...</p>
            ) : (
                // Render the actual content when the component has finished loading
                <div>
                    <div>

                        <div>
                            <h2>CO 2 Rating:</h2>
                            <StarRating rating={avg} />
                        </div>
                        <p> {avg} star average based on {feedstats['count']} reviews.</p>
                        <div Style="border:3px solid #f1f1f1">
                            <div className="row">
                                <div className="side">
                                    <div>5 star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-5" style={{ width: `${feedstats['Star5'] / feedstats['count'] * 100}%` }} ></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>
                                        {feedstats['Star5']}
                                    </div>
                                </div>
                                <div className="side">
                                    <div>4 star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-4" style={{ width: `${feedstats['Star4'] / feedstats['count'] * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>{feedstats['Star4']}</div>
                                </div>
                                <div className="side">
                                    <div>3 star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-3" style={{ width: `${feedstats['Star3'] / feedstats['count'] * 100}%` }}></div>
                                    </div>
                                </div >
                                <div className="side right">
                                    <div>{feedstats['Star3']}</div>
                                </div>
                                <div className="side">
                                    <div>2 star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-2" style={{ width: `${feedstats['Star2'] / feedstats['count'] * 100}%` }}></div>
                                    </div>
                                </div >
                                <div className="side right">
                                    <div>{feedstats['Star2']}</div>
                                </div>
                                <div className="side">
                                    <div>1 star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-1" style={{ width: `${feedstats['Star1'] / feedstats['count'] * 100}%` }}></div>
                                    </div>
                                </div >
                                <div className="side right">
                                    <div>{feedstats['Star1']}</div>
                                </div>
                            </div >
                        </div>

                    </div>

                    <div className="form m-2">
                        <form>
                            <label htmlFor="hello">
                                <h1>What you think about us??</h1>
                            </label><br />
                            <label htmlFor="name"><b>Enter id</b></label><br />
                            <input type="text" name="id" id='Id' placeholder="Enter your id" required /><br />

                            <label htmlFor="name"><b>Enter Name</b></label><br />
                            <input type="text" name="Name" id='Name' placeholder="Enter your name" required /><br />

                            <label htmlFor="name"><b>Enter surname</b></label><br />
                            <input type="text" name="surname" id='surname' placeholder="Enter your surname" required /><br />

                            <label htmlFor="rating"><b>Rating</b></label><br />
                            <input type="radio" name="star" id="rating" value="1"
                                checked={selectedrating === '1'}
                                onChange={handleRadioChange}
                                required />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span><br />
                            <input type="radio" name="star" id="rating" value="2"
                                checked={selectedrating === '2'}
                                onChange={handleRadioChange}
                                required />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span><br />
                            <input type="radio" name="star" id="rating" value="3"
                                checked={selectedrating === '3'}
                                onChange={handleRadioChange}
                                required />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span><br />

                            <input type="radio" name="star" id="rating" value="4"
                                checked={selectedrating === '4'}
                                onChange={handleRadioChange}
                                required />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span> <br />

                            <input type="radio" name="star" id="rating" value="5"
                                checked={selectedrating === '5'}
                                onChange={handleRadioChange}
                                required />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span> <br />
                            <br />
                            <label htmlFor="Comment"><b>Comment</b></label><br />
                            <textarea name="Comment" id="comment" cols="100" rows="10" Style="width: 95%;"></textarea>
                            <br />

                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>

                    <div className="rev">
                        <Review />
                    </div>

                </div>
            )}
        </>
    )

}