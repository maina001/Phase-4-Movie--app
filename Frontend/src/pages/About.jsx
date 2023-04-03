import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Movie Awards App</h1>
      <p className="about-description">Welcome to the Movie Awards App, where you can discover the latest movies and vote for your favorites!</p>
      <p className="about-description">This app is developed by MoviesRewards, and is designed to provide a fun and engaging way for movie enthusiasts to keep up with the latest releases and participate in the voting process for the annual Movie Awards.</p>
      <p className="about-description">Our team of dedicated developers and designers have worked hard to bring you the best user experience possible, and we're always looking for ways to improve. Your feedback is greatly appreciated!</p>
      <h2 className="about-subheading">Meet Our Team</h2>
      <ul className="about-team-list">
        <li className="about-team-member">Abdiaziz Abdullahi - Backend Developer</li>
        <li className="about-team-member">Brian Maina - Frontend Developer</li>
        <li className="about-team-member">Christine Njoki - Frontend Developer</li>
        <li className="about-team-member">Griffins Ngeno - Backend Developer</li>
      </ul>
      <p className="about-contact">Feel free to contact us at <a href="mailto:contact@movieawardsapp.com">contact@movieawardsapp.com</a> for any questions or feedback.</p>
    </div>
  );
};

export default About;
