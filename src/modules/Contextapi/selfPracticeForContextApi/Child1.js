import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
  return (
    <div>
      Child1
      <input type="text" placeholder='child1' />
      <button>Child1 Btn</button>
      <Child2/>
    </div>
  )
}

export default Child1
