import React, { useState } from 'react';
import tabImg from "./images/tablocking.png";
import stockImg from "./images/stock.png";
import expenseImg from "./images/expense.png";
import spotifyImg from "./images/spotify.png";
import react from "./images/react.png";
import css from "./images/css.png";
import html from "./images/html.png"
import js from "./images/js.png";
import int from "./images/int.png";
import java from "./images/java.png";
import font from "./images/font.png";
import sql from "./images/sql.png";
import junit from "./images/junit.png";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="project" className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
      <a
        className="relative group/pin z-50 cursor-pointer"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: '1000px' }}
        >
          <div
  className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl
             bg-[#020305] border border-white/10
             shadow-[0_12px_30px_rgb(0_0_0/0.6)]
             transition-transform duration-500 ease-in-out
             origin-bottom"
  style={{
    transform: isHovered
      ? "translate(-50%, -50%) rotateX(50deg) scale(0.97)"
      : "translate(-50%, -50%) rotateX(0deg) scale(1)",
  }}
>




            <div className="relative z-50">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#020305]">
                  <img src="/bg.png" alt="bg-img" className="w-full h-full object-cover" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="z-10 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
                />
              </div>
              <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">{project.title}</h1>
              <p className="lg:text-xl text-white lg:font-normal font-light text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${idx * 10}px)` }}
                    >
                      <img src={tech} alt={tech} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className=" flex lg:text-xl md:text-xs text-purple-300">Check Live Site</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="ms-3"
                    color="#CBACF9"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'rgb(203, 172, 249)' }}
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`pointer-events-none w-full h-80 flex items-center justify-center z-[60] transition duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="w-full h-full -mt-7 flex-none inset-0">
            <div className="absolute top-0 inset-x-0 flex justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
                href={project.link}
              >
                <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                  {project.link}
                </span>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
              </a>
            </div>
            <div
              className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
              style={{ perspective: '1000px', transform: 'rotateX(70deg) translateZ(0px)' }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                style={{ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(0.494507)' }}
              ></div>
              <div
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                style={{ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(0.00797643)' }}
              ></div>
              <div
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                style={{ opacity: 0, transform: 'translateX(-50%) translateY(-50%) scale(0.84785)' }}
              ></div>
            </div>
            <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"></div>
            <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40"></div>
            <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"></div>
            <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Project = () => {
  const projectsData = [
    {
      title: 'Tab-Locking Browser Extension',
      description:
        'I recently built a browser extension that allows users to lock sensitive tabs with authentication — ensuring online activity remains secure and accessible only to the right user.',
      image: tabImg,
      link: 'https://github.com/rohit-verma-211/Browser-Tab-Locking',
      techStack: [js, html, css],
    },


    {
      title: 'Stock Market Platform',
      description:
        'A web-based stock market platform designed to help users track market trends, analyze stocks, and make informed investment decisions through an intuitive and user-friendly interface.',
      image: stockImg,
      link: 'https://github.com/rohit-verma-211/ElitebrokegeSecurities',
      techStack: [react, js, html, css],
    },
    {
      title: 'Expense Tracker',
      description:
        'Automated expense tracking, category-wise analysis, and financial reporting using a Java-based system.',
      image: expenseImg,
      link: 'https://github.com/rohit-verma-211/expense-tracker',
      techStack: [java, sql, junit, int],
    },
    {
      title: 'Spotify Clone',
      description:
        'Developed a responsive Spotify Clone using HTML and CSS, achieving a seamless user experience similar to the original platform.',
      image: spotifyImg,
      link: 'https://github.com/rohit-verma-211/spotify-clone',
      techStack: [html, css, js, font],
    },
  ];

  return (
    <div
  className="py-14 sm:py-16 lg:py-20 bg-black scroll-mt-24"
  id="projects"
>
  {/* Heading */}
  <h1 className="heading text-white text-center
                 text-3xl sm:text-4xl md:text-5xl
                 font-extrabold">
    My <span className="text-purple-300">Recent Projects</span>
  </h1>

  {/* Projects Grid */}
  <div
    className="mt-8 sm:mt-10
               flex flex-col sm:flex-row flex-wrap
               items-center justify-center
               gap-6 sm:gap-10 lg:gap-x-24 lg:gap-y-12
               px-4 sm:px-6"
  >
    {projectsData.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
</div>

  );
};

export default Project;