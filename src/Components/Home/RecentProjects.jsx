import React from 'react';
import iber from '../../Assets/Projects/iber.png';
import hc from '../../Assets/Projects/hc.png';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

const RecentProjects = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    }

    return (
        <div className="bg-[#ffe9d9] min-h-screen">
            <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12 w-full">
                <div className="flex flex-col justify-center items-center text-center mb-10">
                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
                        Portfolio
                    </div>

                    <h2
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                        <span className="relative z-10">My&nbsp;</span>
                        <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                            <span className="text-white font-bold text-lg">&nbsp;</span>
                        </span>
                        Recent Projects
                    </h2>
                </div>

                {/* Projects Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="relative group">
                        <img
                            onClick={() => handleNavigation('/project-details/p1')}
                            src={iber}
                            alt="Project 1"
                            className="w-full cursor-pointer h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="flex justify-start gap-4 mt-4">
                            <button
                                onClick={() => handleNavigation('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#151413] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                App
                            </button>
                            <button
                                onClick={() => handleNavigation('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#ffb646] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                Web
                            </button>
                        </div>

                        <h3
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                            Saloon & Spa POS and CRM System
                        </h3>
                    </div>

                    {/* Project 2 */}
                    <div className="relative group">
                        <img
                            onClick={() => handleNavigation('/project-details/p2')}
                            src={hc}
                            alt="Project 2"
                            className="w-full cursor-pointer h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="flex justify-start gap-4 mt-4">
                            <button
                                onClick={() => handleNavigation('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#151413] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                App
                            </button>
                            <button
                                onClick={() => handleNavigation('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#ffb646] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                Web
                            </button>
                        </div>

                        <h3
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                            Dating Android App & Admin Dashboard
                        </h3>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center items-center mt-12">
                    <button
                        onClick={() => handleNavigation('/projects')}
                        className="gap-2 px-6 py-3 bg-[#151413] hover:bg-[#ffb646] text-white text-lg font-semibold rounded-md shadow-lg transition-transform transform hover:scale-105 flex items-center"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        <span>
                            View All Projects
                        </span>

                        <span>
                            <MdArrowOutward size={22} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
