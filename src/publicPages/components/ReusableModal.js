import React from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';

const ReusableModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {children}
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ReusableModal;
