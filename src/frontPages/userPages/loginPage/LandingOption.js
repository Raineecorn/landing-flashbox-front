import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OptionCards = ({ onClose }) => {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1050,
  };

  const modalDialogStyle = {
    maxWidth: '600px',
    width: '100%',
  };

  return (
    <div style={modalOverlayStyle}>
      <div className="modal-dialog modal-dialog-centered" style={modalDialogStyle}>
        <div className="modal-content">
          <div className="modal-header">
          </div>
          <div className="modal-body">
            <div className="container d-flex justify-content-center mt-3">
              <div className="row">
                {/* Option 1 Card */}
                <div className="col-md-6 d-flex align-items-stretch mb-4">
                  <div className="card text-center w-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">Track Your Parcel</h5>
                      <p className="card-text">Enter details to track your package.</p>
                      <Link className="btn btn-primary mt-3" to="/tracking" onClick={onClose}>
                        Track
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Option 2 Card */}
                <div className="col-md-6 d-flex align-items-stretch mb-4">
                  <div className="card text-center w-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">View Parcel Details</h5>
                      <p className="card-text">Log in to access full tracking details.</p>
                      <Link className="btn btn-primary mt-3" to="/login" onClick={onClose}>
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCards;
