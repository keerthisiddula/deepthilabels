import React from 'react';
import TestimonialCard from './TestimonialCard';  // relative import from the same folder

const testimonials = [
  {
    name: 'Tera Srinivas',
    rating: 5,
    feedback: 'Deepthi Labels provided exceptional service and high-quality labels for our products.',
  },
  {
    name: 'Good Bhasker',
    rating: 4,
    feedback: 'Great experience! The barcode scanners are top-notch and easy to use.',
  },
  {
    name: 'JK Seeds',
    rating: 5,
    feedback: 'Reliable and efficient. Their after-sales support is commendable.',
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h2 className="text-4xl font-extrabold mt-16 mb-5 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
        Hear, What our Clients say
      </h2>
      <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
      <div className="grid md:grid-cols-3 gap-6 text-white">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            rating={testimonial.rating}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
