import React from 'react'

import './style.scss'
import Layout from './Layout'
import { Prediction } from '../../../components/client/index'

const Dashboard = () => {
    return (
        <Layout>
            <div className='dashboardClient'>
                <Prediction />
            </div>
        </Layout>
    )
}

export default Dashboard