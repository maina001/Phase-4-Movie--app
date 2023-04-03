import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className="nav-left">
        <Link className='brand' to="/">MovieAwards</Link>
      </div>
      <div className="nav-middle">
        <Link className='menu' to="/">Home</Link>
        <Link className='menu' to="/about">About</Link>
        <Link className='menu' to="/myvotes">Your Votes</Link>
      </div>
      <div className="nav-right">
        <Link className='menu' to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
