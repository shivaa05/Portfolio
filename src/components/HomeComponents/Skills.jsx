import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { frontendSkills } from "../../data/frontendSkills";
import { backendSkills } from "../../data/backendSkills";
import { tools } from "../../data/tools";
import { languages } from "../../data/languages";


const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".rotate-left", {
      x: "-50%",
      duration: 120,
      ease: "none",
      repeat: -1,
    });

    gsap.fromTo(
      ".rotate-right",
      { x: "-50%" },
      {
        x: "0%",
        duration: 110,
        ease: "none",
        repeat: -1,
      },
    );
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
      },
    });

    tl.from(".h1skill", {
      scale: 0.6,
      opacity:0
    })
    tl.from(".skill", {
      opacity: 0,
      stagger:0.2
    })

  });

  return (
    <div className="skills w-full overflow-hidden mt-20 md:text-lg font-semibold flex flex-col gap-6 justify-center">
      <h1 className="h1skill text-3xl md:text-5xl text-center ">My Skills</h1>
      <div className="skill rotate-left flex gap-5 w-max mt-5">
        {frontendSkills.map((skill, i) => (
          <div
            key={i}
            className="shrink-0 px-2 md:px-8 py-2 items-center text-center flex gap-3 rounded-full"
          >
            <img src={skill.logo} alt="logo" className="size-5 md:size-6" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>

      <div className="skill rotate-right flex gap-3 w-max">
        {backendSkills.map((skill, i) => (
          <div
            key={i}
            className="shrink-0 px-2 md:px-8 py-2 items-center text-center flex gap-3 rounded-full"
          >
            <img src={skill.logo} alt="logo" className="size-5 md:size-6" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>

      <div className="skill rotate-left flex gap-5 w-max">
        {tools.map((skill, i) => (
          <div
            key={i}
            className="shrink-0 px-2 md:px-8 py-2 items-center text-center flex gap-3 rounded-full"
          >
            <img src={skill.logo} alt="logo" className="size-5 md:size-6" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>

      <div className="skill rotate-right flex gap-5 w-max">
        {languages.map((skill, i) => (
          <div
            key={i}
            className="shrink-0 px-2 md:px-8 py-2 items-center text-center flex gap-3 rounded-full"
          >
            <img src={skill.logo} alt="logo" className="size-5 md:size-6" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
