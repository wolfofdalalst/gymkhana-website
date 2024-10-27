
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope,FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

export default function Footer()  {
  return (
    <footer className=" bg-darkCard text-white pt-10 pb-2  mt-5">
      <div className="container mx-auto pl-0 pr-0 flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
          {/* Left Section: Logo and Text */}
          <div className="flex-col items-center mb-2 sm:mb-0 md:w-1/4  ">
  
            <div className=" hidden sm:flex mb-3 justify-center">
              <Image src="/Gymkhana Logo Final White (1).png" alt="Logo" width={100} height={100} />
            </div>
 
            <div className="text-md text-center ">
              <p>Students&apos; Gymkhana</p>
              <p>National Institute of Technology, Durgapur</p>
              <p>West Bengal - 735209</p>
            </div>



            <div className="flex mt-2 w-2/6  justify-around mx-auto">

              <Link href="https://www.facebook.com/gymkhana.nitdgp" target="_blank" className="hover:text-primary">
                <FaFacebook className=" h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/students-gymkhana-nit-durgapur/" target="_blank" className="hover:text-primary">
                <FaLinkedin className=" h-5 w-5"/>
              </Link>
              <Link href="https://www.instagram.com/gymkhana_nitdgp" target="_blank" className="hover:text-primary">
                <FaInstagram  className="h-5 w-5"/>
              </Link>

              </div>
          </div>


          <div className="h-56 hidden md:block border-l border-dashed border-gray-400 mx-5"> </div>

          <div className="border-t w-5/6 border-dashed border-gray-400 my-4 block md:hidden "></div>


          

          {/* Right Section: Links and Contact */}
          <div className=" w-full md:w-3/4  flex flex-col md:flex-row  items-center md:items-start md:justify-between ">
     
            <div className="flex  justify-around md:justify-center w-full md:w-2/3 md:flex-row md:space-x-12 mb-2 md:mb-0   ">

              {/* Quick Links */}
              <div className=" m-1 md:mb-0 md:w-1/3 p-4  ">
                <h4 className="font-bold text-md md:text-2xl text-center md:text-left">Quick Links</h4>
                <div className="grid grid-cols-1 gap-1 mt-4 text-sm md:text-lg ">
                  <Link className="hover:text-primary"  href="/#clubs">
                    Clubs
                  </Link>
                  <Link className="hover:text-primary"  href="/#events">
                    Events
                  </Link>
                  <Link className="hover:text-primary" href="/gallery">
                    Photo Gallery
                  </Link>
                  <Link className="hover:text-primary"  href="/post-bearer">
                    Post Bearers
                  </Link>
                </div>
              </div>





              {/* Important Links */}
              <div className="md:w-1/3  m-1 p-4  ">
                <h4 className="font-bold text-md md:text-2xl text-center md:text-left">Important Links</h4>
                <div className="grid grid-cols-1 gap-1 mt-4 text-sm md:text-lg ">
                  <Link href="https://nitdgp.ac.in/" target="_blank" className="hover:text-primary">
                    NIT DGP Website
                  </Link>
                  <Link href="/"  className="hover:text-primary">
                    Contributors
                  </Link>
                  <Link href="https://placement.nitdgp.ac.in/"  target="_blank" className="hover:text-primary">
                    Placement Portal
                  </Link>
                  <Link href="https://www.google.com/forms/about/" target="_blank" className="hover:text-primary">
                    Grievance Form
                  </Link>
                </div>
              </div>

          </div>


          <div className="border-t w-5/6 border-dashed border-gray-400 my-4 block md:hidden "></div>

            {/* Contact Us */}
            <div className="md:w-1/3 md:ml-10 p-4 mt-1  flex-col justify-center items-center  ">
              <h4 className="font-bold text-lg md:text-2xl text-center md:text-left">Contact Us</h4>

              <div className="flex items-center  w-5/6 md:w-full mt-5 text-sm md:text-base mb-2 mx-auto ">
                <FaEnvelope className="mr-2 h-4 w-4" />
                <Link href="mailto:support@figma.com" className="hover:text-primary">
                gymkhana@nitdgp.ac.in
                </Link>
              </div>

              <div className="flex items-center  w-5/6 md:w-full mt-5 text-sm md:text-base mb-2 mx-auto ">
              <FaLocationDot className="mr-2 h-5 w-5" />
                <div className="text-sm md:text-base">
                <p>National Institute of Technology, Durgapur</p>
                <p>West Bengal - 735209</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        
        
        <div className="border-t w-5/6 2xl:w-full border-dashed border-gray-400 mx-auto my-4 "></div>

       
        <div className="text-center mb-1 text-sm">
          <p>&copy; 2024 Students&apos; Gymkhana, NIT Durgapur</p>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
