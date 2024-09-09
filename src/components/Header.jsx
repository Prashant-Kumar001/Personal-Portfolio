import { motion } from "framer-motion"; // For smooth animations
import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-10 py-2 w-full">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-teal-600 ">
            Prashant.
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center text-gray-800">
            <li>
              <a
                href="#home"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#timeLine"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#Testimonial"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-teal-600 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Email Button */}
          <a
            href="mailto:official.prashant0kumar101@gmail.com"
            className="hidden md:flex bg-gradient-to-r from-teal-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300 items-center gap-2"
            aria-label="Email Prashant"
          >
            <FaEnvelope /> Email
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-gray-800">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            className="absolute inset-0 top-[60px] bg-gradient-to-r from-teal-600 to-blue-500 text-white flex flex-col items-center justify-center min-h-screen"
          >
            <ul className="flex flex-col gap-6 items-center">
              <li>
                <a
                  onClick={toggleMenu}
                  href="#home"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  href="#work"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  href="#timeLine"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  href="#service"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  href="#Testimonial"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  href="#Contact"
                  className="hover:text-gray-200 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:official.prashant0kumar101@gmail.com"
                  className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center gap-2"
                  aria-label="Email Prashant"
                >
                  <FaEnvelope /> Email
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
