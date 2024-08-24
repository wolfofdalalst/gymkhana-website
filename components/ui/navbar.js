"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {

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
      className={`w-[99vw] h-fit sticky top-0 left-0 mb-5 md:px-[12%] bg-white bg-opacity-80  ${
        isBlurred ? "backdrop-blur shadow-[0_0px_1px_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]" : ""
      } ${isOpen ? 'backdrop-blur h-full' : ''} z-50 md:z-50`}
    >
      <div className="w-full flex items-center justify-between gap-x-28 md:justify-center px-5">
        <Image src="/gymkhana_logo.webp" alt="Gymkhana Logo" width={100} height={100} />

        <ul className="w-3/5 items-center justify-evenly p-2 hidden md:flex space-x-4 text-xl">
          <li>
            <Link href="/" className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}>
              Home
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="/clubs" className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}>
              Clubs
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="/post-bearer" className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}>
              Post Bearer
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="https://www.google.com" className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}>
              Grievance Form
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}>
              Contact Us
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
        </ul>

        <Image
          src="/nit_dgp_logo.webp"
          alt="NIT DGP Logo"
          width={64}
          height={64}
          className="hidden md:block"
        />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} size="2x"/>
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x"/>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-screen h-screen md:hidden flex flex-col space-y-2 mt-2 backdrop-blur">
          <ul className="w-full h-1/2 flex flex-col gap-y-10 items-end justify-start p-7 text-3xl">
            <li>
              <Link href="/" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/clubs" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
                Clubs
              </Link>
            </li>
            <li>
              <Link href="/post-bearer" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
                Post Bearer
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
                Grievance Form
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="w-full">
            <ul className="w-1/2 flex items-center justify-evenly p-2">
              <li><a href="https://www.x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} size="2x"/></a></li>
              <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a></li>
              <li><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
