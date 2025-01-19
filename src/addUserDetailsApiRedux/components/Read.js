import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/addUserSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {

  const [showModal,setShowModal]= useState(false)
  const [id,setId]= useState(null)
    const dispatch=useDispatch()
    
  const [radioData, setRadioData] = useState("");
  console.log("radioData",radioData);
  
    const {users,loading,searchData}=useSelector(state=>state.app)
    useEffect(()=>{
        dispatch(showUser())

    },[dispatch])
    console.log("searchData",searchData);
    
    if (loading) return <div>Loading...</div>
  return (
    <div>
      <h2 className="text-center">All Data</h2>
      {showModal &&<CustomModal id={id} setShowModal={setShowModal}/>}
     <div className="text-center">
     <input
        class="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label">All</label>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
       <label class="form-check-label">Female</label>
     </div>
      <div>
       {users &&    users
            .filter((val) => {
              if (searchData.length === 0) {
                return val;
              } else {
                return val.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((val) => {
              if (radioData === "Male") {
                return val.gender === radioData;
              } else if (radioData === "Female") {
                return val.gender === radioData;
              } else return val;
            })
          ?.map(val=> <div className="card mx-auto w-50 my-2" >
          <div className="card-body">
            <h5 className="card-title">{val?.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {val?.email}
            </h6>
            <p className="card-text">
             {val?.gender}
            </p>
            <button  className="card-link"  onClick={() => {
                    setId(val.id);
                    setShowModal(true);
                  }}>
              View
            </button>
            <Link to={`/edit/${val.id}`}  className="card-link">
              Edit
            </Link>
            <Link onClick={_=>dispatch(deleteUser(val.id))} className="card-link">
              Delete
            </Link>
          </div>
        </div>)}
      </div>
    
    </div>
  );
};

export default Read;
