import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../public/images/gallery/img1.jpg";
import img5 from "../../public/images/gallery/img5.jpg";
import img9 from "../../public/images/gallery/img9.jpg";
import img13 from "../../public/images/gallery/img13.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const GalleryItems = [
  { id: 1, imageUrl: img1, altText: "Image 1" },
  { id: 2, imageUrl: img5, altText: "Image 2" },
  { id: 3, imageUrl: img9, altText: "Image 3" },
  { id: 4, imageUrl: img13, altText: "Image 4" },
];

const GalleryPreview = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl break-words"
          >
            Our <span className="text-red-600">Recent Work</span>
          </h2>
          <p
            data-aos="fade-up"
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See the quality and creativity behind our banners, arch boards, and
            custom signs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 overflow-hidden">
          {GalleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
              data-aos="zoom-in"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 overflow-hidden">
          <a
            data-aos="zoom-in"
            href="/gallery"
            className="inline-flex items-center bg-red-600 text-white font-extrabold py-3 px-8 rounded-full text-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            View More Projects
            <FaArrowRight className="ml-3 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
