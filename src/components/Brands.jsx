import React from 'react';

import tscLogo from '../assets/tsc.png';
import zebraLogo from '../assets/zebra.png';
import datamaxLogo from '../assets/datamax.png';
import CitizenLogo from '../assets/Citizen-logo.png';
import motoLogo from '../assets/moto.png';
import dlLogo from '../assets/dl1.png';


const Brands = () => {
  // Replace these logos with your real images or URLs
  const printerBrands = [
    { id: 1, name: 'TSC Printronix', logo: tscLogo, style: { width: '120px', height: '50px' } },
    { id: 2, name: 'Zebra', logo: zebraLogo, style: { width: '120px', height: '40px' } },
    { id: 3, name: 'Datamaxoniel', logo: datamaxLogo, style: { width: '120px', height: 'auto' } },
    { id: 4, name: 'Citizen', logo: CitizenLogo, style: { width: '120px', height: 'auto' } },
  ];

  const scannerBrands = [
    { id: 1, name: 'Motorola', logo: motoLogo, style: { width: '110px', height: 'auto' } },
    { id: 2, name: 'DataLogic', logo: dlLogo, style: { width: '100px', height: 'auto' } },
    { id: 3, name: 'Zebra', logo: zebraLogo, style: { width: '100px', height: 'auto' } },
  ];

  return (
    <section
      id="brands"
      className="my-16 px-6 max-w-7xl mx-auto"
      aria-label="Printer and Scanner Brands"
    >
      {/* Printers Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold mt-28 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
          Trusted Printer Brands
        </h2>
        <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-center text-[18px] leading-relaxed">
          We collaborate with industry-leading printer brands to ensure you get reliable, high-performance printing solutions tailored to your business needs.
        </p>
        <div
            className="flex justify-center gap-8"  // flex row, centered, small gap
            style={{ maxWidth: '800px', margin: '0 auto' }} // container max width & center
            >
            {printerBrands.map((brand) => (
                <div
                key={brand.id}
                className="flex justify-center items-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                    width: '180px',
                    height: '120px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // optional: add boxShadow or border if you want
                }}
                title={brand.name}
                >
                <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    }}
                    loading="lazy"
                />
                </div>
            ))}
            </div>

      </div>

      {/* Scanners Section */}
      <div>
        <h2 className="text-3xl font-extrabold mt-16 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600 leading-relaxed">
        Leading Scanner Brands
        </h2>

        <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-center text-[18px] leading-relaxed">
          Our selection of premium scanners ensures crisp, efficient, and accurate digitization to streamline your document management process.
        </p>
        <div
            className="flex justify-center gap-8"
            style={{ maxWidth: '600px', margin: '0 auto' }} // container max width & center
            >
            {scannerBrands.map((brand) => (
                <div
                key={brand.id}
                className="flex justify-center items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                    width: '180px',
                    height: '120px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                title={brand.name}
                >
                <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // keep aspect ratio without cropping
                    }}
                    loading="lazy"
                />
                </div>
            ))}
            </div>

      </div>
    </section>
  );
};

export default Brands;
