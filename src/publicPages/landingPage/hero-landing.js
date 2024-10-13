import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import FlashBox from '../../images/FlashBox-Hero.png';
import HeroBackground1 from '../../components/background/hero-background1.png';
import HeroBackground2 from '../../components/background/hero-background2.png';
import HeroBackground3 from '../../components/background/hero-background3.png';

function HeroSection({ onScrollToAbout }) {
  const slides = [
    { image: HeroBackground1, alt: 'Slide 1' },
    { image: HeroBackground2, alt: 'Slide 2', opacity: 0.55 },
    { image: HeroBackground3, alt: 'Slide 3' },
  ];

  return (
    <Carousel controls={false} indicators={false} interval={3000} fade={true}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90vh',
              color: '#052c4c',
            }}
          >
            <div className="container">
              {/* Logo section */}
              <div className="row justify-content-center">
                <img
                  src={FlashBox}
                  alt="FlashBox Logo"
                  className="img-fluid"
                  style={{
                    maxWidth: '50rem',  // Adjust the max-width for smaller screens
                    height: 'auto',
                  }}
                />
              </div>

              {/* Button section */}
              <div className="row mt-2">
                <div className="col-12 col-md-6 text-md-left text-center"> 
                  {/* Align left on medium+ screens, center on small screens */}
                  <button
                    className="btn btn-danger"
                    style={{
                      width: '150px',
                      fontSize: '20px',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                    onClick={onScrollToAbout}
                  >
                    Explore now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

// Define PropTypes for validation
HeroSection.propTypes = {
  onScrollToAbout: PropTypes.func.isRequired, // Ensure onScrollToAbout is a function and required
};

export default HeroSection;
