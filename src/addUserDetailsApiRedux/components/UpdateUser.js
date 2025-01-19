import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/addUserSlice";

const UpdateUser = () => {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState(null);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const { users, loading } = useSelector((state) => state.app);
  console.log("updatedData", updatedData);

  useEffect(() => {
    if (id) {
      const singleUser = users?.filter((val) => val?.id === id);
      setUpdatedData(singleUser?.[0]);
    }
  }, []);
  console.log("id", updatedData);

  const newData = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(updateUser(updatedData))
    navigate("/read")
  }
  return (
    <div className="mx-auto w-50 ">
      <h1>Edit Data</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedData?.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={updatedData?.email}
            onChange={newData}
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
            value={updatedData?.password}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={updatedData?.age}
            onChange={newData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={updatedData?.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={updatedData?.gender === "Female"}
            onChange={newData}
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

export default UpdateUser;
