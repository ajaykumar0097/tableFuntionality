import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import '../../index.css'

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'tab1':
        return <ChildComponent1 />;
      case 'tab2':
        return <ChildComponent2 />;
      default:
        return <ChildComponent1 />;
    }
  };

  return (
    <div className="container">
      <div className="tab-navigator">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
      </div>

      <div className="tab-content">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default ParentComponent;

