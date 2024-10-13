import React, { useRef } from 'react';
import AboutSection from './landingPage/aboutPage.js';
import ServicesLanding from './landingPage/services-landing.js';
import TrackingLanding from './landingPage/TrackingLanding.js';
import Contacts from './landingPage/contact-landing.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AboutPage = () => {
  const aboutRef = useRef(null);

    return (
      <div className="App" style={{ backgroundColor: 'white' }}>
        <TransitionGroup>
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
  
  export default AboutPage;