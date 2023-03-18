import React from 'react';
import { Modal, Button, Typography } from '@mui/material';
import './ModalComponent.css';

const ModalComponent = ({ open, onClose, title, body }) => {
    return (
      <Modal open={open} onClose={onClose}>
        <div className="modal-container">
          <Typography variant="h5">{title}</Typography>
          <div className="modal-body">{body}</div>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
      </Modal>
    );
  };

export default ModalComponent;
