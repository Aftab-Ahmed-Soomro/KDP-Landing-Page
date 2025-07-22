import React, { useState } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Book Publishing", href: "#", hasDropdown: true },
    { name: "Book Marketing", href: "#" },
    { name: "Children Books Publishing", href: "#", hiddenOnMobile: true },
    { name: "More Services", href: "#", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#6F5806] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4 md:py-6">
        <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
          <img 
            className="w-[140px] md:w-[160px] lg:w-[180px] h-[40px] md:h-[45px] lg:h-[50px]" 
            src="/Assets/imgs/logo.png" 
            alt="KDP Pro Publishers Logo" 
          />
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-4 text-white text-sm lg:text-base">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 lg:gap-2 hover:text-yellow-200 transition-colors cursor-pointer">
              <span>{item.name}</span>
              {item.hasDropdown && <FaCaretDown />}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className={`md:hidden w-full ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#6F5806] absolute top-full left-0 px-4 py-4 shadow-lg`}>
          <div className="flex flex-col gap-4 text-white">
            {navigationItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between hover:text-yellow-200 transition-colors cursor-pointer py-2">
                <span>{item.name}</span>
                {item.hasDropdown && <FaCaretDown />}
              </div>
            ))}
          </div>
        </nav>

        <div className="hidden md:block">
          <button className="bg-white py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-6 rounded-md font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors">
            Lets Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 