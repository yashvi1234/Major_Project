/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.css'; // Import CSS file for styling if needed

const Hero = () => {
  return (
    <div className="mid">
      <video autoPlay muted loop>
        <source src={`${process.env.PUBLIC_URL}/assets/videos/1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero text-center">
        <h2 className="text-light display-4 fw-bold">Loan Interest Rates for Smarter Borrowing</h2>
        <p className="text-light mx-auto">
        Our web app simplifies loan searches by offering centralized access to compare options. Instantly compare interest rates from top banks to make informed decisions, potentially saving money in the long run.
        </p>
        <a className="text-dark" href="#about">Get Started</a>
      </div>
    </div>
  );
};

export default Hero;

