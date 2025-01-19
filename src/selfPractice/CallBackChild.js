import React, { memo } from 'react'

const CallBackChild = ({parentButton}) => {

    console.log("child");
    
  return (
    <div>
      
    </div>
  )
}

export default memo(CallBackChild)
