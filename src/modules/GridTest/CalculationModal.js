// src/modules/GridTest/CalculationModal.js
import React, { useMemo } from 'react';
import TableComponent from './Grid';

const CalculationModal = ({ isVisible, close, modalData }) => {
  if (!isVisible) return null;

  // Always call useMemo at the top level of the component
  const columns = [
    { Header: 'Role', accessor: 'role' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Comment', accessor: 'comment' },
  ];

  // Use modalData safely here
  const data = modalData ? [modalData] : []; // Ensure data is an array for the table

  return (
    <div className="modal">
      <button onClick={close}>Close</button>
      <h2>Modal Data</h2>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default CalculationModal;
