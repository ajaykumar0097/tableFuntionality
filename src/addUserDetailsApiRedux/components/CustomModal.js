import React from "react";
import "./customModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({id,setShowModal}) => {
  console.log(id);
  const allData=useSelector(state=>state.app.users)
  console.log("allData",allData);
  const filterData=allData?.filter(val=>val?.id===id)
  
  
  return (
    <div className="modalBackGround">
      <div className="modalContainer">
      <button onClick={_=>setShowModal(false)}>Close</button>
        <h3>{filterData?.[0]?.name}</h3>
        <h3>{filterData?.[0]?.email}</h3>
        <h3>{filterData?.[0]?.age}</h3>
        <h3>{filterData?.[0]?.gender}</h3>
      </div>

    </div>
  );
};

export default CustomModal;
