import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const RelatedProjects = ({ relatedProjectIds }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col justify-center items-center text-center mb-10">
          <div
            style={{ fontFamily: 'Syne, sans-serif' }}
            className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
            Projects
          </div>

          <h2
            style={{ fontFamily: 'Syne, sans-serif' }}
            className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
            <span className="relative z-10">Related&nbsp;</span>
            <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
              <span className="text-white font-bold text-lg">&nbsp;</span>
            </span>
            Works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 mt-8">
          {relatedProjectIds?.map((project, idx) => (
            <div key={idx} className="w-full md:w-[30%] cursor-pointer relative group">
              <div className="relative w-full h-72 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={project.urls}
                  alt={`related-project-${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-[#151413] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg md:text-2xl font-bold text-white">{project.pName}</p>
                </div>
                <div className="absolute top-4 right-4 text-white">
                  <MdArrowOutward size={36} />
                </div>
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-center">Project {idx + 1}</h3>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelatedProjects;
