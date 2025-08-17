import React from 'react'

const Skills = () => {
  return (
    <div className="pt-24 px-15">
      <div className="flex gap-24">
        <div className="w-2/3 text-2xl pt-10">
          <h2 className="text-4xl text-sky-400 mb-4">Introduction : </h2>
          "My skills reflect a balance of strong fundamentals in computer
          science, hands-on experience in full-stack development,
          andproblem-solving expertise. From crafting intuitive user interfaces
          to designing efficient algorithms and scalable backend systems, I aim
          to build solutions that are both functional and impactful."
        </div>
        <img src="./six.svg" alt="image" className="h-72" />
      </div>

      <div className="flex gap-24">
        <img src="eduBlue.svg" alt="" className="h-96 mt-[-50px]" />
        <div className="w-2/3 text-2xl pt-10">
          <h2 className="text-4xl text-sky-400 mb-4">
            Programming Languages :
          </h2>
          <span className="text-rose-500">C / C++</span> → Solid understanding
          of memory management, pointers, OOP, STL, and system-level
          programming. Used extensively for Data Structures & Algorithm
          challenges. <br />
          <span className="text-rose-500">JavaScript (ES6+) </span> → Core
          scripting language for web development, asynchronous programming
          (Promises, async/await), DOM manipulation, and event-driven
          programming.
        </div>
      </div>

      <div className="flex gap-24">
        <div className="w-2/3 text-xl pt-12">
          <h2 className="text-4xl text-sky-400 mb-4">
            Frontend, Backend & Databases:
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              HTML5 / CSS3 → Semantic structure, responsive design, animations,
              and accessibility best practices
            </li>
            <li>
              TailwindCSS & Bootstrap → Rapid UI development with reusable,
              responsive, and modern design components.
            </li>
            <li>
              React.js → Component-based architecture, hooks (useState,
              useEffect, useContext), props drilling vs state management,
              routing, API integration, and performance optimization.
            </li>
            <li>
              Node.js (Basics) → REST API creation, Express.js fundamentals, and
              asynchronous server-side programming.
            </li>
            <li>
              MongoDB → NoSQL database, CRUD operations, schema design with
              Mongoose, and indexing basics.
            </li>
          </ul>
        </div>
        <img src="expBlue.svg" alt="" className="h-96 mt-2" />
      </div>

      <div className="flex gap-24">
        <img src="seven.svg" alt="" className="h-96 mt-6" />
        <div className="w-2/3 text-xl pt-16">
          <h2 className="text-4xl text-sky-400 mb-4">Additional Skills:</h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              UI/UX Awareness → Designing user-friendly and accessible
              interfaces.
            </li>
            <li>
              Basic Python & Java → For scripting, problem-solving, and
              exploring backend frameworks.
            </li>
            <li>
              Soft Skills →
              <ul className='list-disc list-inside pl-8'>
                <li>Communication: Explaining technical concepts clearly.</li>
                <li>Teamwork: Collaborating on projects effectively.</li>
                <li>Continuous Learning: Keeping up with new technologies.</li>
                <li>Debugging Mindset: Finding root causes and fixing them systematically.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className='mt-5 mb-5 w-full text-center text-lg italic text-red-400'>“Technology evolves every day — and so do I, sharpening my skills to transform creative ideas into impactful digital solutions.”</p>
    </div>
  );
}

export default Skills
