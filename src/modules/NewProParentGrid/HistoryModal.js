import React, { useState } from 'react';

const HistoryModal = ({ rowData, onClose, updateHistoryData }) => {
  const [localHistory, setLocalHistory] = useState(rowData.historyData);

  const handleInputChange = (index, field, value) => {
    const updatedHistory = [...localHistory];
    updatedHistory[index][field] = value;
    setLocalHistory(updatedHistory);
  };

  const handleOk = () => {
    localHistory.forEach((history, historyIndex) => {
      Object.keys(history).forEach((field) => {
        updateHistoryData(rowData.id - 1, historyIndex, field, history[field]); // Update original data
      });
    });
    onClose();
  };

  return (
    <div className="modal">
      <h4>History for {rowData.name}</h4>
      {localHistory.map((history, index) => (
        <div key={index} className="history-row">
          <input
            type="date"
            value={history.date}
            onChange={(e) => handleInputChange(index, 'date', e.target.value)}
          />
          <input
            type="text"
            value={history.value}
            onChange={(e) => handleInputChange(index, 'value', e.target.value)}
          />
          <input
            type="text"
            value={history.remarks}
            onChange={(e) => handleInputChange(index, 'remarks', e.target.value)}
          />
        </div>
      ))}
      <div className="modal-buttons">
        <button onClick={handleOk}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default HistoryModal;
