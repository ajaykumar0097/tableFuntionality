import React from 'react';
import { useTable } from 'react-table';

const TableComponent = ({ columns, data, hostOptions, onInputChange }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => {
                const columnId = cell.column.id;
                return (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {columnId === 'host' ? (
                      <select
                        value={data[rowIndex].host}
                        onChange={e => onInputChange(rowIndex, 'host', e.target.value)}
                      >
                        <option value="">Select Host</option>
                        {hostOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={columnId === 'role' ? 'text' : 'text'}
                        value={data[rowIndex][columnId]}
                        onChange={e => onInputChange(rowIndex, columnId, e.target.value)}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
