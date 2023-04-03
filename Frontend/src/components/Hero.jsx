import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to the Movie Awards!</h1>
        <p className="hero__subtitle">
          Celebrating the best movies of the year and the talented people behind them.
        </p>
        <button className="hero__button"><Link to={'/login'} className="hero-link" >Get started</Link></button>
      </div>
    </section>
  );
};

export default HeroSection;
