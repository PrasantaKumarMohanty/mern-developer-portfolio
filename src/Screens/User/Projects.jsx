import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import project1 from '../../Assets/Projects/project1.png';
import project2 from '../../Assets/Projects/project2.png';
import { MdArrowOutward } from 'react-icons/md';

const Projects = () => {
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
            <div className='w-full md:w-[40%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>

            <div className='w-full md:w-[60%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project2}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 2
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 2
              </h3>
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
            <div className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>

            <div className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>

            <div className='w-full md:w-[33%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
            <div className='w-full md:w-[60%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>

            <div className='w-full md:w-[40%] cursor-pointer'>
              <div
                className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
                <img
                  src={project1}
                  alt='gallery-pic'
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="tracking-wide">
                    <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
                      Projects 1
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 text-white">
                    <MdArrowOutward size={36} />
                  </div>
                </div>
              </div>
              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
                Project Name 1
              </h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;















// import React from 'react';
// import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
// import project1 from '../../Assets/Projects/project1.png';
// import project2 from '../../Assets/Projects/project2.png';
// import { MdArrowOutward } from 'react-icons/md';

// const Projects = () => {
//   return (
//     <React.Fragment>
//       <SecondaryNavbar />

//       <div className="min-h-screen">
//         <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12 w-full">
//           <div className="flex flex-col justify-center items-center text-center mb-10">
//             <div
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
//               Projects
//             </div>

//             <h2
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
//               <span className="relative z-10">My&nbsp;</span>
//               <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
//                 <span className="text-white font-bold text-lg">&nbsp;</span>
//               </span>
//               Recent Works
//             </h2>
//           </div>

//           {/* 1st row */}
//           <div className="flex w-full justify-center items-center gap-8">
//             <div className='w-[40%] cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project1}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 1
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 1
//               </h3>
//             </div>

//             <div className='w-[60%] cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project2}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 2
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 2
//               </h3>
//             </div>
//           </div>

//           {/* 2nd row */}
//           <div className="flex w-full justify-center items-center gap-8 mt-8">
//             <div className='w-full cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project1}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 1
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 1
//               </h3>
//             </div>

//             <div className='w-full cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project1}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 1
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 1
//               </h3>
//             </div>

//             <div className='w-full cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project1}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 1
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 1
//               </h3>
//             </div>
//           </div>

//           {/* 3rd row */}
//           <div className="flex w-full justify-center items-center gap-8 mt-8">
//             <div className='w-[60%] cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project1}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 1
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 1
//               </h3>
//             </div>

//             <div className='w-[40%] cursor-pointer'>
//               <div
//                 className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//                 <img
//                   src={project2}
//                   alt='gallery-pic'
//                   className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="tracking-wide">
//                     <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                       Projects 2
//                     </p>
//                   </div>
//                   <div className="absolute top-5 right-5 text-white">
//                     <MdArrowOutward size={36} />
//                   </div>
//                 </div>
//               </div>
//               <h3
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//                 Project Name 2
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Projects
