import React from 'react'

import './Layout.scss'
import { Header, Footer, Sidebar } from '../../../components/client/index'

const Layout = ({ children }) => {
    return (
        <div className='layoutDashboardClient'>
            <Header />
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