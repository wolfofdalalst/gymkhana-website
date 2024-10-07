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
      socials: {
        linkedin: 'https://www.linkedin.com/in/prash482/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        facebook: 'https://www.facebook.com/rahul.reigns.9026?mibextid=JRoKGi',
        instagram: 'https://www.instagram.com/prash_482/?igsh=MTVjZ2ZobnZmd2VvaQ%3D%3D',
      }
    },
    {
      name: "SHIVANSHU KUMAR",
      post: "VICE PRESIDENT",
      src: "/PostBearers/VP.jpeg",
      socials: {
        linkedin: 'https://www.linkedin.com/in/shivanshu-kumar-aa053a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        facebook: 'https://www.facebook.com/shivanshu.kumar.7562?mibextid=JRoKGi',
        instagram: 'https://www.instagram.com/shivanshu_kr_/?igsh=MWZmMnFsanhvM3BseA%3D%3D',
      }
    },
    {
      name: "ANKAN DATTA",
      post: "GENERAL SECRETARY",
      src: "/PostBearers/GenSec.jpeg",
      socials: {
        linkedin: 'https://www.linkedin.com/in/ankan-datta-70422b245/edit/forms/next-action/after-connect-update-profile/',
        facebook: 'https://www.facebook.com/profile.php?id=100090159799778&mibextid=JRoKGi',
        instagram: 'https://www.instagram.com/_.timba/?igsh=czJzOG40djI3dXdq',
      }
    },
    {
      name: "SUJAL KUMAR",
      post: "AGS - SOCIAL & SPORTS",
      src: "/PostBearers/Ags_Sports.jpeg",
      socials: {
        linkedin: 'https://www.linkedin.com/in/sujal-kumar-aab83525b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/kr.sujal8/?igsh=MTE1NXQwb2tkZmVyNQ%3D%3D',
      }
    },
    {
      name: "ARKARUP MITRA",
      post: "AGS - CULTURAL",
      src: "/PostBearers/Ags_Culture.jpeg",
      socials: {
        facebook: 'https://www.facebook.com/arkarup.mitra.524?mibextid=JRoKGi',
        instagram: 'https://www.instagram.com/arkx_mite_1/?igsh=cG9qdnFxYXA3bzN6',
      }
    },
    {
      name: "KONDURU PRANAVI",
      post: "GIRLS REPRESENTATIVE",
      src: "/PostBearers/GR.jpeg",
      socials: {
        linkedin: 'https://www.linkedin.com/in/pranavi-konduru-9b497526a/',
        instagram: 'https://www.instagram.com/_pranavi_004/?igsh=ZzRqZjRsaHE0bzd0',
      }
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
          {cards.map((card, index) => (
            <div className="w-[90%] md:w-full h-[700px]" key={index}>
              <PostBearerCard
                src={card.src}
                post={card.post}
                name={card.name}
                socials={card.socials}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
