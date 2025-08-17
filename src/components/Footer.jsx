import React from "react";
import { FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full absolute bottom-0 h-16 bg-[#0d1224] overflow-hidden">
      <hr />
      <div className=" flex h-[100%] justify-between items-center my-auto px-10">
        <div className="left">
          ⓒ Developer portfolio by{" "}
          <span className="text-fuchsia-400 font-bold">Shiva Verma </span>
        </div>

        {/* social media icons */}
        <div className="right text-2xl flex gap-4 h-[100%] items-center-safe">
          <span className="text-xl">Contact me: </span>
          <Link to="https://github.com/shivaa05?tab=repositories">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/shiva-verma-700b9228b/">
            <FaLinkedin />
          </Link>
          <Link to="https://leetcode.com/u/shivaverma32/">
            <SiLeetcode />
          </Link>
          <Link to="https://www.instagram.com/itz_shiva_5/">
            <FaInstagram />
          </Link>
          <Link to="mailto:shivaverma3211.a@gmail.com">
            <BiLogoGmail />
          </Link>
          <Link to="tel:+917523924452">
            <FaPhoneAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
