import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/images/gallery/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact Us", url: "/contact" },
];

// Replace with your full WhatsApp number (no + or 00)
const WHATSAPP_NUMBER = "9047559590";
const WHATSAPP_MESSAGE = "Hello! I am interested in your services.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={logo}
              alt="Your Logo"
              className="h-10 w-auto max-w-full"
            />
          </a>

          {/* Desktop Navigation */}
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

            {/* WhatsApp Enquiry Button (Desktop only) */}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full bg-white border-t border-gray-200`}
      >
        <div className="px-4 py-3 space-y-2">
          {NavLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button (visible on all screens) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header;
