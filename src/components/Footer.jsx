import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

// Define the navigation links (same as used in the Header)
const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact Us", url: "/contact" },
];

// Contact Details
const CONTACT_INFO = {
  address:
    "Sholavandan Road, Opp Karumariyamman kovil, Thirumangalam, Madurai –625 706",
  email: "reachbrandmdu@gmail.com",
  phone1: "+91 9791856090",
  phone2: "+91 9047559590",
  whatsappNumber: "9042594468", // Use one number for WA, if different from phone numbers
  whatsappMessage:
    "Hello, I saw your website footer and would like to inquire about signage solutions.",
};

const WHATSAPP_LINK = `https://wa.me/${
  CONTACT_INFO.whatsappNumber
}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

const Footer = () => {
  const websiteName = "Reach Brand"; // Use your actual website name

  return (
    <footer className="bg-gray-900 text-white border-t border-indigo-500 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* 1. Logo & Website Name */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-3xl font-extrabold text-indigo-400">
              {websiteName}
            </h3>
            <p className="text-sm text-gray-400">
              Transforming communication through high-quality, custom signage
              design and fabrication.
            </p>

            {/* Attractive WhatsApp Icon */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center p-3 bg-green-600 rounded-full text-white shadow-xl hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              aria-label="WhatsApp Enquiry"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span className="ml-3 font-semibold hidden sm:inline">
                Chat with us!
              </span>
            </a>
          </div>

          {/* 2. Quick Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-indigo-300 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NavLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-indigo-400 transition duration-150 text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Information */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-indigo-300 border-b border-gray-700 pb-2">
              Get in Touch
            </h4>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 text-emerald-400 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="font-medium">Address:</span>{" "}
                {CONTACT_INFO.address}
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <span className="font-medium">Mail:</span> {CONTACT_INFO.email}
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col space-y-2 pt-1">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone1}`}
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  {CONTACT_INFO.phone1}
                </a>
              </div>
              <div className="flex items-center space-x-3 ml-8 sm:ml-0">
                {" "}
                {/* Align second number */}
                <a
                  href={`tel:${CONTACT_INFO.phone2}`}
                  className="text-gray-300 hover:text-indigo-400 transition md:ml-8"
                >
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Line */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {websiteName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
