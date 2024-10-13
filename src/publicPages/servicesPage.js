import React from 'react';
import ServicesLanding from './landingPage/services-landing.js';
import TrackingLanding from './landingPage/TrackingLanding.js';
import Contacts from './landingPage/contact-landing.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ServicesPage = () => {
  
    return (
      <div className="App">
        <TransitionGroup>
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
  
  export default ServicesPage;