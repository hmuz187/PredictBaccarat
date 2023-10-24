import React, {useContext} from 'react'
import { AuthStateContext } from '../../../context/auth'
import { link } from '../../../routes/link'

const LayoutClientAuth = ({ children }) => {

    const { isLoggedIn, user} = useContext(AuthStateContext)

    return (
        <div className='layoutClientAuth'>
            {isLoggedIn ? <>
                <div className='content'>
                    {children}
                </div>
            </> : <>
                <div className='authFailure'>
                    <a href={link.CLIENT_LOGIN}>Please log in to continue</a>
                </div>
            </>}
        </div>
    )
}

export default LayoutClientAuth