"use client";
import React from "react";
import Image from "next/image";

export default function page() {
  let imagePaths = [];
  for (let i = 1; i <= 10; i++) {
    imagePaths.push("/Gallery/" + i + ".jpg");
  }
  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-5 gap-x-0 gap-y-[5%] md:grid-cols-5 md:grid-rows-2 md:gap-x-[2%] md:px-24">
      {imagePaths.map((imagePath, key) => (
        <div
          className="relative w-3/4 md:w-[100%] h-full overflow-hidden mx-auto my-2 md:my-0"
          key={key}
        >
          <Image
            src={imagePath}
            // width={500}
            // height={200}
            layout="fill"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
