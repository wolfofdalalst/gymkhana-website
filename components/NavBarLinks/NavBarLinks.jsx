import React from 'react';
import Link from 'next/link';

const NavBarLinks = (props) => {
  return (
    <div className={`w-full md:w-fit lg:w-fit h-12 px-5 py-2 bg-black flex items-center justify-center gap-7 lg:gap-11 rounded-full border-white border-[1px] shadow shadow-white ${(props.isScrolled && !props.isScrollingUp) ? 'hidden' : 'visible'} ${props.isScrolled ? 'shadow-md shadow-gray-400' : ''} transition-all duration-1000 ease-in-out overflow-hidden`}>
      <Link
        href="/"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        Home
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link
        href="/#about"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        About
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link href="/#clubs"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        Clubs
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link href="/#events"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        Events
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link href="/post-bearer"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        Post Bearers
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link href="/gallery"
        className="group text-white  md:text-sm xl:text-lg font-medium whitespace-nowrap hover:text-neutral-300">
        Gallery
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
      </Link>
      <Link href='https://www.google.com/forms/about/' className=' md:text-sm xl:text-lg whitespace-nowrap' target='_blank'>
        Grievance Form
      </Link>
    </div>
  )
}

export default NavBarLinks