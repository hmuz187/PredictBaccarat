import React from 'react'

import {useNavigate } from 'react-router-dom'
import './style.scss'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className='loginClient'>
      <div className='wrapper'>
        <div className='container'>
          <div className='headerLogin'>
            <h2>LOGIN</h2>
            <p>Predict West Company</p>
          </div>
          <div className='formLogin'>
            <input className='inputForm email' type="text" name='email' id='email' placeholder='Your email' />
            <div className='wrapperPassword'>
              <input className='inputForm password' type="password" name="password" id="password" placeholder='Your password' />
            </div>
            <button className='login' type='submit'> Log in </button>
            <a href='/signup'> Forgor Password</a>
            <button className='signup' type='submit' onClick={() => navigate('/private/signup')}> Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login