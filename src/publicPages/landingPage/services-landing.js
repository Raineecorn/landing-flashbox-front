import React from 'react';
import ServiceCard1 from '../../images/services-card/services-card-1.svg';
import ServiceCard2 from '../../images/services-card/services-card-2.svg';
import ServiceCard3 from '../../images/services-card/services-card-3.svg';
import './services-landing.css'; // Keeping this for hover effects

function ServicesLanding() {
  return (
    <div id="services-Section" className="text-center py-5" style={{ backgroundColor: '#052c4c' }}>
      <div className="container">
        <h1 className="text-white mb-5">SERVICES</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card custom-card shadow-sm">
              <img src={ServiceCard1} alt="international-shipping" className="card-img-top img-fluid rounded " />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card shadow-sm">
              <img src={ServiceCard2} alt="padala-shipping" className="card-img-top img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card shadow-sm">
              <img src={ServiceCard3} alt="air-padala" className="card-img-top img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesLanding;
