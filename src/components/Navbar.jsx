import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import useMyStore from "../store/useMyStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  let url = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    if(url.pathname=="/") setCurrentPage("")
    else if(url.pathname=="/about") setCurrentPage("about")
    else if(url.pathname=="/contact") setCurrentPage("contact")
    else if(url.pathname=="/projects") setCurrentPage("projects")
  }, [url])
  
  
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.from(".left", {
      y: -100,
      opacity: 0,
      scale: 0,
    },"abc");

    tl.from(".right *", {
      scale: 0,
      stagger: 0.2,
      y:-100,
    },"abc")
  });
  return (
    <div className="w-full fixed px-5 text-sm py-3 md:px-[10vw] md:py-5 md:text-lg font-semibold  md:font-bold flex justify-between items-center bg-black/60 backdrop-blur-sm z-100">
      <div className="left">CodeWithShiva</div>

      <div className="right hidden md:flex gap-[4vw]">
        <Link
          className={`${currentPage == "" && "text-blue-400 border-b"} px-1 pb-1`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`${currentPage == "about" && "text-blue-400 border-b"} px-1 pb-1`}
          to={"/about"}
        >
          About
        </Link>
        <Link
          className={`${currentPage == "projects" && "text-blue-400 border-b"} px-1 pb-1`}
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          className={`${currentPage == "contact" && "text-blue-400 border-b"} px-1 pb-1`}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
