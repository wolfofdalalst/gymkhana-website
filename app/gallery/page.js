"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "/Gallery/1.jpg",
  "/Gallery/2.jpg",
  "/Gallery/3.jpg",
  "/Gallery/4.jpg",
  "/Gallery/5.jpg",
  "/Gallery/6.jpg",
  "/Gallery/7.jpg",
  "/Gallery/8.jpg",
  "/Gallery/9.jpg",
  "/Gallery/10.jpg",
  "/Gallery/11.jpg",
  "/Gallery/12.jpg",
];

const captions = [
  "NITD Gymkhana 1",
  "NITD Gymkhana 2",
  "NITD Gymkhana 3",
  "NITD Gymkhana 4",
  "NITD Gymkhana 5",
  "NITD Gymkhana 6",
  "NITD Gymkhana 7",
  "NITD Gymkhana 8",
  "NITD Gymkhana 9",
  "NITD Gymkhana 10",
  "NITD Gymkhana 11",
  "NITD Gymkhana 12",
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (sliderRef) {
      sliderRef.slickGoTo(index); // Go to the corresponding slide
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Gallery</h1>

      {/* Slick Slider Section */}
      <Slider {...settings} ref={setSliderRef} className="w-full max-w-4xl">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-80 md:h-96 overflow-hidden">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-opacity duration-500 ease-in-out opacity-100"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg text-center py-2">
              {captions[index]}
            </p>
          </div>
        ))}
      </Slider>

      {/* Thumbnail Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl px-4 md:px-0 mt-8">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full h-24 md:h-32 lg:h-40 relative rounded-lg overflow-hidden shadow-md transition-transform duration-500 ease-in-out transform hover:scale-110 ${activeIndex === index ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleThumbnailClick(index)} // Update the main image on click
            role="button"
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`Thumbnail Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className={`rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;