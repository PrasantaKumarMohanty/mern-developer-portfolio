import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

const ContactModal = ({ showModal, handleCloseModal }) => {
    const modalRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const service_key = process.env.REACT_APP_SERVICE_KEY
    const template_key = process.env.REACT_APP_TEMPLATE_KEY
    const public_key = process.env.REACT_APP_PUBLIC_KEY

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    handleCloseModal();
                    toast.success('Thanks for reaching out! I will get back to you soon.');
                },
                (error) => {
                    setIsLoading(false);
                    console.error('Failed to send email. Error:', error);
                    toast.error('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <React.Fragment>
            {showModal && (
                <div className="fixed inset-0 bg-[#151413] bg-opacity-50 flex justify-center items-center z-[200]">
                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/3 flex flex-col p-6"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                        >
                            &times;
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-[#151413] mb-4 text-center">
                            Contact Us
                        </h2>

                        {/* Form Content */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Section 1: Name and Email */}
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="block text-gray-700 tracking-wide mb-2">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="block text-gray-700 tracking-wide mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Section 2: Phone and Subject */}
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="block text-gray-700 tracking-wide mb-2">
                                        Phone*
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone"
                                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="block text-gray-700 tracking-wide mb-2">
                                        Subject*
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Section */}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="block text-gray-700 tracking-wide mb-2">
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="3"
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
                                    required
                                />
                            </div>

                            {
                                isLoading
                                    ? (
                                        <div>
                                            <button
                                                className="w-full h-12 flex justify-center items-center bg-[#151413] text-white font-semibold rounded-md tracking-wide"
                                            >
                                                <Loader />
                                            </button>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full h-12 bg-[#151413] text-white font-semibold py-3 rounded-md hover:bg-[#ffb646] focus:outline-none focus:ring-2 focus:ring-[#e6a53f] focus:ring-opacity-50 tracking-wide"
                                            >
                                                Send Message 🡥
                                            </button>
                                        </div>
                                    )
                            }

                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </React.Fragment>
    );
};

export default ContactModal;





















// import React, { useEffect, useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import Loader from './Loader';

// const ContactModal = ({ showModal, handleCloseModal }) => {
//     const modalRef = useRef();
//     const [isLoading, setIsLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//     });

//     const handleClickOutside = (event) => {
//         if (modalRef.current && !modalRef.current.contains(event.target)) {
//             handleCloseModal();
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         emailjs
//             .send('service_n6i5di4', 'template_gft4fdo', {
//                 from_name: formData.name,
//                 from_email: formData.email,
//                 from_phone: formData.phone,
//                 subject: formData.subject,
//                 message: formData.message,
//             }, '3jpwbVwY-dwjxe8XG')
//             .then(
//                 (response) => {
//                     console.log('Email sent successfully!', response.status, response.text);
//                     setIsLoading(false);
//                     handleCloseModal();
//                 },
//                 (error) => {
//                     setIsLoading(false);
//                     console.error('Failed to send email. Error:', error);
//                 }
//             );
//     };

//     return (
//         <React.Fragment>
//             {showModal && (
//                 <div className="fixed inset-0 bg-[#151413] bg-opacity-50 flex justify-center items-center z-[200]">
//                     <div
//                         ref={modalRef}
//                         className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/3 flex flex-col p-6"
//                     >
//                         {/* Close button */}
//                         <button
//                             onClick={handleCloseModal}
//                             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
//                         >
//                             &times;
//                         </button>

//                         {/* Title */}
//                         <h2 className="text-2xl font-bold text-[#151413] mb-4 text-center">
//                             Contact Us
//                         </h2>

//                         {/* Form Content */}
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {/* Section 1: Name and Email */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="name" className="block text-gray-700 tracking-wide mb-2">
//                                         Name*
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         placeholder="Your Name"
//                                         className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <label htmlFor="email" className="block text-gray-700 tracking-wide mb-2">
//                                         Email*
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="Your Email"
//                                         className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {/* Section 2: Phone and Subject */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="phone" className="block text-gray-700 tracking-wide mb-2">
//                                         Phone*
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="phone"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="Your Phone"
//                                         className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <label htmlFor="subject" className="block text-gray-700 tracking-wide mb-2">
//                                         Subject*
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="subject"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         placeholder="Subject"
//                                         className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             {/* Message Section */}
//                             <div className="flex flex-col">
//                                 <label htmlFor="message" className="block text-gray-700 tracking-wide mb-2">
//                                     Message*
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     placeholder="Your Message"
//                                     rows="3"
//                                     className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffb646]"
//                                     required
//                                 />
//                             </div>

//                             {
//                                 isLoading
//                                     ?
//                                     <div>
//                                         <button
//                                             className="w-full h-12 flex justify-center items-center bg-[#151413] text-white font-semibold rounded-md tracking-wide"
//                                         >
//                                             <Loader />
//                                         </button>
//                                     </div>
//                                     :
//                                     <div>
//                                         <button
//                                             type="submit"
//                                             className="w-full h-12 bg-[#151413] text-white font-semibold py-3 rounded-md hover:bg-[#ffb646] focus:outline-none focus:ring-2 focus:ring-[#e6a53f] focus:ring-opacity-50 tracking-wide"
//                                         >
//                                             Send Message 🡥
//                                         </button>
//                                     </div>
//                             }

//                         </form>
//                     </div>
//                 </div>
//             )}
//         </React.Fragment>
//     );
// };

// export default ContactModal;