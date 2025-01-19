import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/addUserSlice";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "Male", // Default gender
  });
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users)); // Pass user data to the thunk
    navigate("/read")
  };

  return (
    <div className="mx-auto w-50 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={users.name}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={users.email}
            onChange={getUserData}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={users.password}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={users.age}
            onChange={getUserData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={users.gender === "Male"}
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={users.gender === "Female"}
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createuser;
