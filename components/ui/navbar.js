"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ContactUsModal } from "../contactUsModal/contactUsModal";
import { useRouter } from "next/navigation";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setisScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) <= 80) return;

      if (currentScrollY > 80) {
        setIsScrolled(true);

        if (lastScrollY.current > currentScrollY) {
          setisScrollingUp(true);
        } else if (lastScrollY.current < currentScrollY) {
          setisScrollingUp(false);
        }
      } else {
        setIsScrolled(false);
        setisScrollingUp(true);
      }

      // console.log(window.scrollY)
      lastScrollY.current = currentScrollY;
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
      className={`w-screen h-fit sticky top-0 py-5 md:py-3 bg-black bg-opacity-100
      ${
        isOpen ? "backdrop-blur" : ""
      }
      ${
        isScrolled ? `${(!isOpen)?'bg-opacity-50':''} md:bg-transparent` : ""
      } z-40 transition-all duration-300 ease-in-out md:overflow-hidden`}
    >
      <div
        className={`w-full h-6 md:h-fit flex items-center bg-transparent justify-between lg:gap-x-24 md:justify-evenly px-5 ${
          isOpen ? "backdrop-blur" : ""
        } `}
      >
        <Image
          src="/Gymkhana Logo Final White.png"
          alt="Gymkhana Logo"
          width={60}
          height={60}
          className={`${isScrolled ? "md:hidden" : ""}`}
        />

        <div className="w-fit hidden md:flex">
          <NavBarLinks isScrolled={isScrolled} isScrollingUp={isScrollingUp} />
        </div>

        <Image
          src="/NIT_Durgapur_logo.webp"
          alt="NIT DGP Logo"
          width={60}
          height={60}
          className={`hidden md:flex ${isScrolled ? "md:hidden" : ""}`}
        />

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="h-10 w-8 text-gray-200"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="h-10 w-8 text-gray-200"
              />
            )}
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`absolute top-[100%] left-0 backdrop-blur-lg w-screen h-screen ${isOpen ? 'visible' : 'hidden'}`} onClick={toggleMenu}></div>
      <div
        className={`z-50 w-0 h-0 absolute md:hidden flex flex-col space-y-2 transition-all overflow-hidden ease-in-out duration-700 ${
          isOpen ? "top-[100%] right-0 w-[50vw] h-[100vh] backdrop-blur bg-[rgba(0,0,0,0.8)] shadow-lg shadow-blue-500" : "right-8"
        }`}
      >
        <ul className="w-full h-3/4 flex flex-col gap-y-10 items-end justify-start p-7 text-xl font-medium text-white">
          <li>
            <Link href="/" className="whitespace-nowrap" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="whitespace-nowrap" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#clubs" className="whitespace-nowrap" onClick={toggleMenu}>
              Clubs
            </Link>
          </li>
          <li>
            <Link href="/#events" className="whitespace-nowrap" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/post-bearer" className="whitespace-nowrap" onClick={toggleMenu}
            >
              Post Bearer
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-300" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/https://www.google.com/forms/about/" className="text-xl font-semibold text-primary whitespace-nowrap" target="_blank" onClick={toggleMenu}>
              Grievance Form
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
