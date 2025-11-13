import React, { useEffect } from "react";
import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
import img from "../../public/images/home-background.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
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
            Who We Are: The <span className="text-red-600">Reach Brand</span>{" "}
            Story
          </h2>
          <p
            data-aos="fade-down"
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            More than just signs — we deliver lasting brand impressions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center overflow-hidden">
          {/* Text Section */}
          <div className="lg:order-1 order-2">
            <h3
              data-aos="fade-right"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Design Excellence Meets Fabrication Mastery
            </h3>
            <p
              data-aos="fade-right"
              className="mt-4 text-lg text-gray-700 leading-relaxed"
            >
              Founded in Madurai, <strong>Reach Brand</strong> has grown into a
              leading name in high-quality signage solutions, specializing in
              impactful <strong>Banners, Arch Boards,</strong> and bespoke
              architectural designs. We believe that effective communication
              starts with exceptional visibility.
            </p>
            <p
              data-aos="fade-right"
              className="mt-4 text-lg text-gray-700 leading-relaxed"
            >
              Our commitment goes beyond just manufacturing. Our in-house team
              of designers and fabricators work collaboratively to ensure every
              project — from small retail signs to massive event arch boards —
              is executed with <strong>precision, durability,</strong> and{" "}
              <strong>creative flair</strong>. We are driven by a passion for
              helping local and national businesses achieve their full brand
              potential.
            </p>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="lg:order-2 order-1 shadow-2xl rounded-xl overflow-hidden transform hover:shadow-indigo-400/50 transition duration-500"
          >
            <img
              src={img}
              alt="Reach Brand team collaborating on a design project"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          className="mt-16 pt-12 border-t border-gray-200 overflow-hidden"
        >
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <FaTrophy className="w-10 h-10 text-red-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Years of Expertise
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                3+
              </dd>
            </div>

            <div className="flex flex-col items-center">
              <FaUsers className="w-10 h-10 text-red-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Happy Clients Served
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                200+
              </dd>
            </div>

            <div className="flex flex-col items-center">
              <FaLightbulb className="w-10 h-10 text-red-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Projects Completed
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                1,000+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
