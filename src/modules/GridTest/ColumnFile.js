import React from 'react';
import { useMemo } from 'react';
import { useController } from 'react-hook-form';

export const useChild2Columns = (control) => {
  const columns = useMemo(() => [
    {
      Header: 'Role',
      accessor: 'role',
      Cell: ({ row }) => {
        const {
          field: { onChange, value },
        } = useController({
          name: `rows[${row.index}].role`,
          control,
        });

        return <input type="text" value={value} onChange={onChange} />;
      },
    },
    {
      Header: 'Host',
      accessor: 'host',
      Cell: ({ row, hostOptions }) => {
        const {
          field: { onChange, value },
        } = useController({
          name: `rows[${row.index}].host`,
          control,
        });

        return (
          <select value={value} onChange={onChange}>
            <option value="">Select Host</option>
            {hostOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      },
    },
    {
      Header: 'Comment',
      accessor: 'comment',
      Cell: ({ row }) => {
        const {
          field: { onChange, value },
        } = useController({
          name: `rows[${row.index}].comment`,
          control,
        });

        return <input type="text" value={value} onChange={onChange} />;
      },
    },
  ], [control]);

  return { columns };
};
