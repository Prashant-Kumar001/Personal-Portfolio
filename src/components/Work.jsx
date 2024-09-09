import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/btc.png';
// import img2 from '../assets/another-image.png'; // Import local images if available

const Work = () => {
    const animations = {
        p: {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
        },
        button: {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
        },
        div: {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
        }
};

return (
    <motion.div
        id="work"
        className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
        <div className='flex flex-col md:flex-row justify-around items-center w-full'>

            {/* Text Section */}
            <div className='flex flex-col items-center md:items-start mb-10 md:mb-0'>
                <motion.h2
                    className="text-3xl font-bold text-teal-600 mb-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    Work
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 mb-6 text-center md:text-left max-w-xl"
                    {...animations.p}
                >
                    I've worked as a freelance graphic designer and web developer for various clients, including startups, corporations, and non-profits. Some of my projects include:
                </motion.p>
                <motion.p
                    className="text-lg text-gray-700 text-center md:text-left max-w-xl mt-6"
                    {...animations.p}
                >
                    Feel free to reach out if you'd like to work together or have a project in mind.
                </motion.p>
            </div>

            {/* Carousel Section */}
            <motion.div className="w-full max-w-xl">
                <motion.div {...animations.div}>
                    <motion.h1 className='mb-4'>
                        My <span className='text-xl md:text-3xl text-teal-700 font-semibold'>Projects</span>
                    </motion.h1>
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={2000}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        <div className="relative">
                            <img
                                src='https://cdn.pixabay.com/photo/2021/12/27/19/28/e-commerce-6898102_1280.png'
                                className='w-full'
                                alt="E-commerce Project"
                            />
                            <motion.button
                                {...animations.button}
                                className='absolute bottom-4 left-0 right-0 w-28 m-auto bg-teal-300 text-xs px-4 py-2 rounded-md group'
                            >
                                <a
                                    href="https://fastdelevery.netlify.app/"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='group-hover:underline'
                                >
                                    View Demo
                                </a>
                            </motion.button>
                        </div>
                        <div className="relative">
                            <img
                                src='https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_1280.png'
                                alt="Crypto Project"
                                className='w-full'
                            />
                            <motion.button
                                {...animations.button}
                                className='absolute bottom-4 left-0 right-0 w-28 m-auto bg-teal-300 text-xs px-4 py-2 rounded-md group'
                            >
                                <a
                                    href="https://cryptomee.netlify.app/"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='group-hover:underline'
                                >
                                    View Demo
                                </a>
                            </motion.button>
                        </div>
                    </Carousel>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
);
}

export default Work;
