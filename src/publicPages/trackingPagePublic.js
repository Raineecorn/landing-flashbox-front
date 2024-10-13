import React, { useState } from 'react';
import SearchBar from '../components/searchbar/SearchBar.js';
import TrackingStatus from '../components/status/TrackingStatus.js';
import './trackingPagePublic.css';


const Home = () => {
  const [trackingNumber, setTrackingNumber] = useState(null);

  const handleSearch = (trackingNumber) => {
    setTrackingNumber(trackingNumber);
  };

  return (
    <div className="home">
      <header className="home-header">

      </header>
      <SearchBar onSearch={handleSearch} />
      {trackingNumber && <TrackingStatus trackingNumber={trackingNumber} />}

    </div>


  );
};



export default Home;
