/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <section id="signup" className="signup py-3">
      <div className="row align-items-center container my-3 mx-auto">
        <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <h6>JOIN OUR TEAM</h6>
          <h2>Creating an account is extremely easy</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consequatur non delectus ad quasi. Consectetur necessitatibus alias
            eveniet corporis hic, expedita dolore quo eos tempore!
          </p>
          <a href="#">Start Now</a>
        </div>
        <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <img className="img-fluid" src="assets/images/4.png" alt="SignUp" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
