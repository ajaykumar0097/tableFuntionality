import React, { useEffect, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';

// Custom Input Component using useController
const CustomTextInput = ({ name, control, defaultValue }) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <input
      type="text"
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

const CustomNumberInput = ({ name, control, defaultValue, onFieldChange }) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <input
      type="number"
      value={value || ''}
      onChange={(e) => {
        onChange(e); // Update form value
        if (onFieldChange) onFieldChange(e.target.value); // Trigger custom handler
      }}
      onBlur={onBlur}
    />
  );
};

export const useTest = (control) => {
  const [sums, setSums] = useState({}); // Store sums for each row

  const calculateSum = (index, getField3Value, field4Value) => {
    const field3 = parseFloat(getField3Value) || 0;
    const field4 = parseFloat(field4Value) || 0;
    return field3 + field4;
  };

  useEffect(() => {
    // Calculate sums when the component mounts or data changes
    // Assuming we get data from some API or initial state
  }, []);

  const columns = useMemo(() => [
    {
      Header: 'Field 1',
      accessor: 'field1',
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Field 2',
      accessor: 'field2',
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Field 3',
      accessor: 'field3',
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Field 4',
      accessor: 'field4',
      Cell: ({ row }) => (
        <CustomNumberInput
          name={`rows[${row.index}].field4`}
          control={control}
          defaultValue={row.original.field4}
          onFieldChange={(newValue) => {
            const sum = calculateSum(row.index, row.original.field3, newValue);
            setSums((prevSums) => ({ ...prevSums, [row.index]: sum }));
          }}
        />
      ),
    },
    {
      Header: 'Sum of Field 3 & 4',
      accessor: 'sum',
      Cell: ({ row }) => <span>{sums[row.index] || 0}</span>,
    },
    {
      Header: 'Comments',
      accessor: 'comment',
      Cell: ({ row }) => (
        <CustomTextInput
          name={`rows[${row.index}].comment`}
          control={control}
          defaultValue={row.original.comment}
        />
      ),
    },
  ], [sums, control]); // Memoizing columns based on sums and control

  return { columns };
};
