import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"; // Import necessary icons
import logo from "../../public/images/gallery/logo.jpg";
const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact Us", url: "/contact" },
];

// Replace 'XXXXXXXXXX' with your full WhatsApp number including country code (no +, no 00).
const WHATSAPP_NUMBER = "9042594468";
const WHATSAPP_MESSAGE = "Hello! I am interested in your services.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Website Name */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Your Logo" className="h-14" />
          </a>

          {/* Desktop Navigation & WhatsApp Icon */}
          <nav className="hidden md:flex items-center space-x-6">
            {NavLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="text-gray-600 hover:text-red-600 font-medium transition duration-150 ease-in-out"
              >
                {link.title}
              </a>
            ))}

            {/* WhatsApp Enquiry Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 ml-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-150 ease-in-out flex items-center"
              aria-label="WhatsApp Enquiry"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mr-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-150 ease-in-out"
              aria-label="WhatsApp Enquiry"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
