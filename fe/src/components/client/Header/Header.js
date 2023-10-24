import React, { useContext, useEffect, useState } from 'react'

import logo from '../../../public/img/logoMain.png'
import './style.scss'
import { link } from '../../../routes/link'
import icons from '../../../utils/icon/reactIcon'

import { Link, useNavigate } from "react-router-dom";
import { AuthDispatchContext, AuthStateContext, signOut } from '../../../context/auth'
import { toast } from 'react-toastify'



const Header = () => {

    const navigate = useNavigate()
    const dispatch = useContext(AuthDispatchContext)

    const { isLoggedIn } = useContext(AuthStateContext)

    const { AiOutlineMenu } = icons

    const [openMenu, setOpenMenu] = useState(false)


    const handleMenuOpen = () => {
        setOpenMenu(!openMenu)
    }

    const handleLogOut = () => {
        signOut(dispatch)
        toast(`Logout successfull!!!`)
        navigate('/private/dashboard')
    }

    return (

        !isLoggedIn ? <>
            <div>
                <h1>Logout Successfull</h1>
                <Link to={link.HOME}><img src={logo} alt="" /></Link>
            </div>
        </> : <>
            <div className='headerClient'>
                <div className='container'>
                    <div className='container-logo'>
                        <Link to={link.HOME}><img src={logo} alt="" /></Link>
                    </div>
                    <div className='allLink'>
                        <div className='getPrediction'><Link to={link.CLIENT_DASHBOARD}>Get Prediction</Link></div>

                        <div className='otherLink'>
                            <ul>
                                <li><Link to={link.CLIENT_PACKAGE}>PackageTime</Link></li>
                                <li><Link to={link.CLIENT_HISTORY}>History</Link></li>
                                <li><Link to={link.CLIENT_PROFILE}>Profile</Link></li>
                                <li className='logout'><Link to={link.HOME} onClick={handleLogOut}>Logout</Link></li>
                            </ul>
                        </div>

                        <div className='collapseMenu'>
                            <div className='iconMenu'><AiOutlineMenu size={25} onClick={handleMenuOpen} /></div>
                            <div className='collapseLink' style={{ display: openMenu ? 'flex' : 'none' }}>
                                <Link to={link.CLIENT_PACKAGE}>Package</Link>
                                <Link to={link.CLIENT_HISTORY}>History</Link>
                                <Link to={link.CLIENT_PROFILE}>Profile</Link>
                                <Link className='logout' to={link.HOME} onClick={handleLogOut}>Logout</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default Header