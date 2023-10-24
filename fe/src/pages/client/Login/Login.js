import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom'
import './style.scss'
import { logIn } from '../../../apis/client'
import { AuthDispatchContext, AuthStateContext, signIn } from '../../../context/auth'

import {ButtonNavigate } from '../../../components/client/index'
import { ProgressBar } from '../../../components/partials/index'

const Login = () => {
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AuthStateContext)
  const dispatch = useContext(AuthDispatchContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loadingLogIn, setLoadingLogIn] = useState(false)

  const handleLogIn = async () => {
    setLoadingLogIn(true)
    if (email === '' || password === '') { setLoadingLogIn(false); return toast(`please fullfill information`) }
    const userInput = { email, password }
    const response = await logIn(userInput)
    // console.log(response)
    if (!response) { setLoadingLogIn(false); return toast(`please try again`) }
    if (response && response.data && response.data.status === 'error') { setLoadingLogIn(false); return toast(`${response.data.message}`) }
    if (response && response.data && response.data.metadata && response.data.metadata.metadata && response.data.metadata.metadata.user) {
      toast(`login success`)
      setLoadingLogIn(false)
      signIn(dispatch, response.data.metadata.metadata.user)
      navigate('/private/dashboard')
    }

    if (response && response.status && response.status !==200) { setLoadingLogIn(false); return toast(`please check information or sign up!!!`) }

    setLoadingLogIn(false);

  }

  return (
    <>
      {isLoggedIn ? <>
        <div>
          <h1>Your account is logged in</h1>
          <a href='/private/dashboard'>Go to dashboard</a>
        </div>
      </> : <>
        {
          !loadingLogIn ? <>
            <div className='loginClient'>
              <ButtonNavigate />
              <div className='wrapper'>
                <div className='container'>
                  <div className='headerLogin'>
                    <h2>LOGIN</h2>
                    <p>Predict West Company</p>
                  </div>
                  <div className='formLogin'>
                    <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                    <input className='inputForm password' type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login' type='submit' onClick={handleLogIn}> Log in </button>
                    <a href='/private/forgotPassword'> Forgor Password</a>
                    <button className='signup' type='submit' onClick={() => navigate('/private/signup')}> Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </> : <>
            <ProgressBar />
            <div className='loginClient' style={{ opacity: 0.5 }}>
              <ButtonNavigate />
              <div className='wrapper'>
                <div className='container'>
                  <div className='headerLogin'>
                    <h2>LOGIN</h2>
                    <p>Predict West Company</p>
                  </div>
                  <div className='formLogin'>
                    <input className='inputForm email' type="text" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                    <input className='inputForm password' type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login' type='submit' onClick={handleLogIn}> Log in </button>
                    <a href='/private/forgotPassword'> Forgor Password</a>
                    <button className='signup' type='submit' onClick={() => navigate('/private/signup')}> Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </>}

    </>



  )
}

export default Login




// {loadingLogIn ? <>
//   <button className='login' type='submit'>
//     <ProgressBar trackWidth={5} indicatorWidth={10} />
//   </button>
// </> : <>
//   <button className='login' type='submit' onClick={handleLogIn}> Log in </button>
// </>}