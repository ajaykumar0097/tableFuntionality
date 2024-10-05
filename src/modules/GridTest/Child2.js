import React from 'react';

const Child2 = () => {
  return (
    <div>
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <input type="text" placeholder="Input 1" />
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <input type="text" placeholder="Input 2" />
    </div>
  );
};

export default Child2;