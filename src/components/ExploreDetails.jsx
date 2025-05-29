import React from 'react';

import barcodeprinter from '../assets/barcodeprinter.png';
import barcodescanner from '../assets/barcodescanner.png';
import barcodeplain from '../assets/barcodeplain.png';
import barcodeprinted from '../assets/barcodeprinted.png';
import multicolorlabel from '../assets/multicolorlabel.png';
import polysynth from '../assets/polysynth.png';
import ttribbon from '../assets/ttribbon.png';
import spec from '../assets/spec.png';

const printersAndScanners = [
  {
    id: 1,
    title: 'Barcode Printers',
    img: barcodeprinter,
    bio:
      'Our high-performance Barcode printers deliver exceptional print quality and durability. Ideal for various labeling needs.',
  },
  {
    id: 2,
    title: 'Barcode Scanners',
    img: barcodescanner,
    bio: 'Our Barcode Scanners ensures rapid and precise barcode recognition.Elevate Your Efficiency with Our Barcode scanners.',
  },
];

const labelVariants = [
  {
    id: 1,
    name: 'Barcode Plain & Printed Labels',
    img: barcodeprinted,
    bio: 'Versatile and Reliable Barcode Labels for Every Need. Our barcode labels, available in both plain and printed formats, offer unparalleled flexibility and efficiency for your labeling requirements.',
  },
  {
    id: 2,
    name: 'Multicolor Roll Labels',
    img: multicolorlabel,
    bio: 'Brighten Up Your Labels with Our Multicolour Rolls. Our multicolour labels in roll form offer a vibrant and versatile solution for all your labeling needs. Perfect for adding a splash of color to your products!',
  },
  {
    id: 3,
    name: 'Polyester / Synthetic Labels',
    img: polysynth,
    bio: 'Durable and Versatile Polyester/Synthetic Labels for Every Application.Made from high-quality polyester or synthetic materials, these labels are resistant to water, chemicals, ensuring long-lasting performance even in harsh conditions.',
  },
  {
    id: 4,
    name: 'Thermal Transfer Ribbons',
    img: ttribbon,
    bio: 'Precision and Quality with Our Thermal Transfer Ribbons.These ribbons deliver high-quality prints that are both durable and vibrant, ensuring your labels and tags look professional and remain legible over time.',
  },
  {
    id: 5,
    name: 'Speciality Labels',
    img: spec,
    bio: 'Our Speciality Tamper Evident Labels are engineered to offer unparalleled protection against unauthorized access and tampering, making them a perfect choice for businesses that prioritize security and integrity.',
  },
];

const servicesList = [
  {
    id: 1,
    title: 'Custom Label Design',
    desc: 'We select premium materials and finishes to enhance the look and durability of your labels. Whether you need waterproof, scratch-resistant, or eco-friendly options, we ensure that your labels not only look great but also perform exceptionally.',
  },
  {
    id: 2,
    title: 'Technical Support & Maintenance',
    desc: 'We recognize that seamless operation of your labeling equipment is crucial to your business. Our Technical Support and Maintenance services are designed to keep your equipment running smoothly and efficiently, minimizing downtime and ensuring peak performance.',
  },
  {
    id: 3,
    title: 'Label Printing Services',
    desc: 'We utilize advanced printing technology and premium materials to produce labels that are sharp, vibrant, and durable. Our prints maintain their integrity and appearance even in challenging conditions.',
  },
];

const ExploreDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-white">
      {/* Section: Barcode Printers & Scanners */}
      <section className="mb-20">
        <h2 className="text-4xl font-extrabold mt-17 mb-10 text-center text-gradient bg-gradient-to-r from-blue-400 to-purple-600">
          Barcode Printers & Scanners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {printersAndScanners.map(({ id, title, img, bio }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105"
              role="article"
              aria-label={title}
            >
              <img
                src={img}
                alt={title}
                className="w-48 h-48 object-cover rounded-lg mb-6 drop-shadow-lg"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-purple-400 mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Self-Adhesive Labels */}
      <section className="mb-20">
        <h2 className="text-4xl font-extrabold mt-20 mb-20 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
          Self-Adhesive Labels
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
  {labelVariants.map(({ id, name, img, bio }) => (
    <div
      key={id}
      className="bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105 w-full sm:w-1/2 lg:w-1/3 max-w-xs"
      role="article"
      aria-label={name}
    >
      <img
        src={img}
        alt={name}
        className="w-44 h-44 object-contain mb-6 rounded-lg drop-shadow-md"
        loading="lazy"
      />
      <h4 className="text-2xl font-semibold text-purple-400 mb-3 tracking-wide">
        {name}
      </h4>
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
        {bio}
      </p>
    </div>
  ))}
</div>


      </section>

      {/* Section: Services */}
      <section>
        <h2 className="text-4xl font-extrabold mb-16 text-center text-gradient bg-gradient-to-r from-purple-400 to-pink-600">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
          {servicesList.map(({ id, title, desc }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-3xl p-8 w-full md:w-1/3 text-center shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105"
              role="article"
              aria-label={title}
            >
              <h5 className="text-2xl font-semibold text-purple-400 mb-4 tracking-wide">
                {title}
              </h5>
              <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreDetails;
