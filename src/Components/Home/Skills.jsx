import React from 'react';
import img1 from '../../Assets/Skills/reactjs.png';
import img2 from '../../Assets/Skills/expressjs.png';
import img3 from '../../Assets/Skills/nodejs.png';
import img4 from '../../Assets/Skills/mongodb.png';
import img5 from '../../Assets/Skills/mongoose.png';
import img6 from '../../Assets/Skills/redux.png';
import img7 from '../../Assets/Skills/html.png';
import img8 from '../../Assets/Skills/css.png';
import img9 from '../../Assets/Skills/scss.png';
import img10 from '../../Assets/Skills/tailwind.png';
import img11 from '../../Assets/Skills/javascript.png';
import img12 from '../../Assets/Skills/material-ui.png';
import img13 from '../../Assets/Skills/formik-icon.png';
import img14 from '../../Assets/Skills/git.png';
import img15 from '../../Assets/Skills/github.png';
import img16 from '../../Assets/Skills/Amazon-S3.png';
import img17 from '../../Assets/Skills/ec2.png';

const images = [
    { src: img1, name: 'ReactJS' },
    { src: img2, name: 'ExpressJS' },
    { src: img3, name: 'NodeJS' },
    { src: img4, name: 'MongoDB' },
    { src: img5, name: 'Mongoose' },
    { src: img6, name: 'Redux' },
    { src: img7, name: 'HTML' },
    { src: img8, name: 'CSS' },
    { src: img9, name: 'SCSS' },
    { src: img10, name: 'Tailwind CSS' },
    { src: img11, name: 'JavaScript' },
    { src: img12, name: 'Material UI' },
    { src: img13, name: 'Formik' },
    { src: img14, name: 'Git' },
    { src: img15, name: 'GitHub' },
    { src: img16, name: 'Amazon S3' },
    { src: img17, name: 'EC2' }
];

const Skills = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto py-5 px-6 md:px-8 lg:px-12">
                {/* Center content horizontally and vertically */}
                <div className="flex flex-col justify-center items-center text-center mb-10">
                    {/* Overview Text */}
                    <div
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-lg tracking-wide font-semibold text-[#ffb646] mb-2">
                        Overview
                    </div>

                    {/* Heading */}
                    <h2
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                        <span className="relative z-10">My&nbsp;</span>
                        <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                            <span className="text-white font-bold text-lg">&nbsp;</span>
                        </span>
                        Skills
                    </h2>
                </div>

                {/* Image grid with centered content */}
                <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20">
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-[#151413] tracking-wide mt-2 text-center">
                                {image.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Skills;
