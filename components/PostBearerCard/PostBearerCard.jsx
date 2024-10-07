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
    <div className='static w-full h-4/5 mt-9'>
      <BackgroundGradient containerClassName="w-full h-full" className="group rounded-[22px] w-full h-full bg-darkCard dark:bg-zinc-900 overflow-hidden hover:scale-105 transition-all duration-700 ease-in-out">
        <div className='w-full h-[75%] overflow-hidden relative'>
          <Image
            src={src}
            alt="jordans"
            layout='fill'
            className="object-fill"
          />
          <Meteors number={20} />
        </div>

        <div className='w-full h-fit absolute bottom-5 z-40 transition-all duration-500 ease-in-out'>
          <div className='text-3xl text-center opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-0 group-hover:relative group-hover:-z-10 transition-all duration-700 ease-in-out'>
            <div className='text-primary font-extrabold'>
              {name}
            </div>
            <div className='text-white font-semibold'>
              {post}
            </div>
          </div>

          <div className='invisible h-0 opacity-0 translate-y-[300%] group-hover:visible group-hover:h-fit group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>
            <ul className='flex items-center justify-evenly'>
            <li className={`${(socials && socials.linkedin?'':'hidden')}`}>
              <a
                href={(socials && socials.linkedin!=undefined?socials.linkedin:'')}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-gray-100 hover:text-gray-400'/>
              </a>
            </li>
            <li className={`${(socials && socials.facebook?'':'hidden')}`}>
              <a
                href={(socials && socials.facebook!=undefined?socials.linkedin:'')}
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-gray-100 hover:text-gray-400" />
              </a>
            </li>
            <li className={`${(socials && socials.instagram?'':'hidden')}`}>
              <a
                href={(socials && socials.instagram!=undefined?socials.linkedin:'')}
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-gray-100 hover:text-gray-400"/>
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