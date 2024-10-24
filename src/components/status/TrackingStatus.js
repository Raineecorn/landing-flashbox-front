import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import ordered from '../../images/statusTrack/ordered.png';
import inTransit from '../../images/statusTrack/in_transit.png';
import delivered from '../../images/statusTrack/delivered.png';
import arrived from '../../images/statusTrack/arrivedAt.png';
import notFound from '../../images/statusTrack/notFound.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://crqpfmcvudkvwsvyenkv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNycXBmbWN2dWRrdndzdnllbmt2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODg1OTg5NiwiZXhwIjoyMDQ0NDM1ODk2fQ.HQxNGutNq1P9b9eXZxLYHw4LGXjvNe2XI60gMAki4Es';
const supabase = createClient(supabaseUrl, supabaseAnonKey);


const TrackingStatus = ({ trackingNumber }) => {
  const [trackingStatus, setTrackingStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackingStatus = async () => {
      setLoading(true);
      try {
        // Fetch tracking data from Supabase based on the tracking_id (trackingNumber)
        const { data, error } = await supabase
          .from('trackingfbt_audit') // Your Supabase table name
          .select('audit_id, tracking_id, date_loaded, remarks') // Select columns from the table
          .eq('tracking_id', trackingNumber); // Filter by tracking ID (trackingNumber)

          
        if (error) {
          throw new Error(error.message);
        }

      //  console.log('Fetched Data:', data);
         
        const statuses = data.map(item => ({
          ...item,
          image: getImageForStatus(item.remarks)
        }));

        setTrackingStatus(statuses);
      } catch (error) {
        console.error('Error fetching tracking status:', error);
        setTrackingStatus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingStatus();
  }, [trackingNumber]);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString(); // This will return just the date, e.g., "9/11/2024"
  };  

  return (
    <div className="container mt-5 pt-5 bg-white rounded">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
        {trackingStatus.length > 0 ? (
          trackingStatus.map((status, index) => (
            <div key={index} className="col-md-4 mb-3"> {/* Adjusted column layout */}
              <div className="d-flex flex-column align-items-center">
                {/* Image */}
                <img
                  src={status.image}
                  alt={status.remarks}
                  className="img-fluid mb-2"
                  style={{ width: '50px', height: '50px' }}
                />
                {/* Remarks */}
                <p className="text-center text-dark">
                  {status.remarks} - {formatTimestamp(status.date_loaded)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No tracking information available.</p>
        )}
      </div>      
      )}
    </div>
  );
};

// Map status remarks to images
const getImageForStatus = (remarks) => {
  const imageMap = {
    'Bangkok Warehouse': ordered,
    'Loaded': inTransit,
    'Sailing': inTransit,
    'Clearance': inTransit,
    'delivered': delivered,
    'arrived': arrived,
    'Manila Warehouse': arrived, 
    'out for delivery': delivered,
    'not found': notFound,
    'no tracking': notFound,
  };

  for (let key in imageMap) {
    if (remarks.toLowerCase().includes(key.toLowerCase())) {
      return imageMap[key];
    }
  }
  return notFound;  // Default image if no match is found
};

// Define PropTypes for validation
TrackingStatus.propTypes = {
  trackingNumber: PropTypes.string.isRequired,  // Ensure trackingNumber is a string and required
};

export default TrackingStatus;
