import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import { useForm, FormProvider } from 'react-hook-form';
import './styles.css'


const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('child1');
  const methods = useForm();

  const handleSave = (data) => {
    console.log('Saved Data:', methods.getValues());  // Use getValues() to get all form data
  };

  const handleDraft = () => {
    console.log('Draft saved.');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSave)}>
        <h2>Parent Component with Tab Navigator</h2>

        <div className="tabs">
          <button type="button" onClick={() => setActiveTab('child1')}>Child 1</button>
          <button type="button" onClick={() => setActiveTab('child2')}>Child 2</button>
        </div>

        <div className="content">
          {activeTab === 'child1' && <Child1 />}
          {activeTab === 'child2' && <Child2 />}
        </div>

        <div className="actions">
          <button type="submit">Save</button>
          <button type="button" onClick={handleDraft}>Draft</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ParentComponent;
