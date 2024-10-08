"use client"
import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import ReactPlayer from 'react-player';

const Recs = () => {

    // Hydration Error Fix
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, [])

  return (
    <div className="relative w-screen h-[50vh] md:h-[70vh] lg:h-screen md:mb-10 lg:mb-20">
      {/* Video Background */}
      {/* To play internal video */}
      {/* <video
    src="/RecsVideo.webm"
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-full object-cover"
  /> */}
      {/* To play yt video */}
      {isClient && (<ReactPlayer url="https://www.youtube.com/watch?v=l4NFc4FN_wM" autoPlay muted controls={false} width='100%' height='100%' loop={true} playing={true} className="absolute inset-0 w-full h-full object-cover" />)}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] flex items-center justify-center p-6">
        <div className="w-full md:w-3/4 lg:w-2/3 text-tertiary flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 relative">

          {/* Left Side (Heading) */}
          <Zoom>
            <div className="w-full lg:w-1/3 text-center lg:text-right">
              <h1 className="font-bold text-4xl md:text-5xl text-white">
                Recstacy
              </h1>
            </div>
          </Zoom>

          {/* Curved Vertical Border */}
          <div className="hidden lg:block relative w-[4px] bg-gradient-to-b from-pink-500 to-yellow-500 h-[300px] mx-6 rounded-full animate-pulse"></div>

          {/* Right Side (Paragraph) */}
          <div className="w-full md:w-2/3">
            <div className="font-semibold text-sm md:text-lg lg:text-4xl text-gray-200 leading-relaxed">
              Recstacy is the annual cultural fest of NIT Durgapur, celebrated with a diverse array of events like dance, music, drama, literary competitions, and workshops.
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Recs
