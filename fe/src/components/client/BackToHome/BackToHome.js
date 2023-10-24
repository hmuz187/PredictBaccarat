import React from 'react'
import './style.scss'

import icons from '../../../utils/icon/reactIcon'


const BackToHome = () => {

const {BiHome} = icons
  return (
    <div className='backToHome'>
         <div className='checkOutHome'><BiHome size={24} /><a href="/">Back to home</a></div>
    </div>
  )
}

export default BackToHome