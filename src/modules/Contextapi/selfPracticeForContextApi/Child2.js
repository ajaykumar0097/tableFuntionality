import React, { useContext } from 'react'
import Child3 from './Child3'
import { nameContext } from '../../../context/context'

const Child2 = () => {
    const{child,setChild}=useContext(nameContext)
  return (
    <div>
      Child2
      <input type="text" placeholder='child2' value={child.child2}/>
      <button className=''>Child2 Btn</button>
      <Child3/>
    </div>
  )
}

export default Child2
