import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
