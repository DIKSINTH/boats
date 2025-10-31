import React from "react";
import { FaFlag, FaBuilding, FaRegLightbulb, FaTools } from "react-icons/fa";

// Define the array of services offered by Reach Brand
const ServiceItems = [
  {
    id: 1,
    icon: FaTools,
    title: "Custom Signage Design",
    description:
      "Full-service graphic and structural design. We turn your brand vision into a precise, ready-to-build blueprint for maximum visual impact.",
    color: "text-indigo-600",
  },
  {
    id: 2,
    icon: FaFlag,
    title: "Banner & Flex Printing",
    description:
      "High-quality, large-format printing for promotional banners, hoardings, and flex materials. Perfect for events, sales, and temporary visibility.",
    color: "text-emerald-600",
  },
  {
    id: 3,
    icon: FaBuilding,
    title: "Arch Board & Gate Fabrication",
    description:
      "Specialized fabrication of grand entrance arch boards and sturdy gate signage, built for durability and high visibility in outdoor settings.",
    color: "text-red-600",
  },
  {
    id: 4,
    icon: FaRegLightbulb,
    title: "LED & Illumination Signage",
    description:
      "Design and creation of energy-efficient LED, glow signboards, and illuminated 3D lettering that ensures your brand shines 24/7.",
    color: "text-yellow-600",
  },
  {
    id: 5,
    icon: FaTools,
    title: "3D & Acrylic Lettering",
    description:
      "Precision-cut 3D letters and acrylic signs that add depth, professionalism, and a premium tactile feel to your interior and exterior branding.",
    color: "text-purple-600",
  },
  {
    id: 6,
    icon: FaBuilding, // Reusing icon, or find a new one like FaMapMarkedAlt
    title: "Installation & Maintenance",
    description:
      "Professional, safe installation services for all signage types, plus long-term maintenance plans to keep your displays looking perfect.",
    color: "text-cyan-600",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our <span className="text-red-600">Specialized Services</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            From initial design concepts to final installation—we handle all
            your brand visibility needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceItems.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-transparent hover:border-red-500 transition duration-300 transform hover:scale-[1.02]"
            >
              <service.icon className={`w-10 h-10 mb-4 ${service.color}`} />

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl font-medium text-gray-700 mb-6">
            Ready to start a project? Get a detailed quote for your specific
            needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white font-extrabold py-3 px-8 rounded-lg text-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
