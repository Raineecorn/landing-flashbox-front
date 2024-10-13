import React from 'react';
import ContactUs from '../../publicPages/landingPage/contact-landing';
import contactFooterBg from '../background/contactFooterBg.png'; 

function ContactUsFooter() {
  return (
    <div className="text-white">

    <ContactUs />
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${contactFooterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="col-5 text-black">
          <strong>Flashbox Cargo</strong><br />
          No.1/1 Warehouse No. 217, Nimitmai 42 Aelly,<br />
          Klongsamwatawanook Sub-district,<br />
          Klongsamwa District, Bangkok 10520<br />
          Tel: 09 2971 8868, 0910104929, 0645532226<br />
          Email: flashcargo@gmail.com
        </p>
      </div>

     
    </div>
  );
}

export default ContactUsFooter;
