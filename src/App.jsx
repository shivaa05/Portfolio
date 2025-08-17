import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Submit from "./components/Submit";

const App = () => {
  return (
    <div className="wrapper bg-zinc-900 h-[100vh] w-screen text-white">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
