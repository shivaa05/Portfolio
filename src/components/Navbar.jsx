import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useMyStore from "../store/useMyStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  let url = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [navExpanded, setNavExpanded] = useState(true);
  useEffect(() => {
    setNavExpanded(false)
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

  useGSAP(() => {
    gsap.from(".navPhone", {
      height: 0,
      duration: 0.6
    })
    gsap.from(".navPhone a", {
      opacity: 0,
      scale:0,
      stagger: 0.1,
      duration:0.4
    })
  },[navExpanded])
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

      <div
        className="md:hidden cursor-pointer"
        onClick={() => setNavExpanded(!navExpanded)}
      >
        {navExpanded ? <X /> : <Menu />}
      </div>

      {navExpanded && (
        <div className="navPhone md:hidden absolute bg-black/70 w-full py-4 left-0 top-12 overflow-hidden flex flex-col">
          <Link
            to={"/"}
            className="w-full px-5 py-3 border-b border-zinc-900 bg-black/90 backdrop-blur-xl hover:bg-radial hover:mask-t-from-[rgb(0,0,5)]"
          >
            Home
          </Link>

          <Link
            to={"/about"}
            className="w-full px-5 py-3 border-b border-zinc-900 bg-black/90 backdrop-blur-xl hover:bg-radial hover:mask-t-from-[rgb(0,0,5)]"
          >
            About
          </Link>

          <Link
            to={"/projects"}
            className="w-full px-5 py-3 border-b border-zinc-900 bg-black/90 backdrop-blur-xl hover:bg-radial hover:mask-t-from-[rgb(0,0,5)]"
          >
            Projects
          </Link>

          <Link
            to={"/contact"}
            className="w-full px-5 py-3 border-b border-zinc-900 bg-black/90 backdrop-blur-xl hover:bg-radial hover:mask-t-from-[rgb(0,0,5)]"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
