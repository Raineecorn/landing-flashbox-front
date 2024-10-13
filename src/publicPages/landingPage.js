import React, { useRef } from 'react';
import './landingPage.css';
import HeroSection from './landingPage/hero-landing.js';
import AboutSection from './landingPage/aboutPage.js';
import ServicesLanding from './landingPage/services-landing.js';
import TrackingLanding from './landingPage/TrackingLanding.js';
import Contacts from './landingPage/contact-landing.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LandingPage = () => {
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key="hero" timeout={500} classNames="fade">
          <div className='HeroSection'>
            <HeroSection onScrollToAbout={handleScrollToAbout} />
          </div>
        </CSSTransition>
        <CSSTransition key="about" timeout={500} classNames="fade">
          <div ref={aboutRef} className='AboutSection'>
            <AboutSection />
          </div>
        </CSSTransition>
        <CSSTransition key="services" timeout={500} classNames="fade">
          <div className='ServicesLanding'><ServicesLanding /></div>
        </CSSTransition>
        <CSSTransition key="tracking" timeout={500} classNames="fade">
          <div className='TrackingLanding'><TrackingLanding /></div>
        </CSSTransition>
        <CSSTransition key="contacts" timeout={500} classNames="fade">
          <div className='Contacts'><Contacts /></div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default LandingPage;
