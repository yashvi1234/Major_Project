import React, { useState, useEffect } from 'react';
import Table from './Table';
import './Service.css';

// Function to generate table data based on the card name
const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Expected JSON response but got something else");
    }

    const data = await response.json();
    console.log("This is data:", data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const generateTableData = async (cardName) => {
  let apiUrl, data= [];
  if (cardName === 'Education Loan') {
    apiUrl = 'http://localhost:3000/EducationLoan';
  }
  else if (cardName === 'Personal Loan') {
    apiUrl = 'http://localhost:3000/PersonalLoan';
  }
  else if (cardName === 'Home Loan') {
    apiUrl = 'http://localhost:3000/HomeLoan';
  }
  else if (cardName === 'Vehicle Loan') {
    apiUrl = 'http://localhost:3000/VehicleLoan';
  }
  else if (cardName === 'Gold Loan') {
    apiUrl = 'http://localhost:3000/GoldLoan';
  }
  data = await fetchData(apiUrl);
  return data;
};

const Service = () => {
  const [recData, setRecData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [loading, setLoading] = useState(false);

  // Bubble sort algo
  const bubbleSort = (data) => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        const currentRate = parseFloat(data[j][2]);
        const nextRate = parseFloat(data[j + 1][2]);
        const currentBank = data[j][1].toLowerCase();
        const nextBank = data[j + 1][1].toLowerCase();
  
        // Compare interest rates first
        if (currentRate > nextRate || (currentRate === nextRate && currentBank > nextBank)) {
          // Swap the elements
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    return data;
  };
  

  // useEffect hook to fetch data based on card name
  useEffect(() => {
    if (selectedCard) {
      const loadData = async () => {
        setLoading(true); // Set loading state to true
        try {
          const result = await generateTableData(selectedCard);
          setRecData(result);
          setLoading(false); // Set loading state to false
        } catch (error) {
          setError(error);
          setLoading(false); // Set loading state to false
        }
      };
      loadData();
    }
  }, [selectedCard]);

  // useEffect hook to handle sorting after data is fetched
  useEffect(() => {
    if (recData && !loading) {
      // Sort the table data using bubble sort
      const bubbleSortedData = bubbleSort([...recData]);
      setTableData(bubbleSortedData);
      setSortingInProgress(false);
    }
  }, [recData, loading]);

  // Function to handle card click
  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
    setShowTable(true);
    setSortingInProgress(true);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section id="service" className="service py-2 pb-5">
        <div className="container">
          <div className="heading text-center pt-5">
            <h2 className="fw-bolder pb-4 text-light">Our Service</h2>
          </div>
          <div className="row mx-auto justify-content-center align-items-center text-center">
            <div className="card col-lg-3 col-md-3 col-12 m-2" onClick={() => handleCardClick('Education Loan')}>
              <img className="img-fluid w-75" src="assets/images/EducationLoan.png" alt="Service" />
              <h5 className="fw-bold pt-4">Education Loan</h5>
              <p>Example data for Education Loan card</p>
            </div>
            <div className="card col-lg-3 col-md-3 col-12 m-2" onClick={() => handleCardClick('Personal Loan')}>
              <img className="img-fluid w-75" src="assets/images/PersonalLoan.png" alt="Service" />
              <h5 className="fw-bold pt-4">Personal Loan</h5>
              <p>Example data for Personal Loan card</p>
            </div>
            <div className="card col-lg-3 col-md-3 col-12 m-2" onClick={() => handleCardClick('Home Loan')}>
              <img className="img-fluid w-75" src="assets/images/HomeLoan.png" alt="Service" />
              <h5 className="fw-bold pt-4">Home Loan</h5>
              <p>Example data for Home Loan card</p>
            </div>
            <div className="card col-lg-3 col-md-3 col-12 m-2" onClick={() => handleCardClick('Vehicle Loan')}>
              <img className="img-fluid w-75" src="assets/images/VehicleLoan.png" alt="Service" />
              <h5 className="fw-bold pt-4">Vehicle Loan</h5>
              <p>Example data for Vehicle Loan card</p>
            </div>
            <div className="card col-lg-3 col-md-3 col-12 m-2" onClick={() => handleCardClick('Gold Loan')}>
              <img className="img-fluid w-75" src="assets/images/GoldLoan.png" alt="Service" />
              <h5 className="fw-bold pt-4">Gold Loan</h5>
              <p>Example data for Gold Loan card</p>
            </div>
          </div>
        </div>
      </section>
      {showTable && <Table data={tableData} />}
      {sortingInProgress && (
        <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
          role="progressbar"
          style={{ width: '50%' }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Bubble Sort In Progress...
        </div>
      </div>
      )}
    </>
  );
};

export default Service;
