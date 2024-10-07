import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import ReactPlayer from 'react-player';

const Recs = () => {
  return (
    <div className="relative w-screen h-[800px] mb-10">
  {/* Video Background */}
  {/* To play internal video */}
  <video
    src="/RecsVideo.webm"
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* To play yt video */}
  {/* <ReactPlayer url="https://youtu.be/AiW3ubMPU9I?si=lef4X53GecG6upLN" autoPlay muted controls={false} width='100%' height='100%' loop={true} playing={true} className="absolute inset-0 w-full h-full object-cover"/> */}

  {/* Overlay */}
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] flex items-center justify-center p-6">
  <div className="w-full md:w-3/4 lg:w-2/3 text-tertiary flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 relative">
    
    {/* Left Side (Heading) */}
    <Zoom>
    <div className="w-full md:w-1/3 text-center md:text-left">
      <h1 className="font-bold text-4xl md:text-5xl text-white">
        Recstacy
      </h1>
    </div>
    </Zoom>

    {/* Curved Vertical Border */}
    <div className="hidden md:block relative w-[4px] bg-gradient-to-b from-pink-500 to-yellow-500 h-[300px] mx-6 rounded-full animate-pulse"></div>

    {/* Right Side (Paragraph) */}
    <div className="w-full md:w-2/3">
      <p className="font-semibold text-lg md:text-2xl text-gray-200 leading-relaxed">
        Recstacy is the annual cultural fest of NIT Durgapur, celebrated with a diverse array of events like dance, music, drama, literary competitions, and workshops. It’s a vibrant gathering that showcases student talent and creativity, featuring both formal competitions and informal fun activities. The fest often ends with star-studded performances, making it a highlight of the year for students.
      </p>
    </div>
  </div>
</div>


</div>
  )
}

export default Recs
