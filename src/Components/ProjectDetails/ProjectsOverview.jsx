import React from 'react';
import { GoSquareFill } from 'react-icons/go';
import project1 from '../../Assets/Projects/project1.png';

const ProjectsOverview = () => {
  return (
    <React.Fragment>
        <div className="container mx-auto py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413]">Overview</h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution.
          <br /><br />
          That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
        </p>

        {/* Highlights */}
        <div className="mt-8">
          {['Advantage', 'Accomplished', 'Marketplace startups', 'SaaS startups'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mt-4">
              <GoSquareFill color='#151413' size={16} />
              <span className="text-lg tracking-wide font-extrabold text-[#151413]">{item}</span>
            </div>
          ))}
        </div>

        {/* Typography Section */}
        <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413] mt-8">Typography</h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish.
        </p>

        {/* Gallery Section */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 mt-8">
          {[project1, project1, project1].map((img, idx) => (
            <div key={idx} className="w-full md:w-[30%] cursor-pointer">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <img src={img} alt={`project-${idx}`} className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-center">Project Name {idx + 1}</h3>
            </div>
          ))}
        </div>

        {/* Conclusion Section */}
        <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#151413] mt-8">Conclusion</h2>
        <p className="text-gray-600 text-base sm:text-lg tracking-wide text-justify mt-4">
          Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client.
        </p>
        
      </div>
    </React.Fragment>
  )
}

export default ProjectsOverview