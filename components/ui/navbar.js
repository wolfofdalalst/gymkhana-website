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
      className={`w-screen md:h-fit sticky top-0 py-5 md:py-3 bg-black bg-opacity-100  ${
        isScrolled ? "bg-opacity-50 md:bg-transparent" : ""
      } ${
        isOpen ? "backdrop-blur h-[100vh]" : "h-fit"
      } z-50 transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div
        className={`w-full h-6 md:h-fit flex items-center bg-transparent justify-between lg:gap-x-24 md:justify-evenly px-5`}
      >
        <Image
          src="/gymkhana_logo.webp"
          alt="Gymkhana Logo"
          width={40}
          height={40}
          className={`${isScrolled ? "md:hidden" : ""}`}
        />

        <div className="w-fit hidden md:flex">
          <NavBarLinks isScrolled={isScrolled} isScrollingUp={isScrollingUp} />
        </div>

        <Image
          src="/NIT_Durgapur_logo.webp"
          alt="NIT DGP Logo"
          width={40}
          height={40}
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
      <div
        className={`w-screen md:hidden flex flex-col space-y-2 mt-2 transition-max-height overflow-hidden ease-in-out duration-700 ${
          isOpen ? "h-[100vh]" : "h-0"
        }`}
      >
        <ul className="w-full h-3/4 flex flex-col gap-y-10 items-end justify-start p-7 text-3xl font-semibold">
          <li>
            <Link href="/" className="text-gray-300" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-gray-300" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#clubs" className="text-gray-300" onClick={toggleMenu}>
              Clubs
            </Link>
          </li>
          <li>
            <Link href="/#events" className="text-gray-300" onClick={toggleMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/post-bearer"
              className="text-gray-300"
              onClick={toggleMenu}
            >
              Post Bearer
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-300"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/https://www.google.com/forms/about/"
              className="text-primary"
              target="_blank"
              onClick={toggleMenu}
            >
              Grievance Form
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
                <FaGithub className="w-8 h-8 text-gray-100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/gymkhana.nitdgp"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2x"
                  className="text-gray-100"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gymkhana_nitdgp"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="text-gray-100"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
