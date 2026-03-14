import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cpu, Lock, Settings } from "lucide-react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP)
const Info = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "GSAP",
    "Bootstrap",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
  ];
  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vercel",
    "Figma",
    "Chrome DevTools",
  ];

  useGSAP(() => {
    gsap.utils.toArray(".skill").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        rotateY:90,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });
  })


  return (
    <div className="info w-full mt-10 md:grid gap-5 md:grid-cols-2">
      <div className="skill border border-gray-900 rounded-4xl px-3 py-5 md:px-5 flex flex-col gap-4">
        <div>STORY</div>
        <h1 className="text-3xl md:text-5xl font-bold">About me</h1>
        <p>
          I discovered programming during my school years when curiosity about
          how websites and software work pushed me to start exploring technology
          on my own. What began with simple experiments soon turned into a
          genuine passion for building things with code and understanding the
          logic behind them.
        </p>

        <p>
          I continued learning, I started diving deeper into computer science
          fundamentals. I spent time strengthening my skills in data structures
          and algorithms, while also building projects using modern web
          technologies. Through this journey, I experienced how quickly the tech
          world evolves, from basic static pages to powerful frameworks and
          tools that completely transform how we design and develop software.
        </p>

        <p>
          Today, I focus on combining strong problem-solving skills with
          practical development experience. I enjoy building clean, efficient
          web applications while constantly improving my analytical thinking
          through DSA and system design concepts. With the rapid growth of
          artificial intelligence and modern developer tools, I see this era as
          an exciting opportunity to learn faster, build smarter solutions, and
          contribute to the future of technology.
        </p>
      </div>

      <div className="skill border border-gray-900 rounded-4xl px-3 py-5 md:px-5 flex flex-col gap-4 ">
        <div>SKILLS</div>
        <h1 className="text-3xl md:text-5xl font-bold">My skillset</h1>
        <p>
          The developer landscape is evolving rapidly with the rise of
          artificial intelligence and modern tools. I no longer approach
          software in the conventional way. I focus on becoming a
          builder—someone with strong technical fundamentals and a clear product
          vision who can design systems and effectively leverage AI and modern
          technologies to create smarter solutions
        </p>

        <h2 className="text-xl font-semibold ">Frontend</h2>
        <div className="flex gap-2 flex-wrap">
          {frontendSkills.map((skill, ind) => (
            <div
              key={ind}
              className="px-3 shrink-0 py-0.5 md:py-1 border border-gray-500 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold ">Backend</h2>
        <div className="flex gap-2 flex-wrap">
          {backendSkills.map((skill, ind) => (
            <div
              key={ind}
              className="px-3 shrink-0 py-0.5 md:py-1 border border-gray-500 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold ">Development Tools & Software</h2>
        <div className="flex gap-2 flex-wrap">
          {tools.map((skill, ind) => (
            <div
              key={ind}
              className="px-3 shrink-0 py-0.5 md:py-1 border border-gray-500 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skill border border-gray-900 rounded-4xl px-3 py-5 md:px-5 flex flex-col gap-4 ">
        <div>VALUE</div>
        <h1 className="text-3xl md:text-5xl font-bold">What drives me</h1>

        <div className="flex gap-3">
          <div className=" h-full">
            {/* <div className="p-1.5 flex items-center justify-center border rounded-lg"> */}
            <Cpu className="text-orange-400 size-5 mt-1" />
            {/* </div> */}
          </div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Embracing technological evolution
            </div>
            <div>
              Technology evolves constantly, and instead of resisting it, I
              believe in embracing new tools and innovations that help solve
              complex problems and push the boundaries of what we can build.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className=" h-full">
            {/* <div className="p-1.5 flex items-center justify-center border rounded-lg"> */}
            <Settings className="text-orange-400 size-5 mt-1" />
            {/* </div> */}
          </div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Product-focused development
            </div>
            <div>
              Great software starts with a clear product vision. I focus on
              building solutions where functionality, scalability, and
              structured logic guide the development process.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className=" h-full">
            {/* <div className="p-1.5 flex items-center justify-center border rounded-lg"> */}
            <Lock className="text-orange-400 size-5 mt-1" />
            {/* </div> */}
          </div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Quality and security
            </div>
            <div>
              As systems grow more automated and complex, maintaining strong
              standards for code quality, reliability, and security becomes
              essential to building trustworthy and sustainable products.
            </div>
          </div>
        </div>
      </div>

      <div className="skill border border-gray-900 rounded-4xl px-3 py-5 md:px-5 flex flex-col gap-4 ">
        <div>CURRENTLY</div>
        <h1 className="text-3xl md:text-5xl font-bold">What I am up to</h1>

        <div className="flex gap-3">
          <div className="w-3 h-3 bg-white rounded-full mt-2.5"></div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Quality and security
            </div>
            <div>
              As systems grow more automated and complex, maintaining strong
              standards for code quality, reliability, and security becomes
              essential to building trustworthy and sustainable products.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-3 h-3 bg-white rounded-full mt-2.5"></div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Exploring modern development tools
            </div>
            <div>
              Actively learning and experimenting with new technologies,
              frameworks, and AI-powered tools to improve development speed and
              build smarter solutions.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-3 h-3 bg-white rounded-full mt-2.5"></div>
          <div className="flex-1">
            <div className="text-[20px] font-semibold">
              Building practical projects
            </div>
            <div>
              Developing real-world projects that combine clean architecture,
              scalable design, and efficient problem-solving to continuously
              improve my development skills.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
