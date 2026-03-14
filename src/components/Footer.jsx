import { Copyright, Github, Mail, Phone } from 'lucide-react'
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)
const Footer = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        end: "top 90%",
        scrub:2
      }
    })

    tl.from(".footer .left", {
      x: -150,
      duration: 0.4,
    })
    tl.from(".footer .right", {
      x: 250,
      opacity:0,
      duration: 0.4,
    })
  })
  return (
    <div className="footer absolute bottom-0 w-full px-2 md:px-[10vw] py-4 flex justify-center md:justify-between items-center">
      <div className="left flex items-center gap-2">
        <Copyright className="size-5" /> 2026 Made by Shiva💖
      </div>

      <div className="right hidden md:flex gap-2 md:gap-4 z-100 border px-15 py-3 rounded-full bg-[rgba(10,10,10,0.5)] backdrop-blur-5xl border-gray-600">
        <a
          href={"https://github.com/shivaa05"}
          target="blank"
          className="border cursor-pointer rounded-full p-1.5"
        >
          <Github className="size-5" />
        </a>

        <a
          href={"https://leetcode.com/shivaverma32"}
          target="blank"
          className="border cursor-pointer rounded-full p-1.5"
        >
          <SiLeetcode className="size-5" />
        </a>

        <a
          href={"https://www.linkedin.com/in/shivaa05/"}
          target="blank"
          className="border cursor-pointer rounded-full p-1.5"
        >
          <FaLinkedinIn className="size-5" />
        </a>

        <a
          href={"mailto:shivaverma3211.a@gmail.com"}
          className="border cursor-pointer rounded-full p-1.5"
        >
          <Mail className="size-5" />
        </a>

        <a
          href={"tel:+917523924452"}
          className="border cursor-pointer rounded-full p-1.5"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  );
}

export default Footer

