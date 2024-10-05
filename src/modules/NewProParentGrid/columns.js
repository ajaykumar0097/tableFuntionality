import React from 'react';

const useColumns = (updateData) => {
  return React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'State',
        accessor: 'state',
        Cell: ({ row }) => (
          <select
            value={row.original.state}
            onChange={(e) => updateData(row.index, 'state', e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Texas">Texas</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            {/* Add more options as needed */}
          </select>
        ),
      },
    ],
    [updateData]
  );
};

export default useColumns;
