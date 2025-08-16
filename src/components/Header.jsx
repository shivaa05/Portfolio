import React from 'react'

const Header = () => {
  return (
    <div className="header flex justify-between items-center h-14 text-lg w-full px-20 uppercase bg-[#0d1224]">
      <div className="text-fuchsia-400 font-extrabold text-3xl ">
        SHIVA VERMA
      </div>
      <div className="right flex justify-between w-1/3">
        <a href="/" className="">
          Home
        </a>
        <a href="/" className="">
          About
        </a>
        <a href="/" className="">
          Skills
        </a>
        <a href="/" className="">
          Projects
        </a>
        <a href="/" className="">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header
