import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, adminRoutes, clientRoutes } from './Routes'
import { Page404 } from '../pages/public'


const Browser = () => {


  return (
    <Router>
      <Routes>
        {publicRoutes.map((publicRoute, index) => {
          const Layout = publicRoute.layout ? publicRoute.layout : Fragment
          const Page = publicRoute.component ? publicRoute.component : Page404
          return (
            <Route key={index}
              path={publicRoute.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}

        {clientRoutes.map((clientRoute, index) => {
          const Layout = clientRoute.layout ? clientRoute.layout : Fragment
          const Page = clientRoute.component ? clientRoute.component : Page404
          return (
            <Route key={index}
              path={clientRoute.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}


        {adminRoutes.map((adminRoute, index) => {
          const Layout = adminRoute.layout ? adminRoute.layout : Fragment
          const Page = adminRoute.component ? adminRoute.component : Page404
          return (
            <Route key={index}
              path={adminRoute.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}

        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default Browser