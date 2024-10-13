import React from 'react';
import TrackingPage from './trackingPagePublic.js';
import ContactUsLanding from './landingPage/contact-landing.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TrackingPagePublic = () => {

    return(
        <div className="App">
        <TransitionGroup>
          <CSSTransition key="tracking" timeout={500} classNames="fade">
            <div className='TrackingPage'>
              <TrackingPage />
            </div>
          </CSSTransition>
          <CSSTransition key="ContactUS" timeout={500} classNames="fade">
            <div className="ContactUsLanding"> <ContactUsLanding /></div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
}; 

export default TrackingPagePublic; 