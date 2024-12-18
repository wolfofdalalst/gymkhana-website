import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, Fawebsite } from 'react-icons/fa';
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

const ClubPopup = ({ club, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsVisible(true); 
    return () => setIsVisible(false); 
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(onClose, 300); 
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    onClick={handleOverlayClick}>
      <div className={`bg-white rounded-lg p-6 w-80 md:w-96 relative transform transition-all duration-300 ease-in-out ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          &times; 
        </button>
        <h2 className="text-xl text-center font-bold mb-2">{club.name}</h2>
        <p className="text-gray-700 text-center mb-4">{club.description}</p>
        <div className="flex justify-around mx-auto mt-4 w-44">
          <Link href={club.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary active:text-blue-800 text-black">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href={club.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary active:text-blue-800 text-black">
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href={club.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary active:text-blue-800 text-black">
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubPopup;
