
import './style.scss'
import { Prediction } from '../../../components/client/index'
import { Header, Footer } from '../../../components/client/index'


const Dashboard = () => {


    return (
        <div>
            <Header />
            <div className='dashboardClient'>
                <div>
                    <Prediction />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
















// import React from 'react'

// import './style.scss'
// import Layout from './Layout'
// import { Prediction } from '../../../components/client/index'


// const Dashboard = () => {


//     return (
//         <>
//             <Layout>
//                 <div className='dashboardClient'>
//                     <Prediction />
//                 </div>
//             </Layout>
//         </>
//     )
// }

// export default Dashboard















// import React, { useContext } from 'react'

// import './style.scss'
// import Layout from './Layout'
// import { Prediction } from '../../../components/client/index'
// import {AuthStateContext } from '../../../context/auth'


// const Dashboard = () => {

//     const { isLoggedIn } = useContext(AuthStateContext)

//     return (
//         isLoggedIn ? <>
//             <Layout>
//                 <div className='dashboardClient'>
//                     <Prediction />
//                 </div>
//             </Layout>
//         </> : <>
//         <div>
//             <h1>Please Log In</h1>
//             <a href='/private/login'>Login</a>
//         </div>
//         </>

//     )
// }

// export default Dashboard