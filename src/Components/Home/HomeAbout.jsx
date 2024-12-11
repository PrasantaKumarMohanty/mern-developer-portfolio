import React from 'react';
import img1 from '../../Assets/Home/about1.png';
import './HomeAbout.css';
import { MdArrowOutward } from "react-icons/md";

const HomeAbout = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* First Column - Image */}
                    <div className="relative flex justify-center">
                        <img
                            src={img1}
                            alt="my-img"
                            className="w-full md:w-4/5 lg:w-[90%] h-auto object-contain"
                        />

                        {/* Bottom-right experience label */}
                        <div
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="absolute bottom-4 right-4 shadow-md bg-[#ffffff] p-4 rounded-xl">
                            <div className="relative bg-[#ffb646] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                <span className="font-extrabold text-2xl md:text-5xl text-[#151413]">3+</span>
                            </div>

                            <div className="font-semibold tracking-wider text-2xl md:text-4xl stroke-text text-transparent">
                                Years of<br /> Experience
                            </div>
                        </div>
                    </div>

                    {/* Second Column - Content */}
                    <div className="flex flex-col justify-center">
                        {/* Header */}
                        <div className="flex flex-col justify-center">
                            <div
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-lg text-start tracking-wide font-semibold text-[#ffb646] mb-2">
                                Hello, I'm
                            </div>

                            <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                                <span className="relative z-10">Prasanta&nbsp;</span>
                                <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                                    <span className="text-white font-bold text-lg">&nbsp;</span>
                                </span>
                                Kumar Mohanty
                            </h2>

                            <h2
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-xl md:text-3xl font-extrabold text-[#151413] mt-6">
                                Full-Stack Developer (SDE - II)
                            </h2>
                            <h2
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-xl md:text-3xl font-medium text-[#151413] mt-6">
                                Tech Stack - <span className='font-extrabold'>MERN STACK</span>
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 my-4 text-justify">
                            I specialize in full-stack development with a focus on MERN technologies. With several years of experience, I have successfully completed numerous projects and worked with many clients to bring their visions to life.
                        </p>

                        {/* Counters */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-center sm:text-left">
                            {/* Total Experience */}
                            <div className="flex flex-col items-center sm:items-start">
                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="mb-2 text-3xl md:text-4xl font-extrabold text-[#151413]">
                                    3+
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                                    Total Experience
                                </p>
                            </div>

                            {/* Total Projects */}
                            <div className="flex flex-col items-center sm:items-start">
                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="mb-2 text-3xl md:text-4xl font-extrabold text-[#151413]">
                                    10+
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                                    Works on Overseas Projects
                                </p>
                            </div>

                            {/* Total Clients */}
                            <div className="flex flex-col items-center sm:items-start">
                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="mb-2 text-3xl md:text-4xl font-extrabold text-[#151413]">
                                    16+
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                                    Total Corporate Projects
                                </p>
                            </div>
                        </div>

                        <a
                            href="/Prasanta_K_Mohanty_MERN_Stack_Resume.pdf"
                            download="Prasanta_K_Mohanty_MERN_Stack_Resume.pdf"
                            className="text-center mt-6 w-full md:w-[60%] tracking-wider relative px-8 py-3 bg-[#151413] text-white hover:text-[#151413] text-md md:text-lg font-semibold rounded-lg shadow-md overflow-hidden z-10 transition-all duration-300 group"
                        >
                            <span className="relative z-20 flex justify-center items-center gap-2">
                                    <span>
                                        Download My Resume
                                    </span>
                                    <span>
                                        <MdArrowOutward size={22} />
                                    </span>
                                </span>
                            <div className="absolute inset-0 bg-[#ffb646] w-0 h-full ring-1 ring-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:z-10"></div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeAbout;