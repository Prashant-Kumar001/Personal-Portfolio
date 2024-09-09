import React from 'react';
import img1 from '../assets/pngtree-default-male-avatar-png-image_2811083-removebg-preview.png';
import { animate, motion } from "framer-motion";
const Testimonial = () => {
  const animations = {
    h1: {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
    },
    statsAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
    },
    div1: {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.7 },
    },
    div2: {
      initial: { opacity: 0, y: -100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7 },
    },
    div3: {
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7 },
    }
  };
  return (
    <div className='w-full min-h-screen max-w-6xl mx-auto flex flex-col items-center justify-around py-20' id='Testimonial'>
      <h1 className='text-4xl font-extrabold text-teal-600 mb-12'>Testimonial</h1>

      <div className='w-full flex flex-wrap justify-center items-center gap-10'>
        {/* Testimonial Card */}
        <motion.div {...animations.div1} className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-full max-w-xs p-8 text-center relative'>
          <img src={img1} alt="Avatar" className='w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-md' />
          <h2 className='text-xl font-bold mt-6'>John Doe</h2>
          <p className='text-gray-600 mt-4 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus facilisis nec quam at volutpat."</p>
          <span className='text-gray-500 mt-4 block'>- Company Name</span>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div {...animations.div2} className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-full max-w-xs p-8 text-center relative'>
          <img src={img1} alt="Avatar" className='w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-md' />
          <h2 className='text-xl font-bold mt-6'>Jane Smith</h2>
          <p className='text-gray-600 mt-4 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus sed erat nec elit bibendum tempor."</p>
          <span className='text-gray-500 mt-4 block'>- Company Name</span>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div {...animations.div3} className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-full max-w-xs p-8 text-center relative'>
          <img src={img1} alt="Avatar" className='w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-md' />
          <h2 className='text-xl font-bold mt-6'>Michael Lee</h2>
          <p className='text-gray-600 mt-4 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor at purus bibendum lacinia. Donec facilisis."</p>
          <span className='text-gray-500 mt-4 block'>- Company Name</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
