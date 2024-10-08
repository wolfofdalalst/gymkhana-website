"use client";
import Image from "next/image";
import About from "@/components/ui/About";
import NoticeBoard from "@/components/ui/Noticeboard";
import Section from "@/components/ui/Section";
import DummyContent from "@/components/ui/DummyContent";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState, useEffect } from "react";
// import ReactPlayer from 'react-player';
import Recs from "@/components/ui/Recs";
import ReCrave from "@/components/ui/Recrave";

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
              alt="NIT Durgapur"
            />
          </div>
          <div className="w-screen h-[800px] inset-0 bg-[rgba(0,0,0,0.55)] absolute flex items-center justify-center">
            <div className="w-4/5 md:w-1/2 h-1/2 flex items-center justify-evenly flex-col text-center">
              <div className="w-full h-1/2 flex items-center justify-evenly flex-col">
                <h1 className="font-bold md:text-5xl text-primary">
                  Students&apos; Gymkhana
                </h1>
                <h2 className="font-bold md:text-5xl text-white">
                  Welcomes You!
                </h2>
              </div>
              <p className="w-full font-semibold md:text-2xl text-gray-200">
                The Students&apos; Gymkhana of NIT Durgapur is the official body
                representing the student community. We work to promote the
                overall well-being, academic excellence, and holistic
                development of students, fostering a vibrant and inclusive
                campus environment.
              </p>
            </div>
          </div>
        </div>

        {/* Sections Rendered Based on Scroll */}
        <div className="flex items-center justify-center w-full md:w-[70%] mx-auto mt-6 mb-24">
          {/* About Section */}
          <div className="w-full">
            <section id="about">
              <div className="h-[7vh]"></div>
              <About />
            </section>
          </div>
        </div>

        <section id="clubs">
          <div className="h-[7vh]"></div>
          <div className="w-full md:w-[70%] mx-auto mb-6">
            <Section
              imageSrc="/clubs.png"
              heading="Clubs"
              description="Clubs at NIT Durgapur are student-led organizations that cater to various interests, such as technology, arts, culture, sports, and social service. They provide platforms for students to explore their passions, develop skills, and connect with peers. Each club organizes events, workshops, and activities throughout the year, enriching campus life and offering opportunities for personal and professional growth. Explore the various clubs and organizations that offer diverse activities and interests."
              buttonText="Find More"
              buttonLink="clubs"
            />
          </div>
        </section>

        <section id="events">
          <div className="h-[7vh]"></div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-5xl text-white text-center mb-7">
              Events
            </h1>
            <Recs />
            <ReCrave />
          </div>
        </section>
      </div>
    </div>
  );
}
