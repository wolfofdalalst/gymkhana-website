"use client";
import Image from "next/image";
import About from "@/components/ui/About";
import Section from "@/components/ui/Section";
import DummyContent from "@/components/ui/DummyContent";
import { useState, useEffect } from "react";
// import ReactPlayer from 'react-player';
import Recs from "@/components/ui/Recs";
import ReCrave from "@/components/ui/Recrave";
import SlideComponent from "./clubs/SlideComponent";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);


  useEffect(() => {
    if (typeof window !== "undefined") {

      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
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
        <div className="flex items-center justify-center w-full md:w-[70%] mx-auto sm:mt-6  sm:mb-24">
          <div className="w-full">
            <section id="about">
              <About />
            </section>
          </div>
        </div>

        <section id="clubs" className="w-full h-full py-20">
          <h1 className="font-extrabold text-3xl sm:text-5xl  text-white text-center mb-7">
            Clubs
          </h1>
          <SlideComponent />
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

