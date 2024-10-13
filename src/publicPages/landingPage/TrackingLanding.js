import React from 'react';
import { Link } from 'react-router-dom';
import './TrackingLanding.css'; // Keeping this for background image only

function LandingTracking() {
  return (
    <div className="TrackingLanding d-flex justify-content-center align-items-center text-center">
      <div className="Tracking-Number-Landing">
        <div className="title-section mb-3">
          <h1 className="text-white">Have Tracking Number?</h1>
        </div>
        <Link to="/tracking" className="btn btn-danger btn-lg">
          Track here
        </Link>
      </div>
    </div>
  );
}

export default LandingTracking;
