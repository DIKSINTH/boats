import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import logo from "../../public/images/gallery/logo.png";
import logo2 from "../../public/images/gallery/logo2.png";

const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact Us", url: "/contact" },
];

const CONTACT_INFO = {
  address:
    "R.R.Complex, 252, Munshif Court Road, Banu Theatre Near, Thirumangalam, Madurai - 625 706",
  email: "reachbrandmdu@gmail.com",
  phone1: "+91 9047559590",
  phone2: "+91 9791856090",
  phone3: "+91 6383376718",
  whatsappNumber: "9047559590",
  whatsappMessage:
    "Hello, I saw your website footer and would like to inquire about signage solutions.",
};

const WHATSAPP_LINK = `https://wa.me/${
  CONTACT_INFO.whatsappNumber
}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

const Footer = () => {
  const websiteName = "Reach Brand";

  return (
    <footer className="bg-gray-900 text-white border-t border-red-500 mt-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* 1. Logo & Social */}
          <div className="md:col-span-1 text-center space-y-4">
            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="/" className="block">
                <img
                  src={logo}
                  alt="Reach Brand Logo"
                  className="h-24 w-auto mx-auto"
                  loading="lazy"
                />
              </a>
              <a href="/" className="block">
                <img
                  src={logo2}
                  alt="Reach Brand Secondary Logo"
                  className="h-20 w-auto mx-auto"
                  loading="lazy"
                />
              </a>
            </div>

            <p className="text-sm text-gray-400 px-2">
              Transforming communication through high-quality, custom signage
              design and fabrication.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4 overflow-hidden">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-full text-white shadow-lg hover:bg-green-500 transition transform hover:scale-105"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/rbdesignstmm?igsh=dnoyZDVrcDZ3Y2J2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 rounded-full text-white shadow-lg hover:bg-pink-500 transition transform hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/19nzVXBN7m/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full text-white shadow-lg hover:bg-blue-500 transition transform hover:scale-105"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-300 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NavLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-red-400 transition text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-red-300 border-b border-gray-700 pb-2">
              Get in Touch
            </h4>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 text-red-400 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                <span className="font-medium">Address:</span>{" "}
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-red-400 flex-shrink-0" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-300 hover:text-red-400 transition"
              >
                <span className="font-medium">Mail:</span> {CONTACT_INFO.email}
              </a>
            </div>

            {/* Phones */}
            <div className="flex flex-col gap-2 pt-1">
              {[
                CONTACT_INFO.phone1,
                CONTACT_INFO.phone2,
                CONTACT_INFO.phone3,
              ].map((phone, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <FaPhoneAlt className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <a
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-red-400 transition"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
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
