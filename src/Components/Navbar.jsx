import React from 'react';
import NavbarBtn from './navbar/NavbarBtn';
import NavbarLinks from './navbar/NavbarLinks';
import NavbarLogo from './navbar/NavbarLogo';

function Navbar() {
  return (
    <nav className="hidden md:flex max-w-[1300px] mt-10 mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 gap-4">
      <div className="flex justify-between px-8 py-1 md:px-10 w-full mx-auto
                      animate-borderMove items-center md:py-3
                      rounded-full border border-[#2D2E44]
                      max-w-[1200px]">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
}

export default Navbar;
