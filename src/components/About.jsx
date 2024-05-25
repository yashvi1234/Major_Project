import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about py-3">
      <div className="row align-items-center container my-3 mx-auto">
        <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <h6>PREMIUM BANK</h6>
          <h2>One stop solution for all loan searching problems...</h2>
          <p>
          This application streamlines loan selection by offering a comparison of interest rates from different banks. Users can easily find the best rates without navigating multiple bank websites. It simplifies the process with a comparison table and sorting options!
          </p>
          <a href="#service">Learn More</a>
        </div>
        <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <img className="img-fluid" src="assets/images/1.svg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
