import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

import './style.scss'
import { forgotPassword, getVerifyCodeForgotPassword } from '../../../apis/client'
import {ButtonNavigate } from '../../../components/client/index'
import { ProgressBar } from '../../../components/partials/index'



const ForgotPassword = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyCode, setVerifyCode] = useState('')

  const [loadingForgot, setLoadingForgot] = useState(false)




  const handleGetVerifyCode = async () => {
    const response = await getVerifyCodeForgotPassword({ userEmail: email })
    // console.log(response)

    if(response && response.status && response.status !==200) {setLoadingForgot(false); return (response.data && response.data.message) ? toast(`${response.data.message}`) : toast(`please try again`)}

    if (!response || (response && response.data && response.data.status === 'error') || (response && response.data && response.data.metadata && response.data.metadata.status === 'error')) { setLoadingForgot(false); return response.data.message ? toast(`${response.data.message}`) : toast(`Please input the right email!!!`) }

    if (response && response.data && response.data.metadata && response.data.metadata.messageId && response.data.metadata.messageId.status === 'ok') { setLoadingForgot(false); return toast(`VerifyCode is sent! Please check your email and input!!!`) }
    setLoadingForgot(false);
  }

  const handleChangePassword = async () => {
    const userInput = { userEmail: email, password, verifyCode }
    const response = await forgotPassword(userInput)

    if(response && response.status && response.status !==200) {setLoadingForgot(false); return (response.data && response.data.message) ? toast(`${response.data.message}`) : toast(`please try again`)}

    if(response && response.status && response.status ===200) {setLoadingForgot(false); return toast(`succes change password!!! please log in`)}

    //console.log(response)
  }

  return (

    !loadingForgot ? <>
      <div className='forgotPasswordClient'>
        <ButtonNavigate />
        <div className='wrapper'>
          <div className='container'>
            <div className='headerLogin'>
              <h2>CHANGE PASSWORD</h2>
              <p>Predict West Company</p>
            </div>
            <div className='formLogin'>
              <div>
                <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
              </div>
              <div className='wrapperPassword'>
                <input className='inputForm password' type="password" placeholder='Your new password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className='formVerifyCode'>
                <input className='inputForm verifyCode' type="text" placeholder='Input verify code in your mailbox' value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
                <button className='sendCode' type='submit' onClick={handleGetVerifyCode}> Send Code </button>
              </div>

              <button className='changePassword' type='submit' onClick={handleChangePassword}>Change Password</button>
              <p>If you had an account, please <a href='/private/login'>Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </> : <>
      <ProgressBar />
      <div className='forgotPasswordClient' style={{ opacity: 0.5 }}>
        <ButtonNavigate />
        <div className='wrapper'>
          <div className='container'>
            <div className='headerLogin'>
              <h2>CHANGE PASSWORD</h2>
              <p>Predict West Company</p>
            </div>
            <div className='formLogin'>
              <div>
                <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
              </div>
              <div className='wrapperPassword'>
                <input className='inputForm password' type="password" placeholder='Your new password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className='formVerifyCode'>
                <input className='inputForm verifyCode' type="text" placeholder='Input verify code in your mailbox' value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
                <button className='sendCode' type='submit' onClick={handleGetVerifyCode}> Send Code </button>
              </div>

              <button className='changePassword' type='submit' onClick={handleChangePassword}>Change Password</button>
              <p>If you had an account, please <a href='/private/login'>Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default ForgotPassword