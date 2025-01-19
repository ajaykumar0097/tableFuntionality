import React, { useContext } from 'react'
import ConterTestingAppChild from './ConterTestingAppChild'
import { CounterContext } from './Context'

const ConterTestingAppParent = () => {
    const {state,dispatch}=useContext(CounterContext)
  return (
    <div>
    
    <h1>Parent     {state.count}</h1>
    <button onClick={_=>dispatch({type:"Increment"})}>Parent Click</button>
    <ConterTestingAppChild/>
    </div>
  )
}

export default ConterTestingAppParent
