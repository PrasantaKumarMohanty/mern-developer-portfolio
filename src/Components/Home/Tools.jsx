import React, { useState, useEffect } from 'react';
import './Tools.css';
import img1 from '../../Assets/Tools/vscode.png';
import img2 from '../../Assets/Tools/ChatGPT.png';
import img3 from '../../Assets/Tools/chrome.png';
import img4 from '../../Assets/Tools/mongodbCompass.png';
import img5 from '../../Assets/Tools/postman.png';
import img6 from '../../Assets/Tools/ubuntu.png';

const tools = [
    { id: 1, img: img1, name: 'VS Code' },
    { id: 2, img: img2, name: 'ChatGPT' },
    { id: 3, img: img3, name: 'Chrome' },
    { id: 4, img: img4, name: 'MongoDB Compass' },
    { id: 5, img: img5, name: 'Postman' },
    { id: 6, img: img6, name: 'Ubuntu' },

    { id: 7, img: img1, name: 'VS Code' },
    { id: 8, img: img2, name: 'ChatGPT' },
];

const Tools = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleTools = () => {
        return tools.slice(currentIndex, currentIndex + 4);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 4 >= tools.length ? 0 : prevIndex + 4
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-4 relative px-6 md:px-8 lg:px-12">
            <div className="border-t flex flex-col justify-center items-center text-center pt-8 mb-6">
                <h2
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-2xl md:text-4xl font-extrabold text-[#151413] relative">
                    Tools & Software
                </h2>
            </div>

            {/* Scrolling Offers Section */}
            <div className="offers-wrapper border-b pb-8">
                {getVisibleTools().map((tool) => (
                    <div key={tool.id} className="offer-item flex justify-center items-center gap-4">
                        <div>
                            <img
                                src={tool.img}
                                className='h-16 w-auto object-contain'
                                alt="tools-img" />
                        </div>
                        <div
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className='text-lg tracking-wider font-semibold text-[#151413]'>
                            {tool.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;


















// import React from 'react';
// import img1 from '../../Assets/Tools/vscode.png';
// import img2 from '../../Assets/Tools/ChatGPT.png';
// import img3 from '../../Assets/Tools/chrome.png';
// import img4 from '../../Assets/Tools/mongodbCompass.png';
// import img5 from '../../Assets/Tools/postman.png';
// import img6 from '../../Assets/Tools/ubuntu.png';

// const images = [
//     { src: img1, name: 'VS Code' },
//     { src: img2, name: 'ChatGPT' },
//     { src: img3, name: 'Chrome' },
//     { src: img4, name: 'MongoDB Compass' },
//     { src: img5, name: 'Postman' },
//     { src: img6, name: 'Ubuntu' },
// ];

// const Tools = () => {
//     return (
//         <React.Fragment>
//             <div className="container mx-auto mt-5 px-6 md:px-8 lg:px-12">
//                 {/* Center content horizontally and vertically */}
//                 <div className="flex flex-col justify-center items-center text-center mb-6">
//                     {/* Overview Text */}
//                     <div
//                         style={{ fontFamily: 'Syne, sans-serif' }}
//                         className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
//                         Overview
//                     </div>

//                     {/* Heading */}
//                     <h2
//                         style={{ fontFamily: 'Syne, sans-serif' }}
//                         className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
//                         <span className="relative z-10">Tools&nbsp;</span>
//                         <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
//                             <span className="text-white font-bold text-lg">&nbsp;</span>
//                         </span>
//                         & Software
//                     </h2>
//                 </div>

//                 {/* Image grid with centered content */}
//                 <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
//                     {images.map((image, index) => (
//                         <div key={index} className="flex flex-col justify-center items-center">
//                             <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20">
//                                 <img
//                                     src={image.src}
//                                     alt={image.name}
//                                     className="object-contain"
//                                 />
//                             </div>
//                             <p className="text-sm md:text-base font-semibold text-[#151413] tracking-wide mt-2 text-center">
//                                 {image.name}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Tools;
