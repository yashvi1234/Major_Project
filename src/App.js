// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Import other components
import About from './components/About';
import Discover from './components/Discover';
import Service from './components/Service';
import SignUp from './components/SignUp';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <SignUp/>
      <Footer/>
      {/* Other components */}
    </div>
  );
};

export default App;