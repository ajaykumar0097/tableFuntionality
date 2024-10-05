import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CommonTable from './CommonTable';
import useColumns from './columns';
import mockData from './mockData';
import useContextMenu from './useContextMenu';
import HistoryModal from './HistoryModal';
import './styles.css';

const Child1 = () => {
  const columns = useColumns();
  const [tableData, setTableData] = useState(mockData);
  const { setValue, getValues } = useFormContext();
  const { menuVisible, menuPosition, handleContextMenu, hideContextMenu, menuRow } = useContextMenu();

  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [historyRowData, setHistoryRowData] = useState(null);

  const updateData = (rowIndex, columnId, value) => {
    setValue(`tableData[${rowIndex}].${columnId}`, value);
    setTableData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, [columnId]: value };
        }
        return row;
      })
    );
  };

  const updateHistoryData = (rowIndex, historyIndex, field, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex].historyData[historyIndex][field] = value;
    setTableData(updatedTableData);

    // Update value in the useForm hook
    setValue(`tableData[${rowIndex}].historyData[${historyIndex}].${field}`, value);
  };

  tableData.forEach((row, rowIndex) => {
    Object.keys(row).forEach((columnId) => {
      setValue(`tableData[${rowIndex}].${columnId}`, row[columnId]);
    });
  });

  const handleHistoryClick = (row) => {
    setHistoryRowData(row);
    setHistoryModalVisible(true);
    hideContextMenu(); // Hide context menu when opening modal
  };

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
          <li onClick={() => handleHistoryClick(menuRow)}>History</li>
          <li onClick={() => alert(`Email for ${menuRow.name}`)}>Email</li>
        </ul>
      )}

      {historyModalVisible && (
        <HistoryModal
          rowData={historyRowData}
          onClose={() => setHistoryModalVisible(false)}
          updateHistoryData={updateHistoryData}
        />
      )}
    </div>
  );
};

export default Child1;
