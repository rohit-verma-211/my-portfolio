import { Icon } from "@iconify/react";

export default function TechStack() {
  const techData = {
    Languages: [
      { name: "Python", icon: "logos:python" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "Java", icon: "logos:java" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
    ],
    "Frontend Frameworks": [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
    ],
    "Backend & Database": [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "skill-icons:expressjs-dark" },
      { name: "EJS", icon: "simple-icons:ejs" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
    "Tools & Technologies": [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Figma", icon: "logos:figma" },
    ],
  };

  return (
    <section
      id="skills"
      className="py-14 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-white">
        My <span className="text-[#CBACF9]">Tech Stack</span>
      </h2>

      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-8 md:p-12 space-y-10 sm:space-y-14">
        {Object.entries(techData).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8"
          >
            {/* Left Title */}
            <div className="lg:w-1/3 transition hover:translate-x-2 duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 hover:text-white">
                {category}
              </h3>
              <div className="h-0.5 mt-2 bg-gradient-to-r from-purple-400 to-transparent" />
            </div>

            {/* Icons */}
            <div className="lg:w-2/3 flex flex-wrap gap-3 sm:gap-4">
              {items.map((tech, index) => (
                <div key={index} className="relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-white/20">
                    <Icon icon={tech.icon} width={30} className="sm:w-7 md:w-8" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
