import React from "react";
const About = () => {
  return (
    <div className="h-auto py-24 px-15">
      <div className="flex gap-14 pb-24">
        <div className="w-44 relative">
          <hr className="transform rotate-z-90 absolute w-48 origin-left left-20 top-14 border-rose-500 border-2 " />
          <button className=" rotate-z-[90deg] absolute origin-left bg-rose-500 left-20 top-8 w-28 py-1 text-lg rounded-lg">
            Contact me
          </button>
        </div>
        <div className="h-[280px] w-[254px] bg-red-500 rounded-lg">
          <img
            src="./profile.jpg"
            alt="profile"
            className="h-full w-full object-cover top-0 rounded-lg"
          />
        </div>
        <div className=" overflow-y-scroll h-full w-1/2 ml-28 mt-4 text-2xl ">
          <h2 className="text-4xl mb-3 text-sky-500">About Me : </h2>I am{" "}
          <span className="text-rose-400">Shiva Verma</span>, a{" "}
          <span className="text-blue-400">passionate Software Developer</span>{" "}
          and
          <span className="text-blue-400"> Web Developer</span> dedicated to
          building scalable, efficient, and user-friendly applications. With a
          strong foundation in both{" "}
          <span className="text-rose-400">front-end</span> and{" "}
          <span className="text-rose-400">back-end technologies</span>, I thrive
          on solving complex problems and creating impactful{" "}
          <span className="text-sky-400">digital experiences</span>.
        </div>
      </div>

      <div className="flex gap-24">
        <div className="text-2xl py-20 w-2/3">
          <h2 className="text-4xl mb-4 text-sky-500">
            Professional Summary :{" "}
          </h2>
          I have hands-on experience with HTML, CSS, JavaScript, React,
          TailwindCSS, and Bootstrap for front-end development, along with C and
          C++ for core programming. My work is driven by a combination of{" "}
          <span className="text-orange-500">
            clean code practices, creative UI/UX design,
          </span>{" "}
          and <span className="text-orange-500">problem-solving skills</span>{" "}
          honed by completing 600+ data structure and algorithm challenges on{" "}
          <span className="text-rose-500">LeetCode</span>. I am continuously
          exploring new technologies and methodologies to improve{" "}
          <span className="text-yellow-500">software efficiency </span>
          and
          <span className="text-yellow-500"> user experience.</span>
        </div>
        <img src="./expBlue.svg" alt="table" className="h-96" />
      </div>

      <div className="flex gap-24 pb-14">
        <img src="./eduBlue.svg" alt="table" className="h-96" />
        <div className="text-2xl py-20 w-2/3">
          <h2 className="text-4xl mb-4 text-sky-500">Technical Skills : </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <span className="text-rose-400">Languages : </span> C, C++,
              JavaScript
            </li>
            <li>
              <span className="text-rose-400">Web Development :</span> HTML,
              CSS, TailwindCSS, Bootstrap, React
            </li>
            <li>
              <span className="text-rose-400">Database & Backend :</span>{" "}
              MongoDB, Node.js (basic knowledge)
            </li>
            <li>
              <span className="text-rose-400">Version Control :</span> Git &
              GitHub
            </li>
            <li>
              <span className="text-rose-400">Problem Solving : </span> Data
              Structures & Algorithm
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-24">
        <div className="text-2xl pt-20 w-2/3">
          <h2 className="text-4xl mb-4 text-sky-500">My Vision : </h2>
          My goal is to contribute to innovative projects that make a real-world
          impact while continuously growing as a developer. I aim to master
          full-stack development, implement scalable solutions, and bring
          creative ideas to life through clean, efficient code.
          <p className="text-rose-300 italic mt-10 text-lg">"Where logic meets creativity — that's software engineering."</p>
        </div>
        <img src="expBlue.svg" alt="table" className="h-96" />
      </div>

      {/* <div className=" flex ">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa
          praesentium cumque ducimus officiis sint nulla animi tempore maxime,
          quas minima soluta. Unde, tenetur. Sunt repellat placeat similique
          modi saepe. lorem100
        </div>
          <div className="w-full h-full ml-200px">
            <AnimationLottie animationPath={experience} className="p-32 bg-amber-700" />
        </div>
      </div> */}
    </div>
  );
};

export default About;
