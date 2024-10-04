import React from 'react';
import Link from 'next/link';

const NavBarLinks = (props) => {
  return (
    <div className={`min-w-fit8 h-fit px-5 py-2 bg-black flex items-center justify-center gap-11 rounded-full border-white border-[1px] shadow shadow-white ${props.isBlurred?'shadow-md shadow-gray-400':''} transition-all duration-500 ease-in-out overflow-hidden`}>
          <Link
          href="#"
          className="group text-white text-lg font-medium hover:text-neutral-300">
            Home
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
          </Link>
          <Link
          href="#"
          className="group text-white text-lg font-medium hover:text-neutral-300">
            About Us
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
          </Link>
          <Link href="#"
          className="group text-white text-lg font-medium hover:text-neutral-300">
            Clubs
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
          </Link>
          <Link href="#"
          className="group text-white text-lg font-medium hover:text-neutral-300">
            Office Bearers
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-neutral-400"></span>
          </Link>
          <button className="text-white text-lg font-medium px-4 py-1 border border-neutral-700 rounded-full">
            Contact Us
          </button>
    </div>
  )
}

export default NavBarLinks