import React from 'react';

import * as Icons from 'lucide-react';
import rohitImg from './images/about.png';
import rohitImg2 from './images/laptop.png';
import rohitImg1 from './images/code.png';
import ThreeCanvas from './ThreeCanvas';

const About = () => {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName.split('-').map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/-/g, '')];
    return IconComponent || Icons.Sparkles;
  };

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-white  bg-clip-text text-transparent">
              About <span className="text-[#CBACF9]">Me</span>
            </span>
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5  gap-4 lg:gap-8 mx-auto">

          {/* Card 1 - Reduced row span from 4 to 3 */}
          <div className="row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/10 lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[5vh] bg-[#020305]">
            <div className="h-full">
              <div className="absolute w-full h-full">
                <img src={rohitImg} alt="Background 1" className="w-full h-full object-cover object-center" />
              </div>
              <div className="relative z-10 md:h-full min-h-40 flex flex-col justify-end p-5 lg:p-10 transition duration-200 group-hover:translate-x-2">
                <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 text-white">
                  Pursuing B.Tech from Delhi Technological University in Electrical and Engineering and currently in 2nd year.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Reduced row span from 2 to 1 */}
          <div className="row-span-1 relative overflow-hidden rounded-3xl
  group hover:shadow-xl transition duration-200 shadow-input
  border border-white/10 lg:col-span-2 md:col-span-3
  md:row-span-1 bg-[#020305] min-h-[250px]
  [mask-image:linear-gradient(to_top,transparent,black_40%)]">

            <div className="absolute inset-0 z-0 translate-y-[35%] pointer-events-none">
              <ThreeCanvas />
            </div>

            <div className="relative z-10 md:h-full min-h-40 flex flex-col justify-start
    p-5 lg:p-10 transition duration-200 group-hover:translate-x-2">
              <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 text-white">
                Constantly learning new technologies and frameworks
              </div>
            </div>
          </div>

          {/* Card 3 - Reduced row span from 2 to 1 */}
          <div className="row-span-1 relative rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/10 lg:col-span-2 md:col-span-3 bg-[#020305] overflow-hidden">
            <div className="relative z-10 min-h-40 flex flex-col justify-center p-5 lg:p-10">

              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
                I constantly try to improve
              </div>

              <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 text-white mb-5">
                My Tech Stack
              </div>

              {/* Animated pill scroll */}
              <div className="relative w-full overflow-hidden">

                <div className="flex gap-3 w-max animate-pill-scroll group-hover:[animation-play-state:paused]">

                  {[
                    'React.js',
                    'MongoDB',
                    'Node.js',
                    'Express.js',
                    'Django',
                    'Java',
                    'Python',
                    'MySQL',
                  ].concat([
                    'React.js',
                    'MongoDB',
                    'Node.js',
                    'Express.js',
                    'Django',
                    'Java',
                    'Python',
                    'MySQL',
                  ]).map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs lg:text-sm rounded-full
                       bg-gradient-to-b from-black via-gray-900 to-black text-white/80
                       border border-white/10
                       hover:text-white hover:bg-[#15193c]
                       transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>


          {/* Rest of the cards remain unchanged */}
          {/* Card 4 */}
          <div className="row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/10 lg:col-span-2 md:col-span-3 md:row-span-1 bg-[#020305]">
            <div className="absolute w-full h-full">
              <img src={rohitImg1} alt="Grid" className="object-cover object-center w-full h-full" />
            </div>
            <div className="absolute right-0 -bottom-5">
              <img src={rohitImg1} alt="Overlay" className="object-cover object-center w-full h-full" />
            </div>
            <div className="relative z-10 md:h-full min-h-40 flex flex-col justify-start p-5 lg:p-10 transition duration-200 group-hover:translate-x-2">
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">Currently exploring the world of AI and ML.</div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 text-white">Tech enthusiast with a passion for development and programming.</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/10 md:col-span-3 md:row-span-2 bg-[#020305]">

            {/* Background Image */}
            <img
              src={rohitImg2}
              alt="Grid Overlay"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* Content */}
            <div className="relative z-10 md:h-full min-h-40 flex flex-col justify-center md:justify-start lg:justify-center p-5 lg:p-10 transition duration-200 group-hover:translate-x-2">
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
                I recently built a browser extension that allows users to lock sensitive tabs with authentication — ensuring online activity remains secure and accessible only to the right user.
              </div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 text-white">
                New Project: Custom Tab Locking Browser Extension
              </div>
            </div>
          </div>


          {/* Card 6 */}
<div className="row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/10
                lg:col-span-2 md:col-span-3 md:row-span-1 bg-[#020305]">

  <div
    className="relative z-10
               w-full max-w-xs mx-auto
               md:max-w-full
               text-center md:h-full min-h-40
               flex flex-col items-center justify-center
               p-4 sm:p-5 lg:p-10
               group-hover:translate-x-2 transition-transform duration-200"
  >

    {/* Subtitle */}
    <div className="font-sans font-extralight text-[#c1c2d3]
                    text-xs sm:text-sm md:text-xs lg:text-base">
      Connect with me on LinkedIn
    </div>

    {/* Title */}
    <div className="font-sans font-bold
                    text-base sm:text-lg lg:text-3xl
                    max-w-xs sm:max-w-sm md:max-w-96
                    text-white mt-2">
      Want to know more about me?
    </div>

    {/* Button wrapper */}
    <div className="mt-5 sm:mt-6 z-10 flex justify-center w-full">
      <a
        href="https://www.linkedin.com/in/rohit-verma-211rv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="group relative h-11 sm:h-12
                     flex items-center gap-2
                     px-6 sm:px-8 py-2
                     rounded-xl text-white
                     border border-[#4a636b]
                     transition-all duration-500
                     hover:scale-110 hover:border-cyan-700
                     hover:shadow-[0_0_20px_0_rgba(14,116,144,0.6)]"
        >

          {/* Animated border */}
          <span className="absolute -inset-[2px] rounded-xl overflow-hidden">
            <span className="absolute inset-0
                             bg-[conic-gradient(from_0deg,transparent_20%,#040a3d_50%,transparent_80%)]
                             animate-[spin_3s_linear_infinite]">
            </span>
          </span>

          {/* Inner background */}
          <span className="absolute inset-[2px] rounded-xl bg-[#000007]"></span>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2
                           text-sm sm:text-md font-medium">
            LinkedIn
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="transition-transform duration-300 group-hover:translate-x-1"
              height="1em"
              width="1em"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
            </svg>
          </span>

        </button>
      </a>
    </div>

  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default About;