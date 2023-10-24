import React, { useContext } from 'react'
import './style.scss'
import { AuthStateContext } from '../../../context/auth'

import { ButtonNavigate } from '../../../components/client/index'


const Profile = () => {

  const { user } = useContext(AuthStateContext)
  const {username, email, totalPaid } = user

  return (
    <div className='clientProfileCard'>
      <ButtonNavigate />

      <div className='card'>
        <p>Name: {username}</p>
        <p>Email: {email}</p>
        <p>Total Payment: {totalPaid} $</p>
      </div>
    </div>
  )
}

export default Profile