import React from 'react';
import mockStateCityData from './mockStateCityData';

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
            value={row.original.state || ''}
            onChange={(e) => {
              const state = e.target.value;
              updateData(row.index, 'state', state); // Update state in data
              updateData(row.index, 'city', ''); // Reset city when state changes
            }}
          >
            <option value="" disabled>
              Select State
            </option>
            {mockStateCityData.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        ),
      },
      {
        Header: 'City',
        accessor: 'city',
        Cell: ({ row }) => {
          const cities = mockStateCityData.cities[row.original.state] || [];
          return (
            <select
              value={row.original.city || ''}
              onChange={(e) => updateData(row.index, 'city', e.target.value)}
              disabled={!row.original.state} // Disable if no state selected
            >
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          );
        },
      },
    ],
    [updateData]
  );
};

export default useColumns;
