import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import { useForm } from 'react-hook-form';
import './styles.css';

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('child1');
  const { handleSubmit, setValue, getValues } = useForm();

  const handleSave = (data) => {
    console.log("cc", data);
  
    const tableData = getValues()?.tableData;
  
    if (!tableData || tableData.length === 0) {
      alert("No table data available.");
      return false;
    }
  
    // Validate individual fields in each row
    for (let rowIndex = 0; rowIndex < tableData.length; rowIndex++) {
      const row = tableData[rowIndex];
  
      // Check each field for emptiness and return the first error
      if (!row.name) {
        alert(`Please fill the 'Name' field in row ${rowIndex + 1}, it is mandatory.`);
        return false;
      }
      if (!row.address) {
        alert(`Please fill the 'Address' field in row ${rowIndex + 1}, it is mandatory.`);
        return false;
      }
      if (!row.city) {
        alert(`Please fill the 'City' field in row ${rowIndex + 1}, it is mandatory.`);
        return false;
      }
      if (!row.state) {
        alert(`Please fill the 'State' field in row ${rowIndex + 1}, it is mandatory.`);
        return false;
      }
    }
  
    // One-time check for consistent 'state' values across all rows
    const stateValues = tableData.map(row => row.state);
    const uniqueStates = [...new Set(stateValues)];
  
    if (uniqueStates.length > 1) {
      alert("All rows must have the same 'State'. Please ensure that the 'State' field is consistent across all rows.");
      return false;
    }
  
    // If all fields are valid and 'state' is consistent across rows, return true
    console.log("Form data is valid:", tableData);
    return true;
  };
  
  
  const handleDraft = () => {
    console.log('Draft saved.');
  };

  return (
    <div>
      <h2>Parent Component with Tab Navigator</h2>

      <div className="tabs">
        <button type="button" onClick={() => setActiveTab('child1')}>Child 1</button>
        <button type="button" onClick={() => setActiveTab('child2')}>Child 2</button>
      </div>

      <form onSubmit={handleSubmit(handleSave)}>
        <div className="content">
          {activeTab === 'child1' && <Child1 setValue={setValue} getValues={getValues} />}
          {activeTab === 'child2' && <Child2 setValue={setValue} getValues={getValues} />}
        </div>

        <div className="actions">
          <button type="submit">Save</button>
          <button type="button" onClick={handleDraft}>Draft</button>
        </div>
      </form>
    </div>
  );
};

export default ParentComponent;
