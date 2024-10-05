import React from 'react';

const useHistoryModalColumns = (handleInputChange) => {
  return React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ row, value }) => (
          <input
            type="date"
            value={value}
            onChange={(e) => handleInputChange(row.index, 'date', e.target.value)}
          />
        ),
      },
      {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ row, value }) => (
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(row.index, 'value', e.target.value)}
          />
        ),
      },
      {
        Header: 'Remarks',
        accessor: 'remarks',
        Cell: ({ row, value }) => (
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(row.index, 'remarks', e.target.value)}
          />
        ),
      },
    ],
    [handleInputChange]
  );
};

export default useHistoryModalColumns;
