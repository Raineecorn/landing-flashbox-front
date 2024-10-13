import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import ReusableModal from '../components/ReusableModal.js';  // Import the new modal

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const contactContainerStyle = {
    backgroundColor: '#052c4c',
    color: 'whitesmoke',
    padding: '50px 0',
  };

  const textboxContainerStyle = {
    width: '60%',
    backgroundColor: '#38373a',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#ee2222',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ee2222d5',
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      {/* Main Contact Us Section */}
      <div style={contactContainerStyle}>
        <div className="container d-flex justify-content-center">
          <div style={textboxContainerStyle}>
            <div className="text-inside text-center">
              <h2 className="mb-3 text-white">Need a quotation?</h2>
              <p>
                Need pricing details? Reach out to us for a personalized quotation. We're here to help you get the information you need.
              </p>
            </div>
            <div className="button-options d-flex justify-content-center mt-4">
              <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onClick={handleModalOpen}
              >
                Reach Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Modal */}
      <ReusableModal
        show={showModal}
        handleClose={handleModalClose}
        title="Contact Us"
      >
        {/* Modal form goes here */}
        <Form>
          <Row>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="from_name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Recipient's Name</Form.Label>
                <Form.Control type="text" name="to_name" required />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="reply_to" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Pick Up</Form.Label>
                <Form.Control type="date" name="date_of_pickup" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="tel" name="contact_number" required />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Sender's Location</Form.Label>
                <Form.Control type="text" name="location" required />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Receiver's Location</Form.Label>
                <Form.Control type="text" name="location" required />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" required />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" variant="primary" className="mt-3">
            Send Message
          </Button>
        </Form>
      </ReusableModal>
    </>
  );
};

export default ContactUs;
