import React from 'react'

import './Layout.scss'
import { Header, Footer} from '../../../components/client/index'

const Layout = ({ children }) => {
    return (
        <div className='layoutDashboardClient'>
            <div className='headerClient'>
            <Header />
            </div>
            <div className='middle'>
                <div className='content'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout