import React, { useState } from "react";

const FormSubmit = () => {

  const [a, setA] = useState({});

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit", a);
  }

  const onHandleChange=(e)=>{
    const {name,value}=e.target
    console.log(name,value);
    setA(prev=>({
        
            ...prev,
            [name]:value
        
    }))
    

  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" value={a.name} onChange={onHandleChange}/>
        <input type="text" name="email" value={a.email} onChange={onHandleChange}/>
        <input type="text" name="password" value={a.password} onChange={onHandleChange}/>

        <input
        type="button"
        value="Click Me"
        // onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      />
      </form>
    </div>
  );
};

export default FormSubmit;
