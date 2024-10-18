import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import DetailsHeroSection from '../../Components/ProjectDetails/DetailsHeroSection';
import ProjectsOverview from '../../Components/ProjectDetails/ProjectsOverview';
import RelatedProjects from '../../Components/ProjectDetails/RelatedProjects';

const ProjectDetails = () => {
  return (
    <React.Fragment>
      <SecondaryNavbar />
      <DetailsHeroSection />
      <ProjectsOverview />
      <RelatedProjects />
    </React.Fragment>
  );
}

export default ProjectDetails;




















// import React from 'react';
// import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
// import { GoDotFill } from "react-icons/go";
// import mainImg from '../../Assets/Projects/projectBanner.png';
// import { GoSquareFill } from "react-icons/go";
// import { MdArrowOutward } from 'react-icons/md';
// import project1 from '../../Assets/Projects/project1.png';

// const ProjectDetails = () => {
//   return (
//     <React.Fragment>
//       <SecondaryNavbar />

//       <div className="bg-[#ffe9d9]">
//         <div className="container mx-auto py-10 md:py-16 px-6 md:px-8 lg:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//             <div className="flex flex-col justify-center">
//               {/* Header */}
//               <div className="">
//                 <div className='flex justify-start items-center gap-5 mb-2'>
//                   <div className='flex items-center'>
//                     <GoDotFill
//                       size={20}
//                       className='text-[#ffb646]'
//                     />

//                     <span>
//                       UI Design
//                     </span>
//                   </div>

//                   <div className='flex items-center'>
//                     <GoDotFill
//                       size={20}
//                       className='text-[#ffb646]'
//                     />

//                     <span>
//                       23 Oct 2023
//                     </span>
//                   </div>
//                 </div>

//                 <h2
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className="text-3xl md:text-5xl font-extrabold text-[#151413]">
//                   Mendero fintech dashboard design
//                 </h2>
//               </div>

//             </div>

//             <div className="flex justify-start gap-12 text-center flex-wrap text-md tracking-wide">
//               <div className='text-start'>
//                 <div className='text-gray-600'>
//                   Start Date
//                 </div>

//                 <div
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className='text-[#151413] font-semibold'>
//                   20 Oct 2023
//                 </div>
//               </div>

//               <div className='text-start'>
//                 <div className='text-gray-600'>
//                   End Date
//                 </div>

//                 <div
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className='text-[#151413] font-semibold'>
//                   20 Nov 2023
//                 </div>
//               </div>

//               <div className='text-start'>
//                 <div className='text-gray-600'>
//                   Tech - Tools
//                 </div>

//                 <div
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className='text-[#151413] font-semibold'>
//                   MERN Stack
//                 </div>
//               </div>

//               <div className='text-start'>
//                 <div className='text-gray-600'>
//                   Category
//                 </div>

//                 <div
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className='text-[#151413] font-semibold'>
//                   Health Care
//                 </div>
//               </div>

//               <div className='text-start'>
//                 <div className='text-gray-600'>
//                   Client
//                 </div>

//                 <div
//                   style={{ fontFamily: 'Syne, sans-serif' }}
//                   className='text-[#151413] font-semibold'>
//                   Shane Willems
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='w-full flex justify-center items-center md:mt-12 mt-8'>
//             <img
//               src={mainImg}
//               className='w-full object-contain'
//               alt="project-img"
//             />
//           </div>
//         </div>
//       </div>

//       <div className='container mx-auto py-10 md:py-16 px-6 md:px-8 lg:px-12'>
//         <h2
//           style={{ fontFamily: 'Syne, sans-serif' }}
//           className="text-3xl text-start md:text-5xl font-extrabold text-[#151413]">
//           Overview
//         </h2>

//         <div className='text-gray-600 text-lg tracking-wide text-justify mt-4'>
//           Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
//           <br /><br />
//           That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
//         </div>

