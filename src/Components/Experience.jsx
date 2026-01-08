import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase } from 'lucide-react';
import { experience } from '../Data/mock';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black
                 relative overflow-hidden scroll-mt-24"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">
              My <span className="text-[#CBACF9]">Work Experience</span>
            </span>
          </h2>
        </div>

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5
                          bg-gradient-to-r from-purple-500 to-purple-300
                          rounded-2xl hidden md:block" />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-14 hidden md:block">
                  <div className="relative w-4 h-4 rounded-full animate-pulse
                                  bg-purple-100
                                  shadow-[0_0_10px_3px_rgba(168,85,247,0.9)]">
                    <span className="absolute top-1/2 left-5 -translate-y-1/2
                                     w-10 h-[2px]
                                     bg-gradient-to-r from-purple-400 to-transparent" />
                  </div>
                </div>

                <Card
                  className="md:ml-20 bg-gray-900/50 border-white/10
                             transition-all duration-300
                             hover:scale-105 sm:hover:scale-110
                             hover:bg-white/20 group"
                >
                  <CardContent className="p-4 sm:p-6">

                    {/* ✅ LOGO ALWAYS LEFT */}
                    <div className="flex flex-row gap-4 sm:gap-6 items-start">

                      {/* Company logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20
                                        rounded-lg overflow-hidden
                                        bg-gray-800 border border-white/10
                                        hover:rotate-6 transition-transform duration-300">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold
                                           text-white flex items-center gap-2">
                              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                              {exp.role}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base font-medium">
                              {exp.company}
                            </p>
                          </div>

                          <Badge
                            variant="outline"
                            className="border-purple-500/50
                                       text-gray-400 bg-purple-500/10
                                       text-xs sm:text-sm"
                          >
                            {exp.duration}
                          </Badge>
                        </div>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-purple-500/50
                                         text-gray-400 bg-purple-500/10
                                         text-xs sm:text-sm"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
