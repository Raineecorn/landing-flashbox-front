import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import deliveryBoy from '../../components/background/delivery-background.png';
import ReusableModal from '../components/ReusableModal';  // Adjust the import path if needed

function AboutSection() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Button styles
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div id="about-section" className="container py-5" style={{ backgroundColor: 'white' }}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={deliveryBoy} alt="delivery-image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Flashbox Cargo is your trusted partner in transportation services, dedicated to delivering packages with speed and care. Our mission is to bring joy to our customers by ensuring their packages arrive on time, every time.
          </p>
          <p>
            We specialize in door-to-door delivery services from Thailand to the Philippines, making international shipping seamless and hassle-free. Whether it's a gift for a loved one or essential business supplies, we've got you covered.
          </p>
          <button
            className="btn btn-primary"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            onClick={handleModalOpen}
          >
            INQUIRE NOW
          </button>

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
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
