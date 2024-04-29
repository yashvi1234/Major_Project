// import React from 'react';
// import './Table.css';

// const Table = ({ data }) => {
//   // Render the table with 4 columns and 12 rows
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Column 1</th>
//           <th>Column 2</th>
//           <th>Column 3</th>
//           <th>Column 4</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             {row.map((cell, cellIndex) => (
//               <td key={cellIndex}>{cell}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

import React from 'react';

const Table = ({ data }) => {
  // CSS styles for the table
  const tableStyle = {
    width: '90%',
    borderCollapse: 'collapse',
    marginTop: '20px', 
    marginLeft:'70px'
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
  };

  return (
    <div className="table-container">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Column 1</th>
            <th style={thTdStyle}>Column 2</th>
            <th style={thTdStyle}>Column 3</th>
            <th style={thTdStyle}>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={index === 11 ? { borderBottom: '2px solid #ccc' } : {}}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={thTdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
