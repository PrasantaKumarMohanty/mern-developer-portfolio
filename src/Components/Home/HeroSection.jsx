import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import heroImg from "../../Assets/Home/hero.png";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CircularButton from "./CircularButton";
import logo from '../../Assets/Logos/mern-logo.png';

const HeroSection = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative h-screen bg-cover bg-center bg-[#ffe9d9]">
            <nav className="absolute px-10 py-4 border-b border-[#151413] top-0 left-0 w-full flex justify-between items-center bg-transparent z-[100]">
                <div className="text-[#151413] text-2xl font-extrabold flex items-center gap-2">
                    <img
                        src={logo}
                        className="w-auto h-12 object-contain"
                        alt="logo"
                    />

                    <span
                        className="hidden md:block"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        MERN Stack Developer
                    </span>
                    <span
                        className="md:hidden block"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        MERN
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative hidden md:flex items-center gap-2 font-semibold text-xl cursor-pointer group">
                        <p className="relative text-gray-900 group-hover:text-red-500 transition duration-300">
                            Let's Talk
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-900 group-hover:text-red-500 transition duration-200 transform -rotate-45 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>

                        <span
                            className="absolute bottom-[-7px] left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"
                        ></span>
                    </button>

                    <div
                        onClick={() => setSidebarOpen(true)}
                        tabIndex="0"
                        className="cursor-pointer relative flex justify-center items-center w-14 h-14 rounded bg-black overflow-hidden group"
                    >
                        <BiMenuAltRight
                            size={32}
                            className="z-10 transition-transform duration-200 ease-in-out group-hover:text-black group-hover:rotate-180 group-focus:text-black group-focus:rotate-180 text-white"
                        />
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[0.9rem] border-b-[0.9rem] border-l-0 border-solid border-transparent border-r-white transition-all duration-200 ease-in-out group-hover:border-r-[5rem] group-hover:border-b-[5rem] group-focus:border-r-[5rem] group-focus:border-b-[5rem]"></div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out z-[300] ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-2xl font-bold mb-4"
                    >
                        Close
                    </button>
                    <ul className="space-y-4">
                        <li className="py-2 cursor-pointer">Home</li>
                        <li className="py-2 cursor-pointer">About</li>
                        <li className="py-2 cursor-pointer">Services</li>
                        <li className="py-2 cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>

            <div className="py-10 container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-between relative z-10 px-6 md:px-0">
                <div className="md:w-1/2 z-10 text-center md:text-left text-[#151413] mt-14 md:mt-24">
                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-2xl md:text-3xl tracking-wide font-bold mb-2">
                        ----Hello, I’m ✌️
                    </div>
                    <h1
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-3xl md:text-[4rem] leading-tight md:leading-[80px] font-extrabold mb-6 relative"
                    >
                        <span className="relative inline-block">
                            <span className="relative z-10">P</span>
                            <span
                                className="absolute inset-0 md:w-[3.5rem] md:h-[3.5rem] w-[1.5rem] h-[1.5rem] bg-[#ffb646] rounded-full -z-10"
                                style={{ top: '0.3rem', left: '22px' }}
                            ></span>
                        </span>
                        rasanta Kumar Mohanty
                    </h1>
                    <p
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-lg md:text-2xl mb-2 font-bold">
                        Software Development Engineer - II
                    </p>
                    <p className="text-md md:text-xl mb-10">
                        3 years of experience in MERN stack
                    </p>

                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="tracking-wider relative px-8 py-3 bg-[#151413] text-white hover:text-[#151413] text-lg font-semibold hover:ring-1 ring-[#151413] rounded-lg shadow-md overflow-hidden z-10 transition-all duration-300 group">
                            <span className="relative z-20">
                                Let's Talk 🡥
                            </span>
                            <div className="absolute inset-0 bg-[#ffe9d9] w-0 h-full ring-1 ring-[#151413] transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                        </button>

                        <button className="tracking-wider relative px-8 py-3 bg-[#ffe9d9] text-[#151413] text-lg font-semibold rounded-lg shadow-md overflow-hidden z-10 border border-[#151413] hover:text-[#ffffff] transition-all duration-300 group">
                            <span className="relative z-20">
                                My Works 🡥
                            </span>
                            <div className="absolute inset-0 bg-[#151413] w-0 h-full transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                        </button>
                    </div>

                    <div className="flex justify-center md:justify-start gap-6 md:mt-10 mt-5 mb-5 md:mb-0">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#151413] hover:text-[#ff774c]"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#151413] hover:text-[#ff774c]"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#151413] hover:text-[#ff774c]"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hidden md:block absolute top-0 right-0 w-[700px] h-full z-0">
                <img
                    src={heroImg}
                    alt="Right Side"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="hidden md:block absolute left-1/4 md:left-[48%] top-[85%] transform -translate-y-1/2 z-20">
                <CircularButton />
            </div>
        </div>
    );
};

export default HeroSection;