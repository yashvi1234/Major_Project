import React, { useState } from 'react';
import Table from './Table'; 
import './Service.css';

const Service = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [bubbleSortTime, setBubbleSortTime] = useState(0);
  const [mergeSortTime, setMergeSortTime] = useState(0);
  const [sortingInProgress, setSortingInProgress] = useState(false);

  // Function to generate table data based on the card name
  const generateTableData = (cardName) => {
    //  data for demo
    let data = [];
    if (cardName === 'Education Loan') {
      data = [
        ['Bank A', 'Interest Rate 10', 'Details 1', 'More Details 1'],
        ['Bank B', 'Interest Rate 1', 'Details 2', 'More Details 2'],
        ['Bank C', 'Interest Rate 5', 'Details 3', 'More Details 3'],
        ['Bank D', 'Interest Rate 2', 'Details 4', 'More Details 4'],
        ['Bank E', 'Interest Rate 8', 'Details 5', 'More Details 5'],
        ['Bank F', 'Interest Rate 3', 'Details 6', 'More Details 6'],
        ['Bank G', 'Interest Rate 7', 'Details 7', 'More Details 7'],
        ['Bank H', 'Interest Rate 11', 'Details 8', 'More Details 8'],
        ['Bank I', 'Interest Rate 10', 'Details 9', 'More Details 9'],
        ['Bank J', 'Interest Rate 9', 'Details 10', 'More Details 10'],
        ['Bank K', 'Interest Rate 12', 'Details 11', 'More Details 11'],
        ['Bank L', 'Interest Rate 4', 'Details 12', 'More Details 12']
      ];
      
    } else if (cardName === 'Personal Loan') {
      data = [
        ['Bank D', 'Interest Rate 9', 'Details 1', 'More Details 1'],
        ['Bank E', 'Interest Rate 4', 'Details 2', 'More Details 2'],
        ['Bank F', 'Interest Rate 3', 'Details 3', 'More Details 3'],
        ['Bank G', 'Interest Rate 9', 'Details 7', 'More Details 7'],
        ['Bank H', 'Interest Rate 7', 'Details 8', 'More Details 8'],
        ['Bank I', 'Interest Rate 2', 'Details 9', 'More Details 9'],
        ['Bank J', 'Interest Rate 11', 'Details 10', 'More Details 10'],
        ['Bank K', 'Interest Rate 12', 'Details 11', 'More Details 11'],
        ['Bank L', 'Interest Rate 10', 'Details 12', 'More Details 12']
      ];
    }
    else if (cardName === 'Home Loan') {
                  data = [
                    // Data for Home Loan card
                  ];
                } else if (cardName === 'Vehicle Loan') {
                  data = [
                    // Data for Vehicle Loan card
                  ];
                } else if (cardName === 'Gold Loan') {
                  data = [
                    // Data for Gold Loan card
                  ];
                }
    return data;
  };

  // Bubble sort algo
  const bubbleSort = (data) => {
    let startTime = performance.now(); // Start timer
    //Logic
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (parseInt(data[j][1].split(' ')[2]) > parseInt(data[j + 1][1].split(' ')[2])) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    let endTime = performance.now(); // End timer
    setBubbleSortTime(endTime - startTime); // Update bubble sort time
    return data;
  };

  // Merge sort algo
  const mergeSort = (data) => {
    let startTime = performance.now(); // Start timer
    //  logic 
    let endTime = performance.now(); // End timer
    setMergeSortTime(endTime - startTime); // Update merge sort time
    return data;
  };

  // Function to handle card click
  const handleCardClick = async (cardName) => {
    setSelectedCard(cardName); 
    setShowTable(true); 
    setSortingInProgress(true); 

    // Generate table data for the clicked card
    let data = generateTableData(cardName);
    
    // Sort the table data using bubble sort
    let bubbleSortedData = await bubbleSort([...data]);
    
    // Sort the table data using merge sort
    let mergeSortedData = await mergeSort([...data]);
    
    setTableData(bubbleSortedData); 
     setTableData(mergeSortedData); 
    
    setSortingInProgress(false);
  };

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
      {/* Display time taken by both  sorting algo */}
     
      <div className="sorting-time">
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'blue',marginLeft:'80px' }}>Bubble Sort Time: {bubbleSortTime} milliseconds</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'green',marginLeft:'80px' }}>Merge Sort Time: {mergeSortTime} milliseconds</p>
      </div>
    </>
  );
};

export default Service;

