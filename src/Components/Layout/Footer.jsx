import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#151413] text-gray-300 py-12 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                {/* First Column - Let's Work Together */}
                <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                    <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-[#ffffff] relative">
                        <span className="relative z-10">Let's&nbsp;</span>
                        <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                            <span className="text-white font-bold text-lg">&nbsp;</span>
                        </span>
                        Work Together
                    </h2>
                    <p className="text-gray-400 my-6 text-md tracking-wide text-justify">
                        I'm always open to new opportunities. If you have a project or collaboration in mind, feel free to reach out!
                    </p>
                </div>

                {/* Second Column - Contact Details */}
                <div
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="relative text-center lg:text-left border border-gray-500 p-6 rounded-lg bg-transparent flex flex-col justify-center items-center lg:items-start">
                    <h4 className="text-2xl font-semibold tracking-wide text-white mb-4">
                        Looking for a hectic developer?
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-center tracking-wide font-semibold text-gray-400">
                            <FaEnvelope className="w-5 h-5 mr-2" />
                            mprasantakumar72@gmail.com
                        </li>
                        <li className="flex items-center tracking-wide font-semibold text-gray-400">
                            <FaPhoneAlt className="w-5 h-5 mr-2" />
                            +91 7008195575
                        </li>
                        <li className="flex items-center tracking-wide font-semibold text-gray-400">
                            <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                            Bhubaneswar, Odisha, India
                        </li>
                    </ul>
                    <MdArrowOutward className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6" color='#ffb646' size={32} />
                </div>

                {/* Third Column - Social Media Icons */}
                <div
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="relative text-center lg:text-left border border-gray-500 p-6 rounded-lg bg-transparent flex flex-col justify-center items-center lg:items-start">
                    <h4 className="text-2xl font-semibold tracking-wide text-white mb-4">
                        Want a more in-depth look at my history?
                    </h4>
                    <div className="flex justify-center lg:justify-start space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-125 duration-300"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-125 duration-300"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-125 duration-300"
                        >
                            <FaTwitter className="w-8 h-8" />
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="text-gray-400 hover:text-white transition transform hover:scale-125 duration-300"
                        >
                            <FaEnvelope className="w-8 h-8" />
                        </a>
                    </div>
                    <MdArrowOutward className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6" color='#ffb646' size={32} />
                </div>
            </div>

            {/* Resume Button & Back to Top */}
            <h1
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="px-4 text-2xl md:text-4xl tracking-wider font-extrabold text-[#ffffff] text-center my-8">
                Prasanta Kumar Mohanty
            </h1>

            <div className='px-4 flex flex-col lg:flex-row justify-between items-center flex-wrap'>
                <div
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-md md:text-lg tracking-wider font-medium text-[#ffffff] mb-4 lg:mb-0">
                    Thanks For Scrolling.
                </div>

                <button className="tracking-wider relative px-8 py-2 bg-[#ffffff] text-[#151413] hover:text-[#ffffff] text-lg font-semibold hover:ring-1 ring-[#ffffff] rounded-lg shadow-md overflow-hidden z-10 transition-all duration-300 group">
                    <span className="relative z-20">
                        My Resume 🡥
                    </span>
                    <div className="absolute inset-0 bg-[#ffb646] w-0 h-full ring-1 ring-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                </button>

                <div
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-md md:text-lg tracking-wider font-medium text-[#ffffff]">
                    <a href="#top" className="hover:text-[#ffb646] transition duration-300">Back To Top 🡡</a>
                </div>
            </div>

            {/* Bottom Section - Name */}
            <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-4">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Prasanta Kumar Mohanty. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
