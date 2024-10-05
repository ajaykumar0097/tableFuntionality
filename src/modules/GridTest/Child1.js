// src/Child1.jsx
import React from 'react';
import TableComponent from './Grid';
// import { columns } from '.';
import { mockData } from './mockData';
import useContextMenu from './useContextMenu';
import ModalScreen from './CalculationModal';
import { columns } from './Column';
import './style.css'

const Child1 = () => {
  const { isVisible, handleContextMenu, closeContextMenu, modalData } = useContextMenu();

  const onRowContextMenu = (event, rowData) => {
    event.preventDefault(); // Prevent the default context menu
    handleContextMenu(event, rowData?.modalData); // Pass the modal data for the row
  };

  return (
    <>
      <TableComponent
        columns={columns}
        data={mockData}
        onRowContextMenu={onRowContextMenu} // Pass the context menu function as a prop
      />
      <ModalScreen isVisible={isVisible} close={closeContextMenu} modalData={modalData} />
    </>
  );
};

export default Child1;
