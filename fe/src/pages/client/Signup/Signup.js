import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


import './style.scss'
import { getVerifyCodeSignup, signUp } from '../../../apis/client'
import { ButtonNavigate } from '../../../components/client/index'
import { ProgressBar } from '../../../components/partials/index'



const Signup = () => {

  const navigate = useNavigate()

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyCode, setVerifyCode] = useState('')

  const [loadingSignUp, setLoadingSignUp] = useState(false)


  const handleGetVerifyCode = async () => {
    setLoadingSignUp(true)
    const response = await getVerifyCodeSignup({ userEmail: email })
    
    if(response && response.status && response.status !==200) {setLoadingSignUp(false); return (response.data && response.data.message) ? toast(`${response.data.message}`) : toast(`please try again`)}
    if (!response || (response && response.data && response.data.metadata && response.data.metadata.status === 'error')) {setLoadingSignUp(false); return toast(`Please input the right email!!!`) }
    if (response && response.data && response.data.metadata && response.data.metadata.messageId && response.data.metadata.messageId.status === 'ok') {setLoadingSignUp(false); return toast(`VerifyCode is sent! Please check your email and input!!!`) }
    setLoadingSignUp(false)
  }

  const handleSignUp = async () => {
    setLoadingSignUp(false)
    if(username==='' || email==='' || password===''|| verifyCode==='') {setLoadingSignUp(false); return toast(`please fullfill information!!!`) }
    const userInput = { username, email, password, verifyCode }
    const response = await signUp(userInput)

    if(response && response.status && response.status !==200) {setLoadingSignUp(false); return (response.data && response.data.message) ? toast(`${response.data.message}`) : toast(`please try again`)}

    if (!response) { setLoadingSignUp(false); return toast(`please try again`) }

    if (response && response.data && response.data.status === 'error') { setLoadingSignUp(false); return toast(`${response.data.message}`) }


    //console.log(response)

    if (response && response.data && response.data.metadata && response.data.metadata.metadata && response.data.metadata.metadata.user) {
      toast(`Sign Up success! Please log in!`)
      setLoadingSignUp(false)
      navigate('/private/login')
    }

    setLoadingSignUp(false)
    return toast(`please try again`)

  }

  return (

    !loadingSignUp ? <>
      <div className='signUpClient'>
        <ButtonNavigate />
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
                <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
              </div>
              <div className='wrapperPassword'>
                <input className='inputForm password' type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className='formVerifyCode'>
                <input className='inputForm verifyCode' type="text" id='verifyCode' placeholder='Input verify code in your mailbox' value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
                <button className='sendCode' type='submit' onClick={handleGetVerifyCode}> Send Code </button>

              </div>


              <button className='signup' type='submit' onClick={handleSignUp}> Submit Sign Up </button>
              <p>If you had an account, please <a href='/private/login'>Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </> : <>
    <ProgressBar />
      <div className='signUpClient' style={{ opacity: 0.5 }}>
        <ButtonNavigate />
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
                <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
              </div>
              <div className='wrapperPassword'>
                <input className='inputForm password' type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className='formVerifyCode'>
                <input className='inputForm verifyCode' type="text" id='verifyCode' placeholder='Input verify code in your mailbox' value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
                <button className='sendCode' type='submit' onClick={handleGetVerifyCode}> Send Code </button>

              </div>


              <button className='signup' type='submit' onClick={handleSignUp}> Submit Sign Up </button>
              <p>If you had an account, please <a href='/private/login'>Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Signup