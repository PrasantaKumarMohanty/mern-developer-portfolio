import React, { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaReact, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';

const Resume = () => {
    const resumeTabs = ['About', 'Experience', 'Education', 'Skills', 'Awards'];
    const [activeTab, setActiveTab] = useState('About');

    // Tab content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'About':
                return (
                    <div>
                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-4xl font-bold mb-4 text-[#151413]">
                            About Me
                        </h2>
                        <p className="text-gray-600 text-lg font-semibold mb-6">
                            Prasanta Kumar Mohanty, Product Designer, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,
                            <br /><br />
                            but words that truly land with those that read them, calling your audience in and making them want more.
                        </p>

                        <div className="space-y-4 text-sm md:text-lg font-semibold tracking-wider">
                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Name</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    Prasanta Kumar Mohanty
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Nationality</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    Indian
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Phone</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    +91 7008195575
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Email</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    mprasantakuamr72@gmail.com
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Experience</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    3+ years
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Skype</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    join.skype.com/invite/vHr1GEncSJwf
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-start items-center md:gap-16">
                                <span className=" text-gray-600">Language</span>
                                <span
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-[#151413] ">
                                    English, Hindi, Odia
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case 'Education':
                return (
                    <div>
                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-4xl font-bold mb-4 text-[#151413]">
                            Education
                        </h2>
                        <p className="text-[#151413] text-lg tracking-wide font-semibold mb-6">
                            This is the Education section. List all the educational qualifications, degrees, and certifications here.
                        </p>

                        {/* Education Cards Section */}
                        <div className="space-y-4">
                            {/* Card 1 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex flex-col sm:flex-row justify-between transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    2018 - 2021
                                </div>
                                <div>
                                    <div className='flex justify-end items-center mb-2 gap-2'>
                                        <div>
                                            <GoDotFill size={18} color='#ffb646' />
                                        </div>
                                        <p className="text-[#151413] tracking-wide text-lg">
                                            IMIT, Cuttack (BPUT)
                                        </p>
                                    </div>
                                    <h3
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                        className="text-2xl font-bold text-[#151413] mb-2 text-end">
                                        Master of Computer Application
                                    </h3>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex flex-col sm:flex-row justify-between transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    2014 - 2018
                                </div>
                                <div>
                                    <div className='flex items-center justify-end mb-2 gap-2'>
                                        <div>
                                            <GoDotFill size={18} color='#ffb646' />
                                        </div>
                                        <p className="text-[#151413] tracking-wide text-lg">
                                            Utkal University, Bhubaneswar
                                        </p>
                                    </div>
                                    <h3
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                        className="text-2xl font-bold text-[#151413] mb-2 text-end">
                                        B.Sc (Physics Hons.)
                                    </h3>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex flex-col sm:flex-row justify-between transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    2012 - 2014
                                </div>
                                <div>
                                    <div className='flex items-center justify-end mb-2 gap-2'>
                                        <div>
                                            <GoDotFill size={18} color='#ffb646' />
                                        </div>
                                        <p className="text-[#151413] tracking-wide text-lg">
                                            Utkal University, Bhubaneswar
                                        </p>
                                    </div>
                                    <h3
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                        className="text-2xl font-bold text-[#151413] mb-2 text-end">
                                        +2 Science
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Experience':
                return (
                    <div>
                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-4xl font-bold mb-4 text-[#151413]">
                            Experience
                        </h2>
                        <p className="text-[#151413] text-lg tracking-wide font-semibold mb-6">
                            This section outlines work experience, job roles, and professional achievements.
                        </p>

                        {/* Experience Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Row 1 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Nov 2023 - Present
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Web_Bocket Software Pvt. Ltd.
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    SDE - II (MERN Stack)
                                </h3>
                            </div>

                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Aug 2022 - Nov 2023
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Zotto Pvt. Ltd. (Remote)
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Full - Stack Developer (SDE)
                                </h3>
                            </div>

                            {/* Row 2 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Dec 2021 - Aug 2022
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Nettantra Technology, Bhubaneswar
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Jr SDE
                                </h3>
                            </div>

                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Feb 2021 - May 2021
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Lit, Bhubaneswar
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Django Intern
                                </h3>
                            </div>
                        </div>
                    </div>
                );
            case 'Skills':
                return (
                    <div>
                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-4xl font-bold mb-4 text-[#151413]">
                            Skills
                        </h2>
                        <p className="text-[#151413] text-lg tracking-wide font-semibold mb-6">
                            Highlight key skills here. Whether it's programming, management, or design, list them for a quick overview.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* React Js */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#61dafb] text-4xl mr-4">
                                    <FaReact />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        React Js
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 90%</p>
                                </div>
                            </div>

                            {/* Express Js */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#68a063] text-4xl mr-4">
                                    <SiExpress />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        Express Js
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 85%</p>
                                </div>
                            </div>

                            {/* Node Js */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#68a063] text-4xl mr-4">
                                    <FaNodeJs />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        Node Js
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 80%</p>
                                </div>
                            </div>

                            {/* MongoDB */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#4db33d] text-4xl mr-4">
                                    <SiMongodb />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        MongoDB
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 75%</p>
                                </div>
                            </div>

                            {/* Next Js */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#000000] text-4xl mr-4">
                                    <SiNextdotjs />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        Next Js
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 75%</p>
                                </div>
                            </div>

                            {/* JavaScript */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 flex transition-transform transform hover:scale-105">
                                <div className="text-[#f0db4f] text-4xl mr-4">
                                    <FaJsSquare />
                                </div>
                                <div className="flex-1">
                                    <h3 style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-bold text-[#151413] mb-1">
                                        JavaScript
                                    </h3>
                                    <p className="text-gray-600 tracking-wide">Proficiency: 75%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Awards':
                return (
                    <div>
                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-4xl font-bold mb-4 text-[#151413]">
                            Awards
                        </h2>
                        <p className="text-[#151413] text-lg tracking-wide font-semibold mb-6">
                            Recognitions and achievements for outstanding work in various professional roles.
                        </p>

                        {/* Awards Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Row 1 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    May 2022
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Web_Bocket Software Pvt. Ltd.
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Best Software Developer Award
                                </h3>
                                <p className="text-gray-600 tracking-wide">
                                    Recognized for exceptional development work and leadership on a large-scale MERN stack project.
                                </p>
                            </div>

                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Nov 2021
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Zotto Pvt. Ltd. (Remote)
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Employee of the Month
                                </h3>
                                <p className="text-gray-600 tracking-wide">
                                    Awarded for achieving exceptional performance and contributing to the success of remote projects.
                                </p>
                            </div>

                            {/* Row 2 */}
                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Aug 2021
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Nettantra Technology
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Rising Star Award
                                </h3>
                                <p className="text-gray-600 tracking-wide">
                                    Recognized as a rising star for significant contributions as a Junior Developer.
                                </p>
                            </div>

                            <div className="bg-[#ebebeb] hover:bg-white hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                                <div className="text-md text-gray-600 mb-4 tracking-wide">
                                    Feb 2021
                                </div>

                                <div className='flex items-center mb-2 gap-2'>
                                    <div>
                                        <GoDotFill size={18} color='#ffb646' />
                                    </div>
                                    <p className="text-[#151413] tracking-wide text-lg">
                                        Lit, Bhubaneswar
                                    </p>
                                </div>

                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-2xl font-bold text-[#151413] mb-2">
                                    Outstanding Intern Award
                                </h3>
                                <p className="text-gray-600 tracking-wide">
                                    Awarded for exceptional performance and dedication during the Django internship.
                                </p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#f5f5f5] relative min-h-screen">
            <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12 w-full flex flex-col md:flex-row justify-between h-auto min-h-screen gap-6">
                {/* 1st Section: Tabs (35% Width on large screens) */}
                <div style={{ fontFamily: 'Syne, sans-serif' }} className="w-full md:w-[35%] bg-transparent">
                    <div className="flex flex-col justify-center mb-8">
                        <div className="text-lg text-start tracking-wide font-semibold text-[#ffb646] mb-2">
                            Resume
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                            <span className="relative z-10">All&nbsp;</span>
                            <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                                <span className="text-white font-bold text-lg">&nbsp;</span>
                            </span>
                            over my details find here...
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Tab Buttons */}
                        {resumeTabs.map(tab => (
                            <div
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex justify-between items-center px-4 py-4 cursor-pointer shadow-md rounded-lg transition-colors duration-200 ${activeTab === tab ? 'bg-[#151413] text-white' : 'bg-white hover:bg-[#ffb646]'
                                    }`}
                            >
                                <span className="text-md tracking-wider font-semibold">{tab}</span>
                                <span className="text-xl tracking-wider font-extrabold">🡥</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2nd Section: Dynamic Content */}
                <div className="w-full md:w-[60%]">
                    {renderContent()}
                    <div className="w-full flex justify-end items-center mt-10">
                        <BsStars size={60} color='#ffb646' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;