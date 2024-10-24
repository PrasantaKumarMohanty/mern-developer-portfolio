import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Components/Common/Loader';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const service_key = process.env.REACT_APP_SERVICE_KEY
  const template_key = process.env.REACT_APP_TEMPLATE_KEY
  const public_key = process.env.REACT_APP_PUBLIC_KEY

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);

      emailjs
        .send(service_key, template_key, {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }, public_key).then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text);
            setIsLoading(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: ''
            });
            setSubmitted(true);
            setTimeout(() => {
              setSubmitted(false);
            }, 3000);
            toast.success('Thanks for reaching out! I will get back to you soon.');
          },
          (error) => {
            setIsLoading(false);
            console.error('Failed to send email. Error:', error);
            toast.error('Failed to send message. Please try again.');
          }
        );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <SecondaryNavbar />
      <ToastContainer />

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
              Please do not hesitate to contact me for collaboration, inquiries, or to discuss your upcoming project. I am enthusiastic and prepared for new opportunities.
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 tracking-wide mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              {
                isLoading
                  ?
                  <div>
                    <button
                      className="w-full h-12 flex justify-center items-center bg-[#151413] rounded-md">
                      <Loader />
                    </button>
                  </div>
                  :
                  <div>
                    <button
                      type="submit"
                      className="w-full h-12 bg-[#ffb646] text-white font-semibold py-3 rounded-md hover:bg-[#e29a35] transition-colors duration-300 focus:outline-none">
                      Send Message
                    </button>
                    {submitted && (
                      <p className="text-green-500 text-lg mt-4">Message submitted successfully!</p>
                    )}
                  </div>
              }
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;





















// import React from 'react';
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FiPhone } from "react-icons/fi";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';

// const Contact = () => {
//   return (
//     <React.Fragment>
//       <SecondaryNavbar />

//       <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12">
//         <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
//           {/* First Section: Contact Info */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
//             <div className="flex flex-col justify-center">
//               <div
//                 style={{ fontFamily: 'Syne, sans-serif' }}
//                 className="text-lg text-start tracking-wide font-semibold text-[#ffb646] mb-2">
//                 Contact
//               </div>

//               <h2 style={{ fontFamily: 'Syne, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-[#151413] relative">
//                 <span className="relative z-10">Let's&nbsp;</span>
//                 <span className="absolute -left-1 -top-0 bg-[#ffb646] md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center z-0">
//                   <span className="text-white font-bold text-lg">&nbsp;</span>
//                 </span>
//                 Connect
//               </h2>
//             </div>
//             <p className="text-lg md:text-xl text-gray-600">
//               Reach out to us for any queries or support. We're here to assist you.
//             </p>

//             <div className="space-y-4">
//               {/* Email */}
//               <div className="flex items-center space-x-4">
//                 <MdOutlineMailOutline size={35} />
//                 <div className='tracking-wide'>
//                   <p className="text-lg text-gray-600">
//                     Email
//                   </p>

//                   <p
//                     style={{ fontFamily: 'Syne, sans-serif' }}
//                     className="text-lg text-[#151413] font-semibold">
//                     mprasantakumar72@gmail.com
//                   </p>
//                 </div>
//               </div>
//               <hr className="border-t border-gray-300" />

//               {/* Phone */}
//               <div className="flex items-center space-x-4">
//                 <FiPhone size={32} />
//                 <div className='tracking-wide'>
//                   <p className="text-lg text-gray-600">
//                     Phone
//                   </p>

//                   <p
//                     style={{ fontFamily: 'Syne, sans-serif' }}
//                     className="text-lg text-[#151413] font-semibold">
//                     +91 7008195575
//                   </p>
//                 </div>
//               </div>
//               <hr className="border-t border-gray-300" />

//               {/* LinkedIn */}
//               <div className="flex items-center space-x-4">
//                 <CiLinkedin size={48} />
//                 <div className='tracking-wide'>
//                   <p className="text-lg text-gray-600">
//                     LinkedIn
//                   </p>

//                   <p
//                     style={{ fontFamily: 'Syne, sans-serif' }}
//                     className="text-lg text-[#151413] font-semibold">
//                     https://www.linkedin.com/in/prasanta-kumar-mohanty-53129a1b7/
//                   </p>
//                 </div>
//               </div>
//               <hr className="border-t border-gray-300" />

//               {/* Address */}
//               <div className="flex items-center space-x-4">
//                 <MdOutlineLocationOn size={48} />
//                 <div className='tracking-wide'>
//                   <p className="text-lg text-gray-600">
//                     Address
//                   </p>

//                   <p
//                     style={{ fontFamily: 'Syne, sans-serif' }}
//                     className="text-lg text-[#151413] font-semibold">
//                     At/P.O - Kuhunda, Via - Kuanpal, Dist - Cuttack, Odisha - 754204
//                   </p>
//                 </div>
//               </div>
//               <hr className="border-t border-gray-300" />
//             </div>
//           </div>

//           {/* Second Section: Contact Form */}
//           <div className="w-full md:w-1/2">
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Name */}
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 tracking-wide mb-2">
//                     Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Your Name"
//                     className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 tracking-wide mb-2">
//                     Email*
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Your Email"
//                     className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                   />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 tracking-wide mb-2">
//                   Phone*
//                 </label>
//                 <input
//                   type="text"
//                   id="phone"
//                   placeholder="Your Phone"
//                   className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                 />
//               </div>

//               {/* Subject */}
//               <div>
//                 <label htmlFor="subject" className="block text-gray-700 tracking-wide mb-2">
//                   Subject*
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   placeholder="Subject"
//                   className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 tracking-wide mb-2">
//                   Message*
//                 </label>
//                 <textarea
//                   id="message"
//                   placeholder="Your Message"
//                   rows="3"
//                   className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#151413] text-white font-semibold py-3 rounded-md hover:bg-[#ffb646] focus:outline-none focus:ring-2 focus:ring-[#e6a53f] focus:ring-opacity-50 tracking-wide">
//                   Send Message 🡥
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Contact;
