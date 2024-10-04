"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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

function Navbar() {
  const router = useRouter();

  const [isBlurred, setIsBlurred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has scrolled down more than 50px
      if (window.scrollY > 80) {
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
      className={`w-screen max-h-24 md:h-fit sticky top-0 py-3 bg-black bg-opacity-100  ${
        isBlurred
          ? "bg-transparent"
          : ""
      } ${
        isOpen
          ? "backdrop-blur h-screen bg-white bg-opacity-80"
          : "h-fit"
      } z-50 transition-all duration-500 ease-in-out overflow-hidden`}
    >
      <div className={`w-screen flex items-center bg-transparent justify-between gap-x-28 md:justify-evenly px-5`}>
        <Image
          src="/gymkhana_logo.webp"
          alt="Gymkhana Logo"
          width={40}
          height={40}
          className={`${isBlurred?'hidden':''}`}
        />

        {/* <ul className="w-3/5 items-center justify-evenly p-2 hidden md:flex space-x-4 text-xl">
          <li>
            <Link
              href="/"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Home
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/clubs"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Clubs
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/post-bearer"
              className={`group text-primary hover:text-secondary whitespace-nowrap inline-block lg:inline max-w-min`}
            >
              Post Bearer
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-secondary"></span>
            </Link>
          </li>
          <li>
            <div className="h-fit" onClick={() => router.push("contact")}>
              <ContactUsModal />
            </div>
          </li>
        </ul> */}

        <NavBarLinks isBlurred={isBlurred}/>

        <Image
          src="/NIT_Durgapur_logo.webp"
          alt="NIT DGP Logo"
          width={40}
          height={40}
          className={`${isBlurred?'hidden':''}`}
        />

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="h-10 w-8" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-10 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`w-screen h-screen md:hidden flex flex-col space-y-2 mt-2 transition-max-height overflow-hidden ease-in-out duration-700 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="w-full h-2/3 flex flex-col gap-y-10 items-end justify-start p-7 text-3xl font-semibold">
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
            <Link href="/contact" className="text-primary" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="w-full">
          <ul className="w-1/2 flex items-center justify-evenly p-2">
            <li>
              <a
                href="https://github.com/wolfofdalalst/gymkhana-website"
                target="_blank"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/gymkhana.nitdgp"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gymkhana_nitdgp"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
