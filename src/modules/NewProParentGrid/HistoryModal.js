// HistoryModal.js
import React, { useState } from 'react';
import './styles.css';

const HistoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  if (!isOpen) return null; // Don't render if not open

  const handleSubmit = () => {
    onSubmit({ input1, input2 });
    onClose(); // Close modal after submit
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>History Information</h2>
        <label>
          Input 1:
          <input 
            type="text" 
            value={input1} 
            onChange={(e) => setInput1(e.target.value)} 
          />
        </label>
        <label>
          Input 2:
          <input 
            type="text" 
            value={input2} 
            onChange={(e) => setInput2(e.target.value)} 
          />
        </label>
        <div className="modal-buttons">
          <button onClick={handleSubmit}>OK</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
