import React from 'react';
import * as Icons from 'lucide-react';
import react from "./images/react.png";
import java from "./images/java.png";
import valo from "./images/valo.png";

const Hobbies = () => {
  const hobbyData = [
    {
      title: "Web Developing",
      description:
        "I love to build websites and web applications. I'm always looking for new ways to improve my skills and learn new technologies.",
      img: react,
    },
    {
      title: "Programming",
      description:
        "Love to solve competitive questions and do competitive programming.",
      img: java,
    },
    {
      title: "Gaming",
      description:
        "I love to play pc online games which is a great relief buster for me, helps me to relax my mind.",
      img: valo,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-purple-300">
              <span className="text-white">My</span> Hobbies
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="my-16 sm:my-20 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 px-4">
          {hobbyData.map((hobby, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center
                         border border-black/[0.2] dark:border-white/[0.2]
                         max-w-sm w-full p-4
                         h-[24rem] sm:h-[27rem] lg:h-[30rem]
                         rounded-3xl overflow-hidden
                         transition-all duration-300
                         hover:bg-black/40"
            >
              <div className="relative z-20 flex flex-col items-center justify-center
                              transition duration-200 group-hover:-translate-y-4">

                {/* Image */}
                <div className="flex items-center justify-center
                                group-hover:opacity-0 transition duration-200">
                  <div
                    className="relative inline-flex
                               h-36 w-36
                               sm:h-44 sm:w-44
                               lg:h-48 lg:w-48
                               overflow-hidden rounded-full"
                  >
                    <img
                      src={hobby.img}
                      alt={hobby.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Hover Content */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300 text-center"
                >
                  <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                    {hobby.title}
                  </h2>
                  <p className="text-[#e4ecff] text-xs sm:text-sm font-medium leading-relaxed px-4">
                    {hobby.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
