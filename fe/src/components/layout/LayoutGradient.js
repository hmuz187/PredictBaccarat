import React from 'react'
import { Bg01 } from '../public/Background/index'

const LayoutGradient = ({ children }) => {
  return (
    <div className='layoutGradient'>
      <Bg01 />
      <div className='content' style={{position:'absolute'}}>
      {children}
      </div>
    </div>
  )
}

export default LayoutGradient