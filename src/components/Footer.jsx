import React from 'react';
import styles from '../style';
import { socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2014 Deepthi Labels. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-500 hover:text-blue-500 mr-4"
            >
              {React.createElement(social.icon)}
            </a>
          ))}


        </div>
      </div>
    </section>
  );
};

export default Footer;
