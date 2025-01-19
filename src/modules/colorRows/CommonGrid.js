import React from "react";
import { useTable } from "react-table";
import { useForm, Controller } from "react-hook-form";

const CommonGrid = ({ columns, data, onSubmit }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const handleFormSubmit = (formData) => {
    onSubmit(formData); // Pass form data to parent
  };

  const watchedFields = watch();

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            const { input1, input2, remarks } = watchedFields[i]; // Watch the input fields for color change

            const rowColor = remarks ? "green" : input1 || input2 ? "red" : "";

            return (
              <tr {...row.getRowProps()} style={{ backgroundColor: rowColor }}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    <Controller
                      name={`${i}.${cell.column.id}`}
                      control={control}
                      render={({ field }) => (
                        <input {...field} type="text" />
                      )}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommonGrid;
