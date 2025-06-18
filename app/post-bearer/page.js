"use client";
import PostBearerCard from "@/components/PostBearerCard/PostBearerCard";

export default function PostBearer() {
  const cards = [
    {
      name: "PRASANT SAHU",
      post: "PRESIDENT",
      src: "/PostBearers/Presi.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/prash482/",
        facebook: "https://www.facebook.com/rahul.reigns.9026",
        instagram: "https://www.instagram.com/prash_482/",
      },
    },
    {
      name: "SHIVANSHU KUMAR",
      post: "VICE PRESIDENT",
      src: "/PostBearers/VP.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/shivanshu-kumar-aa053a23b/",
        facebook: "https://www.facebook.com/shivanshu.kumar.7562",
        instagram: "https://www.instagram.com/shivanshu_kr_/",
      },
    },
    {
      name: "ANKAN DATTA",
      post: "GENERAL SECRETARY",
      src: "/PostBearers/GenSec.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/ankan-datta-70422b245/",
        facebook: "https://www.facebook.com/profile.php?id=100090159799778",
        instagram: "https://www.instagram.com/_.timba/",
      },
    },
    {
      name: "SUJAL KUMAR",
      post: "AGS - SOCIAL & SPORTS",
      src: "/PostBearers/Ags_Sports.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/sujal-kumar-aab83525b/",
        instagram: "https://www.instagram.com/kr.sujal8/",
      },
    },
    {
      name: "ARKARUP MITRA",
      post: "AGS - CULTURAL",
      src: "/PostBearers/Ags_Culture.png",
      socials: {
        facebook: "https://www.facebook.com/arkarup.mitra.524",
        instagram: "https://www.instagram.com/arkx_mite_1/",
      },
    },
    {
      name: "KONDURU PRANAVI",
      post: "GIRLS REPRESENTATIVE",
      src: "/PostBearers/GR.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/pranavi-konduru-9b497526a/",
        instagram: "https://www.instagram.com/_pranavi_004/",
      },
    },
  ];

  return (
    <div className="w-[98%] mx-auto bg-zinc-900 min-h-screen py-12 px-4 rounded-lg">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        Meet Our Post Bearers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <PostBearerCard
            key={index}
            name={card.name}
            post={card.post}
            src={card.src}
            socials={card.socials}
          />
        ))}
      </div>
    </div>
  );
}
