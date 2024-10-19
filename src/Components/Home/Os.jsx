import React from 'react';
import windows from '../../Assets/Tools/windows10Logo.png';
import mac from '../../Assets/Tools/macLogo.png';
import linux from '../../Assets/Tools/linuxLogo.png';
import ubuntu from '../../Assets/Tools/ubuntu.png';

const images = [
    { src: mac, name: 'Mac OS' },
    { src: linux, name: 'Linux OS' },
    { src: windows, name: 'Windows OS' },
    { src: ubuntu, name: 'Ubuntu OS' },
];

const Os = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto mt-10 px-6 md:px-8 lg:px-12 mb-10">
                <div className="flex flex-col justify-center items-center text-center mb-10">
                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
                        Overview
                    </div>

                    <h2
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                        <span className="relative z-10">Operating&nbsp;</span>
                        <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                            <span className="text-white font-bold text-lg">&nbsp;</span>
                        </span>
                        & Systems
                    </h2>
                </div>

                <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20">
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-[#151413] tracking-wide mt-2 text-center">
                                {image.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Os;
