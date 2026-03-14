import { Settings } from 'lucide-react';
import React from 'react'

const ProjectContainer = ({project,index}) => {
  return (
    <a
      href={project.link}
      target="blank"
      className="w-full border rounded-3xl border-zinc-500/30  md:p-6 p-4 hover:bg-[radial-gradient(circle,rgba(50,20,100,0.2),transparent_70%)] duration-500 hover:scale-101 "
    >
      <img src="" alt="" />
      <div className="flex gap-4 items-center ">
        <div>
          <Settings className="text-[#9E51E9] size-8 animate-spin spin" />
        </div>
        <div className="bg-[#0E271B] text-[#1FAA52] border border-green-600/30 px-4 py-1 rounded-lg">
          Project Link
        </div>
      </div>

      <div className="mt-3 font-semibold text-3xl">{project.title}</div>
      <div className="hidden md:block text-sm md:text-[17px] mt-1 md:mt-2">
        {project.tagline}
      </div>
      <div className="text-sm md:text-[16px] mt-2 md:mt-4 md:max-w-2/3">
        {project.description}
      </div>

      <div className="flex gap-2 md:gap-3 mt-3 md:mt-5 flex-wrap md:pr-20">
        {project.techStack.map((t, ind) => (
          <div
            key={ind}
            className={` bg-[#1a12264a] text-[#9E51E9] text-sm md:text-[16px] px-4 py-1 border border-purple-400/20 rounded-full shrink-0`}
          >
            {t}
          </div>
        ))}
      </div>
    </a>
  );
}

export default ProjectContainer