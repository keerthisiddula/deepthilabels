import React from 'react';
import { features } from '../constants'; // Your features array without icons
import styles, { layout } from '../style';

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-col p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card bg-gray-800`}
  >
    <h4 className="text-[18px] font-bold mb-3 text-purple-600">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[24px]">
      {content}
    </p>
  </div>
);

const Business = () => {
  return (
    <section
      id="features"
      className={`${layout.section} flex flex-row gap-x-20`}  // flex row + horizontal gap
    >
      <div className={`${layout.sectionImg} flex flex-col flex-1`}>
        {/* Cards on left */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className={`${layout.sectionInfo} flex-1`}>
        {/* Heading on right */}
        <div className="text-center">
          <h2 className={`${styles.heading2} text-4xl font-extrabold mt-18 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600`}>
            Elevate Your Brand with Custom Labels
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
        </div>
        <p className={`${styles.paragraph} text-[15.5px] max-w-[470px] ml-6 mt-2`}>
          We specialize in delivering high-quality, precision-crafted labels that
          perfectly represent your brand’s identity. Whether you need small batches
          or bulk production, we’ve got you covered.
        </p>
      </div>
    </section>
  );
};

export default Business;
