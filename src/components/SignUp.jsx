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
            { title: 'News updates in Financial market', imgSrc: 'assets/images/News updates in Financial market.png', description: 'News updates in Financial market', link: 'https://youtube.com/@zeebusiness?si=N4YNPel0MfCGWwOn/' },
            { title: 'Financial educational podcast', imgSrc: 'assets/images/Financial educational podcast.png', description: 'Financial educational podcast', link: 'https://youtube.com/@financewithsharan?si=XSnWy_aRqgPCY5sj' },
            { title: 'Learning from the financial leaders', imgSrc: 'assets/images/Learning from the financial leaders.png', description: 'Learning from the financial leaders', link: 'https://youtube.com/@therichdadchannel?si=ZtImjYGkZgjJkpDN' },
            { title: 'Trends in the financial market', imgSrc: 'assets/images/Trends in the financial market.png', description: ' Trends in the financial market', link: 'https://www.ezbob.com/lending-industry-evolution-top-5-trends-reshaping-the-financial-landscape/' },
            { title: 'Lending and loans in business world', imgSrc: 'assets/images/Lending and loans in business world.png', description: 'Lending and loans in business world.', link: 'https://www.tatacapital.com/blog/loan-for-business/the-latest-trends-in-business-loans/' },
            { title: 'Business analysis and financial world', imgSrc: 'assets/images/Business analysis and financial world.png', description: 'Business analysis and financial world', link: 'https://youtube.com/@thinkschool?si=DnMlU9DoVMIadrlt' },
            { title: 'Reserve Bank of India', imgSrc: 'assets/images/Reserve Bank of India.png', description: ' Reserve Bank of India', link: 'https://youtube.com/@reservebankofindia593?si=4zGwqpV-pzyvpxR1' },
            { title: 'Loan frauds and related risks', imgSrc: 'assets/images/Loan frauds and related risks.png', description: 'Loan frauds and related risks', link: 'https://seon.io/resources/loan-fraud-guide/' },
            { title: 'Terminologies in Finance', imgSrc: 'assets/images/Terminologies in Finance.png', description: 'Terminologies in Finance', link: 'https://online.hbs.edu/blog/post/finance-for-non-finance-professionals-finance-terms-to-know' },
            { title: 'Loan Interest Rates for Smarter Borrowing', imgSrc: 'assets/images/Loan Interest Rates for Smarter Borrowing.png', description: 'Loan Interest Rates for Smarter Borrowing', link: 'https://investopedia.co.in/understanding-interest-rates-on-loans' },
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
