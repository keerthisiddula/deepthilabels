import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutus" className="text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <h2 className="text-4xl font-bold mb-8 inline-block text-center">About Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          Hi, I'm <span className="font-semibold text-blue-500">Raju Siddula</span>, the founder of <span className="font-semibold text-blue-400">Deepthi Labels</span>.
          With over <span className="font-semibold">20+ years of experience</span> in the labeling industry,
          I started this business in <span className="font-semibold">2014</span> with a vision to provide high-quality, reliable
          total labeling solutions that exceed customer expectations. Thank you for choosing us!
        </p>

        {/* Business Profile */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Business Profile</h3>
          <p className="text-base leading-relaxed">
            <span className="font-semibold">M/s. DEEPTHI LABELS</span> is a label manufacturing company based out of
            Hyderabad, serving multiple industries across India. We supply all types of self-adhesive labels,
            including specialty labels tailored for diverse end-user applications.
          </p>
        </div>

        {/* Mission & Values */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission & Values</h3>
          <p className="text-base leading-relaxed mb-4">
            Our mission is to be the <span className="font-semibold">premier choice</span> for labeling solutions by offering
            exceptional products, outstanding customer service, and innovative solutions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <span className="font-semibold text-blue-400">Quality:</span> Ensuring the highest standards in our products and services.
            </li>
            <li>
              <span className="font-semibold text-blue-400">Innovation:</span> Continuously improving and adopting new technologies.
            </li>
            <li>
              <span className="font-semibold text-blue-400">Customer Satisfaction:</span> Providing unparalleled support and service.
            </li>
            <li>
              <span className="font-semibold text-blue-400">Integrity:</span> Maintaining transparency and ethical practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
