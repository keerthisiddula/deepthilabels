import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  Business,
  Footer,
  Hero,
  Navbar,
  Stats,
  ProductsServices,
  ContactUs,
  AboutUs,
  ExploreDetails,
  Feedback
} from './components';

import styles from './style';

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
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Hero /></section>
                  <Stats />
                  <Business />
                  <section id="productsServices"><ProductsServices /></section>
                  <section id="aboutus"><AboutUs /></section>  {/* Fixed closing tag */}
                  <section id="contactus"><ContactUs /></section>
                  
                </>
              }
            />
            <Route
              path="/explore"
              element={
                <>
                  <ExploreDetails />
                </>
              }
            />
          </Routes>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
