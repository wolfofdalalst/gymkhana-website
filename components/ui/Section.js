import React from "react";
import Image from "next/image";
import { Bounce, JackInTheBox, Slide } from "react-awesome-reveal";

const Section = ({
  imageSrc,
  heading,
  description,
  buttonText,
  buttonLink,
  reverse,
}) => {
  return (
    <Slide direction={reverse ? "right" : "left"}>
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center mb-12 p-7 bg-gray-100 shadow-lg rounded-lg`}
      >
        {/* Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
          <Image
            src={imageSrc}
            alt={heading}
            width={300}
            height={300}
            className="object-cover rounded-lg"
            priority // Load image immediately
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-primary">
            {heading}
          </h2>
          <p className="text-base md:text-lg mb-6 text-primary">
            {description}
          </p>
          <a
            href={buttonLink}
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </Slide>
  );
};

export default Section;
