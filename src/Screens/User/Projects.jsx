import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import iber from '../../Assets/Projects/iber.png';
import archita from '../../Assets/Projects/archita.png';
import weekend from '../../Assets/Projects/weekend.png';
import studit from '../../Assets/Projects/studit.png';
import hc from '../../Assets/Projects/hc.png';
import assavio from '../../Assets/Projects/assavio.png';
import spas from '../../Assets/Projects/spas.webp';
import snaptest from '../../Assets/Projects/snaptest.png';
import oOrdering from '../../Assets/Projects/onlineOrdering.png';
import doctegritty from '../../Assets/Projects/doctegritty.png';
import { MdArrowOutward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  return (
    <React.Fragment>
      <SecondaryNavbar />

      <div className="min-h-screen">
        <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12 w-full">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <div
              style={{ fontFamily: 'Syne, sans-serif' }}
              className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
              Projects
            </div>

            <h2
              style={{ fontFamily: 'Syne, sans-serif' }}
              className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
              <span className="relative z-10">My&nbsp;</span>
              <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                <span className="text-white font-bold text-lg">&nbsp;</span>
              </span>
              Recent Works
            </h2>
          </div>

          {/* 1st row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
            <div
              onClick={() => handleNavigation('/project-details/p1')}
              className='w-full md:w-[40%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={iber}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      IBER - POS and CRM System
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Saloon & Spa POS and CRM System
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p2')}
              className='w-full md:w-[60%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={hc}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Heart Connect - APP with WEB APP
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Dating Android App & Admin Dashboard
              </h3>
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
            <div
              onClick={() => handleNavigation('/project-details/p3')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={archita}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Archita Motors Management System
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Multi-Branch Bike Showroom System
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p4')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={weekend}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Weekend Bhraman Tour Planner
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Comprehensive Travel & Booking Platform
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p5')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={studit}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Studit - A eLearning Platform
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Online Education Platform
              </h3>
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
            <div
              onClick={() => handleNavigation('/project-details/p6')}
              className='w-full md:w-[60%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={spas}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Some Spa Booking & Admin Dashboard
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Spa Services Booking Platform & Admin Dashboard
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p7')}
              className='w-full md:w-[40%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={assavio}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Assavio - Portal with Admin Dashboard
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Real Estate Portal & Admin Dashboard
              </h3>
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
            <div
              onClick={() => handleNavigation('/project-details/p8')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={snaptest}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      SnapTest - Reliable Online Test Proctoring Service
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Covid Proctoring Web App
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p9')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={oOrdering}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Online Food Ordering Website
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                User-Centric Online Food Ordering App
              </h3>
            </div>

            <div
              onClick={() => handleNavigation('/project-details/p10')}
              className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={doctegritty}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-[#ffb646]">
                      Doctegritty
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} color='#ffb646' />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                A Health care management Mobile App and Admin Dashboard
              </h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;