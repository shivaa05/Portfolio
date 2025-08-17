import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header flex justify-between items-center h-16 text-lg w-full px-20 uppercase bg-[#0d1224] sticky top-0">
      <div className="text-sky-200 font-extrabold text-3xl overflow-hidden ">
        SHIVA VERMA
      </div>
      <div className="right flex justify-between w-1/3">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/skills" className="">
          Skills
        </NavLink>
        <NavLink to="/projects" className="">
          Projects
        </NavLink>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header
