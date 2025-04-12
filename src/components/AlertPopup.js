import React from 'react';

const AlertPopup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="alert-popup">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AlertPopup;
