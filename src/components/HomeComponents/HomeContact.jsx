import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const HomeContact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeContact",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    });
    tl.from(".problem", {
      opacity: 0,
      y: -40,
      scale: 0.8,
    });
    tl.from(".contact", {
      opacity: 0,
      y: -50,
      duration: 1,
      scale: 0.6,
    });
    tl.from("button", {
      scale: 0,
      opacity:0.6
    })
  });

  const navigate = useNavigate("")
  return (
    <div className="homeContact w-full mt-10 flex justify-center items-center flex-col">
      <div className="problem text-[30px] md:text-[50px] font-bold">
        Have a hard Problem?
      </div>

      <div className="contact text-lg mt-2 md:text-xl font-semibold md:max-w-[60vw] text-center ">
        If that's the case, don't hesitate to contact me. I'm always open to
        hearing proposals and growing together.
      </div>

      <button className="mt-10 text-lg md:text-xl font-semibold border px-8 py-2 rounded-xl bg-[rgb(12,12,20)] cursor-pointer" onClick={()=>navigate("/contact") }>
        Contact me
      </button>
    </div>
  );
};

export default HomeContact;
