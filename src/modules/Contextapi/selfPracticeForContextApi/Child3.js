import React, { useContext } from 'react'
import { nameContext } from '../../../context/context';

const Child3 = () => {

    const {child,setChild}=useContext(nameContext)



    const onChange=()=>{
        console.log("changed child3");
        setChild({child2:"Testing"})
        
    }
  return (
    <div>
      Child3
      <input type="text" placeholder='child3' value={child.child1}/>
      <button onClick={onChange}>Child3 Btn</button>
    </div>
  )
}

export default Child3
