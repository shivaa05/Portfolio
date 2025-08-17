import React from 'react'
import { FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full absolute bottom-0 h-16 bg-[#0d1224] overflow-hidden">
      <hr />
      <div className="flex h-[100%] justify-between items-center my-auto px-10">
        <div>
          ⓒ Developer portfolio by{" "}
          <span className="text-fuchsia-400 font-bold">Shiva Verma </span>
        </div>

        {/* social media icons */}
        <div className="text-2xl flex gap-4 h-[100%] items-center-safe">
          <span className="text-xl">Contact us: </span>
          <a href="https://github.com/shivaa05?tab=repositories" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-verma-700b9228b/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/shivaverma32/" target="blank">
            <SiLeetcode />
          </a>
          <a href="https://www.instagram.com/itz_shiva_5/" target="blank">
            <FaInstagram />
          </a>
          <a href="mailto:shivaverma3211.a@gmail.com" target="blank">
            <BiLogoGmail />
          </a>
          <a href="tel:+917523924452" target="blank">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer
