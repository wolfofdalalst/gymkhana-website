"use client";
import PostBearerCard from "@/components/PostBearerCard/PostBearerCard";

export default function PostBearer() {
  const cards = [
    {
      name: "PRASANT SAHU",
      post: "PRESIDENT",
      src: "/PostBearers/Presi.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/prash482/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        facebook: "https://www.facebook.com/rahul.reigns.9026?mibextid=JRoKGi",
        instagram:
          "https://www.instagram.com/prash_482/?igsh=MTVjZ2ZobnZmd2VvaQ%3D%3D",
      },
    },
    {
      name: "SHIVANSHU KUMAR",
      post: "VICE PRESIDENT",
      src: "/PostBearers/VP.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/shivanshu-kumar-aa053a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        facebook:
          "https://www.facebook.com/shivanshu.kumar.7562?mibextid=JRoKGi",
        instagram:
          "https://www.instagram.com/shivanshu_kr_/?igsh=MWZmMnFsanhvM3BseA%3D%3D",
      },
    },
    {
      name: "ANKAN DATTA",
      post: "GENERAL SECRETARY",
      src: "/PostBearers/GenSec.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/ankan-datta-70422b245/edit/forms/next-action/after-connect-update-profile/",
        facebook:
          "https://www.facebook.com/profile.php?id=100090159799778&mibextid=JRoKGi",
        instagram: "https://www.instagram.com/_.timba/?igsh=czJzOG40djI3dXdq",
      },
    },
    {
      name: "SUJAL KUMAR",
      post: "AGS - SOCIAL & SPORTS",
      src: "/PostBearers/Ags_Sports.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/sujal-kumar-aab83525b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/kr.sujal8/?igsh=MTE1NXQwb2tkZmVyNQ%3D%3D",
      },
    },
    {
      name: "ARKARUP MITRA",
      post: "AGS - CULTURAL",
      src: "/PostBearers/Ags_Culture.png",
      socials: {
        facebook: "https://www.facebook.com/arkarup.mitra.524?mibextid=JRoKGi",
        instagram:
          "https://www.instagram.com/arkx_mite_1/?igsh=cG9qdnFxYXA3bzN6",
      },
    },
    {
      name: "KONDURU PRANAVI",
      post: "GIRLS REPRESENTATIVE",
      src: "/PostBearers/GR.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/pranavi-konduru-9b497526a/",
        instagram:
          "https://www.instagram.com/_pranavi_004/?igsh=ZzRqZjRsaHE0bzd0",
      },
    },
  ];

  const order1 = [2, 0, 1, 4];
  const order2 = [3, 5];

  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <div className="h-fit w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="group h-fit md:text-7xl text-3xl lg:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-400 hover:bg-transparent hover:text-white transition-all duration-500 text-transparent bg-clip-text relative z-20 flex flex-col items-center justify-center">
          Post Bearers
          <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"></div>
        
          {/* <div className="w-full h-40 relative"> */}
          {/* Gradients */}
          {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

          {/* Sparkles Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        {/* </div> */}
        </div>
      </div>

      <div className="w-screen h-fit flex flex-col items-center justify-center">
        {/* <div className="w-[285px] sm:w-[80%] md:w-[90%] lg:w-[90%] xl:w-[78%] h-fit mx-auto flex flex-col items-center justify-center sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-[20%] sm:gap-y-[2%] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-[15%] md:gap-y-[2%]">
          {cards.map((card, index) => (
            <div className="w-full h-[48vh] md:h-[400px] xl:h-[450px] flex items-center justify-center" key={index}>
              <PostBearerCard
                src={card.src}
                post={card.post}
                name={card.name}
                socials={card.socials}
              />
            </div>
          ))}
        </div> */}
        <div className="w-[285px] sm:w-[42%] md:w-[90%] lg:w-[90%] xl:w-[78%] h-fit mx-auto flex flex-col items-center justify-center sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:gap-x-[20%] sm:gap-y-[2%] md:grid md:grid-cols-4 md:grid-rows-1 md:gap-x-[5%] md:gap-y-[2%]">
          {order1.map((ord, index) => (
            <div className="w-full h-[48vh] md:h-[400px] xl:h-[450px] flex items-center justify-center" key={index}>
            <PostBearerCard
              src={cards[ord].src}
              post={cards[ord].post}
              name={cards[ord].name}
              socials={cards[ord].socials}
            />
          </div>
          ))}
        </div>
        <div className="w-[285px] sm:w-[42%] md:w-[90%] lg:w-[90%] xl:w-[78%] h-fit mx-auto flex flex-col items-center justify-center sm:grid sm:grid-cols-1 sm:grid-rows-2 sm:gap-x-[20%] sm:gap-y-[2%] md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-[10%] md:gap-y-[2%]">
          {order2.map((ord, index) => (
            <div className="w-full md:w-[50%] h-[48vh] md:h-[400px] xl:h-[450px] flex items-center justify-center mx-auto" key={index}>
            <PostBearerCard
              src={cards[ord].src}
              post={cards[ord].post}
              name={cards[ord].name}
              socials={cards[ord].socials}
            />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// "use client";
// import PostBearerCard from "@/components/PostBearerCard/PostBearerCard";

// export default function PostBearer() {
//   const cards = [
//     {
//       name: "PRASANT SAHU",
//       post: "PRESIDENT",
//       src: "/PostBearers/Presi.png",
//       socials: {
//         linkedin:
//           "https://www.linkedin.com/in/prash482/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//         facebook: "https://www.facebook.com/rahul.reigns.9026?mibextid=JRoKGi",
//         instagram:
//           "https://www.instagram.com/prash_482/?igsh=MTVjZ2ZobnZmd2VvaQ%3D%3D",
//       },
//     },
//     {
//       name: "SHIVANSHU KUMAR",
//       post: "VICE PRESIDENT",
//       src: "/PostBearers/VP.png",
//       socials: {
//         linkedin:
//           "https://www.linkedin.com/in/shivanshu-kumar-aa053a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//         facebook:
//           "https://www.facebook.com/shivanshu.kumar.7562?mibextid=JRoKGi",
//         instagram:
//           "https://www.instagram.com/shivanshu_kr_/?igsh=MWZmMnFsanhvM3BseA%3D%3D",
//       },
//     },
//     {
//       name: "ANKAN DATTA",
//       post: "GENERAL SECRETARY",
//       src: "/PostBearers/GenSec.png",
//       socials: {
//         linkedin:
//           "https://www.linkedin.com/in/ankan-datta-70422b245/edit/forms/next-action/after-connect-update-profile/",
//         facebook:
//           "https://www.facebook.com/profile.php?id=100090159799778&mibextid=JRoKGi",
//         instagram: "https://www.instagram.com/_.timba/?igsh=czJzOG40djI3dXdq",
//       },
//     },
//     {
//       name: "SUJAL KUMAR",
//       post: "AGS - SOCIAL & SPORTS",
//       src: "/PostBearers/Ags_Sports.png",
//       socials: {
//         linkedin:
//           "https://www.linkedin.com/in/sujal-kumar-aab83525b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//         instagram:
//           "https://www.instagram.com/kr.sujal8/?igsh=MTE1NXQwb2tkZmVyNQ%3D%3D",
//       },
//     },
//     {
//       name: "ARKARUP MITRA",
//       post: "AGS - CULTURAL",
//       src: "/PostBearers/Ags_Culture.png",
//       socials: {
//         facebook: "https://www.facebook.com/arkarup.mitra.524?mibextid=JRoKGi",
//         instagram:
//           "https://www.instagram.com/arkx_mite_1/?igsh=cG9qdnFxYXA3bzN6",
//       },
//     },
//     {
//       name: "KONDURU PRANAVI",
//       post: "GIRLS REPRESENTATIVE",
//       src: "/PostBearers/GR.png",
//       socials: {
//         linkedin: "https://www.linkedin.com/in/pranavi-konduru-9b497526a/",
//         instagram:
//           "https://www.instagram.com/_pranavi_004/?igsh=ZzRqZjRsaHE0bzd0",
//       },
//     },
//   ];

//   return (
//     <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
//       {/* Header Section */}
//       <div className="w-full bg-slate-600 pt-3 flex flex-col items-center justify-center">
//         <h1 className="text-md md:text-2xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
//           Post Bearers
//         </h1>
//         <div className="w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-700 mt-4"></div>
//       </div>

//       {/* Cards Grid */}
//       <div className="w-full py-10 flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-20">
//           {cards.map((card, index) => (
//             <div key={index} className="flex items-center justify-center">
//               <PostBearerCard
//                 src={card.src}
//                 post={card.post}
//                 name={card.name}
//                 socials={card.socials}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
