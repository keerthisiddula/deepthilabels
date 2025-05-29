import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Business,
  Footer,
  Hero,
  Navbar,
  Stats,
  ProductsServices,
  AboutUs,
  ExploreDetails,
} from './components';

import styles from './style';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import IndustriesWeServe from './components/IndustriesWeServe';
import Blog from './components/Blog';
import Services from './components/Services';
import InstallationSupport from './components/InstallationSupport';
import Brands from './components/Brands';
import ClientsMarquee from './components/ClientsMarquee';

const App = () => {
  const location = useLocation();

  useEffect(() => {
  window.scrollTo(0, 0);
  if (location.state && location.state.scrollTo) {
    const sectionId = location.state.scrollTo;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.replaceState({}, document.title);
  }
}, [location]);

  return (
    <div className="bg-primary w-full overflow-hidden flex flex-col min-h-screen">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main content grows */}
      <main className={`${styles.paddingX} ${styles.flexCenter} flex-grow`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
  <Route
    path="/"
    element={
      <>
        <section id="home"><Hero /></section>
        <Stats />
        <section id="explore"><ProductsServices /></section>
        <InstallationSupport />
        <Brands />
    
        
        <section id="aboutus"><AboutUs /></section>
        <ClientsMarquee/>
        <section id="contactus"><ContactUs /></section>
      </>
        }
      />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<IndustriesWeServe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/explore" element={<ExploreDetails />} /> {/* Add this */}
    </Routes>

        </div>
      </main>

      {/* Footer */}
      <footer className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;
