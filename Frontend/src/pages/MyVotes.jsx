import React, { useState, useEffect } from 'react';
import useUserIdStore from '../store/User';


function MovieCard({ movie }) {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.category}</p>
        <small className="card-text">{movie.year}</small>
        <button className='card-btn' onClick={handlesubmit}>DELETE</button>
      </div>
    </div>
  );
}

function MyVotes() {
  const { user_id } = useUserIdStore();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`http://127.0.0.1:3000/show/${user_id}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.movies);
          console.log(data)
        } else {
          throw new Error('Failed to fetch movies');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, [user_id]);

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="card-deck">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MyVotes;
