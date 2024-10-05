import React from 'react';
import { useTable } from 'react-table';
import './styles.css'

const CommonTable = ({ data, columns, updateData, contextMenu }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const handleContextMenu = (event, row) => {
    event.preventDefault();
    contextMenu(event, row);
  };

  return (
    <table {...getTableProps()} className="common-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onContextMenu={(e) => handleContextMenu(e, row.original)}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  contentEditable={cell.column.id !== 'email'}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => updateData(i, cell.column.id, e.target.textContent)}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CommonTable;
