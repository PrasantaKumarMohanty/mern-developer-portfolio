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
    const [toolsPerView, setToolsPerView] = useState(4);

    const updateToolsPerView = () => {
        if (window.innerWidth < 640) {
            setToolsPerView(1); // 1 item per view on small screens
        } else if (window.innerWidth < 1024) {
            setToolsPerView(2); // 2 items per view on medium screens
        } else {
            setToolsPerView(4); // 4 items per view on large screens
        }
    };

    const getVisibleTools = () => {
        return tools.slice(currentIndex, currentIndex + toolsPerView);
    };

    useEffect(() => {
        updateToolsPerView(); // Set initial value
        window.addEventListener('resize', updateToolsPerView); // Update on resize

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + toolsPerView >= tools.length ? 0 : prevIndex + toolsPerView
            );
        }, 3000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateToolsPerView);
        };
    }, [toolsPerView]);

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
            <div className="offers-wrapper border-b pb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {getVisibleTools().map((tool) => (
                    <div key={tool.id} className="offer-item flex justify-center items-center gap-4">
                        <div>
                            <img
                                src={tool.img}
                                className='h-16 w-auto object-contain'
                                alt={tool.name} />
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















// import React, { useState, useEffect } from 'react';
// import './Tools.css';
// import img1 from '../../Assets/Tools/vscode.png';
// import img2 from '../../Assets/Tools/ChatGPT.png';
// import img3 from '../../Assets/Tools/chrome.png';
// import img4 from '../../Assets/Tools/mongodbCompass.png';
// import img5 from '../../Assets/Tools/postman.png';
// import img6 from '../../Assets/Tools/ubuntu.png';

// const tools = [
//     { id: 1, img: img1, name: 'VS Code' },
//     { id: 2, img: img2, name: 'ChatGPT' },
//     { id: 3, img: img3, name: 'Chrome' },
//     { id: 4, img: img4, name: 'MongoDB Compass' },
//     { id: 5, img: img5, name: 'Postman' },
//     { id: 6, img: img6, name: 'Ubuntu' },

//     { id: 7, img: img1, name: 'VS Code' },
//     { id: 8, img: img2, name: 'ChatGPT' },
// ];

// const Tools = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const getVisibleTools = () => {
//         return tools.slice(currentIndex, currentIndex + 4);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex + 4 >= tools.length ? 0 : prevIndex + 4
//             );
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="py-4 relative px-6 md:px-8 lg:px-12">
//             <div className="border-t flex flex-col justify-center items-center text-center pt-8 mb-6">
//                 <h2
//                     style={{ fontFamily: 'Syne, sans-serif' }}
//                     className="text-2xl md:text-4xl font-extrabold text-[#151413] relative">
//                     Tools & Software
//                 </h2>
//             </div>

//             {/* Scrolling Offers Section */}
//             <div className="offers-wrapper border-b pb-8">
//                 {getVisibleTools().map((tool) => (
//                     <div key={tool.id} className="offer-item flex justify-center items-center gap-4">
//                         <div>
//                             <img
//                                 src={tool.img}
//                                 className='h-16 w-auto object-contain'
//                                 alt="tools-img" />
//                         </div>
//                         <div
//                             style={{ fontFamily: 'Syne, sans-serif' }}
//                             className='text-lg tracking-wider font-semibold text-[#151413]'>
//                             {tool.name}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Tools;