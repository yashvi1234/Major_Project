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
        <h2 className="text-light display-4 fw-bold">Virtual Banking Made Easy</h2>
        <p className="text-light mx-auto">
          A virtual bank is a bank that offers its services only via the
          Internet, email, and other electronic means, often including
          telephone, online chat, and mobile check deposit. A virtual bank has
          no branch network.
        </p>
        <a className="text-dark" href="#">Get Started</a>
      </div>
    </div>
  );
};

export default Hero;

