"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto"; // Restore background scroll
    }
  };

  return (
    <nav
      className={`w-full h-fit sticky top-0 left-0 mb-5 md:px-[12%] bg-white bg-opacity-80  ${
        isBlurred
          ? "md:backdrop-blur shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
          : ""
      } ${isOpen ? "backdrop-blur h-screen bg-white bg-opacity-80 shadow-[0_2px_1px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]" : "backdrop-blur h-fit"} z-50 transition-all overflow-hidden max-h-screen ease-in-out duration-1000`}
    >
      <div className="w-full flex items-center justify-between gap-x-28 md:justify-center px-5">
        <Image
          src="/gymkhana_logo.webp"
          alt="Gymkhana Logo"
          width={100}
          height={100}
        />

        <ul className="w-3/5 items-center justify-evenly p-2 hidden md:flex space-x-4 text-xl">
          <li>
            <Link
              href="/"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Home
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/clubs"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Clubs
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/post-bearer"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Post Bearer
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Grievance Form
              <span class="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
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
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-screen md:hidden flex flex-col space-y-2 mt-2 max-h-screen transition-all overflow-hidden ease-in-out duration-1000">
          <ul className="w-full h-[60%] flex flex-col gap-y-10 items-end justify-start p-7 text-3xl">
            <li>
              <Link href="/" className="text-primary" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/clubs" className="text-primary" onClick={toggleMenu}>
                Clubs
              </Link>
            </li>
            <li>
              <Link
                href="/post-bearer"
                className="text-primary"
                onClick={toggleMenu}
              >
                Post Bearer
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com"
                className="text-primary"
                onClick={toggleMenu}
              >
                Grievance Form
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-primary"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="w-full">
            <ul className="w-1/2 flex items-center justify-evenly p-2">
              <li>
                <a href="https://www.x.com" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
