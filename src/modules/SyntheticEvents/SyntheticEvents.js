import React from 'react';

function SyntheticEvents() {
  const handleClick = (event) => {
    // This is a SyntheticEvent
    console.log('Button clicked:', event);
    console.log('Button text:', event.target.textContent);
    console.log('Button text:', event.nativeEvent.isPrimary);
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default SyntheticEvents;
