"use client";
import PostBearerCard from "@/components/PostBearerCard/PostBearerCard";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function PostBearer() {
  const cards = [
    {
      name: "PRASANT SAHU",
      post: "PRESIDENT",
      src: "/PostBearers/Presi.jpeg",
    },
    {
      name: "SHIVANSHU KUMAR",
      post: "VICE PRESIDENT",
      src: "/PostBearers/VP.jpeg",
    },
    {
      name: "ANKAN DATTA",
      post: "GENERAL SECRETARY",
      src: "/PostBearers/GenSec.jpeg",
    },
    {
      name: "SUJAL KUMAR",
      post: "AGS - SOCIAL & SPORTS",
      src: "/PostBearers/Ags_Sports.jpeg",
    },
    {
      name: "ARKARUP MITRA",
      post: "AGS - CULTURAL",
      src: "/PostBearers/Ags_Culture.jpeg",
    },
    {
      name: "KONDURU PRANAVI",
      post: "GIRLS REPRESENTATIVE",
      src: "/PostBearers/GR.jpeg",
    },
  ];
  return (
    <div className="w-screen min-h-screen">
      <div className="w-full h-[30vh] md:h-fit mt-16 md:mt-0 mx-auto flex items-center justify-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Post Bearers
          </motion.h1>
        </LampContainer>
      </div>

      <div className="w-screen h-fit flex items-center justify-center">
        <div className="w-full h-fit mx-auto flex flex-col items-center justify-center md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-[15%] md:gap-y-[5%] md:px-10">
          {cards.map((card, key) => (
            <div className="w-[90%] md:w-full h-[700px]">
              <PostBearerCard
                src={card.src}
                post={card.post}
                name={card.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
