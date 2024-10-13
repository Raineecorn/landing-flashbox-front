import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const SearchBar = ({ onSearch }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(trackingNumber);
  };

  const searchBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    padding: '15px',
    fontSize: '18px',
    width: '80%',
    border: '2px solid #ccc',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    fontSize: '18px',
    padding: '15px',
    borderLeft: 'none',
    borderRadius: '0 5px 5px 0px',
    border: '2px solid #FF3131',
    width: '20%',
    backgroundColor: '#FF3131',
    color: '#fff',
    cursor: 'pointer',
    boxSizing: 'border-box'
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} style={searchBarStyle}>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter tracking number"
        className="form-control" // Bootstrap form control class for consistent styling
        style={inputStyle}
      />
      <button type="submit" className="btn" style={buttonStyle}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
