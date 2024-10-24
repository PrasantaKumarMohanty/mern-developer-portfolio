import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import roundText from '../../Assets/Home/demoText.png';
import './CircularButton.css';

const CircularButton = () => {
    return (
        <React.Fragment>
            <div className="relative z-10 flex justify-center w-full px-4 md:px-16">
                <div className="relative bg-[#151413] rounded-full border-2 border-[#ffb646] h-32 w-32 flex items-center justify-center">
                    <span
                        style={{ fontFamily: 'Syne, sans-serif' }}
                        className='border border-[#ffb646] p-4 rounded-full m-2 bg-[#ffb646]'>
                        <MdArrowOutward className="text-white text-3xl" />
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin-slow">
                            <img
                                src={roundText}
                                alt="Rotating"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CircularButton;