import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import heroImg from "../../Assets/Home/hero.png";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CircularButton from "./CircularButton";
import logo from '../../Assets/Logos/sdeLogo.png';
import Sidebar from "../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import ContactModal from "../Common/ContactModal";
import FloatingButton from "../Common/FloatingButton";

const HeroSection = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    }

    return (
        <React.Fragment>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen} />

            <ContactModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
            />

            <FloatingButton
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="relative h-screen bg-cover bg-center bg-[#ffe9d9]">
                <nav className="absolute px-10 py-4 border-b border-[#151413] top-0 left-0 w-full flex justify-between items-center bg-transparent z-[100]">
                    <div
                        onClick={() => handleNavigation("/")}
                        className="text-[#151413] text-2xl font-extrabold flex items-center gap-2 cursor-pointer">
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
                            <p
                                onClick={handleOpenModal}
                                className="relative text-gray-900 group-hover:text-red-500 transition duration-300">
                                Let's Connect
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
                            className="cursor-pointer relative flex justify-center items-center w-14 h-14 rounded bg-[#151413] overflow-hidden group"
                        >
                            <BiMenuAltRight
                                size={32}
                                className="z-10 transition-transform duration-200 ease-in-out group-hover:text-[#151413] group-hover:rotate-180 group-focus:text-[#151413] group-focus:rotate-180 text-white"
                            />
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[0.9rem] border-b-[0.9rem] border-l-0 border-solid border-transparent border-r-white transition-all duration-200 ease-in-out group-hover:border-r-[5rem] group-hover:border-b-[5rem] group-focus:border-r-[5rem] group-focus:border-b-[5rem]"></div>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-between relative z-10 px-6 md:px-0">
                    <div className="md:w-1/2 z-10 text-center md:text-left text-[#151413] mt-0 md:mt-44">
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
                            With 3+ years of expertise in <strong>MERN stack</strong>
                        </p>

                        <div
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={handleOpenModal}
                                className="tracking-wider relative px-8 py-3 bg-[#151413] text-white hover:text-[#151413] text-lg font-semibold hover:ring-1 ring-[#151413] rounded-lg shadow-md overflow-hidden z-10 transition-all duration-300 group">
                                <span className="relative z-20">
                                    Let's Connect 🡥
                                </span>
                                <div className="absolute inset-0 bg-[#ffe9d9] w-0 h-full ring-1 ring-[#151413] transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                            </button>

                            <button
                                onClick={() => handleNavigation("/projects")}
                                className="tracking-wider relative px-8 py-3 bg-[#ffe9d9] text-[#151413] text-lg font-semibold rounded-lg shadow-md overflow-hidden z-10 border border-[#151413] hover:text-[#ffffff] transition-all duration-300 group">
                                <span className="relative z-20">
                                    View My Work 🡥
                                </span>
                                <div className="absolute inset-0 bg-[#151413] w-0 h-full transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                            </button>
                        </div>

                        <div className="flex justify-center md:justify-start gap-6 mt-5 mb-5 md:mb-0">
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

                <div
                    onClick={handleOpenModal}
                    className="hidden md:block cursor-pointer absolute left-1/4 md:left-[48%] top-[85%] transform -translate-y-1/2 z-20">
                    <CircularButton />
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeroSection;