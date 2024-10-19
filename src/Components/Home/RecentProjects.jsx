import React from 'react';
import project1 from '../../Assets/Projects/project1.png';
import project2 from '../../Assets/Projects/project2.png';
import { useNavigate } from 'react-router-dom';

const RecentProjects = () => {
    const navigate = useNavigate();

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
                    <div className="relative">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />

                        <div className="flex justify-start gap-4 mt-4">
                            <button
                                onClick={() => navigate('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#151413] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                App
                            </button>
                            <button
                                onClick={() => navigate('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#ffb646] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                Web
                            </button>
                        </div>

                        <h3
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                            Project Name 1
                        </h3>
                    </div>

                    {/* Project 2 */}
                    <div className="relative">
                        <img
                            src={project2}
                            alt="Project 2"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />

                        <div className="flex justify-start gap-4 mt-4">
                            <button
                                onClick={() => navigate('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#151413] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                App
                            </button>
                            <button
                                onClick={() => navigate('/projects')}
                                className="border border-gray-600 px-4 py-1 bg-transparent hover:bg-[#ffb646] text-gray-600 hover:text-white text-sm rounded-lg transition-transform transform hover:scale-105">
                                Web
                            </button>
                        </div>

                        <h3
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                            Project Name 2
                        </h3>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-[#151413] hover:bg-[#ffb646] text-white text-lg font-semibold rounded-md shadow-lg transition-transform transform hover:scale-105"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        View All Projects 🡥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
