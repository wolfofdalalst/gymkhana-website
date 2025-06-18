"use client";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function PostBearerCard({ name, post, src, socials }) {
  return (
    <div className="relative  group bg-zinc-800 text-white rounded-xl shadow-md p-6 w-full max-w-sm flex flex-col items-center overflow-hidden transition-all duration-700 hover:bg-zinc-700  hover:scale-95">
      {/* Image */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-zinc-600 mb-6 transition-all duration-700 group-hover:scale-110">
        <Image src={src} alt={name} fill className="object-scale-down" />
      </div>

      <div className="relative h-12 w-full flex items-center justify-center overflow-hidden">
        {/* when no hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 group-hover:-translate-y-16">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-zinc-400">{post}</p>
        </div>
        {/* when hover */}
        <div className="absolute inset-0 flex gap-4  justify-center items-center transform translate-y-16 transition-transform duration-700 group-hover:translate-y-0 text-2xl">
          {socials.linkedin && (
            <Link
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-110 active:text-blue-800 active:scale-100 transition-all duration-300"
            >
              <FaLinkedin />
            </Link>
          )}
          {socials.facebook && (
            <Link
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-110 active:text-blue-800 active:scale-100 transition-all duration-300"
            >
              <FaFacebook />
            </Link>
          )}
          {socials.instagram && (
            <Link
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-110 active:text-blue-800 active:scale-100 transition-all duration-300"
            >
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
