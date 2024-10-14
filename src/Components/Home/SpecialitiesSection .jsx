import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCogs } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const SpecialitiesSection = () => {
    return (
        <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12">
            {/* Heading and Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Left: Heading */}
                <div className="flex flex-col justify-center">
                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-lg text-start tracking-wide font-semibold text-[#ffb646] mb-2">
                        Overview
                    </div>

                    <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                        <span className="relative z-10">My&nbsp;</span>
                        <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                            <span className="text-white font-bold text-lg">&nbsp;</span>
                        </span>
                        Specialities
                    </h2>
                </div>

                {/* Right: Description */}
                <div className="flex flex-col justify-center">
                    <p className="text-lg md:text-xl text-gray-600 text-justify">
                        I specialize in full-stack development, focusing on MERN (MongoDB, Express.js, React.js, and Node.js) technologies. Below are some of the core areas of my expertise.
                    </p>
                </div>
            </div>

            {/* Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Small Cards */}
                    {[ 
                        { title: "Mongo DB", icon: <FaDatabase /> },
                        { title: "Express Js", icon: <FaServer /> },
                        { title: "React Js", icon: <FaReact /> },
                        { title: "Node Js", icon: <FaNodeJs /> },
                        { title: "Rest API's", icon: <FaCogs /> },
                        { title: "Full-Stack Development", icon: <FaCogs /> }
                    ].map((speciality, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f5f5] p-6 rounded-lg shadow-md text-[#151413] transition-transform transform hover:scale-105 hover:bg-white hover:shadow-lg hover:text-[#ffb646] hover:cursor-pointer"
                        >
                            <div className="shadow-md bg-[#ffffff] rounded-full w-12 h-12 mb-4 flex items-center justify-center mr-4">
                                {speciality.icon}
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <h3
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                    className="text-lg md:text-xl font-semibold"
                                >
                                    {speciality.title}
                                </h3>
                                <div className="h-16 w-auto flex items-center">
                                    <MdArrowOutward
                                        size={28}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Contact Card */}
                <div className="relative bg-[#151413] p-8 rounded-lg shadow-md h-48 md:h-full transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    {/* Arrow in the top-right corner */}
                    <div className="absolute top-4 right-4">
                        <MdArrowOutward
                            color="#ffb646"
                            size={48} />
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute bottom-8 left-4">
                        <p
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-md sm:text-lg md:text-xl text-start tracking-wide font-semibold text-[#ffb646]">
                            Say Hello ..!,
                        </p>
                        <p
                            style={{ fontFamily: 'Syne, sans-serif' }}
                            className="text-md md:text-lg text-start tracking-wide md:font-semibold font-medium text-[#ffffff]">
                            mprasantaKumar72@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialitiesSection;
