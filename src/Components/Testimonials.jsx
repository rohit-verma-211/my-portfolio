import React from 'react';


const Testimonials = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="text-center mb-10 sm:mb-16 space-y-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
    <span className="text-white">
      Some <span className="text-purple-300">Kind Words</span>
    </span>
  </h2>
</div>


      <div
        className="scroller relative z-20 w-screen overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        style={{
          "--animation-direction": "reverse",
          "--animation-duration": "80s",
        }}
      >
        <ul className="flex min-w-full w-max shrink-0 gap-16 py-4 flex-nowrap animate-scroll hover:[animation-play-state:paused]">

          {/* Card 1 */}
          <li className="w-[90vw] md:w-[60vw] max-w-full relative rounded-2xl
                       border border-b-0 border-slate-800
                       flex-shrink-0 p-5 md:p-16
                       bg-gradient-to-r from-[#07080e] to-[#07070a]
                       ">
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-0.5 -top-0.5
                         h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />

              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                His sincerity, dedication, and eagerness to understand the nuances
                of the project have been noteworthy. I am confident that he will
                continue to carry these qualities into his future academic and
                professional endeavours. He will undoubtedly be a committed and
                dependable contributor to any team or organization he joins.
              </span>

              <div className="relative z-20 mt-6 flex items-center">
                <div className="me-3 w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://dtu.ac.in/modules/facilities/people/faculty/userimages/shatakshi.jpg"
                    alt="Dr. Shatakshi"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="flex flex-col gap-1">
                  <span className="text-xl text-white font-bold">
                    Dr. Shatakshi
                  </span>
                  <span className="text-sm text-gray-200">
                    Assistant Professor, Delhi Technological University
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
          <li className="w-[90vw] md:w-[60vw] max-w-full relative rounded-2xl
                       border border-b-0 border-slate-800
                       flex-shrink-0 p-5 md:p-16
                       bg-gradient-to-r from-[#07080e] to-[#07070a]
                       ">
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-0.5 -top-0.5
                         h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />

              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                His sincerity, dedication, and eagerness to understand the nuances
                of the project have been noteworthy. I am confident that he will
                continue to carry these qualities into his future academic and
                professional endeavours. He will undoubtedly be a committed and
                dependable contributor to any team or organization he joins.
              </span>

              <div className="relative z-20 mt-6 flex items-center">
                <div className="me-3 w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQHHYG8aD99_IA/profile-displayphoto-scale_200_200/B56ZgTY9UjG0AY-/0/1752671979010?e=2147483647&v=beta&t=iBMHenu83uFMxrad2hCQLjw-hmWII8tRgpLxggSRCYw"
                    alt="Dr. Saurabh mishra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="flex flex-col gap-1">
                  <span className="text-xl text-white font-bold">
                    Dr. Saurabh Mishra
                  </span>
                  <span className="text-sm text-gray-200">
                    Assistant Professor, Delhi Technological University
                  </span>
                </span>
              </div>
            </blockquote>
          </li>

          

        </ul>
      </div>
    </section>
  );
};

export default Testimonials;