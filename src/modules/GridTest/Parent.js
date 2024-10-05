// src/ParentComponent.jsx
import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import { useForm } from 'react-hook-form';
import './style.css'


const ParentComponent = () => {
  const { handleSubmit } = useForm();
  const [activeTab, setActiveTab] = useState('child1'); // State for active tab

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  return (
    <div className="parent-container">
      <div className="tab-container">
        <button className={activeTab === 'child1' ? 'active-tab' : ''} onClick={() => setActiveTab('child1')}>
          Child 1
        </button>
        <button className={activeTab === 'child2' ? 'active-tab' : ''} onClick={() => setActiveTab('child2')}>
          Child 2
        </button>
      </div>
      {activeTab === 'child1' && <Child1 />}
      {activeTab === 'child2' && <Child2 />}
      <button className="submit-button" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </div>
  );
};

export default ParentComponent;
