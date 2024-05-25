import React from 'react';
import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
//       <div className="container-fluid">
//         <a className="navbar-brand" >VirtualbanK</a>
//         {/* <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link" href="#about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#discover">Discover</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#service">Service</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#signup">Sign up</a>
//             </li>
//           </ul>
//           <button className="btn btn-success text-dark" type="submit">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">VirtualbanK</div>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FinancialInfo">Financial Info</a>
              </li>
            </ul>
            <button className="btn btn-success text-dark" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;