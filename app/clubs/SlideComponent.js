
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import ClubPopup from './ClubPopup'; 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";


const clubsData = [
  {
    id: 1,
    image: '/GLUG.png',
    name: 'GNU Linux Users Group',
    description: 'The GNU/Linux Users Group, NIT Durgapur is a community of GNU/Linux Users that promote the use of Free and Open-Source Software. The Group was established in 2003 by a bunch of FOSS enthusiasts with the idea of popularising and contributing to Open Source. We are a plethora of designers, contributors and developers that believe in learning and sharing through opening up your mind to Open Source',
    instagram: 'https://instagram.com/club1',
    facebook: 'https://facebook.com/club1',
    linkedin: 'https://linkedin.com/club1',
  },
  {
    id: 2,
    image: '/recrave.jpg',
    name: 'EDC',
    description: 'The Music Club is for all the music enthusiasts who love to perform and create.',
    instagram: 'https://instagram.com/club2',
    facebook: 'https://facebook.com/club2',
    linkedin: 'https://linkedin.com/club2',
  },
  {
    id: 3,
    image: '/recrave.jpg',
    name: 'Music Club',
    description: 'The Music Club is for all the music enthusiasts who love to perform and create.',
    instagram: 'https://instagram.com/club2',
    facebook: 'https://facebook.com/club2',
    linkedin: 'https://linkedin.com/club2',
  },
  {
    id: 4,
    image: '/recrave.jpg',
    name: 'Music Club',
    description: 'The Music Club is for all the music enthusiasts who love to perform and create.',
    instagram: 'https://instagram.com/club2',
    facebook: 'https://facebook.com/club2',
    linkedin: 'https://linkedin.com/club2',
  },
  {
    id: 5,
    image: '/recrave.jpg',
    name: 'Music Club',
    description: 'The Music Club is for all the music enthusiasts who love to perform and create.',
    instagram: 'https://instagram.com/club2',
    facebook: 'https://facebook.com/club2',
    linkedin: 'https://linkedin.com/club2',
  },
  {
    id: 6,
    image: '/recrave.jpg',
    name: 'Music music music  Club',
    description: 'The Music Club is for all the music enthusiasts who love to perform and create.',
    instagram: 'https://instagram.com/club2',
    facebook: 'https://facebook.com/club2',
    linkedin: 'https://linkedin.com/club2',
  },
  // Add more clubs as needed
];

const SlideComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [height, setHeight] = useState('43vh');
  


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850  && window.innerWidth < 1350) {
        setHeight('46vh'); }
      else if (window.innerWidth >= 770  && window.innerWidth < 850) {
        setHeight('45vh'); }
      else if (window.innerWidth >= 450  && window.innerWidth < 770) {
        setHeight('47vh'); }
      else if (window.innerWidth >= 1300) {
        setHeight('43vh');
      } else {
        setHeight('38vh');
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => {
      window.removeEventListener('resize', handleResize);
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
        <FaAngleLeft className=' h-10 w-10' />
      </div>
      
      <Swiper
        slidesPerView={1} // Default to 1 slide on mobile
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
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
        className="w-full"
      >
        {clubsData.map((club) => (
          <SwiperSlide key={club.id}>
            <div
              className="card swiper-slide bg-darkCard rounded-lg cursor-pointer group" 
              onClick={() => openPopup(club)}
              role="button"
              style={{ height }}
            >
              <div className="image-content m-auto">
                <div className="card-image m-auto rounded-md overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-75">
                  <Image
                    src={club.image}
                    alt={club.name}
                    width={250}
                    height={150}
                    className="card-img m-auto pt-5 p-2"
                  />
                </div>
              </div>

              <div className="card-content text-center mt-2 pb-3">
                <h3 className="text-center text-white font-bold text-xl transform transition-transform duration-500 ease-in-out  group-hover:-translate-y-9 group-hover:scale-90 pb-1">
                  {club.name}
                </h3>
              </div>

              {/* Social Links Container */}
              <div className="absolute inset-x-0  bottom-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:-translate-y-1  text-center p-2">

                <Link href={club.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-white mx-3">
                  <FaInstagram className="inline h-6 w-6" />
                </Link>
                <Link href={club.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-white mx-3">
                  <FaFacebook className="inline h-6 w-6" />
                </Link>
                <Link href={club.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-white mx-3">
                  <FaLinkedin className="inline h-6 w-6" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      

      <div className="button-next bg-transparent p-2 cursor-pointer">
        <FaAngleRight className=' h-10 w-10' />
      </div>


      {selectedClub && <ClubPopup club={selectedClub} onClose={closePopup} />}
    </div>
  );
};

export default SlideComponent;
