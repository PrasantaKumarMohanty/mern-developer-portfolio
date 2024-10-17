import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';

const Contact = () => {
  return (
    <React.Fragment>
      <SecondaryNavbar />

      <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          {/* First Section: Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="flex flex-col justify-center">
              <div
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="text-lg text-start tracking-wide font-semibold text-[#ffb646] mb-2">
                Contact
              </div>

              <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
                <span className="relative z-10">Let's&nbsp;</span>
                <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
                  <span className="text-white font-bold text-lg">&nbsp;</span>
                </span>
                Connect
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">
              Reach out to us for any queries or support. We're here to assist you.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <MdOutlineMailOutline size={35} />
                <div className='tracking-wide'>
                  <p className="text-lg text-gray-600">
                    Email
                  </p>

                  <p
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-lg text-[#151413] font-semibold">
                    mprasantakumar72@gmail.com
                  </p>
                </div>
              </div>
              <hr className="border-t border-gray-300" />

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FiPhone size={32} />
                <div className='tracking-wide'>
                  <p className="text-lg text-gray-600">
                    Phone
                  </p>

                  <p
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-lg text-[#151413] font-semibold">
                    +91 7008195575
                  </p>
                </div>
              </div>
              <hr className="border-t border-gray-300" />

              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <CiLinkedin size={48} />
                <div className='tracking-wide'>
                  <p className="text-lg text-gray-600">
                    LinkedIn
                  </p>

                  <p
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-lg text-[#151413] font-semibold">
                    https://www.linkedin.com/in/prasanta-kumar-mohanty-53129a1b7/
                  </p>
                </div>
              </div>
              <hr className="border-t border-gray-300" />

              {/* Address */}
              <div className="flex items-center space-x-4">
                <MdOutlineLocationOn size={48} />
                <div className='tracking-wide'>
                  <p className="text-lg text-gray-600">
                    Address
                  </p>

                  <p
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    className="text-lg text-[#151413] font-semibold">
                    At/P.O - Kuhunda, Via - Kuanpal, Dist - Cuttack, Odisha - 754204
                  </p>
                </div>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
          </div>

          {/* Second Section: Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 tracking-wide mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 tracking-wide mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 tracking-wide mb-2">
                  Phone*
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 tracking-wide mb-2">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 tracking-wide mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#151413] text-white font-semibold py-3 rounded-md hover:bg-[#ffb646] focus:outline-none focus:ring-2 focus:ring-[#e6a53f] focus:ring-opacity-50 tracking-wide">
                  Send Message 🡥
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
