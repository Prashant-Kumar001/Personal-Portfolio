import { FaSquareXTwitter, FaSquareGithub, FaSquareFacebook } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full  bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
                {/* Logo or Main Title */}
                <h1 className="text-4xl font-bold text-center">Code with Me</h1>
                <p className="text-gray-300 text-center max-w-xl">
                    Let's create something beautiful together. Whether you're looking for a new project or need some advice, I'm here to help.
                </p>

                {/* Social Icons */}
                <div>
                    <ul className="flex space-x-6 justify-center items-center">
                        <li>
                            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                                <FaSquareXTwitter className="text-3xl text-white hover:text-blue-400 transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" target="_blank" aria-label="Github">
                                <FaSquareGithub className="text-3xl text-white hover:text-gray-400 transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                                <GrInstagram className="text-3xl text-white hover:text-pink-500 transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                                <FaSquareFacebook className="text-3xl text-white hover:text-blue-600 transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
                                <BsYoutube className="text-3xl text-white hover:text-red-600 transition-all duration-300" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links (optional) */}
                <div className="flex flex-col md:flex-row gap-6 text-center md:gap-12">
                    <a href="#work" className="text-gray-400 hover:text-white">
                        Projects
                    </a>
                    <a href="#about" className="text-gray-400 hover:text-white">
                        About
                    </a>
                    <a href="#Contact" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                    <a href="#blog" className="text-gray-400 hover:text-white">
                        Blog
                    </a>
                </div>

                {/* Copyright and Credits */}
                <div className="text-center">
                    <p className="text-gray-500">
                        Designed and developed by{" "}
                        <a
                            href="https://yourportfolio.com"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            Prashant
                        </a>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        &copy; {new Date().getFullYear()} Code with Me. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
