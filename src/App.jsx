import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import useMyStore from "./store/useMyStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RainAnimation from "./components/animations/RainAnimation";
import ParticleAnimation from "./components/animations/ParticleAnimation";
import Scroll from "./components/Scroll";
gsap.registerPlugin(useGSAP);
const App = () => {
  const { darkMode } = useMyStore();
  // const boxRef = useRef(null);

  // useEffect(() => {
  //   const moveBox = (e) => {
  //     console.log(e);
  //     gsap.to(boxRef.current, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration:0.2,
  //       ease: "power1.out",
  //     });
  //   };

  //   window.addEventListener("mousemove", moveBox);

  //   return () => {
  //     window.removeEventListener("mousemove", moveBox);
  //   };
  // }, []);
  return (
    <div className="text-white min-h-screen min-w-full bg relative overflow-x-hidden">
      <Scroll/>
      <Navbar />

      <div className="pt-20 pb-40 overflow-hidden px-2 md:px-[10vw]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RainAnimation />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<>
            <ParticleAnimation />
          <About/></>} />
          <Route path="/contact" element={<>
            <ParticleAnimation />
            <Contact />
          </>} />
          <Route path="/projects" element={<>
            <ParticleAnimation />
            <Projects/>
          </>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
