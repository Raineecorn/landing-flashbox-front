import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavBar.js';

import About from './publicPages/aboutPage.js';
import Services from './publicPages/servicesPage.js';
import Footer from './components/Footer/Footer.js';
import LandingPage from './publicPages/landingPage.js';
import TrackingPage from './publicPages/tracking-page.js';
import ContactFormPage from './publicPages/contact-page.js';
import './App.css';
import PrivacyPolicy from './components/Footer/Privacy.js';
import TermsOfService from './components/Footer/Terms.js';
import ContactUsFooter from './components/Footer/ContactUs-footer.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme/colorTheme.js';
import LandingUserPage from './frontPages/userPages/loginPage/landing-userPage.js';
import OptionCards from './frontPages/userPages/loginPage/LandingOption.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={< LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/FormsContact" element={<ContactFormPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUsFooter />} />
            <Route path="/login" element={< LandingUserPage/> }/>
            <Route path="/login-tracking" element={<OptionCards/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
