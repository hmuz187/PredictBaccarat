import React from 'react'
import './style.scss'

const ForgotPassword = () => {
  return (
    <div className='forgotPasswordClient'>
      <div className='wrapper'>
        <div className='container'>
          <div className='headerLogin'>
            <h2>CHANGE PASSWORD</h2>
            <p>Predict West Company</p>
          </div>
          <div className='formLogin'>
            <div>
              <input className='inputForm email' type="text" name='email' id='email' placeholder='Your email' required='true' />
            </div>
            <div className='wrapperPassword'>
              <input className='inputForm password' type="password" name="password" id="password" placeholder='Your new password' />
            </div>

            <div className='formVerifyCode'>
              <input className='inputForm verifyCode' type="text" name='verifyCode' id='verifyCode' placeholder='Input verify code in your mailbox' required='true' />
              <button className='sendCode' type='submit'> Send Code </button>
            </div>

            <button className='changePassword' type='submit'>Change Password</button>
            <span>If you had an account, please <a href='/private/login'>Log in</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword