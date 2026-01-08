import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#000000] relative overflow-hidden">
      <section className="w-full py-14 sm:py-0 px-4 sm:px-6 lg:px-8 flex flex-col">

        {/* Top content */}
        <div className="flex flex-col items-center text-center">
          <h1 className="heading max-w-3xl lg:max-w-[45vw]
                         text-2xl sm:text-3xl md:text-5xl
                         font-bold">
            <span className="text-white">Thank You! for </span>
            <span className="text-purple-300">taking time</span>
            <span className="text-white"> and exploring my portfolio.</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300
                        mt-6 sm:mt-10 mb-5
                        text-sm sm:text-base md:text-lg
                        max-w-xl sm:max-w-2xl">
            I am always open to new opportunities and meeting new people.
            Feel free to reach out to me.
          </p>

          {/* CTA Button */}
          <a href="mailto:shimesu.kesuke@gmail.com">
            <button
              className="group relative h-11 sm:h-12
                         flex mt-4 sm:mt-6
                         gap-1.5 px-6 sm:px-8 py-2
                         text-white border-[#4a636b] border
                         items-center justify-center
                         hover:scale-110 transition-all duration-500
                         hover:shadow-[0_0_20px_0_rgba(14,116,144,0.6)]
                         hover:border-cyan-700 rounded-xl"
            >
              {/* Animated border */}
              <span className="absolute -inset-[2px] rounded-xl overflow-hidden">
                <span className="absolute inset-0
                                 bg-[conic-gradient(from_0deg,transparent_20%,#040a3d_50%,transparent_80%)]
                                 animate-[spin_3s_linear_infinite]" />
                <span className="absolute inset-[2px] rounded-xl bg-[#000007]" />
              </span>

              <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                Let&apos;s get in touch
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

        {/* Bottom bar */}
        <div
          className="mt-10 sm:mt-12
                     flex flex-col md:flex-row
                     items-center justify-between
                     px-2 sm:px-6
                     min-h-[120px]"
        >
          {/* Social Icons (stay in place) */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/rohit-verma-211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400
                         hover:scale-125 transition-transform duration-300"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>

            <a
              href="https://leetcode.com/u/rohit-verma-211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400
                         hover:scale-125 transition-transform duration-300"
            >
              <SiLeetcode className="text-xl sm:text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-verma-211rv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400
                         hover:scale-125 transition-transform duration-300"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </a>
          </div>

          {/* ✅ Copyright pushed to bottom on mobile */}
          <p
            className="mt-auto md:mt-0
                       text-gray-600 dark:text-gray-300
                       text-sm sm:text-base md:text-xl
                       text-center md:text-left"
          >
            Copyright © {new Date().getFullYear()} Rohit Verma
          </p>
        </div>

      </section>
    </footer>
  );
};

export default Footer;
