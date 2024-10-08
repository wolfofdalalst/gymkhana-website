"use client"
import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Cover } from './cover';
import ReactPlayer from 'react-player/youtube';

const Recrave = () => {

  // Hydration Error Fix
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <div className="relative w-screen h-[40vh] md:h-[70vh] lg:h-screen mb-8 md:mb-10 lg:mb-20">
      {/* Video Background */}
      {/* To play internal video  */}
      {/* <video
        src="/RecraveVideo.webm"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      {/* To play yt video */}
      {isClient && (<ReactPlayer url="https://www.youtube.com/watch?v=f5f1kqF4IDU" autoPlay muted controls={false} width='100%' height='100%' loop={true} playing={true} className="absolute inset-0 object-cover"/>)}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] flex items-center justify-center p-6">
        <div className="w-full md:w-3/4 lg:w-2/3 text-tertiary flex flex-col lg:flex-row-reverse items-center justify-between space-y-6 lg:space-y-0 relative">
          
          {/* Right Side (Heading on large screens, above paragraph on small screens) */}
          <Zoom>
            <div className="w-full lg:w-1/3 text-center lg:text-right">
              <h1 className="font-bold text-4xl md:text-5xl text-white">
                Recrave
              </h1>
            </div>
          </Zoom>

          {/* Curved Vertical Border */}
          <div className="hidden lg:block relative w-[4px] bg-gradient-to-b from-pink-500 to-yellow-500 h-[300px] mx-6 rounded-full animate-pulse"></div>

          {/* Left Side (Paragraph on large screens, below heading on small screens) */}
          <div className="w-full lg:w-2/3">
            <div className="font-semibold text-sm md:text-lg lg:text-4xl text-gray-200 leading-relaxed">
              Students&apos; Gymkhana of NIT DGP brings the latest edition of - reCrave: annual food fest of NIT Durgapur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recrave;