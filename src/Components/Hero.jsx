import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../Data/mock';
import { HiDownload } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import rohitImg from './images/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden
                        bg-gradient-to-b from-black via-gray-900 to-black">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left side */}
          <div className="space-y-8 text-center md:text-left">

            <div className="space-y-4">
              <h1 className="text-[42px] sm:text-[48px] md:text-[2.8rem] lg:text-6xl
                             font-bold text-white leading-tight sm:leading-snug">
                Hi, I'm{" "}
                <span className="text-[#CBACF9] block sm:inline">
                   <br className="hidden sm:block" /> Rohit Verma
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl
                            text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                {personalInfo.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 justify-center md:justify-start flex-wrap">

              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="group relative w-auto flex gap-1.5 px-6 sm:px-8 py-2
                           text-white border border-[#4a636b]
                           items-center justify-center
                           hover:scale-110 transition-all duration-500
                           hover:shadow-[0_0_20px_0_rgba(14,116,144,0.6)]
                           hover:border-cyan-700 rounded-xl"
              >
                <span className="absolute -inset-[2px] rounded-xl overflow-hidden">
                  <span className="absolute inset-0
                                   bg-[conic-gradient(from_0deg,transparent_20%,#040a3d_50%,transparent_80%)]
                                   animate-[spin_3s_linear_infinite]"></span>
                  <span className="absolute inset-[2px] rounded-xl bg-[#01001f]"></span>
                </span>
                <span className="relative flex items-center gap-1.5 z-10 text-sm sm:text-base">
                  See my work <FaPaperPlane size={12} />
                </span>
              </button>

              <button
                onClick={() =>
                  window.location.href =
                    "https://drive.google.com/file/d/18v7cmtrLlWGFOSMYAH1rD1EqCMBRCRxr/view"
                }
                className="group relative w-auto flex gap-1.5 px-6 sm:px-8 py-2
                           text-white border border-[#4a636b]
                           items-center justify-center
                           hover:scale-110 transition-all duration-500
                           hover:shadow-[0_0_20px_0_rgba(14,116,144,0.6)]
                           hover:border-cyan-700 rounded-xl"
              >
                <span className="absolute -inset-[2px] rounded-xl overflow-hidden">
                  <span className="absolute inset-0
                                   bg-[conic-gradient(from_0deg,transparent_20%,#040a3d_50%,transparent_80%)]
                                   animate-[spin_3s_linear_infinite]"></span>
                  <span className="absolute inset-[2px] rounded-xl bg-[#01001f]"></span>
                </span>
                <span className="relative flex items-center gap-1.5 z-10 text-sm sm:text-base">
                  Download CV <HiDownload />
                </span>
              </button>

            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 pt-4">
              {[
                { value: "3+", label: "Projects" },
                { value: "2+", label: "Years Learning" },
                { value: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-200">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right side */}
          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full
                              bg-gradient-to-b from-[#111827] via-[#0e1320] to-[#0b1019]
                              animate-spin-slow opacity-20 blur-xl" />
              <div className="absolute inset-2 rounded-full
                              bg-gradient-to-b from-[#111827] via-[#0e1320] to-[#0b1019] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={rohitImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-0 w-16 h-16 sm:w-20 sm:h-20
                            bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-6 left-0 w-24 h-24 sm:w-32 sm:h-32
                            bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
                 style={{ animationDelay: '1s' }} />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#4a636b]" />
      </div>
    </section>
  );
};

export default Hero;
