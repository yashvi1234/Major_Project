import React from 'react';
import './SignUp.css';


const SignUp = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <section id="financialinfo" className="signup py-3">
      <div className="container my-3 mx-auto">
        <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
          <h3>FINANCIAL INFORMATION</h3>
        </div>
        <div className="row align-items-center justify-content-center text-center">
          {[
            { title: '', imgSrc: 'assets/images/', description: 'News updates in Financial market', link: 'https://youtube.com/@zeebusiness?si=N4YNPel0MfCGWwOn/' },
            { title: '', imgSrc: 'assets/images/', description: 'Financial educational podcast', link: 'https://youtube.com/@financewithsharan?si=XSnWy_aRqgPCY5sj' },
            { title: '', imgSrc: 'assets/images/', description: 'Learning from the financial leaders', link: 'https://youtube.com/@therichdadchannel?si=ZtImjYGkZgjJkpDN' },
            { title: '', imgSrc: 'assets/images/', description: ' Trends in the financial market', link: 'https://www.ezbob.com/lending-industry-evolution-top-5-trends-reshaping-the-financial-landscape/' },
            { title: '', imgSrc: 'assets/images/', description: 'Lending and loans in business world.', link: 'https://www.tatacapital.com/blog/loan-for-business/the-latest-trends-in-business-loans/' },
            { title: '', imgSrc: 'assets/images/', description: 'Business analysis and financial world', link: 'https://youtube.com/@thinkschool?si=DnMlU9DoVMIadrlt' },
            { title: '', imgSrc: 'assets/images/', description: ' Reserve Bank of India', link: 'https://youtube.com/@reservebankofindia593?si=4zGwqpV-pzyvpxR1' },
            { title: '', imgSrc: 'assets/images/', description: 'Loan frauds and related risks', link: 'https://seon.io/resources/loan-fraud-guide/' },
            { title: '', imgSrc: 'assets/images/', description: 'Terminologies in Finance', link: 'https://online.hbs.edu/blog/post/finance-for-non-finance-professionals-finance-terms-to-know' },
            { title: '', imgSrc: 'assets/images/', description: 'Loan Interest Rates for Smarter Borrowing', link: 'https://investopedia.co.in/understanding-interest-rates-on-loans' },
          ].map((card, index) => (
            <div className="card col-lg-3 col-md-3 col-12 m-2" key={index} onClick={() => handleCardClick(card.link)}>
              <img className="img-fluid w-75" src={card.imgSrc} alt={card.title} />
              <h5 className="fw-bold pt-4">{card.title}</h5>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
