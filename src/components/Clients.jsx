import React, { useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import client1 from "../../public/images/clients/client1.jpg";
import client2 from "../../public/images/clients/client2.jpg";
import client3 from "../../public/images/clients/client3.jpg";
import client4 from "../../public/images/clients/client4.png";
import client5 from "../../public/images/clients/client5.jpg";
import client6 from "../../public/images/clients/client6.jpg";
import client7 from "../../public/images/clients/client7.png";
import client8 from "../../public/images/clients/client8.png";
import client9 from "../../public/images/clients/client9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const ClientLogos = [
  { id: 1, url: client1, alt: "Anuj Tiles" },
  { id: 2, url: client2, alt: "Dindigul Thalappakatti" },
  { id: 3, url: client3, alt: "abis foods" },
  { id: 4, url: client4, alt: "Sri Ambal Grand" },
  { id: 5, url: client5, alt: "essilor" },
  { id: 6, url: client6, alt: "TeaBoy" },
  { id: 7, url: client7, alt: "Macho TMB Bars" },
  { id: 8, url: client8, alt: "FEDBANK Financial Services Limited" },
  { id: 9, url: client9, alt: "Tea Bench" },
];

const Clients = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl break-words"
          >
            Our Valued <span className="text-red-600">Clients</span>
          </h2>
          <p
            data-aos="fade-up"
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We deliver exceptional signage solutions that help our clients
            elevate their brand visibility and communication.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 overflow-hidden">
          {ClientLogos.map((logo) => (
            <div
              key={logo.id}
              data-aos="zoom-in"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                title={logo.alt}
                className="h-16 sm:h-20 object-contain mx-auto max-w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
