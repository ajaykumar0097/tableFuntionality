import React, { useContext } from 'react'
import { nameContext } from '../../context/context'

const Button = () => {
    const {a,setA}=useContext(nameContext)

    const onSubmit =()=>{
      setA("Done")
    }
  return (
    <div>
      <button onClick={onSubmit}>{a}</button>
    </div>
  )
}

export default Button
