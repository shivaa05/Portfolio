import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import RainAnimation from '../components/RainAnimation'

const MainLayout = () => {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <RainAnimation/>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
