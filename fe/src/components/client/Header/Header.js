import React from 'react'

import logo from '../../../public/img/logoMain.png'
import './style.scss'

const Header = () => {
    return (
        <div className='headerClient'>
            <div className='container'>
                <div className='container-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='allLink'>
                    <ul>
                        <li className='getPrediction'><a href="/private/client/getPrediction/:id">Get Prediction</a></li>
                        <li><a href="/private/client/package/:id">Your Package</a></li>
                        <li><a href="/private/client/history/:id">History</a></li>
                        <li><a href="/private/client/payment/:id">Payment</a></li>
                        <li><a href="/private/client/profile/:id">Profile</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header