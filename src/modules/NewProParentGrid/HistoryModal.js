import React, { useState } from 'react';
import CommonTable from './CommonTable'; // Using the common table component
import useHistoryModalColumns from './historyModalColumns';

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

  const columns = useHistoryModalColumns(handleInputChange); // Use the columns for modal

  return (
    <div className="modal">
      <h4>History for {rowData.name}</h4>
      <CommonTable data={localHistory} columns={columns} updateData={handleInputChange} />
      <div className="modal-buttons">
        <button onClick={handleOk}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default HistoryModal;
