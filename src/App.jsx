import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className="wrapper bg-zinc-900 h-[100vh] w-screen text-white">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
