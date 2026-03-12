import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import useMyStore from './store/useMyStore'

const App = () => {
  const {darkMode} = useMyStore()
  return (
    <div
      className="text-white h-screen w-full bg"
    >
      <Navbar />

      <div className='py-20 px-2 md:px-[10vw]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App 
