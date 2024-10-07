
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-2">
      <div className="container mx-auto pl-1 pr-0 ">
        <div className="flex flex-col md:flex-row justify-between items-start ">
          {/* Left Section: Logo and Text */}
          <div className="flex-column items-center mb-8 md:mb-0 md:w-1/4">
  
            <div className="flex mb-3 justify-center">
              <Image src="/Gymkhana Logo Final White (1).png" alt="Logo" width={100} height={100} />
            </div>
 
            <div className="text-md text-center ">
              <p>Students&apos; Gymkhana</p>
              <p>National Institute of Technology, Durgapur</p>
              <p>West Bengal - 735209</p>
            </div>
          </div>


          <div class="h-44 mt-4 border-l-2 border-dashed border-gray-400  mx-5"></div>

          {/* Right Section: Links and Contact */}
          <div className="md:w-3/4 flex flex-col md:flex-row justify-between ">
     
            <div className="flex justify-center md:w-2/3 md:flex-row md:space-x-12 mb-8 md:mb-0   ">

              {/* Quick Links */}
              <div className=" m-1 md:mb-0 md:w-1/3 p-4  ">
                <h4 className="font-bold text-2xl text-center md:text-left">Quick Links</h4>
                <div className="grid grid-cols-1 gap-1 mt-4">
                  <a className="hover:text-yellow-400" target="_blank" href="#">
                    Clubs
                  </a>
                  <a className="hover:text-yellow-400" target="_blank" href="#">
                    Events
                  </a>
                  <a className="hover:text-yellow-400" target="_blank" href="#">
                    Photo Gallery
                  </a>
                  <a className="hover:text-yellow-400" target="_blank" href="#">
                    Post Bearers
                  </a>
                </div>
              </div>





              {/* Important Links */}
              <div className="md:w-1/3  m-1 p-4  ">
                <h4 className="font-bold text-2xl text-center md:text-left">Important Links</h4>
                <div className="grid grid-cols-1 gap-1 mt-4">
                  <a href="#" className="hover:text-yellow-400">
                    NIT DGP Website
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    Contributors
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    Placement Portal
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    Grievance Form
                  </a>
                </div>
              </div>

          </div>

            {/* Contact Us */}
            <div className="md:w-1/3 md:ml-10 p-4 ">
              <h4 className="font-bold text-2xl text-center  md:text-left">Contact Us</h4>
              <div className="flex items-center mt-5 text-base mb-2">
                <FaEnvelope className="mr-2 h-4 w-4" />
                <a href="mailto:support@figma.com" className="hover:text-yellow-400">
                  support@figma.com
                </a>
              </div>

              <div className="flex items-center mt-5 text-base mb-2">
              <FaLocationDot className="mr-2 h-5 w-5" />
                <div>
                <p className="text-base">National Institute of Technology, Durgapur</p>
                <p className="text-base">West Bengal - 735209</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-4  ml-7 justify-center md:justify-start">
                <a href="#" className="hover:text-yellow-400">
                  <FaFacebook className=" h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaTwitter className=" h-6 w-6"/>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaInstagram  className=" h-6 w-6"/>
                </a>
              </div>
            </div>

          </div>
        </div>

        
        <hr className="border-dashed border-gray-600 mt-1 my-4" />

       
        <div className="text-center text-sm">
          <p>&copy; 2024 Students&apos; Gymkhana, NIT Durgapur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
