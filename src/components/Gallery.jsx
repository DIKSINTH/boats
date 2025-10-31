import React from "react";
import img1 from "../../public/images/gallery/img1.jpg";
import img2 from "../../public/images/gallery/img2.jpg";
import img3 from "../../public/images/gallery/img3.jpg";
import img4 from "../../public/images/gallery/img4.jpg";
import img5 from "../../public/images/gallery/img5.jpg";
import img6 from "../../public/images/gallery/img6.jpg";
import img7 from "../../public/images/gallery/img7.jpg";
import img8 from "../../public/images/gallery/img8.jpg";
import img9 from "../../public/images/gallery/img9.jpg";
import img10 from "../../public/images/gallery/img10.jpg";
import img11 from "../../public/images/gallery/img11.jpg";
import img12 from "../../public/images/gallery/img12.jpg";
import img13 from "../../public/images/gallery/img13.jpg";
import img14 from "../../public/images/gallery/img14.jpg";
import img15 from "../../public/images/gallery/img15.jpg";
import img16 from "../../public/images/gallery/img16.jpg";
import img17 from "../../public/images/gallery/img17.jpg";
import img18 from "../../public/images/gallery/img18.jpg";
import img19 from "../../public/images/gallery/img19.jpg";
import img20 from "../../public/images/gallery/img20.jpg";
import img21 from "../../public/images/gallery/img21.jpg";
import img22 from "../../public/images/gallery/img22.jpg";
import img23 from "../../public/images/gallery/img23.jpg";
import img24 from "../../public/images/gallery/img24.jpg";
import img25 from "../../public/images/gallery/img25.jpg";
import img26 from "../../public/images/gallery/img26.png";
import img27 from "../../public/images/gallery/img27.jpg";

// Sample Data organized by category (Heading)
const GalleryCategories = [
  {
    category: "LED Signage Board",
    description:
      "Showcasing our large-scale and architectural signage designed for maximum brand presence and outdoor durability.",
    images: [
      {
        id: 101,
        url: img1,
        alt: "LED Signage Board 1",
      },
      {
        id: 102,
        url: img2,
        alt: "LED Signage Board 2",
      },
      {
        id: 103,
        url: img3,
        alt: "LED Signage Board 3",
      },
      {
        id: 104,
        url: img4,
        alt: "LED Signage Board 4",
      },
    ],
  },
  {
    category: "Sign Board (Back Lit)",
    description:
      "Our portfolio of vibrant, large-format banners and flexible media displays perfect for events, promotions, and temporary advertising.",
    images: [
      {
        id: 201,
        url: img5,
        alt: "Sign Board 1",
      },
      {
        id: 202,
        url: img6,
        alt: "Sign Board 2",
      },
      {
        id: 203,
        url: img7,
        alt: "Sign Board 3",
      },
      {
        id: 204,
        url: img8,
        alt: "Sign Board 4",
      },
    ],
  },
  {
    category: "Sign Board (Non Lit)",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 301,
        url: img9,
        alt: "Sign Board 5",
      },
      {
        id: 302,
        url: img10,
        alt: "Sign Board 6",
      },
      {
        id: 303,
        url: img11,
        alt: "Sign Board 7",
      },
    ],
  },
  {
    category: "LED Logo Backdrop",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 401,
        url: img12,
        alt: "LED Logo",
      },
      {
        id: 402,
        url: img13,
        alt: "LED Logo 2",
      },
      {
        id: 403,
        url: img14,
        alt: "LED Logo 3",
      },
      {
        id: 404,
        url: img15,
        alt: "LED Logo 4",
      },
      {
        id: 405,
        url: img16,
        alt: "LED Logo 5",
      },
      {
        id: 406,
        url: img17,
        alt: "LED Logo 6",
      },
    ],
  },
  {
    category: "Arch (Lit & Non Lit)",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 501,
        url: img18,
        alt: "Arch 1",
      },
      {
        id: 502,
        url: img19,
        alt: "Arch 2",
      },
    ],
  },
  {
    category: "Fabric Board",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 601,
        url: img20,
        alt: "Fabric Board 1",
      },
      {
        id: 602,
        url: img21,
        alt: "Fabric Board 2",
      },
      {
        id: 603,
        url: img22,
        alt: "Fabric Board 3",
      },
      {
        id: 604,
        url: img23,
        alt: "Fabric Board 4 ",
      },
    ],
  },
  {
    category: "Pole Boards (LollyPop, Flag Boards)",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 701,
        url: img24,
        alt: "Pole Board 1",
      },
      {
        id: 702,
        url: img25,
        alt: "Pole Board 2",
      },
    ],
  },
  {
    category: "Standee",
    description:
      "Examples of high-finish 3D letters, acrylic signs, and illuminated boards that elevate interior branding and reception areas.",
    images: [
      {
        id: 801,
        url: img26,
        alt: "Standee 1",
      },
      {
        id: 802,
        url: img27,
        alt: "Standee 2",
      },
    ],
  },
];

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Our Portfolio of{" "}
            <span className="text-red-600">Signage Solutions</span>{" "}
            {/* Changed color back to red for consistency */}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            See the quality, precision, and creativity that goes into every
            project at Reach Brand.
          </p>
        </div>

        {/* Iterate over Categories to create distinct sections */}
        {GalleryCategories.map((group) => (
          <div key={group.category} className="mb-20">
            {/* Category Heading (as requested) */}
            <div className="mb-8 text-center md:text-left border-b-2 border-indigo-100 pb-3">
              <h2 className="text-3xl font-bold text-gray-800">
                {group.category}
              </h2>
              <p className="text-lg text-gray-600 mt-2">{group.description}</p>
            </div>

            {/* Responsive Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {group.images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover aspect-[4/3] transform transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Caption/Hover Overlay - UPDATED */}
                  <div className="absolute inset-x-0 bottom-0 py-2 px-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-sm font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
                      {image.alt}
                    </p>
                  </div>
                  {/* Optional: Add a subtle overlay to help text readability without darkening the main image */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Final Call to Action */}
        <div className="text-center mt-12 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to make your brand visible?
          </h3>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white font-extrabold py-3 px-8 rounded-lg text-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105" // Changed color back to red
          >
            Start Your Custom Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
