"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { Zoom } from "react-awesome-reveal";
import Link from "next/link";

const Recrave = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      // note : .ts , .m3u8 files will be served with CDN later
      hls.loadSource("/hls/master.m3u8");
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error("HLS.js error:", data);
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = "/hls/master.m3u8";
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="relative w-screen h-[50vh] md:h-[70vh] lg:h-screen mb-8 sm:mb-10 lg:mb-20 select-none">
      
      {/* Adaptive Streaming Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute inset-0 m-auto border-2 w-[90vw] h-full hover:border-primary rounded-xl object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] flex items-center justify-center p-6">
        <div className="w-full md:w-3/4 lg:w-2/3 text-tertiary flex flex-col lg:flex-row-reverse items-center justify-between space-y-6 lg:space-y-0 relative">

          {/* Right Side */}
          <Zoom>
            <Link
              href="https://www.instagram.com/gymkhana_nitdgp"
              target="_blank"
              className="w-full lg:w-1/3 text-center lg:text-right"
            >
              <h1 className="font-bold text-4xl md:text-5xl text-white hover:text-primary ">
              Recstacy
              </h1>
            </Link>
          </Zoom>

          {/* Curved Border */}
          <div className="hidden lg:block relative w-[4px] bg-gradient-to-b from-pink-500 to-yellow-500 h-[300px] mx-6 rounded-full animate-pulse"></div>

          {/* Left Side */}
          <div className="w-full lg:w-2/3">
            <div className="font-semibold text-sm w-11/12 sm:w-full mx-auto text-center sm:text-start md:text-lg lg:text-4xl text-gray-200 leading-relaxed">
            Recstacy is the annual cultural fest of NIT Durgapur, celebrated with a diverse array of events like dance, music, drama, literary competitions, and workshops.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recrave;
