import React, { useEffect } from 'react';
import logo from '../../Assets/Logos/mern-logo.png';
import { MdOutlineArrowBack, MdOutlineArrowOutward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarOpen && !event.target.closest('#sidebar')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen, setSidebarOpen]);

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    }

    return (
        <React.Fragment>
            {/* Backdrop overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-[#151413] bg-opacity-50 z-[200]"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                id="sidebar"
                className={`fixed top-0 right-0 h-full w-72 bg-[#151413] text-white transition-transform duration-300 ease-in-out z-[300] ${sidebarOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-600">
                    <img
                        onClick={() => handleNavigation('/')}
                        src={logo}
                        className="w-auto h-12 object-contain cursor-pointer"
                        alt="logo"
                    />

                    <div
                        onClick={() => setSidebarOpen(false)}
                        tabIndex="0"
                        className="cursor-pointer relative flex justify-center items-center w-14 h-14 rounded bg-white overflow-hidden group"
                    >
                        <MdOutlineArrowBack
                            size={32}
                            className="z-10 transition-transform duration-200 ease-in-out group-hover:text-white group-hover:rotate-180 group-focus:text-white group-focus:rotate-180 text-[#151413]"
                        />
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[0.9rem] border-b-[0.9rem] border-l-0 border-solid border-transparent border-r-[#ffb646] transition-all duration-200 ease-in-out group-hover:border-r-[5rem] group-hover:border-b-[5rem] group-focus:border-r-[5rem] group-focus:border-b-[5rem]"></div>
                    </div>
                </div>

                {/* Sidebar options */}
                <div
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="p-6 tracking-wide">
                    <ul className="space-y-4">
                        <li
                            onClick={() => handleNavigation('/')}
                            className="py-1 cursor-pointer flex justify-between items-center hover:text-[#ffb646] transition-colors duration-200">
                            Home
                            <MdOutlineArrowOutward size={24} />
                        </li>
                        <hr className="border-gray-600" />

                        <li
                            onClick={() => handleNavigation('/about')}
                            className="py-1 cursor-pointer flex justify-between items-center hover:text-[#ffb646] transition-colors duration-200">
                            About
                            <MdOutlineArrowOutward size={24} />
                        </li>
                        <hr className="border-gray-600" />

                        <li
                            onClick={() => handleNavigation('/projects')}
                            className="py-1 cursor-pointer flex justify-between items-center hover:text-[#ffb646] transition-colors duration-200">
                            My Projects
                            <MdOutlineArrowOutward size={24} />
                        </li>
                        <hr className="border-gray-600" />

                        <li
                            onClick={() => handleNavigation('/contact')}
                            className="py-1 cursor-pointer flex justify-between items-center hover:text-[#ffb646] transition-colors duration-200">
                            Contact
                            <MdOutlineArrowOutward size={24} />
                        </li>
                        <hr className="border-gray-600" />
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
