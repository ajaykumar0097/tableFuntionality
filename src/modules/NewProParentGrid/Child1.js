import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CommonTable from './CommonTable';
import useColumns from './columns';
import mockData from './mockData';
import useContextMenu from './useContextMenu';
import './styles.css'


const Child1 = () => {
  const columns = useColumns();
  const [tableData, setTableData] = useState(mockData);
  const { setValue, getValues } = useFormContext();
  const { menuVisible, menuPosition, handleContextMenu, hideContextMenu, menuRow } = useContextMenu();

  const updateData = (rowIndex, columnId, value) => {
    // Set value in useForm hook for form submission
    setValue(`tableData[${rowIndex}].${columnId}`, value);

    setTableData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, [columnId]: value };
        }
        return row;
      })
    );
  };

  // Register initial table data for form submission
  tableData.forEach((row, rowIndex) => {
    Object.keys(row).forEach((columnId) => {
      setValue(`tableData[${rowIndex}].${columnId}`, row[columnId]);
    });
  });

  return (
    <div>
      <h3>Child 1 Table</h3>
      <CommonTable
        data={tableData}
        columns={columns}
        updateData={updateData}
        contextMenu={handleContextMenu}
      />

      {menuVisible && (
        <ul
          className="context-menu"
          style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
        >
          <li onClick={() => alert(`Summary for ${menuRow.name}`)}>Summary</li>
          <li onClick={() => alert(`History for ${menuRow.name}`)}>History</li>
          <li onClick={() => alert(`Email for ${menuRow.name}`)}>Email</li>
        </ul>
      )}
    </div>
  );
};

export default Child1;
