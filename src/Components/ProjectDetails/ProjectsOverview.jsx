import React from 'react';
import { GoSquareFill } from 'react-icons/go';

const ProjectsOverview = ({ project }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-10 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2
          style={{ fontFamily: 'Syne, sans-serif' }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413]"
        >
          Overview
        </h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          {project.overview}
        </p>

        {/* Highlights */}
        <div className="mt-8">
          {project.detailsPoints.map((item, i) => (
            <div key={i} className="flex items-center gap-2 mt-4">
              <GoSquareFill color="#151413" size={16} />
              <span className="text-lg tracking-wide font-extrabold text-[#151413]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* gallery Section */}
        {/* <h2
          style={{ fontFamily: 'Syne, sans-serif' }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413] mt-8"
        >
          Visual Showcase
        </h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          Explore the visual elements that bring this project to life. From design concepts to finished product, these images provide an in-depth look at the key features and overall aesthetics of the project. Browse through the gallery to see how every detail contributes to the final vision and user experience.
        </p> */}

        {/* Gallery Section */}
        {/* <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 mt-8">
          {project.projectsSmallImg_urls.map((img, idx) => (
            <div key={idx} className="w-full md:w-[30%] cursor-pointer">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`project-${idx}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-center">
                {project.name} {idx + 1}
              </h3>
            </div>
          ))}
        </div> */}

        {/* Conclusion Section */}
        <h2
          style={{ fontFamily: 'Syne, sans-serif' }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413] mt-8"
        >
          Conclusion
        </h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          {project.conclusion}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ProjectsOverview;