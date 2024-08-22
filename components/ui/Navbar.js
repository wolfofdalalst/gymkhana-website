"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";

function Navbar() {

  const currentRoute = usePathname();

  const [isBlurred, setIsBlurred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-14 fixed top-0 left-0 mb-5 bg-transparent ${
        isBlurred ? "backdrop-blur" : ""
      } ${isOpen ? 'backdrop-blur h-full' : ''}`}
    >
      <div className="flex items-center justify-between px-5">
        <Image src="/gymkhana_logo.webp" alt="Gymkhana Logo" width={54} height={54} />

        <ul className="w-3/5 flex items-center justify-evenly p-2 hidden md:flex space-x-4">
          <li className="relative">
            <Link href="/" className={`group ${currentRoute==='/'?'text-secondary':'text-primary'} hover:text-secondary`}>
              Home
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="/post-bearer" className={`group ${currentRoute==='/post-bearer'?'text-secondary':'text-primary'} hover:text-secondary`}>
              Post Bearer
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="https://www.google.com" className={`group text-primary hover:text-secondary`}>
              Grievance Form
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={`group ${currentRoute==='/contact-us'?'text-secondary':'text-primary'} hover:text-secondary`}>
              Contact Us
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
        </ul>

        <Image
          src="/nit_dgp_logo.webp"
          alt="NIT DGP Logo"
          width={40}
          height={40}
          className="hidden md:block"
        />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-screen h-screen md:hidden flex flex-col space-y-2 m-auto mt-2 backdrop-blur">
          <ul className="w-full h-4/5 flex flex-col items-center justify-evenly p-2">
            <li>
              <Link href="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/post-bearer" className="text-primary">
                Post Bearer
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com" className="text-primary">
                Grievance Form
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-primary">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="w-full">
            <ul className="w-1/2 flex items-center justify-evenly p-2">
              <li><a href="https://www.x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a></li>
              <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
