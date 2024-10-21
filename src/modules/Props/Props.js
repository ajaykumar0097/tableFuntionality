// import React from 'react';

// const Button = (props) => {
//   return <button {...props}>{props.label}</button>;
// };

// const Props = () => {
//   return (
//     <div>
//       <Button label="Click Me" className="btn btn-primary" onClick={() => alert('Button clicked!')} />
//     </div>
//   );
// };

// export default Props;

// import React from 'react';

// const InvalidButton = (props) => {
//   return <button {...props}>{props.label}</button>;
// };

// const Props = () => {
//   const additionalProps = {
//     label: 'Submit',
//     className: 'btn btn-secondary',
//     invalidProp: 'This will not render', // Invalid prop for a button
//   };

//   return (
//     <div>
//       <InvalidButton {...additionalProps} />
//     </div>
//   );
// };

// export default Props;

// import React from 'react';

// const TextInput = (props) => {
//   return <input type="text" {...props} />;
// };

// const Props = () => {
//   const userProps = {
//     placeholder: 'Enter text',
//     style: { color: 'blue' },
//     onFocus: () => console.log('Focused'),
//     sensitiveData: 'secret', // Sensitive data
//   };

//   return (
//     <div>
//       <TextInput {...userProps} />
//     </div>
//   );
// };

// export default Props;

import React, { useEffect, useRef } from "react";

const Practicing = () => {
  const REACT_VERSION = React.version;

  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  function createMultipliers() {
    let multipliers = [];

    for (let i = 1; i <= 3; i++) {
        multipliers.push(function(x) {
            return i * x;
        });
    }

    return multipliers;
}

const multiplierFunctions = createMultipliers(10);
console.log(multiplierFunctions ); // 10 (1 * 10)
console.log(multiplierFunctions ); // 20 (2 * 10)
console.log(multiplierFunctions ); // 30 (3 * 10)
  return (
    <div>
      <div>{REACT_VERSION}</div>
      <input ref={inputElRef} defaultValue={"Won't focus"} />
      <input defaultValue={"Will focus"} />
    </div>
  );
};

export default Practicing;
