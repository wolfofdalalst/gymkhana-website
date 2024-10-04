"use client";
import Image from "next/image";
import About from "@/components/ui/About";
import NoticeBoard from "@/components/ui/Noticeboard";
import Section from "@/components/ui/Section";
import DummyContent from "@/components/ui/DummyContent";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState, useEffect } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      // Handle resize event
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      {/* Initial Section (Full Viewport Height) */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="w-screen h-[800px] mb-10">
          <div className="w-screen h-[800px] inset-0 absolute">
            <Image
              priority={true}
              layout="fill"
              src="/nit_durgapur_cover.jpeg"
            />
          </div>
          <div className="w-screen h-[800px] inset-0 bg-[rgba(0,0,0,0.55)] absolute flex items-center justify-center">
            <div className="w-1/2 h-1/2 text-tertiary flex items-center justify-evenly flex-col text-center">
              <div className="w-full h-1/2 flex items-center justify-evenly flex-col">
                <h1 className="font-bold text-5xl">Students' Gymkhana</h1>
                <h2 className="font-bold text-5xl">Welcomes You!</h2>
              </div>
              <p className="font-semibold text-2xl text-gray-200">
                The Students' Gymkhana of NIT Durgapur is the official body
                representing the student community. We work to promote the
                overall well-being, academic excellence, and holistic
                development of students, fostering a vibrant and inclusive
                campus environment.
              </p>
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

        <div className="w-7/10">{/* Achievements section */}</div>

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
            description="Recstacy is the annual cultural fest of NIT Durgapur, celebrated with a diverse array of events like dance, music, drama, literary competitions, and workshops. It’s a vibrant gathering that showcases student talent and creativity, featuring both formal competitions and informal fun activities. The fest often ends with star-studded performances, making it a highlight of the year for students."
            buttonText="Find More"
            buttonLink="recstacy"
            reverse
          />
        </div>

        <div className="w-full md:w-[70%] mx-auto mb-6">
          <Section
            imageSrc="/recrave.jpg"
            heading="reCrave"
            description="Students' Gymkhana of NIT DGP brings the latest edition of - reCrave: annual food fest of NIT Durgapur."
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
