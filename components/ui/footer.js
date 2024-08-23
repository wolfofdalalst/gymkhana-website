// components/Footer.js

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-gray-100 p-8 self-end ">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">


              <Image src="/nit_dgp_logo.webp" alt="DGP Logo" width={100} height={100} />
         


            <Image src="/gymkhana_logo.webp" alt="SG Logo" width={100} height={100} />


        </div>
        
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><Link href="/clubs"><span className="text-gray-700 hover:underline">Clubs</span></Link></li>
            <li><Link href="/senate"><span className="text-gray-700 hover:underline">Senate</span></Link></li>
            <li><Link href="/calendar"><span className="text-gray-700 hover:underline">Calendar</span></Link></li>
            <li><Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">NIT Durgapur</Link></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-gray-700">NIT Durgapur</p>
          <p className="text-gray-700">Mahatma Gandhi Avenue</p>
          <p className="text-gray-700">Durgapur</p>
          <p className="text-gray-700">West Bengal, 713209</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-700">Have any questions?</p>
          <br />
          <Link href="/contact"><span className="text-indigo-700 hover:underline">Send a Message</span></Link>
          <div className="flex space-x-4 mt-8">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024">
                {/* Facebook SVG Path */}
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
              </svg>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-purple-600">
              <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024">
                {/* Instagram SVG Path */}
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
              </svg>
            </Link>
            <Link href="mailto:president_sg@iitism.ac.in" className="text-red-600">
              <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024">
                {/* Email SVG Path */}
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Students Gymkhana, NIT Durgapur</p>
      </div>
    </footer>
  );
}
