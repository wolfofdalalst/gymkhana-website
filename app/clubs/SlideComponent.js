import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ClubPopup from "./ClubPopup";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  Fawebsite,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Link from "next/link";

const clubsData = [
  {
    id: 1,
    image: "/clubs/GLUG.png",
    name: "GNU Linux Users Group",
    description:
      "The GNU/Linux Users Group, NIT Durgapur is a community of GNU/Linux Users that promote the use of Free and Open-Source Software. The Group was established in 2003 by a bunch of FOSS enthusiasts with the idea of popularising and contributing to Open Source. We are a plethora of designers, contributors and developers that believe in learning and sharing through opening up your mind to Open Source",
    instagram: "https://www.instagram.com/nitdgplug/",
    facebook: "https://www.facebook.com/nitdgplug",
    website: "https://nitdgplug.org/",
  },
  {
    id: 2,
    image: "/clubs/CCA.png",
    name: "Centre for Cognitive Activities",
    description:
      "CCA, Centre for Cognitive Activities, is the focal point where convergence of all technical and scientific endeavours of the students materialises. As the technical gymkhana of the institute, this club is the revolution which bridges the gap between knowledge and application. Bulk of the extracurricular activities held in the college all the year round are organised by the CCA , with the objective of probing the dark recesses of human mind so that the grey cells are stimulated to create , conceptualise and evolve, triggering a rebellion of the new age mind against baseless conventions and meek acceptance.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 3,
    image: "/clubs/DC.jpeg",
    name: "Dance Club",
    description:
      "Dance Club is the official dance club of Nitdgp. We not only perform in Independence Day, Republic Day and other college fests but also participate in inter college fests like spring fest(iitkgp) and carpe diem(iim Calcutta) and have brought medals for our college. We believe in diversity hence we support and perform all dance forms. And as we say “we work hard and party harder”.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 4,
    image: "/clubs/drp.jpeg",
    name: "Darpan",
    description:
      'We are the Hindi society of NIT Durgapur, actively engaged in the service of "Hindi", official language of the Indian Republic. Darpan looks forward to the overall development of people with different types of programs. We provide valuable and useful platforms for the promotion of talent of students, as well as awards, cash prizes and citations to honor their merit. Various offline and online events are organised throughout the year. Promoting rajbhasa "Hindi" is the first priority of Darpan and will continue to establish Hindi language on its peak growth with its proper functions.',
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 5,
    image: "/clubs/debsoc.png",
    name: "Debating Society",
    description:
      "The Debating Society is the official debating club of NIT Durgapur. At its core, this club is an ideological interest group that aims to promote the culture of debating on campus and remove the phobia associated with public speaking. We work with a mission to encourage the youth to actively involve themselves in issues concerning social interest and upsurge, and to make them articulate enough to present their opinion in a coherent and logical manner. The club also conducts workshops and intra-college debates like Asian Parliamentary Debate and Oxford Union Debate to help the students develop confidence to voice their opinion on a bigger platform and subsequently represent NIT Durgapur in various debating and public speaking competitions across the country",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 6,
    image: "/clubs/enteract.png",
    name: "Enteract",
    description:
      "The Music Club is for all the music enthusiasts who love to perform and creaEnteract is the official Dramatics Club of NIT Durgapur. It is a home to all the theatre lovers and nukkad enthusiasts. Enteract produces a wide variety of performances ranging from street plays and stage plays to Monoacts and mimes, arguably with professional competency. The club keeps an in-depth knowledge of cinematography too which helps it to excel in movie and ad film making. Moreover the club participates in various cultural fests across the country creating awareness about various social issues and organizes events and workshops round the year, thus assisting the students to leave behind their stage fear, develop confidence and channelise their energy to do something creative.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 7,
    image: "/clubs/edc.jpg",
    name: "Enterpreneurship Development Cell",
    description:
      "Entrepreneurship Development Cell of NIT Durgapur formerly known as NEN NIT Durgapur Students Chapter is the one and only independent cell of the institute, of national importance, inculcating an entrepreneurial environmental across the campus. To promote potential innovative startups from our college so that the students with their technical and entrepreneurial knowledge and skill will help India become the Innovation hub of the world. We are officially registered as a member college to NATIONAL ENTREPRENEURSHIP NETWORK under Wadhwani Foundation.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 8,
    image: "/clubs/ieee.png",
    name: "IEEE Student Branch NIT Durgapur",
    description:
      "The IEEE Student Branch, NIT Durgapur is a society of enthusiasts aimed at promoting research related activities in the campus. We are a direct handshake to IEEE, an international body that allows countless young researchers the opportunity to present & publish their innovations every year. Comprising of bright researchers, developers, speakers, and other contributors we are a society that welcomes in the era of better research prospects, in campus",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 9,
    image: "/clubs/strokes.jpg",
    name: "Strokes",
    description:
      "Strokes is the official art and photography club of NIT Durgapur. It is among the youngest clubs of NIT Durgapur and is one of its kind. Founded in 2015 by a bunch of enthusiasts then second year, it aims at patronizing the sense of creativity among the students of NIT Durgapur. We organize KALAKRITI (The Annual art and photography exhibition), PHOTO WALKS, WORKSHOPS and many more events throughout the year. We also beautify our college campus with wall paintings and cover each and every event organised in the college premises.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 10,
    image: "/clubs/iim.jpg",
    name: "IIM Student chapter",
    description:
      "The Student affiliated chapter of The Indian Institute of Metals was passed through council Meeting No: 342/III/2019-20 on Saturday,22nd November 2020 held at Kaladham Conference Hall, Vidyanagar in presence of president, Dr. U Kamachi Mudali [2019-20 Council Year] and other council members as per Point 6b resolution.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 11,
    image: "/clubs/iste.png",
    name: "ISTE Students' Chapter",
    description:
      "The Indian Society for Technical Education(ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System operating in association with All India Council for Technical Education (AICTE) and other International Projects.At present,ISTE has a very large and an effective membership base consisting of more than 1,02,985 Life Members,5,54,094 Student Members,2410 Institutional Members from IITs,NITs,IISc etc and 1322 Students’ Chapters",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 12,
    image: "/clubs/LC.png",
    name: "Literary Circle",
    description:
      "Literary Circle is the official literary club of NIT Durgapur, which gives the college an extra dimension of creative expression in the midst of technical unilateralism. This club conducts Verve, the Literary cum Youth Festival of the college and the biggest of its kind in eastern India having successfully pulled off 14 editions of the same. Among other activities, the club is reputed for hosting the inter-college NITMUN, publishing annual magazine Deja Vu and YearBook and organising OpenMic and Literati year round",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 13,
    image: "/clubs/MNTC.png",
    name: "Maths N Tech Club",
    description:
      "Maths N Tech Club is the official knowledge club of NIT Durgapur. MNTC holds several events and workshops based on Mathematics and latest Technologies. It publishes the Annual Technical Magazine, Anveshan. It conducts Aavishkar - The Tech Festival along with SAE and GLUG and ANK - The Maths Week",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 14,
    image: "/clubs/MUSIC.jpg",
    name: "Music Club",
    description:
      "We are the official Music Club of NIT Durgapur. We bring the love we have for music to everyone in this college through live performances and the people outside the college through our page and YouTube channel. We perform both Eastern and Western genres of music",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 15,
    image: "/clubs/prakriti.jpg",
    name: "Prakriti Club",
    description:
      "We the People of Prakriti- The Environmental Club of NIT Durgapur, strive to make a difference and inculcate the seed of awareness and action in the minds of prospective engineers to make this environment a sustainable place for every living being. Our motto is to change the notion that Engineers do not care for environment into making every individual on campus, a GreenEngineer, who minimizes the risk of pollution that might be caused with new inventions or breakthrough researches in technology. As a club, we imbibe to the values our Mother Nature has taught us: Perseverance, Sustenance and Progress.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 16,
    image: "/clubs/quizinc.png",
    name: "QuizInc",
    description:
      'QuizInc is the official Knowledge club of the college, which dabbles in quizzing as well as the sharing of worldly information amongst all the students. From hidden facts of India to obscure sports trivia, from the intricacies of going viral to the joys of mainstream entertainment, from the controversies in the newspapers to the advancements in business and technology, QuizInc covers all dimensions of this unique world and filters it down for the common masses. They preach and practise the slogan "Cogita, Ergo Sum", (I think, therefore, I am), and strive to change the broad consciousness of this reputed college.',
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 17,
    image: "/clubs/RN.jpg",
    name: "Radio Nitroz",
    description:
      "Radio NITroz: Masti Ka Dozz is the Official Radio Club of NIT Durgapur. It is the home of all the enthusiast Radio listeners and Podcast lovers. We are a plethora of enthusiast people who believe in learning how to live the life with outmost fun and opening up your mind to live the life in a better way. Radio NITroz was formed in the year 2007 by our super talented seniors. Our club got a lots of love and notice for it’s catchy Podcasts and entertaining Events throughout the year. The basic precept of the formation of this club or better to say family is to communicate with the ‘Aam Janta’ of NIT Durgapur.",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 18,
    image: "/clubs/recursion.jpg",
    name: "RECursion - NIT Durgapur Programming Club",
    description:
      "RECursion NIT Durgapur is an initiative to embolden the budding coding minds through regular Code Classes, robust coding competitions and geeky sessions.Pioneered by a faction of enthusiasts in 2014, RECursion has continued to evolve ever since. Besides a fancy placement package, we seek to ameliorate participation in programming competitions like ACM ICPC etc. Our dynamic panel is invariably available to sort any techie doubts and cultivate positivity in you. We intend to create an intriguing ambience where coding is more of a mental sport and after every green tick, the Coder in you gets bigger and wittier. So if you have those bits hovering over your head 24*7, RECursion is your Solution!",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 19,
    image: "/clubs/sae.png",
    name: "Society Of Automotive Engineers Collegiate Chapter NIT Durgapur",
    description:
      "SAE India, the collegiate club of NIT Durgapur, established in 2007, aims to integrate the students of the college into the international fabric of automobile engineering. SAE organizes a plethora of innovative events, workshops, industrial visits, and lectures all around the year and provides a competitive space where the sharpest minds battle in a quest to achieve distinction",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  {
    id: 20,
    image: "/clubs/spic-macay.jpeg",
    name: "SPIC MACAY NIT Durgapur Chapter",
    description:
      "A group of enthusiasts with a dream to “enrich the quality of formal education by increasing awareness about different aspects of Indian heritage and inspiring the young mind to imbibe the values embedded in it.” SPIC MACAY NIT Durgapur Chapter is the biggest cultural club in NIT Durgapur and embraces the beauty and wisdom that is ingrained in the Indian art forms. With a zeal to further the purview of Indian classical music and dance, folk, traditional paintings crafts, SPIC MACAY NIT Durgapur Chapter has been a quintessential part of the college aesthetics since its inception",
    instagram: "https://instagram.com/club2",
    facebook: "https://facebook.com/club2",
    website: "https://website.com/club2",
  },
  // Add more clubs as needed
];

const SlideComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [height, setHeight] = useState("43vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight >= 950) {
        setHeight("45vh");
      } else if (window.innerHeight >= 850) {
        setHeight("44vh");
      } else if (window.innerHeight >= 750) {
        setHeight("47vh");
      } else if (window.innerHeight >= 700) {
        setHeight("50vh");
      } else if (window.innerHeight >= 650) {
        setHeight("55vh");
      } else if (window.innerHeight >= 600) {
        setHeight("60vh");
      } else if (window.innerHeight >= 550) {
        setHeight("65vh");
      } else if (window.innerHeight >= 300) {
        setHeight("75vh");
      } else {
        setHeight("80vh");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openPopup = (club) => {
    setSelectedClub(club);
  };

  const closePopup = () => {
    setSelectedClub(null);
  };

  if (!isMounted) return null;

  return (
    <div className="relative flex flex-row items-center justify-center">

      <div className="button-prev bg-transparent p-2 cursor-pointer">
        <FaAngleLeft className='h-10 w-10 hover:scale-[1.3] hover:text-blue-800 active:scale-110 active:-translate-x-2 transition-all duration-300' />
      </div>

      <Swiper
        slidesPerView={1} // Default to 1 slide on mobile
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="w-full min-h-full"
      >
        {clubsData.map((club) => (
          <SwiperSlide key={club.id}>
            <div
              className="min-h-full card swiper-slide bg-darkCard rounded-lg cursor-pointer group"
              onClick={() => openPopup(club)}
              role="button"
              style={{ height }}
            >
              <div className="image-content m-auto">
                <div className="card-image rounded-full m-auto overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-75">
                  <Image
                    src={club.image}
                    alt={club.name}
                    width={250}
                    height={150}
                    className="card-img rounded-full m-auto pt-5 p-2"
                  />
                </div>
              </div>

              <div className="card-content text-center px-2 mb-2 mt-3">
                <h3 className="text-center text-white font-bold text-md  transform transition-transform duration-500 ease-in-out  group-hover:-translate-y-9 group-hover:scale-90 pb-1">
                  {club.name}
                </h3>
              </div>

              {/* Social Links Container */}
              <div className="absolute inset-x-0  bottom-0 transform translate-y-full transition-transform duration-300 ease-in-out md:group-hover:-translate-y-[80%]  text-center p-2">
                <Link
                  href={club.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white mx-3"
                >
                  <FaInstagram className="inline h-6 w-6" />
                </Link>
                <Link
                  href={club.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white mx-3"
                >
                  <FaFacebook className="inline h-6 w-6" />
                </Link>
                <Link
                  href={club.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white mx-3"
                >
                  <TbWorld className="inline h-7 w-7" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="button-next bg-transparent p-2 cursor-pointer">
        <FaAngleRight className='h-10 w-10 hover:scale-[1.3] hover:text-blue-800 active:scale-110 active:translate-x-2 transition-all duration-300' />
      </div>

      {selectedClub && <ClubPopup club={selectedClub} onClose={closePopup} />}
    </div>
  );
};

export default SlideComponent;
