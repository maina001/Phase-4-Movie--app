import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserIdStore from '../store/User';


function MyReviews() {
    const { user_id } = useUserIdStore();


  const [review, setReview] = useState(null);
  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/show/${user_id}`);
        setReview(response.data.reviews);
        console.log(review)
      } catch (error) {
        console.error(error);
      }
    }

    fetchReview();
  }, [review, user_id]);

  return (
    <div className="Review">
      {review.map((rev) => (
        <div>
            <h4 className="rev-header"></h4>
            <h5 className="rev-movie"></h5>
            <p className="rev-p">{rev.comment}</p>

        </div>
      ))}
    </div>
  );
}

export default MyReviews;
