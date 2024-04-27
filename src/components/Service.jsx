// import React from 'react';
// import './Service.css';


// const Service = () => {
//   return (
//     <section id="service" className="service py-2 pb-5">
//       <div className="col mx-auto align-items-center my-2">
//         <div className="heading text-center pt-5">
//           <h2 className="fw-bolder pb-4 text-light">Our Service</h2>
//         </div>
//         <div className="row mx-auto justify-content-center align-items-center text-center container">
//           <div className="card col-lg-3 col-md-3 col-12 m-2">
//             <img className="img-fluid w-75" src="assets/images/1.svg" alt="Service" />
//             <h5 className="fw-bold pt-4">Reduce Expenses</h5>
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Aspernatur, at exercitationem beatae hic doloremque ea.
//             </p>
//           </div>
//           <div className="card col-lg-3 col-md-3 col-12 m-2">
//             <img className="img-fluid w-75" src="assets/images/2.png" alt="Service" />
//             <h5 className="fw-bold pt-4">Virtual Offices</h5>
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Aspernatur, at exercitationem beatae hic doloremque ea.
//             </p>
//           </div>
//           <div className="card col-lg-3 col-md-3 col-12 m-2">
//             <img className="img-fluid w-75" src="assets/images/3.png" alt="Service" />
//             <h5 className="fw-bold pt-4">Premium Benefits</h5>
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Aspernatur, at exercitationem beatae hic doloremque ea.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <section id="service" className="service py-2 pb-5">
      <div className="container">
        <div className="heading text-center pt-5">
          <h2 className="fw-bolder pb-4 text-light">Our Service</h2>
        </div>
        <div className="row mx-auto justify-content-center align-items-center text-center">
          <div className="card col-lg-3 col-md-3 col-12 m-2">
            <img className="img-fluid w-75" src="assets/images/1.svg" alt="Service" />
            <h5 className="fw-bold pt-4">Reduce Expenses</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, at exercitationem beatae hic doloremque ea.</p>
          </div>
          <div className="card col-lg-3 col-md-3 col-12 m-2">
            <img className="img-fluid w-75" src="assets/images/2.png" alt="Service" />
            <h5 className="fw-bold pt-4">Virtual Offices</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, at exercitationem beatae hic doloremque ea.</p>
          </div>
          <div className="card col-lg-3 col-md-3 col-12 m-2">
            <img className="img-fluid w-75" src="assets/images/3.png" alt="Service" />
            <h5 className="fw-bold pt-4">Premium Benefits</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, at exercitationem beatae hic doloremque ea.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
