"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("/hls/master.m3u8");
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("✅ HLS loaded");
        videoRef.current.play();
      });

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error("❌ HLS.js error:", data);
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari fallback
      videoRef.current.src = "/hls/master.m3u8";
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="w-full h-[70vh] bg-black">
      <video
        ref={videoRef}
        controls={false}
        muted
        playsInline
        autoPlay
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
