import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div className="wrapper bg-zinc-900 h-[100vh] w-screen text-white">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
