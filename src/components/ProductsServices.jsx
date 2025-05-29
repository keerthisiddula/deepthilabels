import React from 'react';
import { useNavigate } from 'react-router-dom';  // import useNavigate

import { printerIcon, labelIcon, supportIcon } from '../assets'; // your icons

const services = [
  {
    icon: printerIcon,
    title: 'Printers & Scanners',
    description: `Our barcode printers provide crystal-clear print quality and consistent results across a variety of labeling applications.

Our scanners offer seamless integration with your existing systems, making them an invaluable tool for enhancing productivity and accuracy.`,
  },
  {
    icon: labelIcon,
    title: 'Custom Labels',
    description: `We specialize in providing custom labels that perfectly align with your brand’s identity and functional requirements.

We customize the labels as per the end-users requirements to enhance your product’s presentation and drive your brand’s success.`,
  },
  {
    icon: supportIcon,
    title: 'Service Support',
    description: `Our Service Support is designed to ensure that your labeling equipment and solutions operate at peak performance, minimizing downtime and maximizing efficiency.`,
  },
];

const ProductsServices = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore');  // navigate programmatically
  };

  return (
    <section className="py-10 px-6 min-h-screen">
      <h2 className="text-center text-3xl font-semibold mb-10 text-white">
        Your go-to solution for high-quality labeling products and services.
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 max-w-sm mx-auto p-6 rounded-xl bg-gray-800 shadow-lg text-white hover:shadow-xl hover:scale-105 hover:bg-gray-800 
                transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-6">
              <img
                src={service.icon}
                alt={service.title}
                style={{ width: '180px', height: '180px', objectFit: 'contain' }}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
            <p className="whitespace-pre-line text-center leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleExploreClick}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default ProductsServices;
