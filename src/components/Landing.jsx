import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import FaWhatsapp icon
// Assuming the path is correct based on your previous component usage
import teamCollaborationBg from "../../public/images/home-background.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// WhatsApp Configuration (Reused from Header Component)
const WHATSAPP_NUMBER = "9042594468";
const WHATSAPP_MESSAGE = "Hello! I am interested in your services.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// --- NEW FIXED WHATSAPP BUTTON COMPONENT ---
const FixedWhatsAppButton = () => {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  return (
    // Button is FIXED to the bottom right, only visible on MOBILE (md:hidden)
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 md:hidden 
                       p-4 bg-green-500 rounded-full text-white shadow-xl 
                       hover:bg-green-600 transition duration-300 ease-in-out 
                       transform hover:scale-110"
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};
// ----------------------------------------------

const Landing = () => {
  return (
    // Outer container: Full viewport height and width
    <div className="relative min-h-screen w-full bg-gray-900 overflow-hidden">
      {/* 1. Background Image Container (Full Screen) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamCollaborationBg})` }}
        aria-hidden="true"
      >
        {/* Darker Overlay for Text Readability - Increased to 80% */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* 2. Content Container (Centered and Z-Index) */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-16 md:pt-24 min-h-screen text-white px-4">
        {/* --- Main Headline / Introduction --- */}
        <div className="max-w-5xl text-center mb-12 sm:mb-16">
          <h1
            data-aos="flip-left"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Design, Build, & Install Your{" "}
            <span className="text-red-400">Perfect Brand Identity</span>
          </h1>
          <p
            data-aos="flip-right"
            className="mt-4 text-lg sm:text-xl font-medium text-gray-300"
          >
            Specializing in high-impact Banners, Arch Boards, and bespoke
            signage design solutions.
          </p>
        </div>

        {/* --- Mission & Vision Cards (Side-by-Side on Desktop) --- */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-2 pb-16">
          {/* Mission Card: Solid Contrast for Readability */}
          <section
            data-aos="fade-up-right"
            className="p-8 sm:p-10 bg-gray-900 bg-opacity-85 rounded-xl shadow-2xl border-l-4 border-indigo-500 transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-400 flex items-center justify-center lg:justify-start">
              <svg
                className="w-8 h-8 mr-3 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 13V6a2 2 0 012-2h14a2 2 0 012 2v7m-4 5h4m-4 0v-5m0-4h.01M5 19h4m-4 0v-5m0-4h.01M4 11h.01M16 19h.01"
                ></path>
              </svg>
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed font-light text-white">
              <span className="font-semibold text-indigo-100">
                At Reach Brand,
              </span>{" "}
              our mission is to **transform the way people and businesses
              communicate** by designing and creating **high-quality,
              custom-built banners, arch boards, and permanent signage**. We
              ensure your unique message is impactful and stands out from the
              competition.
            </p>
          </section>

          {/* Vision Card: Solid Contrast for Readability */}
          <section
            data-aos="fade-up-left"
            className="p-8 sm:p-10 bg-gray-900 bg-opacity-85 rounded-xl shadow-2xl border-l-4 border-emerald-500 transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-400 flex items-center justify-center lg:justify-start">
              <svg
                className="w-8 h-8 mr-3 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.003 2.003m-2.003-2.003a20.001 20.001 0 00-3.9-1.288m-2.004 2.004l2.003 2.003m-2.003-2.003c.174.453.385.914.629 1.365l-4.184 4.184M18.823 16.324l-4.184 4.184c.452.245.913.456 1.365.631M16.48 20.941c.484.095.979.14 1.48.14m-5.464-9.986l-2.004-2.004m2.004 2.004a18.991 18.991 0 01-2.483-2.919m2.483 2.919a18.991 18.991 0 00.14-.523M11 11.5l2-2m-2 2a.5.5 0 110-1 .5.5 0 010 1zm2 2l2-2m-2 2a.5.5 0 110-1 .5.5 0 010 1zm-1-8.5l.01-.01M7 11h.01"
                ></path>
              </svg>
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed font-light text-white">
              Our vision is to be the **leading design and fabrication partner**
              for businesses seeking superior **brand visibility** through
              banners, arch boards, and innovative custom signage. We commit to
              continuous **excellence and customer success** in every project.
            </p>
          </section>
        </div>

        {/* --- Call to Action (Centered at the bottom) --- */}
        <div className="mt-8 mb-16">
          <a
            href="/contact" // Link to your contact page
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-10 rounded-full text-xl shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
          >
            Get a Free Design Consultation
          </a>
        </div>
      </div>

      {/* 3. Fixed Mobile WhatsApp Button - Renders globally within this component's scope */}
      <FixedWhatsAppButton />
    </div>
  );
};

export default Landing;
