import React from 'react';

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Experience", section: "experience" },
  { link: "Contact", section: "contact" },

];

function NavbarLinks() {
  return (
    <ul className="flex gap-6 text-white font-bold text-center hidden md:flex  py-3">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a  className="cursor-pointer text-white hover:text-cyan-900 transition-all duration-500" href={`#${link.section}`}>{link.link} </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
