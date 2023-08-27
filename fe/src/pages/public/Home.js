import React from 'react'
import { Header, Footer, Banner, TableBoardV2, Service } from '../../components/public/index'

const Home = () => {
  return (
    <div className='publicHomeContainer'>
      <Header />

      <div className='content' style={{overflow: 'auto'}}>
        <Banner />
        <Service />
        <TableBoardV2 />
      </div>

      <Footer />

    </div>
  )
}

export default Home