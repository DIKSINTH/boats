import React from "react";
import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
import img from "../../public/images/home-background.png";
// Placeholder image (replace with a real image of your team, facility, or best work)
// For demonstration, we'll assume a generic image is imported or fetched.
// In a real project, you might import it like:
// import companyTeamImage from './assets/your-team.jpg';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Who We Are: The <span className="text-indigo-600">Reach Brand</span>{" "}
            Story
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            More than just signs—we deliver lasting brand impressions.
          </p>
        </div>

        {/* Content Grid (Text & Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Narrative Text */}
          <div className="lg:order-1 order-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Design Excellence Meets Fabrication Mastery
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Founded in Madurai, **Reach Brand** has grown into a leading name
              in high-quality signage solutions, specializing in impactful
              **Banners, Arch Boards, and bespoke architectural designs**. We
              believe that effective communication starts with exceptional
              visibility.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our commitment goes beyond just manufacturing. Our in-house team
              of designers and fabricators work collaboratively to ensure every
              project—from small retail signs to massive event arch boards—is
              executed with **precision, durability, and creative flair**. We
              are driven by a passion for helping local and national businesses
              achieve their full brand potential.
            </p>
            <a
              href="/services"
              className="mt-8 inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              See Our Full Capabilities
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="lg:order-2 order-1 shadow-2xl rounded-xl overflow-hidden transform hover:shadow-indigo-400/50 transition duration-500">
            <img
              src={img}
              alt="Reach Brand team collaborating on a design project"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Key Stats/Metrics Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <FaTrophy className="w-10 h-10 text-indigo-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Years of Expertise
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                10+
              </dd>
            </div>

            <div className="flex flex-col items-center">
              <FaUsers className="w-10 h-10 text-indigo-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Happy Clients Served
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                1,500+
              </dd>
            </div>

            <div className="flex flex-col items-center">
              <FaLightbulb className="w-10 h-10 text-indigo-500 mb-3" />
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Projects Completed
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                3,000+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
