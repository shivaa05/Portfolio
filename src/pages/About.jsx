import React from 'react'
import Info from '../components/AboutComponents/Info';
import { useNavigate } from 'react-router-dom';

const About = () => {
  
  const navigate = useNavigate("")
  return (
    <div className="relative w-full h-full mt-5 md:mt-12 p-1 z-10">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="border px-4 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]">
          Code Beyond Limits
        </div>

        <div className="mt-5 text-center text-[7vw] md:text-[4vw] font-bold md:leading-20 md:max-w-[70vw] lg:max-w-[60vw]">
          Developing technology that moves ideas forward.
        </div>

        <p className="md:text-3xl mt-2 md:mt-8 max-w-[90vw] text-center md:max-w-[70vw] font-normal md:text[25px]">
          I enjoy solving complex problems using data structures and algorithms,
          and applying that logic to build modern web applications.
        </p>

        <div className="mt-10 md:mt-20 font-bold text-lg md:text-4xl">
          Navigate through my trajectory
        </div>
      </div>

      <Info />

      <div className="mt-8 text-3xl font-bold text-center">
        Let us build something together
      </div>

      <div className="w-full flex items-center justify-center flex-col text-center md:text-xl mt-3">
        <div className="md:max-w-[50vw]">
          If you have a project in mind or want to talk web development, I would
          like to hear from you.
        </div>

        <div className='flex gap-2 md:gap-6 mt-4 md:mt-8'>
          <div className='px-3 py-1 md:px-6 md:py-2 cursor-pointer border border-gray-700 rounded-xl' onClick={()=>navigate("/contact")}>Get in touch</div>
          <div className='px-3 py-1 md:px-6 md:py-2 cursor-pointer border border-gray-700 rounded-xl' onClick={()=>navigate("/projects")}>View my work</div>
        </div>
      </div>
    </div>
  );
}

export default About
