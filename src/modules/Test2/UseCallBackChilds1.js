function ChildComponent({ onClick }) {
    console.log("Child rendered!");
    return (
      <button onClick={onClick}>Click Me</button>
    );
  }


  export default ChildComponent