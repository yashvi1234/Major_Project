import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Bank</th>
            <th>Interest Rate</th>
            <th>Details</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td><a href={row[3]} target="_blank" rel="noopener noreferrer">Know More</a></td>
              <td><img src={process.env.PUBLIC_URL + row[4]} alt={row[1]} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
