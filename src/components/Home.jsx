// src/components/Home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './Hero';
import ProductsServices from './ProductsServices';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="productsServices">
        <ProductsServices />
      </section>
    </div>
  );
};

export default Home;
