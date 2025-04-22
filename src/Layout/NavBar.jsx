import React from 'react'

import { FaBars } from 'react-icons/fa6'
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <header>
      <nav className="container w-[90%] mx-auto py-7 flex items-center justify-between lg:w-[1200px]">
        {/* menu bar */}
        <div className="text-2xl lg:hidden">
          <FaBars />
        </div>
        {/* logo & search bar */}
        <div className="lg:flex items-center justify-between lg:w-[951px]">
          {/* logo */}
          <div className="">
            <img src={logo} alt="logo" className="lg:w-[58px] lg:h-[34px]" />
          </div>
          {/* search bar */}
          <div className="hidden w-[690px] h-[52px] bg-[#F5F5F580] border border-[#E2E2E2] rounded-lg px-[30px] py-[18px] lg:flex items-center gap-5">
            <IoSearchSharp className='text-xl' />
            <input
              type="search"
              placeholder="Search Product"
              className="font-sans h-[52px] w-full focus:outline-none"
            />
          </div>
        </div>
        {/* icons */}
        <div className="flex items-center justify-between gap-3 text-2xl md:gap-4 md:text-3xl">
          {/* Cart icon */}
          <div className='cursor-pointer'>
            <IoCartOutline />
          </div>
          {/* Favorite icon */}
          <div className='cursor-pointer'>
            <MdFavoriteBorder />
          </div>
          {/* login icon */}
          <div className='cursor-pointer'>
            <MdOutlinePerson />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar
