import React, { useState } from 'react';
import useUserIdStore from '../store/User';


function Reviews() {
  const { user_id } = useUserIdStore();

  const [review, setReview] = useState({ movie_id: '', comment: '', error: '', user_id: `${user_id}` });
  


  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if movie and comment are not empty
    // if (review.movie.trim() === '' || review.comment.trim() === '') {
    //   setReview((prevState) => ({
    //     ...prevState,
    //     error: 'Please select a movie and add a comment',
    //   }));
    //   return;
    // }

    // send post request to server
    fetch('http://127.0.0.1:3000/reviews/create', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // clear form and state
        setReview({ movie_id: '', comment: '', error: '' });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className="reviews">
      <div className="movie">
        <h2>Review Section</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Movie:
            <select name="movie_id" value={review.movie_id} onChange={handleChange}>
              <option value="">Select movie</option>
              <option value="1">John Wick chapter 4</option>
              <option value="2">Shazam!</option>
              <option value="3">Operation fortune</option>
              <option value="4">Tranformers: rise of the beast</option>
              <option value="5">Avatar: the way of the water</option>
              <option value="6">Ant-man</option>
              <option value="7">Huesera: The bone woman</option>
              <option value="8">Attachment</option>
              <option value="9">M3GAN</option>
              <option value="10">The flash</option>
              <option value="11">Fast X</option>
              <option value="12">The Hunger games</option>
            </select>
          </label>
          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={review.comment}
            onChange={handleChange}
          />
          <button type="submit">Add Review</button>
        </form>
        {review.error && <p className="error">{review.error}</p>}
      </div>
    </div>
  );
}

export default Reviews;
