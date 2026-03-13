import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { FileDown, GithubIcon } from "lucide-react";
import HomeContact from "../components/HomeComponents/HomeContact";
import Skills from "../components/HomeComponents/Skills";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(useGSAP, TextPlugin);
const Home = () => {
  const [index, setIndex] = useState(0);
  const heroTexts = [
    "Passionate Developer",
    "Building Web Apps",
    "Clean Code Advocate",
    "Creative Problem Solver",
    "Always Learning Tech",
  ];

  const imageRef = useRef(null);
  const skillsRef1 = useRef(null);
  const skillsRef2 = useRef(null);
  const skillsText1 = useRef(null);
  const skillsText2 = useRef(null);
  const textRef = useRef(null);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(imageRef.current, {
      opacity: 0,
      duration: 0.3,
      scale: 0,
      y: -100,
    });

    tl.from(
      skillsRef1.current,
      {
        x: -100,
        rotateX: 60,
        duration: 0.2,
        opacity: 0,
      },
      "abc",
    );
    tl.from(
      skillsRef2.current,
      {
        x: 100,
        rotateX: 60,
        duration: 0.2,
        opacity: 0,
      },
      "abc",
    );

    tl.from(
      ".first",
      {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.2,
      },
      "name",
    );
    tl.from(
      ".last",
      {
        y: 20,
        opacity: 0,
        duration: 0.2,
        stagger: -0.05,
      },
      "name",
    );

    tl.from(
      ".info",
      {
        scale: 0.3,
        opacity: 0,
        y: -20,
        rotateX: 100,
        duration: 0.2,
      },
      "info",
    );
    tl.from(
      ".info2",
      {
        scale: 1.4,
        opacity: 0,
        y: -20,
        rotateX: -100,
        duration: 0.2,
      },
      "info",
    );

    tl.from(".follow", {
      opacity: 0,
      y: 40,
      duration: 0.2,
    });

    const typingTl = gsap.timeline({ repeat: -1, delay: 0 });

    heroTexts.forEach((text) => {
      typingTl.call(() => {
        const letters = text
          .split("")
          .map(
            (letter) =>
              `<span class="letter inline-block">${letter === " " ? "&nbsp;" : letter}</span>`,
          )
          .join("");

        textRef.current.innerHTML = letters;

        gsap.from(".letter", {
          y: 20,
          opacity: 0,
          filter: "blur(8px)",
          stagger: 0.05,
          duration: 0.2,
          ease: "power3.out",
        });
        gsap.to(".letter", {
          y: -20,
          opacity: 0,
          filter: "blur(8px)",
          stagger: -0.03,
          duration: 0.2,
          ease: "power3.out",
          delay:3
        });
      });

      typingTl.to({}, { duration: 3.8 }); // pause
    });
  });

  const boxRef = useRef(null);
  useEffect(() => {
    const moveBox = (e) => {
      gsap.to(boxRef.current, {
        x: e.pageX,
        y: e.pageY,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", moveBox);

    return () => {
      window.removeEventListener("mousemove", moveBox);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        console.log(prev);
        return (prev + 1) % heroTexts.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full mt-5 md:mt-12">
      <div
        ref={boxRef}
        className="cursor absolute -top-44 -left-56 size-36 rounded-full"
      >
        {""}
      </div>
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

        <h1 className="name text-[35px] md:text-[75px] font-bold mt-6 md:mt-0 overflow-hidden bg-linear-30 text-amber-100">
          <span className="first inline-block">S</span>
          <span className="first inline-block">h</span>
          <span className="first inline-block">i</span>
          <span className="first inline-block">v</span>
          <span className="first inline-block">a</span>
          <span className=""> </span>
          <span className="last inline-block">V</span>
          <span className="last inline-block">e</span>
          <span className="last inline-block">r</span>
          <span className="last inline-block">m</span>
          <span className="last inline-block">a</span>
        </h1>
        <h2
          ref={textRef}
          className="text-xl font-bold max-w-[80vw] text-center md:text-4xl md:max-w-[50vw] mt-3 md:-mt-1 h-12 overflow-hidden text-blue-200"
        ></h2>

        <p className="info2 max-w-[85vw] md:max-w-[55vw] md:text-xl mt-3 text-center text-sm">
          Building reliable and scalable applications through clean code, strong
          problem-solving, continuous learning, and thoughtful software design.
        </p>

        <div className="follow mt-15 md:mt-8 text-lg md:text-2xl font-semibold flex gap-5 md:gap-8">
          <div className="border px-3 py-1 md:py-2 md:px-4 rounded-2xl  bg-[rgb(21,23,32)] flex gap-2 items-center w-44 justify-center">
            <GithubIcon /> Projects
          </div>
          <div className="border px-3 py-1 md:py-2 md:px-4 rounded-2xl  bg-[rgb(21,23,32)] flex gap-2 items-center w-44 justify-center">
            <FileDown /> Resume
          </div>
        </div>
      </div>

      <Skills/>

      <HomeContact/>
    </div>
  );
};

export default Home;
Home;
