"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const imagePaths = Array.from({ length: 12 }, (_, i) => `/Gallery/${i + 1}.jpg`);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:px-24 bg-black">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Gallery
      </motion.h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {imagePaths.map((imagePath, key) => (
          <motion.div
            key={key}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300"
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={imagePath}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300"
              alt={`Gallery Image ${key + 1}`}
            />

            {/* Translucent left-to-right effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-black"
              initial={{ left: "-100%" }}
              whileHover={{ left: "100%" }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.5))",
              }}
            />

            {/* Border and overlay effect on hover */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-lg transition-all duration-300"
              whileHover={{
                borderColor: "rgba(255, 215, 0, 1)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

