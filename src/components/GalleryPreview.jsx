import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../public/images/gallery/img1.jpg";
import img5 from "../../public/images/gallery/img5.jpg";
import img9 from "../../public/images/gallery/img9.jpg";
import img13 from "../../public/images/gallery/img13.jpg";
// Define the sample data for your gallery preview
const GalleryItems = [
  {
    id: 1,
    imageUrl: img1,
    altText: "Image 1",
  },
  {
    id: 2,
    imageUrl: img5,
    altText: "Image 2",
  },
  {
    id: 3,
    imageUrl: img9,
    altText: "Image 3",
  },
  {
    id: 4,
    imageUrl: img13,
    altText: "Image 4",
  },
];

const GalleryPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our <span className="text-red-600">Recent Work</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See the quality and creativity behind our banners, arch boards, and
            custom signs.
          </p>
        </div>

        {/* Gallery Grid (4 Images) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GalleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer aspect-square" // aspect-square ensures perfect 1:1 ratio
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />
              {/* Optional: Hover Overlay for Polish */}
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action: View More */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/gallery" // This redirects to your full gallery page
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
