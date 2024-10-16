import React from 'react';
import img1 from '../../Assets/About/about2.png';

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
                            A Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge.
                        </div>

                        <p className="text-lg md:text-xl mb-6 text-gray-600 text-justify">
                            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .
                        </p>

                        <div className="mt-4">
                            <p
                                style={{ fontFamily: 'cursive' }}
                                className="text-[#151413] tracking-wide text-3xl">
                                𝒫𝓇𝒶𝓈𝒶𝓃𝓉𝒶 𝒦𝓊𝓂𝒶𝓇 𝑀𝑜𝒽𝒶𝓃𝓉𝓎
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutMe;
