// Mock data for Rohit Verma's Portfolio

export const personalInfo = {
  name: "Rohit Verma",
  role: "Full Stack Web Developer, Programmer and ML enthusiast",
  currentStatus: "Electrical Engineering Student at Delhi Technological University",
  year: "2nd Year",
  tagline: "Hi, I'm Rohit Verma",
  description: "a Full Stack Web Developer, Programmer and ML enthusiast. I'm currently studying Electrical Engineering at Delhi Technological University.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  resume: "#",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "rohit.verma@example.com"
  }
};

export const aboutCards = [
  {
    id: 1,
    title: "Currently studying at DTU",
    description: "Pursuing Electrical Engineering, exploring web development and programming.",
    icon: "book-open",
    gridClass: "md:col-span-2"
  },
  {
    id: 2,
    title: "Tech Stack",
    description: "React.js, Node.js, Express.js, MongoDB, Python, Java",
    icon: "code-2",
    gridClass: "md:col-span-1",
    badges: ["React.js", "MongoDB", "Node.js", "Express.js"]
  },
  {
    id: 3,
    title: "Constantly learning",
    description: "I constantly try to improve my skills and learn new technologies and frameworks.",
    icon: "trending-up",
    gridClass: "md:col-span-1"
  },
  {
    id: 4,
    title: "Tech enthusiast",
    description: "Tech enthusiast with a passion for development and programming.",
    icon: "sparkles",
    gridClass: "md:col-span-1"
  },
  {
    id: 5,
    title: "Exploring AI & ML",
    description: "Currently exploring the world of AI and ML with hands-on projects.",
    icon: "brain",
    gridClass: "md:col-span-1"
  },
  {
    id: 6,
    title: "Recent Achievement",
    description: "Built a browser extension that allows users to lock sensitive tabs with authentication.",
    icon: "award",
    gridClass: "md:col-span-2"
  }
];

export const techStack = {
  languages: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  tools: [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Tab-Locking Browser Extension",
    description: "A browser extension that allows users to lock sensitive tabs with authentication — ensuring online activity remains secure and accessible only to the right user.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Safe Drive",
    description: "SafeDrive is a comprehensive driving safety application designed to enhance road safety through real-time monitoring, accident detection, and driver assistance features.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    tech: ["React.js", "MongoDB", "OpenCV", "Gemini AI"],
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Angry-Birds Game",
    description: "Designed and developed Angry Birds using Java OOP's Concept, LibGDX, Junit and LWJGL, featuring dynamic gameplay mechanics across 5+ levels and realistic collision interactions.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    tech: ["Java", "LibGDX", "JUnit", "IntelliJ"],
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Sakhi Circle",
    description: "Sakhi Circle is a web-based platform designed to promote financial literacy through interactive quizzes and enable users to participate in chit funds.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    id: 5,
    title: "Course Registration System",
    description: "Automated course registration, professor assignments, and complaint management with a Java-based system.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tech: ["Java", "MySQL", "Spring Boot"],
    link: "https://github.com",
    github: "https://github.com"
  },
  {
    id: 6,
    title: "Spotify Clone",
    description: "Developed a responsive Spotify Clone using HTML and CSS, achieving a seamless user experience similar to the original platform.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com",
    github: "https://github.com"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "His sincerity, dedication, and eagerness to understand the nuances of the project have been noteworthy. I am confident that he will continue to carry these qualities into his future academic and professional endeavours. He will undoubtedly be a committed and dependable contributor to any team or organization he joins.",
    author: "Dr. Tarini Shankar Ghosh",
    role: "Assistant Professor",
    organization: "Delhi Technological University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  },
  {
    id: 2,
    quote: "Rohit has demonstrated exceptional problem-solving skills and a strong work ethic throughout his academic journey. His ability to learn and adapt to new technologies is truly commendable.",
    author: "Prof. Anjali Sharma",
    role: "Department Head",
    organization: "Delhi Technological University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  }
];

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "EliteBrokedge Securities Pvt. Ltd.",
    duration: "Jan 2025 - April 2025",
    description: "Collaborated with a web development team to build responsive, user-centric web interfaces and implement scalable frontend solutions.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHzUVsB0ErOIA/company-logo_200_200/company-logo_200_200/0/1736964336161?e=2147483647&v=beta&t=GkJlHWev-jpL53CP8rGMI5FcpTWmHkUa53jKYaYnt-8",
    skills: ["React", "SQL", "JavaScript", "HTML", "Tailwind CSS", "Node.js"]
  },
  
];

export const hobbies = [
  {
    id: 1,
    title: "Web Developing",
    description: "I love to build websites and web applications. I'm always looking for new ways to improve my skills and learn new technologies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    icon: "code"
  },
  {
    id: 2,
    title: "Programming",
    description: "Love to solve competitive questions and do competitive programming.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    icon: "terminal"
  },
  {
    id: 3,
    title: "Gaming",
    description: "I love to play pc online games which is a great stress buster for me, helps me to relax my mind.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    icon: "gamepad-2"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];