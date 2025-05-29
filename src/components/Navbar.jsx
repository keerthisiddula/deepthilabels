import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setToggle(false);
  };

  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="src/assets/logo.png"
            alt="Deepthi Labels"
            className="w-[70px] h-[68px] rounded-full object-cover"
          />
        </Link>
        <Link to="/" className="text-gradient ss:leading-[100.8px] leading-[75px] text-2xl font-bold ml-3">DEEPTHI LABELS</Link>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => {
          if (nav.id === 'home' || nav.id === 'explore') {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <Link to={nav.id === 'home' ? '/' : `/${nav.id}`}>{nav.title}</Link>
              </li>
            );
          } else {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <button
                  onClick={() => handleSectionClick(nav.id)}
                  className="bg-transparent border-none text-white font-poppins text-[16px] cursor-pointer"
                >
                  {nav.title}
                </button>
              </li>
            );
          }
        })}
      </ul>

      {/* Mobile menu toggle (optional, implement as needed) */}
    </nav>
  );
};

export default Navbar;
