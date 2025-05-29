import React from 'react';
import { features } from '../constants'; // Your features array without icons
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-col p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card bg-gray-800`}
  >
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
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
        <h2 className={styles.heading2}>
          Elevate Your Brand <br className="sm:block hidden" /> with Custom Labels
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We specialize in delivering high-quality, precision-crafted labels that
          perfectly represent your brand’s identity. Whether you need small batches
          or bulk production, we’ve got you covered.
        </p>
      </div>
    </section>
  );
};

export default Business;