//         <div className='mt-8'>
//           {['Advantage', 'Accomplished', 'Marketplace startups', 'SaaS startups'].map((item, i) => {
//             return (
//               <div
//                 key={i}
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className='flex justify-start items-center mt-4 gap-2'>
//                 <span>
//                   <GoSquareFill
//                     color='#151413'
//                     size={16} />
//                 </span>

//                 <span className='text-lg tracking-wide font-extrabold text-[#151413]'>
//                   {item}
//                 </span>
//               </div>
//             )
//           })}
//         </div>

//         <h2
//           style={{ fontFamily: 'Syne, sans-serif' }}
//           className="text-3xl text-start md:text-5xl font-extrabold text-[#151413] mt-8">
//           Typography
//         </h2>

//         <div className='text-gray-600 text-lg tracking-wide text-justify mt-4'>
//           Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
//         </div>

//         <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
//           <div
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="w-full h-80 rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413] text-center">
//               Project Name 1
//             </h3>
//           </div>

//           <div
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="w-full h-80 rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413] text-center">
//               Project Name 1
//             </h3>
//           </div>

//           <div
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="w-full h-80 rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413] text-center">
//               Project Name 1
//             </h3>
//           </div>
//         </div>

//         <h2
//           style={{ fontFamily: 'Syne, sans-serif' }}
//           className="text-3xl text-start md:text-5xl font-extrabold text-[#151413] mt-8">
//           Conclusion
//         </h2>

//         <div className='text-gray-600 text-lg tracking-wide text-justify mt-4'>
//           Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
//         </div>

//         <div className="flex flex-col justify-center items-center text-center my-8">
//           {/* Overview Text */}
//           <div
//             style={{ fontFamily: 'Syne, sans-serif' }}
//             className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
//             Projects
//           </div>

//           {/* Heading */}
//           <h2
//             style={{ fontFamily: 'Syne, sans-serif' }}
//             className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
//             <span className="relative z-10">Related&nbsp;</span>
//             <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
//               <span className="text-white font-bold text-lg">&nbsp;</span>
//             </span>
//             Works
//           </h2>
//         </div>

//         <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8">
//           <div
//             // onClick={() => navigate('/project-details')}
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//               <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="tracking-wide">
//                   <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                     Projects 1
//                   </p>
//                 </div>
//                 <div className="absolute top-5 right-5 text-white">
//                   <MdArrowOutward size={36} />
//                 </div>
//               </div>
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//               Project Name 1
//             </h3>
//           </div>

//           <div
//             // onClick={() => navigate('/project-details')}
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//               <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="tracking-wide">
//                   <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                     Projects 1
//                   </p>
//                 </div>
//                 <div className="absolute top-5 right-5 text-white">
//                   <MdArrowOutward size={36} />
//                 </div>
//               </div>
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//               Project Name 1
//             </h3>
//           </div>

//           <div
//             // onClick={() => navigate('/project-details')}
//             className='w-full md:w-[33%] cursor-pointer'>
//             <div
//               className="relative group w-full h-80 bg-gray-200 overflow-hidden rounded-lg">
//               <img
//                 src={project1}
//                 alt='gallery-pic'
//                 className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-110"
//               />
//               <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-primaryTextColor via-transparent to-[#c0b3b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="tracking-wide">
//                   <p className="text-lg md:text-2xl font-bold text-white hover:text-[#ffb646]">
//                     Projects 1
//                   </p>
//                 </div>
//                 <div className="absolute top-5 right-5 text-white">
//                   <MdArrowOutward size={36} />
//                 </div>
//               </div>
//             </div>
//             <h3
//               style={{ fontFamily: 'Syne, sans-serif' }}
//               className="mt-4 text-lg md:text-xl font-semibold text-[#151413]">
//               Project Name 1
//             </h3>
//           </div>
//         </div>
//       </div>

//     </React.Fragment>
//   )
// }

// export default ProjectDetails
