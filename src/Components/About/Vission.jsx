import React from 'react';
import './Vission.css';
import { MdArrowOutward } from 'react-icons/md';

const Vission = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto py-10 md:py-16 px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="flex flex-col justify-center">
                        {/* Header */}
                        <div className="flex flex-col justify-center">

                            <h2
                                style={{ fontFamily: 'Syne, sans-serif' }}
                                className="text-3xl md:text-5xl font-extrabold text-[#151413]">
                                My vision is to create happy my clients
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 my-4 text-justify">
                            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
                        </p>

                        {/* Counters */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
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
                                    25+
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                                    Total Projects
                                </p>
                            </div>

                            {/* Total Clients */}
                            <div className="flex flex-col items-center sm:items-start">
                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="mb-2 text-3xl md:text-4xl font-extrabold text-[#151413]">
                                    30+
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                                    Total Clients
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            <div className="relative bg-[#ffb646] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                                <span className="font-extrabold text-3xl md:text-6xl text-[#151413] mb-4">
                                    3+
                                </span>
                            </div>

                            <div className="font-semibold text-3xl md:text-6xl stroke-text text-transparent">
                                years of<br /> Experience
                            </div>
                        </div>

                        <div className="bg-[#151413] mt-8 flex justify-between flex-wrap items-center p-8 rounded-lg shadow-md h-auto transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                            <div className="">
                                <p
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-md sm:text-lg md:text-xl text-start tracking-wide font-semibold text-[#ffb646]">
                                    Say Hello ..!,
                                </p>
                                <p
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-md md:text-lg text-start tracking-wide md:font-semibold font-medium text-[#ffffff]">
                                    mprasantaKumar72@gmail.com
                                </p>
                            </div>

                            <div className="">
                                <MdArrowOutward
                                    color="#ffb646"
                                    size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Vission;