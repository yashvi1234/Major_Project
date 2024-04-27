/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Discover.css';

const Discover = () => {
  return (
    <section id="discover" className="discover py-3">
      <div className="row align-items-center container my-3 mx-auto">
        <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <img className="img-fluid" src="assets/images/2.png" alt="Discover" />
        </div>
        <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <h6>UNLIMITED ACCESS</h6>
          <h2>Login to your account at any time</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consequatur non delectus ad quasi. Consectetur necessitatibus alias
            eveniet corporis hic, expedita dolore quo eos tempore!
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Discover;
