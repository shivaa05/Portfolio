import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex px-20 pt-10 justify-between mt-15 ">
      {/* Left Section */}
      <div className="flex flex-col w-[40%] pt-10">
        <h1 className=" name-heading text-5xl font-bold mb-4">
          Hello, I'm{" "}
          <span className="text-cyan-400 font-extrabold ">Shiva Verma</span>
        </h1>
        <p className="text-2xl leading-9">
          MERN Stack Developer skilled in{" "}
          <span className="text-lime-300">React, Node, MongoDB,</span> and{" "}
          <span className="text-lime-300">Express, </span>
          passionate about building dynamic, scalable, responsive web applications withclean UI, problem-solving, and innovative solutions.
        </p>

        <div className="mt-6 flex gap-10">
          <div className=" w-[max-content] flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold text-cyan-400">600+</h2>
            <p className="text-gray-300">LeetCode Problems</p>
          </div>
          <div className=" w-[max-content] flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold text-cyan-400">5+</h2>
            <p className="text-gray-300">Projects</p>
          </div>
          <div className=" w-[max-content] flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold text-cyan-400">8.5</h2>
            <p className="text-gray-300">CGPA</p>
          </div>
        </div>


        <div className="mt-7">
          <Link to="/about" className="min-w-36 border-[1px] border-cyan-200 px-5 rounded-full py-[6px] cursor-pointer text-xl mr-10 ">
            {" "}
            About me
          </Link>
          <Link to="/contact" className="min-w-36 border-[1px] border-cyan-200 bg-gradient-to-r from-indigo-600 to-pink-900 px-5 rounded-full py-[6px] cursor-pointer text-xl mr-10 ">
            {" "}
            Contact me
          </Link>
        </div>

        <p className="mt-7 italic text-xl text-rose-400">"Code is my craft, creativity is my tool."</p>

      </div>

      {/* Right Section */}
      <div className="w-[45%] border-[1px] border-indigo-900 rounded-md min-h-96 bg-gradient-to-r from-[#0d1224] to-[#131960] flex flex-col ">
        {/* Header */}
        <div className="h-12 border-b-[1px] border-b-lime-600 flex items-center gap-2 ps-5">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-orange-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-200"></span>
        </div>
        {/* Code Section */}
        <div className=" code-editor p-5">
          <span className="text-pink-600">const</span> Shiva = {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name :{" "}
          <span className="text-amber-300">"Shiva Verma"</span> ,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; skills : {"["}{" "}
          <span className="text-amber-300">
            'C' , 'C++' , 'HTML' , 'CSS' , 'JavaScript' , 'React' , 'React' ,
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'MongoDB' , 'Express' , 'Node
            JS' , 'MySQL' , ' Tailwind CSS' , 'Bootstrap'
          </span>
          {" ] ,"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; problemSolver :{" "}
          <span className="text-red-500">true</span> ,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hardWorker :{" "}
          <span className="text-red-500">true</span> , <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; quickLearner :{" "}
          <span className="text-red-500">true</span> , <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hobbies :{" [ "}
          <span className="text-amber-300">
            'Playing Cricket ' , 'Watching Movies' , 'Playing video games' ,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Exploring new things"
          </span>{" "}
          {" ] ,"} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; moreSkills :{" [ "}
          <span className="text-amber-300">
            ' Critical thinking' , 'Problem solving' , 'Leadership'
          </span>{" "}
          {" ] ,"} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; isGoodStudent = ( ) =&gt; {" { "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;<span className="text-red-500">this</span>
          .hardWorker && <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;<span className="text-red-500">this</span>
          .problemSolver && <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;<span className="text-red-500">this</span>
          .quickLearner && <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          );
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"};"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {"};"}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
