import React from "react";
import client1 from "../../public/images/clients/client1.jpg";
import client2 from "../../public/images/clients/client2.jpg";
import client3 from "../../public/images/clients/client3.jpg";
import client4 from "../../public/images/clients/client4.png";
import client5 from "../../public/images/clients/client5.jpg";
import client6 from "../../public/images/clients/client6.jpg";
import client7 from "../../public/images/clients/client7.png";
import client8 from "../../public/images/clients/client8.png";
import client9 from "../../public/images/clients/client9.jpg";

// Define a list of sample client logos
const ClientLogos = [
  {
    id: 1,
    // Replace with the actual URL of a client's logo
    url: client1,
    alt: "Anuj Tiles",
  },
  {
    id: 2,
    url: client2,
    alt: "Dindigul Thalappakatti",
  },
  {
    id: 3,
    url: client3,
    alt: "abis foods",
  },
  {
    id: 4,
    url: client4,
    alt: "Sri Ambal Grand",
  },
  {
    id: 5,
    url: client5,
    alt: "essilor",
  },
  {
    id: 6,
    url: client6,
    alt: "TeaBoy",
  },
  {
    id: 7,
    url: client7,
    alt: "Macho TMB Bars",
  },
  {
    id: 8,
    url: client8,
    alt: "FEDBANK Financial Services Limited",
  },
  {
    id: 9,
    url: client9,
    alt: "Tea Bench",
  },
];

const Clients = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Updated to "Our Valued Clients" */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Valued <span className="text-red-600">Clients</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We deliver exceptional signage solutions that help our clients
            elevate their brand visibility and communication.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
          {ClientLogos.map(
            (
              logo // Data array changed to ClientLogos
            ) => (
              <div
                key={logo.id}
                // Kept the hover shadow and background transition for a clean, interactive container effect
                className="p-4 bg-gray-50 rounded-lg transition duration-300 hover:shadow-lg hover:bg-gray-100"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  title={logo.alt}
                  // *** IMPORTANT UPDATE: Removed grayscale and opacity classes ***
                  // The logo now displays at full opacity and in original color.
                  className="w-full h-16 object-contain mx-auto transition duration-300"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients; // Export name changed to Clients
