import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Modal, Container } from 'react-bootstrap';

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

// Define PropTypes
ReusableModal.propTypes = {
  show: PropTypes.bool.isRequired, // Ensure 'show' is a boolean and required
  handleClose: PropTypes.func.isRequired, // Ensure 'handleClose' is a function and required
  title: PropTypes.string.isRequired, // Ensure 'title' is a string and required
  children: PropTypes.node.isRequired, // Ensure 'children' is a valid React node and required
};

export default ReusableModal;
