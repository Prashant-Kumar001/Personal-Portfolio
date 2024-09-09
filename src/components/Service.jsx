import React from "react";
import { BsAndroid2 } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { PiDesktopTowerFill } from "react-icons/pi";
import { motion } from "framer-motion";
const Animations = {
  h1: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  div: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
};
const Service = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center"
      id="service"
    >
      <div className="w-full max-w-7xl flex flex-col items-center px-4">
        <motion.h1
          {...Animations.h1}
          className="text-4xl text-teal-600 font-bold mb-10"
        >
          Services
        </motion.h1>

        <div  className="w-full flex flex-wrap justify-center gap-6">
          <motion.div 
            className="w-full sm:w-1/4 bg-white shadow-lg flex flex-col items-center p-5 rounded-lg"
           data-aos="zoom-in"
          >
            <h2 className="text-2xl font-bold text-teal-500">5+</h2>
            <p className="text-gray-600">Years Experience</p>
          </motion.div>

          <motion.div
            data-aos="zoom-in"
            className="w-full sm:w-1/4 bg-white shadow-lg flex flex-col items-center p-5 rounded-lg"
          >
            <h2 className="text-4xl text-teal-500">
              <CgWebsite />
            </h2>
            <p className="text-gray-600 mt-2">Web Development</p>
          </motion.div>

          <motion.div
          data-aos="zoom-in"
            className="w-full sm:w-1/4 bg-white shadow-lg flex flex-col items-center p-5 rounded-lg"
          >
            <h2 className="text-4xl text-teal-500">
              <BsAndroid2 />
            </h2>
            <p className="text-gray-600 mt-2">App Development</p>
          </motion.div>

          <motion.div
          data-aos="zoom-in"
            className="w-full sm:w-1/4 bg-white shadow-lg flex flex-col items-center p-5 rounded-lg"
          >
            <h2 className="text-4xl text-teal-500">
              <PiDesktopTowerFill />
            </h2>
            <p className="text-gray-600 mt-2">Desktop Development</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
