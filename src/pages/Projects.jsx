import React from 'react'
import ProjectContainer from '../components/ProjectComponents/ProjectContainer';
import { projects } from '../data/project';

const Projects = () => {
  return (
    <div className="relative w-full h-full mt-5 md:mt-12 p-1 z-10">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="border px-4 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]">
          My Development Journey
        </div>

        <div className="mt-5 text-center text-[7vw] md:text-[4vw] font-bold md:leading-19 md:max-w-[70vw] lg:max-w-[45vw]">
          Projects That Define My Craft
        </div>

        <p className="md:text-3xl mt-2 md:mt-8 max-w-[90vw] text-center md:max-w-[70vw] font-normal md:text[25px]">
          Turning complex problems into scalable software solutions through
          thoughtful engineering and modern technologies.
        </p>

        <div className="mt-10 md:mt-10 text-center">
          <div className='md:text-lg'>FEATURED </div>
          <div className="font-bold text-xl md:text-4xl mt-4">
            Explore the work I've built
          </div>
        </div>
      </div>

      <div className='flex gap-5 flex-col mt-10'>
        {projects.map((project, ind) => <ProjectContainer key={ind} project={project} index={ind} />)}
      </div>
    </div>
  );
}

export default Projects