import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
const Home = () => {
  const imageRef = useRef(null);
  const skillsRef1 = useRef(null);
  const skillsRef2 = useRef(null);
  const skillsText1 = useRef(null);
  const skillsText2 = useRef(null);
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.from(imageRef.current, {
      opacity: 0,
      duration: 0.4,
      scale: 0,
      y: -100,
    });

    tl.from(skillsRef1.current, {
      x: -100,
      rotateX:60,
      duration: 0.4,
      opacity: 0,
    },"abc");
    tl.from(skillsRef2.current, {
      x: 100,
      rotateX:60,
      duration: 0.4,
      opacity: 0,
    }, "abc");
    

    tl.from(".first", {
      y: 20,
      opacity:0,
      stagger: 0.05,
      duration:0.5,
    },"name")
    tl.from(".last", {
      y: 20,
      opacity:0,
      duration:0.5,
      stagger:-0.05
    }, "name")
    
    tl.from(".info", {
      scale: 0.4,
      opacity:0,
      y:-100,
      rotateX:100
    },"info")
    tl.from(".info2", {
      scale: 1.4,
      opacity: 0,
      y:-100,
      rotateX:-100
    },"info")

    tl.from(".follow", {
      scale: 0,
      y:-100,
    })
  });
  return (
    <div className="w-full h-full mt-5 md:mt-12 ">
      <div className="flex flex-col items-center justify-center">
        <div
          ref={imageRef}
          className="h-36 w-36 md:h-44 md:w-44 border rounded-full overflow-hidden"
        >
          <img src="./profile.png" className="object-cover" />
        </div>
        <div className="flex gap-3 md:gap-8 mt-8 overflow-hidden px-10">
          <div
            ref={skillsRef1}
            className="border px-3 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]"
          >
            <span ref={skillsText1}>Problem solving</span>
          </div>
          <div
            ref={skillsRef2}
            className="border px-3 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]"
          >
            <span ref={skillsText2}>Critical thinker</span>
          </div>
        </div>

        <h1 className="name text-[35px] md:text-[70px] font-semibold mt-6 md:mt-0 overflow-hidden">
          <span className="first inline-block">S</span>
          <span className="first inline-block">h</span>
          <span className="first inline-block">i</span>
          <span className="first inline-block">v</span>
          <span className="first inline-block">a</span>
          <span className="">{" "}</span>
          <span className="last inline-block">V</span>
          <span className="last inline-block">e</span>
          <span className="last inline-block">r</span>
          <span className="last inline-block">m</span>
          <span className="last inline-block">a</span>
        </h1>
        <h2 className="info text-xl font-bold max-w-[80vw] text-center md:text-4xl md:max-w-[50vw] mt-3  md:-mt-1">
          Building the future, with the future technology
        </h2>

        <p className="info2 max-w-[85vw] md:hidden mt-3 text-center text-sm">
          Building reliable and scalable applications through clean code, strong
          problem-solving, continuous learning, and thoughtful software design.
        </p>

        <div className="follow mt-15 md:mt-13 text-lg md:text-2xl font-semibold">
          Follow my development journey
        </div>
      </div>
    </div>
  );
};

export default Home;
Home;
