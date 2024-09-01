"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-full lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-base">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="p-6 mx-4 sm:mx-0 flex flex-col  bg-gray-100 sm:bg-white border border-gray-300 shadow sm:shadow-none sm:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col  w-full">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-full w-full  rounded-lg object-cover object-top" />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "",
    title: "Centre For Cognitive Activities",
    src: "https://nitdgp.ac.in/uploads/b35d4023d1a48778c09366527db85b7f.png",
    ctaText: "Visit",
    ctaLink: "https://www.ccanitd.in",
    content: () => {
      return (
        (<p>
          CCA, Centre for Cognitive Activities, is the focal point where convergence of all technical and scientific endeavours of the students materialises. As the technical gymkhana of the institute, this club is the revolution which bridges the gap between knowledge and application. Bulk of the extracurricular activities held in the college all the year round are organised by the CCA , with the objective of probing the dark recesses of human mind so that the grey cells are stimulated to create , conceptualise and evolve, triggering a rebellion of the new age mind against baseless conventions and meek acceptance. 
        </p>)
      );
    },
  },
  {
    description: "",
    title: "Dance Club",
    src: "https://nitdgp.ac.in/uploads/5d919f5d5a4e0e5c37f63cf2befed147.jpeg",
    ctaText: "Visit",
    ctaLink: "https://www.facebook.com/DanceClubNITD/",
    content: () => {
      return (
        (<p>
          Dance Club is the official dance club of Nitdgp. We not only perform in Independence Day, Republic Day and other college fests but also participate in inter college fests like spring fest(iitkgp) and carpe diem(iim Calcutta) and have brought medals for our college. We believe in diversity hence we support and perform all dance forms. And as we say “we work hard and party harder”. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Darpan",
    src: "https://nitdgp.ac.in/uploads/df28040e57c786faa1713656bce18a57.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.facebook.com/darpan.nitdgp/",
    content: () => {
      return (
        (<p>
          We are the Hindi society of NIT Durgapur, actively engaged in the service of &apos;Hindi&apos;, official language of the Indian Republic. Darpan looks forward to the overall development of people with different types of programs. We provide valuable and useful platforms for the promotion of talent of students, as well as awards, cash prizes and citations to honor their merit. Various offline and online events are organised throughout the year. Promoting rajbhasa &apos;Hindi&apos; is the first priority of Darpan and will continue to establish Hindi language on its peak growth with its proper functions. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Debating Society",
    src: "https://nitdgp.ac.in/uploads/bff0dab466dd3906f3317abd5b7e7165.png",
    ctaText: "Visit",
    ctaLink: "https://m.facebook.com/debatingsociety3103.nitd/?ref=bookmarks",
    content: () => {
      return (
        (<p>
           The Debating Society is the official debating club of NIT Durgapur. At its core, this club is an ideological interest group that aims to promote the culture of debating on campus and remove the phobia associated with public speaking. We work with a mission to encourage the youth to actively involve themselves in issues concerning social interest and upsurge, and to make them articulate enough to present their opinion in a coherent and logical manner. The club also conducts workshops and intra-college debates like Asian Parliamentary Debate and Oxford Union Debate to help the students develop confidence to voice their opinion on a bigger platform and subsequently represent NIT Durgapur in various debating and public speaking competitions across the country. Apart from debates our flagships events like Kill Code, Take de Bait, Icebreaker and Empire witness the largest turnout among college events. Where we differ from most other debating clubs across a wide range of institutions across the country is that we focus on incorporating tech to our practices as well. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Enteract",
    src: "https://nitdgp.ac.in/uploads/0cc43b50177f810ab3343904686b094a.png",
    ctaText: "Visit",
    ctaLink: "https://www.facebook.com/enteractclub",
    content: () => {
      return (
        (<p>
           Enteract is the official Dramatics Club of NIT Durgapur. It is a home to all the theatre lovers and nukkad enthusiasts. Enteract produces a wide variety of performances ranging from street plays and stage plays to Monoacts and mimes, arguably with professional competency. The club keeps an in-depth knowledge of cinematography too which helps it to excel in movie and ad film making. Moreover the club participates in various cultural fests across the country creating awareness about various social issues and organizes events and workshops round the year, thus assisting the students to leave behind their stage fear, develop confidence and channelise their energy to do something creative. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Enterpreneurship Development Cell",
    src: "https://nitdgp.ac.in/uploads/688ceb18c23f24992fc3a3c820bdb47e.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.edcnitd.co.in/",
    content: () => {
      return (
        (<p>
          Entrepreneurship Development Cell of NIT Durgapur formerly known as NEN NIT Durgapur Students Chapter is the one and only independent cell of the institute, of national importance, inculcating an entrepreneurial environmental across the campus. To promote potential innovative startups from our college so that the students with their technical and entrepreneurial knowledge and skill will help India become the Innovation hub of the world. We are officially registered as a member college to NATIONAL ENTREPRENEURSHIP NETWORK under Wadhwani Foundation. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "GNU Linux Users' Group",
    src: "https://nitdgp.ac.in/uploads/76ab6b64bdd80ba48f36395262de0342.png",
    ctaText: "Visit",
    ctaLink: "http://nitdgplug.org/",
    content: () => {
      return (
        (<p>
          Who are we?
          <br/>
          The GNU/Linux Users Group, NIT Durgapur is a community of GNU/Linux Users that promote the use of Free and Open-Source Software. The Group was established in 2003 by a bunch of FOSS enthusiasts with the idea of popularising and contributing to Open Source. We are a plethora of designers, contributors and developers that believe in learning and sharing through opening up your mind to Open Source.
          <br/><br/>
          What we do?
          <br/>
          We provide budding enthusiasts like ourselves a forum to contribute and learn about FOSS. Through varied workshops on revolutionary Open Technologies throughout the year, we spread the idea of Open Source to beginners and veterans alike. We bring people together to ideate and contribute to the leading Open technologies. We provide help and resources to everyone who wants to make the web world a better place.
          <br/><br/>
          Why we do it?
          <br/>
          Being a bunch of FOSS enthusiasts, we preach the idea of “free things are the best things” and firmly believe in sharing knowledge. We strive to elevate the tech culture in our college and believe that this can only be done through giving people digital resources and knowledge in all realms from hardware to software and data to design. We promote FOSS through various endeavours because we believe in the freedom of expression for everyone.
          <br/>
        </p>)
      );
    },
  },

  {
    description: "",
    title: "IEEE Student Branch NIT Durgapur",
    src: "https://nitdgp.ac.in/uploads/06c30450d92d66b002ef985786fc158a.png",
    ctaText: "Visit",
    ctaLink: "https://edu.ieee.org/in-nitdgp/",
    content: () => {
      return (
        (<p>
           Who are we?

            The IEEE Student Branch, NIT Durgapur is a society of enthusiasts aimed at promoting research related activities in the campus. We are a direct handshake to IEEE, an international body that allows countless young researchers the opportunity to present & publish their innovations every year. Comprising of bright researchers, developers, speakers, and other contributors we are a society that welcomes in the era of better research prospects, in campus.

            What we do?

            We organise an array of events ranging from seminars to workshops to ideathon, that open a world of possibilities existing in research to young minds. We bring strong-minded people together as they work on their personal interests thus ameliorating the quality of research activities going on in campus.

            Why we do it?

            IEEE Student Branch helps lead students to a goal of re-designing their future. We plant the thought- the possibility of research and discovery- that could serve to fulfill what we stand for. Knowledge is power. The more you know the more you can possibly invent and build. And for the upcoming topsy-turvy tech-revolution underway, it is of utmost importance that we rebuild our society with improved and efficient technologies. And so we begin! 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "IIM Student chapter",
    src: "https://nitdgp.ac.in/uploads/92b6dcb9006c32d78ada34db31c9d432.jpg",
    ctaText: "Visit",
    ctaLink: "https://nitdgp.ac.in/p/iim-student-chapter",
    content: () => {
      return (
        (<p>
          × The Student affiliated chapter of The Indian Institute of Metals was passed through council Meeting No: 342/III/2019-20 on Saturday,22nd November 2020 held at Kaladham Conference Hall, Vidyanagar in presence of president, Dr. U Kamachi Mudali [2019-20 Council Year] and other council members as per Point 6b resolution. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "ISTE Students' Chapter",
    src: "https://nitdgp.ac.in/uploads/aab3beea3d8835bfd600502b307fdb5f.png",
    ctaText: "Visit",
    ctaLink: "http://istenitdgp.com/",
    content: () => {
      return (
        (<p>
          The Indian Society for Technical Education(ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System operating in association with All India Council for Technical Education (AICTE) and other International Projects.At present,ISTE has a very large and an effective membership base consisting of more than 1,02,985 Life Members,5,54,094 Student Members,2410 Institutional Members from IITs,NITs,IISc etc and 1322 Students’ Chapters.

          ISTE NIT Durgapur took birth on the auspicious occasion of Saraswati Puja Day way back in February,1995 in our erstwhile called REC Durgapur and is the Oldest Student Chapter of Eastern India.Additionally,ISTE NIT Durgapur nominates projects and papers for the Indian Journal of Technical Education (IJTE) published by the ISTE HQ,New Delhi on quarterly basis with the aim to provide an appropriate platform presenting well considered,meaningful,constructively thought provoking,non-political and non-conventional but critically analysing and synthesizing present and future aspects of the technical education system supported with meaningful suggestions for solutions,refinement and innovation.
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Literary Circle",
    src: "https://nitdgp.ac.in/uploads/4fe861ef350aa45353a608736e3e1dc1.png",
    ctaText: "Visit",
    ctaLink: "http://www.lcnitd.com/",
    content: () => {
      return (
        (<p>
          Literary Circle is the official literary club of NIT Durgapur, which gives the college an extra dimension of creative expression in the midst of technical unilateralism. This club conducts Verve, the Literary cum Youth Festival of the college and the biggest of its kind in eastern India having successfully pulled off 14 editions of the same. Among other activities, the club is reputed for hosting the inter-college NITMUN, publishing annual magazine Deja Vu and YearBook and organising OpenMic and Literati year round. Like our FB pages- Literary Circle: https://www.facebook.com/lcnitdgp/ NITMUN: https://www.facebook.com/nitmun.lcnitd/ Verve: https://www.facebook.com/verve.lcnitd/ 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Maths N Tech Club",
    src: "https://nitdgp.ac.in/uploads/a45620c68904b70f231b4d926972ec9e.png",
    ctaText: "Visit",
    ctaLink: "http://www.mntc.co.in",
    content: () => {
      return (
        (<p>
          Maths N Tech Club is the official knowledge club of NIT Durgapur. MNTC holds several events and workshops based on Mathematics and latest Technologies. It publishes the Annual Technical Magazine, Anveshan. It conducts Aavishkar - The Tech Festival along with SAE and GLUG and ANK - The Maths Week. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Music Club",
    src: "https://nitdgp.ac.in/uploads/266d54222cf8776a09ea7b71121bd328.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.facebook.com/MuC.NITD/",
    content: () => {
      return (
        (<p>
          We are the official Music Club of NIT Durgapur. We bring the love we have for music to everyone in this college through live performances and the people outside the college through our page and YouTube channel. We perform both Eastern and Western genres of music. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Prakriti Club",
    src: "https://nitdgp.ac.in/uploads/0eefa6ff7978830aff71410c14f56b3d.jpg",
    ctaText: "Visit",
    ctaLink: "http://www.prakriti.in.net",
    content: () => {
      return (
        (<p>
           We the People of Prakriti- The Environmental Club of NIT Durgapur, strive to make a difference and inculcate the seed of awareness and action in the minds of prospective engineers to make this environment a sustainable place for every living being. Our motto is to change the notion that Engineers do not care for environment into making every individual on campus, a GreenEngineer, who minimizes the risk of pollution that might be caused with new inventions or breakthrough researches in technology. As a club, we imbibe to the values our Mother Nature has taught us: Perseverance, Sustenance and Progress. Right from its rootage, Team Prakriti has made true those envisions of the founders of our club and crossed many milestones ever since its onset. We conduct our events throughout the year, reminding and awaking the slumbered minds, the importance of environment and its preservation.
        </p>)
      );
    },
  },

  {
    description: "",
    title: "QuizInc",
    src: "https://nitdgp.ac.in/uploads/41bbb8e3e4f6425a5a1fa20e3dcefe0f.png",
    ctaText: "Visit",
    ctaLink: "http://quizinc.in/",
    content: () => {
      return (
        (<p>
          QuizInc is the official Knowledge club of the college, which dabbles in quizzing as well as the sharing of worldly information amongst all the students. From hidden facts of India to obscure sports trivia, from the intricacies of going viral to the joys of mainstream entertainment, from the controversies in the newspapers to the advancements in business and technology, QuizInc covers all dimensions of this unique world and filters it down for the common masses. They preach and practise the slogan &apos;Cogita, Ergo Sum&apos;, (I think, therefore, I am), and strive to change the broad consciousness of this reputed college. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Radio Nitroz",
    src: "https://nitdgp.ac.in/uploads/6efcabc869502d18451624e4072c42f5.jpg",
    ctaText: "Visit",
    ctaLink: "https://radionitroz.in/",
    content: () => {
      return (
        (<p>
          Radio NITroz: Masti Ka Dozz is the Official Radio Club of NIT Durgapur. It is the home of all the enthusiast Radio listeners and Podcast lovers. We are a plethora of enthusiast people who believe in learning how to live the life with outmost fun and opening up your mind to live the life in a better way. Radio NITroz was formed in the year 2007 by our super talented seniors. Our club got a lots of love and notice for it’s catchy Podcasts and entertaining Events throughout the year. The basic precept of the formation of this club or better to say family is to communicate with the ‘Aam Janta’ of NIT Durgapur. We work on the motto to make life a bit easy and fun. For this, we carry out different fun filled events full of ecstasy and extravaganza to make the college days more memorable throughout the year. We also have a lot of events during Recstacy (Cultural Fest) and Aarohan (Techno – Management Fest). We together work as a team to make our every fun filled events a breakthrough. Our Social outreach has grown a lot for a variety of exciting and enthralling fun events filling everyone’s heart with a lot of fun and ease and to live the life with outmost fun. 
        </p>)
      );
    },
  },

  {
    description: "",
    title: "RECursion - NIT Durgapur Programming Club",
    src: "https://nitdgp.ac.in/uploads/697b8892b89e52ad9ead93692aed8608.jpg",
    ctaText: "Visit",
    ctaLink: "http://www.recursionnitd.in/",
    content: () => {
      return (
        (<p>
          RECursion NIT Durgapur is an initiative to embolden the budding coding minds through regular Code Classes, robust coding competitions and geeky sessions.
          Pioneered by a faction of enthusiasts in 2014, RECursion has continued to evolve ever since. Besides a fancy placement package, we seek to ameliorate participation in programming competitions like ACM ICPC etc. 
          Our dynamic panel is invariably available to sort any techie doubts and cultivate positivity in you. We intend to create an intriguing ambience where coding is more of a mental sport and after every green tick, the Coder in you gets bigger and wittier. So if you have those bits hovering over your head 24*7, RECursion is your Solution!

          

          &quot;Coding is a Choice, not a Compulsion.
          When you are doing it, just do it with a smile.&quot;
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Society Of Automotive Engineers Collegiate Chapter NIT Durgapur",
    src: "https://nitdgp.ac.in/uploads/e526f7e803a354c61495d84ad8cbecc0.png",
    ctaText: "Visit",
    ctaLink: "https://www.saenitdgp.com/",
    content: () => {
      return (
        (<p>
          SAE India, the collegiate club of NIT Durgapur, established in 2007, aims to integrate the students of the college into the international fabric of automobile engineering. SAE organizes a plethora of innovative events, workshops, industrial visits, and lectures all around the year and provides a competitive space where the sharpest minds battle in a quest to achieve distinction.
          SAE, the major contributor in team Aavishkar, organises Aarohan - the official tech fest of NIT Durgapur, which is the second largest of its kind in eastern India. Team NDORS, comprised of SAE members, represents NIT Durgapur in the Mahindra SAE Baja competition organised by SAE India.
        </p>)
      );
    },
  },

  {
    description: "",
    title: "SPIC MACAY NIT Durgapur Chapter",
    src: "https://nitdgp.ac.in/uploads/f7177d943bad513a733c266e10177018.jpeg",
    ctaText: "Visit",
    ctaLink: "https://spicmacay.vercel.app/",
    content: () => {
      return (
        (<p>
            Who Are We?

            A group of enthusiasts with a dream to “enrich the quality of formal education by increasing awareness about different aspects of Indian heritage and inspiring the young mind to imbibe the values embedded in it.” SPIC MACAY NIT Durgapur Chapter is the biggest cultural club in NIT Durgapur and embraces the beauty and wisdom that is ingrained in the Indian art forms. With a zeal to further the purview of Indian classical music and dance, folk, traditional paintings crafts, SPIC MACAY NIT Durgapur Chapter has been a quintessential part of the college aesthetics since its inception.

            What Do We Do?

            SPIC MACAY NIT Durgapur Chapter is actively engaged in contributing to the development of the rich cultural heritage. Officially, we represent NIT Durgapur in cultural events, national and international conferences which are attended by academic delegates from across the nation and beyond. Other events include:

            1. VIRASAT: An eclectic mixture of all aspects of Indian Cultural Heritage, including art workshops, film screening and classical concerts. With Padma Shree, Padma Bhushan and Grammy recipients like Pt. Ajay Chakraborty and Dr Vishwamohan Bhatt, VIRASAT sees a footfall of over 2000 people every year.

            2. UTTARAYAN: Organised every year on the day of Makar Sankranti, the kite festival sees a unique tinge of vibrancy with a lively display of colourful kites from the Lord’s ground.

            3. ANUBHAV: The annual art workshop organised for the underprivileged children, in collaboration with BMEP.

            Why We Do?

            Founded in 1977, as a non-profit, non-political voluntary movement by Dr Kiran Seth, SPIC MACAY is a global initiative that has impacted 3 million students across 1500 cities and 1000 educational institutions. SPIC MACAY NIT Durgapur Chapter is motivated by the need to mandate the focus on classical arts, and to facilitate an awareness of their deeper and subtler values. By inculcating the spirit of Nishkaam Seva, SPIC MACAY NIT Durgapur Chapter aims to impart solid and value-based education that will inspire the youth to be conscious of all that is beautiful, lofty and wholesome, and be the kind and gentle human being who is inspired and in turn inspires.
        </p>)
      );
    },
  },

  {
    description: "",
    title: "Strokes",
    src: "https://nitdgp.ac.in/uploads/ed533b14af4e9ec9b98a035a87a15fa4.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.facebook.com/Strokes.NITD/",
    content: () => {
      return (
        (<p>
          Strokes is the official art and photography club of NIT Durgapur. It is among the youngest clubs of NIT Durgapur and is one of its kind. Founded in 2015 by a bunch of enthusiasts then second year, it aims at patronizing the sense of creativity among the students of NIT Durgapur. We organize KALAKRITI (The Annual art and photography exhibition), PHOTO WALKS, WORKSHOPS and many more events throughout the year. We also beautify our college campus with wall paintings and cover each and every event organised in the college premises. 
        </p>)
      );
    },
  },
];
