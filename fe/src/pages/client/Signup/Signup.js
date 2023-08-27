import React, { useState } from 'react'

import './style.scss'

const Signup = () => {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleGetVerifyCode = () => {
    const userInput = { username, email, password }
    console.log(userInput)

  }

  return (
    <div className='signUpClient'>
      <div className='wrapper'>
        <div className='container'>
          <div className='headerLogin'>
            <h2>SIGN UP</h2>
            <p>Predict West Company</p>
          </div>
          <div className='formLogin'>
            <div>
              <input className='inputForm username' type="text" placeholder='Your name' value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
              <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='wrapperPassword'>
              <input className='inputForm password' type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='formVerifyCode'>
              <input className='inputForm verifyCode' type="text" name='verifyCode' id='verifyCode' placeholder='Input verify code in your mailbox' />
              <button className='sendCode' type='submit' onClick={handleGetVerifyCode}> Send Code </button>

            </div>


            <button className='signup' type='submit'> Submit Sign Up </button>
            <span>If you had an account, please <a href='/private/login'>Log in</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup