import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdKeyboardArrowDown } from "react-icons/md";

const Home = () => {
    const clientsRef = useRef(null);
    const projectsRef = useRef(null);
    const awardsRef = useRef(null);

    const count = (start, end, ref) => {
        animate(start, end, {
            duration: 1.5,
            onUpdate: (value) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(value);
                }
            },
        });
    };

    const animations = {
        h1: {
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
        },
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5, duration: 1 },
        },

        statsAnimation: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
        },
        div: {
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
        }
    };

    return (
        <div className=" min-h-screen flex items-center justify-center  p-4 md:p-8" id="home" >
            <div className="flex flex-col gap-14 w-full max-w-6xl h-full">
                {/* Header Section */}
                <motion.h1
                    {...animations.h1}
                    className="text-xl md:text-3xl font-extrabold text-teal-700 text-center"
                >
                    Welcome, <span  className="text-teal-800 text-3xl md:text-6xl">i am Prashant</span>
                </motion.h1>

                {/* Typewriter and CTA Section */}
                <motion.div {...animations.fadeIn} className="flex flex-col justify-center items-center space-y-6">
                    {/* Typewriter Effect */}
                    <div className="text-lg md:text-2xl text-gray-600 text-center">
                        <Typewriter
                            options={{
                                strings: [
                                    'I build modern web experiences.',
                                    'React is my forte.',
                                    'I craft elegant websites.',
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: '_',
                            }}
                        />
                    </div>

                    <motion.div {...animations.div} className="flex flex-col md:flex-row gap-4">
                        <a
                            href="mailto:official.prashant0kumar101@gmail.com"
                            className="px-6 py-3 text-center bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all"
                        >
                            Hire Me
                        </a>
                        <a
                            href="#work"
                            className="flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-teal-600 hover:text-white transition-all"
                        >
                            View Projects <BsArrowUpRight className="ml-2" />
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div {...animations.statsAnimation} className="flex justify-center gap-8 mb-6">
                    <div className="flex flex-col items-center">
                        <motion.h1 className="text-4xl font-bold text-teal-600">
                            +<motion.span
                                whileInView={() => count(0, 100, clientsRef)}
                                className="text-4xl font-bold text-teal-600"
                                ref={clientsRef}
                            >0</motion.span>
                        </motion.h1>
                        <span className="text-sm text-gray-600">Clients</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <motion.h1 className="text-4xl font-bold text-teal-600">
                            +<motion.span
                                whileInView={() => count(0, 500, projectsRef)}
                                className="text-4xl font-bold text-teal-600"
                                ref={projectsRef}
                            >0</motion.span>
                        </motion.h1>
                        <span className="text-sm text-gray-600">Projects</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <motion.h1 className="text-4xl font-bold text-teal-600">
                            +<motion.span
                                whileInView={() => count(0, 100, awardsRef)}
                                className="text-4xl font-bold text-teal-600"
                                ref={awardsRef}
                            >0</motion.span>
                        </motion.h1>
                        <span className="text-sm text-gray-600">Awards</span>
                    </div>
                </motion.div>

                {/* Skills, Experience, and Education Section */}
                <motion.div {...animations.fadeIn} className="md:flex-row flex-col flex gap-4 md:flex  w-full justify-between ">
                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold text-teal-700 md:mb-4">Skills</h2>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Node.js</li>
                            <li>Redux</li>
                        </ul>
                    </div>

                    {/* Experience */}
                    <div>
                        <h2 className="text-2xl font-bold text-teal-700 md:mb-4">Experience</h2>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>React Developer @ XYZ Corp (2021 - Present)</li>
                            <li>JavaScript Developer @ ABC Corp (2019 - 2021)</li>
                            <li>Frontend Developer @ DEF Corp (2018 - 2019)</li>
                        </ul>
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold text-teal-700 md:mb-4">Education</h2>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Bachelor of Science in Computer Science (2015 - 2019)</li>
                            <li>High School Diploma (2012 - 2015) <span className="text-gray-500">GPA: 3.8</span></li>
                            <li>College Degree (2010 - 2012) <span className="text-gray-500">GPA: 3.6</span></li>
                        </ul>
                    </div>
                <div className="mx-auto absolute bottom-2 left-1/2 translate-x-[-50px] ">
                    <MdKeyboardArrowDown  className="text-4xl up-down" />
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
