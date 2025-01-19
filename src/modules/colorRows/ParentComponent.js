import React, { useState } from "react";
import CommonGrid from "./CommonGrid";
import { columns } from "./columns";

const ParentComponent1 = () => {
  const [data, setData] = useState([
    { input1: "", input2: "", remarks: "" },
    { input1: "", input2: "", remarks: "" },
    { input1: "", input2: "", remarks: "" },
  ]);

  const handleFormSubmit = (formData) => {
    const updatedData = formData.map(row => {
      if (!row.remarks && (row.input1 || row.input2)) {
        alert("Please fill remarks as well!");
      }
      return row;
    });
    setData(updatedData);
    console.log("Submitted Data: ", formData);
  };

  return (
    <div>
      <h1>Grid Form</h1>
      <CommonGrid columns={columns} data={data} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ParentComponent1;
