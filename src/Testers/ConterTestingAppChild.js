import React, { useContext } from 'react'
import { CounterContext } from './Context'
import { type } from '@testing-library/user-event/dist/type'

const ConterTestingAppChild = () => {
    const {state,dispatch}=useContext(CounterContext)
  return (
    <div>
      <h1>Child</h1>
      <button onClick={_=>dispatch({type:"Decrement"})}>Child Button</button>
    </div>
  )
}

export default ConterTestingAppChild
