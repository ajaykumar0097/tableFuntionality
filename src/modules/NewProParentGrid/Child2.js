import React from 'react';
import './styles.css'
const Child2 = () => {
  return (
    <div>
      <h3>Child 2 Content</h3>
      <p>This is some content for Child 2.</p>
      <input type="text" placeholder="Enter text here" />
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default Child2;
