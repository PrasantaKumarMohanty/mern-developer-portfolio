import React from 'react';
import img1 from '../../Assets/About/about2.png';
import sig_pic from '../../Assets/About/own_signature.png';

const AboutMe = () => {
    return (
        <React.Fragment>
            <div className="bg-[#ffe9d9]">
                <div className="flex flex-col md:flex-row items-stretch justify-between container mx-auto py-10 px-6 md:px-8 lg:px-12 gap-10 md:gap-20">
                    {/* First Section - Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={img1}
                            alt="own-img"
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Second Section - Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                        <div className="flex flex-col justify-center">
                            <div
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2 text-start">
                                About Me
                            </div>

                            <h2
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                                <span className="relative z-10">Prasanta&nbsp;</span>
                                <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                                    <span className="text-white font-bold text-lg">&nbsp;</span>
                                </span>
                                Kumar Mohanty
                            </h2>
                        </div>

                        <h2
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-lg md:text-xl font-extrabold text-[#151413] my-6">
                            Software Development Engineer - II (MERN Stack)
                        </h2>

                        <div
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-sm md:text-lg font-semibold text-gray-600 mb-6 text-justify">
                            With over 3 years of experience as a developer, I'm passionate about building solutions that make an impact. I bring pride and dedication to every project, always ready for the next challenge.
                        </div>

                        <p className="text-lg md:text-xl mb-6 text-gray-600 text-justify">
                            As a creative problem-solver, I focus not just on code, but on crafting an experience that resonates with users. My goal is to develop solutions that reflect your vision and values, drawing in your audience and making a lasting connection.
                        </p>

                        <div className="w-full justify-start">
                            <img
                                src={sig_pic}
                                className='w-auto h-32 object-contain'
                                alt="sig-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutMe;
