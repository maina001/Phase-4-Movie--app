import React, { useState } from 'react'
import axios from 'axios';
import useUserIdStore from '../store/User';

function Votes() {
  const { user_id } = useUserIdStore();

  const [formData, setFormData] = useState({
    rating: '',
    movie_id: '',
    user_id: `${user_id}`
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3000/votes/create', formData);
      console.log(response);
      // TODO: handle success case
      alert('Vote successful')
    } catch (error) {
      console.error(error);
      // TODO: handle error case
      alert('Something went wrong')
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <div className="votes">
        {/* <h1>Voting section</h1> */}
        <div className="categories">
          <form onSubmit={handleSubmit}>
            <h3>Action</h3>
            <label>
              Movie: 
              <select name="movie_id" value={formData.movie_id} onChange={handleInputChange}>
                <option value="">Select movie</option>
                <option value="1">John Wick chapter 4</option>
                <option value="2">Shazam!</option>
                <option value="3">Operation fortune</option>
              </select>
            </label>
            <label>Rating</label>
            <input type="number" name="rating" placeholder='rate it out of 10' value={formData.rating} onChange={handleInputChange} />
            <button type="submit">Vote</button>
          </form>
        </div>
        <div className="categories">
        <form onSubmit={handleSubmit}>
            <h3>Science Fiction</h3>
            <label>
              Movie: 
              <select name="movie_id" value={formData.movie_id} onChange={handleInputChange}>
                <option value="">Select movie</option>
                <option value="4">Tranformers: rise of the beast</option>
                <option value="5">Avatar: the way of the water</option>
                <option value="6">Ant-man</option>
              </select>
            </label>
            <label>Rating</label>
            <input type="number" name="rating" placeholder='rate it out of 10' value={formData.rating} onChange={handleInputChange} />
            <button type="submit">Vote</button>
          </form>
        </div>
        <div className="categories">
        <form onSubmit={handleSubmit}>
            <h3>Horror</h3>
            <label>
              Movie: 
              <select name="movie_id" value={formData.movie_id} onChange={handleInputChange}>
                <option value="">Select movie</option>
                <option value="7">Huesera: The bone woman</option>
                <option value="8">Attachment</option>
                <option value="9">M3GAN</option>
              </select>
            </label>
            <label>Rating</label>
            <input type="number" name="rating" placeholder='rate it out of 10' value={formData.rating} onChange={handleInputChange}/>
            <button type="submit">Vote</button>
          </form>
        </div>
        <div className="categories">
        <form onSubmit={handleSubmit}>
            <h3>Adventure</h3>
            <label>
              Movie: 
              <select name="movie_id" value={formData.movie_id} onChange={handleInputChange}>
                <option value="">Select movie</option>
                <option value="10">The flash</option>
                <option value="11">Fast X</option>
                <option value="12">The Hunger games</option>
              </select>
            </label>
            <label>Rating</label>
            <input type="number" name="rating" placeholder='rate it out of 10' value={formData.rating} onChange={handleInputChange}/>
            <button type="submit">Vote</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Votes