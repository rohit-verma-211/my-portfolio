import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <div><button onClick={() => window.open("https://www.linkedin.com/in/rohit-verma-211rv/", "_blank")}
    className=" hidden md:flex px-3 py-1 rounded-full text-l font-bold text-white border-[#4a636b] border flex items-center gap-1 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_0_rgba(14,116,144,0.6)] hover:border-cyan-700" >Hire Me <LuArrowDownRight /></button></div>
  )
}

export default NavbarBtn;