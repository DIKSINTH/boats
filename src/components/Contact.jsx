import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

// Contact Details
const CONTACT_INFO = {
  websiteName: "Reach Brand",
  address:
    "Sholavandan Road, Opp Karumariyamman kovil, Thirumangalam, Madurai –625 706",
  email: "reachbrandmdu@gmail.com",
  phone1: "+91 9791856090",
  phone2: "+91 9047559590",
  whatsappNumber: "9042594468",
};

const WHATSAPP_LINK = `https://wa.me/${
  CONTACT_INFO.whatsappNumber
}?text=${encodeURIComponent(
  "Hello, I am contacting you through your website's contact page."
)}`;

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl text-red-600">
            {CONTACT_INFO.websiteName}
          </h1>
          <p className="mt-2 text-2xl font-semibold text-gray-600">
            Get In Touch With Our Team
          </p>
        </div>

        {/* Contact Details Panel */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-4 border-red-500">
          {/* Main Contact List */}
          <div className="space-y-8 text-center md:text-left">
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
              <FaMapMarkerAlt className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-gray-800">Our Location</p>
                <p className="text-lg text-gray-600">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
              <FaEnvelope className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-gray-800">Email Us</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-lg text-red-600 hover:text-red-800 transition font-medium"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
              <FaPhoneAlt className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-gray-800">
                  Call Us Directly
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone1}`}
                    className="text-lg text-gray-600 hover:text-red-600 transition"
                  >
                    {CONTACT_INFO.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone2}`}
                    className="text-lg text-gray-600 hover:text-red-600 transition"
                  >
                    {CONTACT_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Link (Prominent) */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-4 px-6 border border-transparent rounded-lg shadow-xl text-xl font-extrabold text-white bg-green-500 hover:bg-green-600 transition duration-150 transform hover:scale-[1.02]"
            >
              <FaWhatsapp className="w-6 h-6 mr-3" />
              Message Us on WhatsApp Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
