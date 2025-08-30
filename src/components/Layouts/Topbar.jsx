
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
import { SiThreads } from 'react-icons/si';   

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-black text-sm px-10 py-2 flex justify-between items-center z-50 " >
      
      {/* Left: Social Media Icons */}
      <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
          <SiThreads className="w-5 h-5" />
        </a>
      </div>

      {/* Center: Tagline */}
      <div className="text-center font-semibold text-white hidden sm:block animate-pulse">
        Access comprehensive SSC notes and resources tailored for all competitive exams.
      </div>

      {/* Right: Phone Number */}
      <div className="text-right">
        <span className="font-medium">Call Us: +1 (555) 123-4567</span>
      </div>
    </div>
  );
};

export default TopBar;
