"use client";
import React from 'react'
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Meteors } from "@/components/ui/meteors";

const PostBearerCard = ({ src, post, name, socials }) => {
  return (
    <div className='static w-[80%] h-[75%] mt-9'>
      <BackgroundGradient containerClassName="w-full h-full" className="group rounded-[22px] w-full h-full bg-darkCard dark:bg-zinc-900 overflow-hidden hover:scale-105 transition-all duration-1000 ease-in-out">
        <div className='w-full h-[75%] bg-gradient-to-br from-slate-700 to-black'>
          <div className='w-[85%] h-full overflow-hidden relative m-auto'>
            <Image
              src={src}
              alt="jordans"
              layout='fill'
              className="object-fill"
            />
          </div>
        </div>

        <div className='w-full h-fit absolute bottom-5 z-40 transition-all duration-500 ease-in-out'>
          <div className='text-center opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-0 group-hover:relative group-hover:-z-10 transition-all duration-700 ease-in-out'>
            <div className='text-base sm:text-xs md:text-[10px] lg:text-sm text-primary md:font-semibold font-bold mb-0 md:mb-1 lg:mb-0 font-montserrat'>
              {name}
            </div>
            <div className='text-xs md:text-[10px] lg:text-xs text-white font-sans'>
              {post}
            </div>
          </div>

          <div className='invisible h-0 opacity-0 translate-y-[300%] group-hover:visible group-hover:h-fit group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>
            <ul className='flex items-center justify-evenly'>
              <li className={`${(socials && socials.linkedin ? '' : 'hidden')} w-[18px] h-[18px]`}>
                <a
                  href={(socials && socials.linkedin != undefined ? socials.linkedin : '')}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className='text-gray-100 hover:text-primary w-full h-full transition-all duration-300' />
                </a>
              </li>
              <li className={`${(socials && socials.facebook ? '' : 'hidden')} w-[18px] h-[18px]`}>
                <a
                  href={(socials && socials.facebook != undefined ? socials.linkedin : '')}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-gray-100 hover:text-primary w-full h-full transition-all duration-300" />
                </a>
              </li>
              <li className={`${(socials && socials.instagram ? '' : 'hidden')} w-[18px] h-[18px]`}>
                <a
                  href={(socials && socials.instagram != undefined ? socials.linkedin : '')}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-gray-100 hover:text-primary w-full h-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default PostBearerCard




// "use client";
// import React from "react";
// import { BackgroundGradient } from "../ui/background-gradient";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

// const PostBearerCard = ({ src, post, name, socials }) => {
//   return (
//     <div className="relative w-full h-[85%] mt-9">
//       <BackgroundGradient
//         containerClassName="w-full h-full"
//         className="group rounded-[22px] overflow-hidden transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
//       >
//         {/* Image Section */}
//         <div className="w-full h-[70%] relative  px-5  pt-3">
//           <Image src={src} alt={name} width={120} height={100} />
//         </div>

//         {/* Content Section */}
//         <div className="p-4 bg-zinc-900 text-center relative">
//           <div className="transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0">
//             <h2 className="text-lg md:text-xl text-primary font-bold mb-1">
//               {name}
//             </h2>
//             <p className="text-sm md:text-base text-gray-300">{post}</p>
//           </div>

//           {/* Social Icons */}
//           <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-black to-black/70">
//             <ul className="flex space-x-4">
//               {socials?.linkedin && (
//                 <li>
//                   <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       className="text-gray-100 hover:text-primary transition duration-300"
//                       size="lg"
//                     />
//                   </a>
//                 </li>
//               )}
//               {socials?.facebook && (
//                 <li>
//                   <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon
//                       icon={faFacebookF}
//                       className="text-gray-100 hover:text-primary transition duration-300"
//                       size="lg"
//                     />
//                   </a>
//                 </li>
//               )}
//               {socials?.instagram && (
//                 <li>
//                   <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon
//                       icon={faInstagram}
//                       className="text-gray-100 hover:text-primary transition duration-300"
//                       size="lg"
//                     />
//                   </a>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </BackgroundGradient>
//     </div>
//   );
// };

// export default PostBearerCard;
