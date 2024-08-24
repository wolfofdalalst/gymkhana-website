// components/Footer.js

import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";




export default function Footer() {
  return (
    <footer className=" bg-gray-100 p-8 pr-0 self-end ">
      <div className="flex flex-wrap justify-around lg:pl-36 ">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <Image src="/nit_dgp_logo.webp"  alt="DGP Logo" width={100} height={100} />
          <Image src="/gymkhana_logo.webp"     alt="SG Logo" width={100} height={100} />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0" >
           <div className="relative "> 
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><Link href="/clubs"><span className="text-gray-700 hover:underline">Clubs</span></Link></li>
                <li><Link href="/post-bearer"><span className="text-gray-700 hover:underline">Senate</span></Link></li>
                <li><Link href="/"><span className="text-gray-700 hover:underline">Calendar</span></Link></li>
                <li><Link href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">NIT Durgapur</Link></li>
              </ul>
           </div>
        </div>

        <div  className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <div className="relative ">
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-gray-700">NIT Durgapur</p>
            <p className="text-gray-700">Mahatma Gandhi Avenue</p>
            <p className="text-gray-700">Durgapur</p>
            <p className="text-gray-700">West Bengal, 713209</p>
          </div>
        </div>

        <div  className="w-full sm:w-1/2 lg:w-1/4">
         <div className="relative w-4/5 " >
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-700">Have any questions?</p>
          <br />
          <Link href="/contact"><span className="text-indigo-700 hover:underline">Send a Message</span></Link>

          <div className="flex space-x-4 mt-8 ">

            <Link href="https://www.facebook.com/gymkhana.nitdgp?mibextid=ZbWKwL&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-black-800">

               <FaFacebookSquare  className="w-8 h-8" />


            </Link>

            <Link href="https://www.instagram.com/gymkhana_nitdgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-black-800">
              
                <FaInstagram className="w-8 h-8" />

            </Link>

            <Link href="/" target="_blank" rel="noopener noreferrer" className="text-black-100 ">

               <FaGithub  className="w-8 h-8" />

            </Link>

          </div>  {/* icons div */}
        </div> {/* wrap all div */}
        </div>  {/* contact div */}
     
          <div className="mt-8 text-center mx-auto text-gray-500">
            <p>&copy; 2024 Students Gymkhana, NIT Durgapur</p>
          </div>
      </div>
    </footer>
  );
}
