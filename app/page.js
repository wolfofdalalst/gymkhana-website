"use client";
import Image from 'next/image';
import About from "@/components/ui/About";
import NoticeBoard from "@/components/ui/Noticeboard";
import Section from "@/components/ui/Section";
import DummyContent from "@/components/ui/DummyContent";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <div>
      {/* Initial Section (Full Viewport Height) */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="flex flex-col gap-5 md:flex-row items-center justify-between w-full md:w-[70%] mx-auto">
          
          {/* Left Section: Typing Text and Logo */}
          <div className="flex flex-col justify-center md:w-1/2">

            {/* Logo */}
            {/* <div className="mb-6 flex justify-center">
              <Image
                priority
                src="/gymkhana_logo.webp"
                alt="Student's Gymkhana Logo"
                width={150} 
                height={150} 
                className="object-contain"
              />
            </div> */}

            {/* Static Text */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold m-2">Students&apos; Gymkhana</h1>
              <h2 className="text-2xl md:text-xl font-semibold m-2">National Institute of Technology<br />Durgapur</h2>
            </div>

            {/* Typing Text */}
            <div className="text-center mt-6">
              <TypewriterEffect words={words} />
            </div>

          </div>

          {/* Right Section: NIT Durgapur Image */}
          <div className="flex flex-col items-center md:w-1/2">

            {/* NIT Durgapur Image */}
            <div className="flex justify-center mt-6">
              <Image
                priority
                src="https://nitdgp.ac.in/iicpage/static/media/NitFrontGate.ac06eab6.webp"
                alt="NIT Durgapur" 
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Sections Rendered Based on Scroll */}
            <div className="flex flex-col md:flex-row w-full md:w-[70%] mx-auto my-6">
              {/* Notice Board */}
              <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0 order-1">
                <NoticeBoard />
              </div>

              {/* About Section */}
              <div className="w-full md:w-2/3">
                <About />
              </div>
            </div>

            <div className="w-7/10">
              {/* Achievements section */}
            </div>
            
            <div className="w-full md:w-[70%] mx-auto mb-6">
              <Section 
                imageSrc="/clubs.png" 
                heading="Clubs" 
                description="Clubs at NIT Durgapur are student-led organizations that cater to various interests, such as technology, arts, culture, sports, and social service. They provide platforms for students to explore their passions, develop skills, and connect with peers. Each club organizes events, workshops, and activities throughout the year, enriching campus life and offering opportunities for personal and professional growth. Explore the various clubs and organizations that offer diverse activities and interests."
                buttonText="Find More" 
                buttonLink="clubs" 
              />
            </div>

            <div className="w-full md:w-[70%] mx-auto mb-6">
              <Section
                imageSrc="/recstacy.jpeg" 
                heading="Recstacy"
                description="Recstacy is NIT Durgapur's annual sports festival, bringing together students from across the country for competitions in cricket, football, basketball, and more. It's one of the largest inter-college sports fests in Eastern India, known for promoting sportsmanship and camaraderie."
                buttonText="Find More"
                buttonLink="recstacy"
                reverse
              />
            </div>

            <div className="w-full md:w-[70%] mx-auto mb-6">
              <Section 
                imageSrc="/recrave.jpg" 
                heading="reCrave" 
                description="Students' Gymkhana of NIT DGP brings the first edition of - reCrave: annual food fest of NIT Durgapur."
                buttonText="Find More" 
                buttonLink="recrave" 
              />
            </div>
      </div>
    </div>
  );
}

// Achievements Data
const data = [
  {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },
  {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },
  {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },

  {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },
  {
      category: "iOS",
      title: "Photography just got better.",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },
  {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "/gymkhana_logo.webp",
      content: <DummyContent />,
  },
];

//TypeWriter words
const words = [
  {
    text: "Welcome",
  },
  {
    text: "to",
  },
  {
    text: "Students'",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: " Gymkhana. ",
    className: "text-blue-500 dark:text-blue-500",
  },
];
