import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdMenu } from 'react-icons/md'; // Icon for button

const FloatingButton = ({ sidebarOpen, setSidebarOpen }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set visibility based on scroll position
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <div
                onClick={() => setSidebarOpen(true)}
                tabIndex="0"
                className="fixed top-4 right-4 z-50 cursor-pointer border border-[#151413] shadow-lg flex justify-center items-center w-14 h-14 rounded bg-[#151413] overflow-hidden group transition-transform duration-300 transform hover:scale-105"
            >
                <BiMenuAltRight
                    size={32}
                    className="z-10 transition-transform duration-200 ease-in-out group-hover:text-[#151413] group-hover:rotate-180 group-focus:text-[#151413] group-focus:rotate-180 text-[#ffb646]"
                />
                <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[0.9rem] border-b-[0.9rem] border-l-0 border-solid border-transparent border-r-[#ffb646] transition-all duration-200 ease-in-out group-hover:border-r-[5rem] group-hover:border-b-[5rem] group-focus:border-r-[5rem] group-focus:border-b-[5rem]"></div>
            </div>
        )
    );
};

export default FloatingButton;