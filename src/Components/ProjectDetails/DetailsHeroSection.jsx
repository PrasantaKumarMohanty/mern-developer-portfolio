import React from 'react';
import mainImg from '../../Assets/Projects/projectBanner.png';
import { GoDotFill } from 'react-icons/go';

const DetailsHeroSection = () => {
  return (
    <React.Fragment>
      <div className="bg-[#ffe9d9]">
        <div className="container mx-auto py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex justify-start items-center gap-5 mb-2">
                <div className="flex items-center">
                  <GoDotFill size={20} className="text-[#ffb646]" />
                  <span>UI Design</span>
                </div>
                <div className="flex items-center">
                  <GoDotFill size={20} className="text-[#ffb646]" />
                  <span>23 Oct 2023</span>
                </div>
              </div>

              <h2
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413]">
                Mendero Fintech Dashboard Design
              </h2>
            </div>

            {/* Project Details */}
            <div className="flex justify-start gap-8 md:gap-12 flex-wrap text-center md:text-left">
              <div>
                <div className="text-gray-600">Start Date</div>
                <div className="text-[#151413] font-semibold">20 Oct 2023</div>
              </div>
              <div>
                <div className="text-gray-600">End Date</div>
                <div className="text-[#151413] font-semibold">20 Nov 2023</div>
              </div>
              <div>
                <div className="text-gray-600">Tech - Tools</div>
                <div className="text-[#151413] font-semibold">MERN Stack</div>
              </div>
              <div>
                <div className="text-gray-600">Category</div>
                <div className="text-[#151413] font-semibold">Health Care</div>
              </div>
              <div>
                <div className="text-gray-600">Client</div>
                <div className="text-[#151413] font-semibold">Shane Willems</div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full flex justify-center items-center mt-8 md:mt-12">
            <img src={mainImg} className="w-full object-cover rounded-md" alt="project-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DetailsHeroSection