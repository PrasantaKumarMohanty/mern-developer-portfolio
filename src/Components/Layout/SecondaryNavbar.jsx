import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../../Assets/Logos/mern-logo.png';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../Common/ContactModal';
import FloatingButton from '../Common/FloatingButton';

const SecondaryNavbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  return (
    <React.Fragment>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <ContactModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />

      <FloatingButton
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <nav className="px-10 py-4 border-b border-[#151413] top-0 left-0 w-full flex justify-between items-center bg-gradient-to-l from-[#ffb646] to-[#ffffff] z-[100]">
        <div
          onClick={() => handleNavigation('/')}
          className="text-[#151413] text-2xl font-extrabold flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            className="w-auto h-12 object-contain"
            alt="logo"
          />

          <span
            className="hidden md:block"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            MERN Stack Developer
          </span>
          <span
            className="md:hidden block"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            MERN
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handleOpenModal}
            className="relative hidden md:flex items-center gap-2 font-semibold text-xl cursor-pointer group">
            <p className="relative text-gray-900 group-hover:text-red-500 transition duration-300">
              Let's Connect
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900 group-hover:text-red-500 transition duration-200 transform -rotate-45 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>

            <span
              className="absolute bottom-[-7px] left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"
            ></span>
          </button>

          <div
            onClick={() => setSidebarOpen(true)}
            tabIndex="0"
            className="cursor-pointer relative flex justify-center items-center w-14 h-14 rounded bg-[#151413] overflow-hidden group"
          >
            <BiMenuAltRight
              size={32}
              className="z-10 transition-transform duration-200 ease-in-out group-hover:text-[#151413] group-hover:rotate-180 group-focus:text-[#151413] group-focus:rotate-180 text-white"
            />
            <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[0.9rem] border-b-[0.9rem] border-l-0 border-solid border-transparent border-r-white transition-all duration-200 ease-in-out group-hover:border-r-[5rem] group-hover:border-b-[5rem] group-focus:border-r-[5rem] group-focus:border-b-[5rem]"></div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default SecondaryNavbar
