import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import DetailsHeroSection from '../../Components/ProjectDetails/DetailsHeroSection';
import ProjectsOverview from '../../Components/ProjectDetails/ProjectsOverview';
import RelatedProjects from '../../Components/ProjectDetails/RelatedProjects';
import { useParams } from "react-router";

import iber from '../../Assets/Projects/iber.png';
import archita from '../../Assets/Projects/archita.png';
import weekend from '../../Assets/Projects/weekend.png';
import studit from '../../Assets/Projects/studit.png';
import hc from '../../Assets/Projects/hc.png';
import assavio from '../../Assets/Projects/assavio.png';
import spas from '../../Assets/Projects/spas.webp';
import snaptest from '../../Assets/Projects/snaptest.png';
import oOrdering from '../../Assets/Projects/onlineOrdering.png';
import doctegritty from '../../Assets/Projects/doctegritty.png';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const allProjects = [
    {
      "id": "p1",
      "name": "IBER - Saloon & Spa POS and CRM System",
      "p_category": "POS & CRM",
      "category": "Saloon & Spa",
      "p_status": "Live",
      "startDate": "2 Nov 2023",
      "endDate": "15 Jan 2023",
      "tools": "MERN Stack",
      "design": "Tailwind CSS, Material UI",
      "web_link": "https://www.iber.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.iber",
      "headImg_url": iber,
      "overview": "IBER - Salon & Spa POS and CRM System is an all-in-one solution designed to simplify operations and enhance customer engagement for salons and spas. This system integrates powerful Point of Sale (POS) capabilities with an intuitive Customer Relationship Management (CRM) interface, enabling seamless appointment scheduling, inventory management, and client tracking. Built using the MERN stack, IBER ensures a modern, scalable, and efficient platform that helps businesses streamline daily operations, gain actionable insights, and deliver exceptional service to their customers.",
      "detailsPoints": [
        "POS system for managing appointments",
        "CRM features for customer management",
        "Billing and invoicing features",
        "Staff management",
        "Customer notifications"
      ],
      "projectsSmallImg_urls": [
        "iber_img1.png",
        "iber_img2.png",
        "iber_img3.png"
      ],
      "conclusion": "IBER - Salon & Spa POS and CRM System serves as a transformative tool for salon and spa businesses, combining advanced technology with user-friendly features to streamline operations and elevate customer satisfaction. Its robust functionality and modern design enable businesses to manage appointments, track client preferences, and optimize resources efficiently. With IBER, salons and spas can focus on what truly matters—delivering outstanding experiences to their customers while driving growth and success in a competitive market.",
      "relatedProjects_ids": [
        { 'pName': 'Heart Connect - APP with WEB APP', 'urls': hc },
        { 'pName': 'Multi-Branch Bike Showroom System', 'urls': archita },
        { 'pName': 'Comprehensive Travel & Booking Platform', 'urls': weekend }
      ]
    },
    {
      "id": "p2",
      "name": "Heart Connect - APP with WEB APP",
      "p_category": "Mobile App & Web App",
      "category": "Health Care",
      "p_status": "Live",
      "startDate": "10 March 2023",
      "endDate": "10 March 2023",
      "tools": "React Native, Node.js, MongoDB",
      "design": "Material UI",
      "web_link": "https://www.heartconnect.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.heartconnect",
      "headImg_url": hc,
      "overview": "Heart Connect is a seamless and intuitive dating platform that integrates a user-friendly mobile app and web app. With a focus on creating meaningful connections, Heart Connect offers an OTP-based login system for secure access, geolocation-based matching for more relevant connections, and real-time chat functionality for continuous interaction. The platform's robust admin dashboard allows for efficient user management and monitoring, ensuring a safe and personalized experience for all users.",
      "detailsPoints": [
        "OTP-based login system",
        "Geolocation for matching",
        "Admin dashboard for user management",
        "Real-time chat functionality",
        "Push notifications"
      ],
      "projectsSmallImg_urls": [
        "hc_img1.png",
        "hc_img2.png",
        "hc_img3.png"
      ],
      "conclusion": "Heart Connect serves as a powerful tool for those looking to build genuine connections in a secure and engaging environment. With features such as real-time chat and geolocation-based matching, Heart Connect not only simplifies dating but also ensures users' safety and satisfaction through an intuitive admin dashboard.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Multi-Branch Bike Showroom System', 'urls': archita },
        { 'pName': 'Comprehensive Travel & Booking Platform', 'urls': weekend }
      ]
    },
    {
      "id": "p3",
      "name": "Archita Motors Management System",
      "p_category": "Management System",
      "category": "Automobile",
      "p_status": "Live",
      "startDate": "15 March 2023",
      "endDate": "15 March 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Bootstrap",
      "web_link": "https://www.architamotors.com",
      "playStore_link": "N/A",
      "headImg_url": archita,
      "overview": "Archita Motors Management System is a comprehensive solution designed for multi-branch bike showrooms. The system streamlines inventory management, tracks sales, and offers branch-specific reporting to optimize business operations. It also integrates staff management and customer feedback systems, ensuring smooth day-to-day operations and excellent customer service across all branches.",
      "detailsPoints": [
        "Inventory management",
        "Sales tracking",
        "Branch-specific reporting",
        "Staff management",
        "Customer feedback system"
      ],
      "projectsSmallImg_urls": [
        "archita_img1.png",
        "archita_img2.png",
        "archita_img3.png"
      ],
      "conclusion": "Archita Motors Management System enhances the efficiency of multi-branch bike showrooms by providing a unified platform to manage inventory, track sales, and gather customer feedback. This all-in-one system simplifies the management process and contributes to greater sales and customer satisfaction.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Heart Connect - APP with WEB APP', 'urls': hc },
        { 'pName': 'Comprehensive Travel & Booking Platform', 'urls': weekend }
      ]
    },
    {
      "id": "p4",
      "name": "Weekend Bhraman Tour Planner",
      "p_category": "Travel & Tour",
      "category": "Travel",
      "p_status": "Live",
      "startDate": "20 March 2023",
      "endDate": "20 March 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Tailwind CSS",
      "web_link": "https://www.weekendbhraman.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.weekendbhraman",
      "headImg_url": weekend,
      "overview": "Weekend Bhraman is a comprehensive travel platform that allows users to search, plan, and book tour packages. The platform offers integrated payment gateway features, user reviews, and detailed travel guides, providing a seamless experience for travelers looking to explore new destinations. Whether it's a weekend getaway or an extended vacation, Weekend Bhraman simplifies the travel planning process.",
      "detailsPoints": [
        "Searchable tour packages",
        "Booking integration",
        "User reviews",
        "Travel guides",
        "Payment gateway integration"
      ],
      "projectsSmallImg_urls": [
        "weekend_img1.png",
        "weekend_img2.png",
        "weekend_img3.png"
      ],
      "conclusion": "Weekend Bhraman transforms the way travelers plan their trips, making it easier to discover tour packages, read reviews, and book travel experiences. Its comprehensive features provide a hassle-free travel experience, helping users explore the world with confidence.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Heart Connect - APP with WEB APP', 'urls': hc },
        { 'pName': 'Studit - A eLearning Platform', 'urls': studit }
      ]
    },
    {
      "id": "p5",
      "name": "Studit - A eLearning Platform",
      "p_category": "Education",
      "category": "eLearning",
      "p_status": "Live",
      "startDate": "25 March 2023",
      "endDate": "25 March 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Material UI",
      "web_link": "https://www.studit.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.studit",
      "headImg_url": studit,
      "overview": "Studit is an innovative eLearning platform that provides access to a vast range of online courses and video lectures. It features an interactive course catalog, discussion forums, and tools for assignments and quizzes, all designed to enhance the learning experience. Students can earn certificates upon completing courses, further adding value to their educational journey.",
      "detailsPoints": [
        "Course catalog",
        "Video lectures",
        "Discussion forums",
        "Assignments and quizzes",
        "Certificates"
      ],
      "projectsSmallImg_urls": [
        "studit_img1.png",
        "studit_img2.png",
        "studit_img3.png"
      ],
      "conclusion": "Studit revolutionizes online learning by offering a platform where students can access a variety of courses, interact with peers, and earn certifications. With its user-friendly design and rich content, Studit ensures an enriching and effective learning experience for all users.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Multi-Branch Bike Showroom System', 'urls': archita },
        { 'pName': 'Comprehensive Travel & Booking Platform', 'urls': weekend }
      ]
    },
    {
      "id": "p6",
      "name": "Some Spa Booking & Admin Dashboard",
      "p_category": "Booking & Admin",
      "category": "Spa",
      "p_status": "Live",
      "startDate": "10 April 2023",
      "endDate": "10 April 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Tailwind CSS",
      "web_link": "https://www.some-spa.com",
      "playStore_link": "N/A",
      "headImg_url": spas,
      "overview": "Some Spa Booking & Admin Dashboard simplifies the process of booking spa services and managing appointments. The platform allows users to easily book services, while the admin dashboard offers comprehensive tools for appointment scheduling, user management, and payment integration. The customer support system further enhances the user experience, ensuring satisfaction at every stage.",
      "detailsPoints": [
        "Service booking",
        "Admin dashboard for managing appointments",
        "User reviews",
        "Payment integration",
        "Customer support"
      ],
      "projectsSmallImg_urls": [
        "spa_img1.png",
        "spa_img2.png",
        "spa_img3.png"
      ],
      "conclusion": "Some Spa Booking & Admin Dashboard streamlines spa service bookings and management by offering an intuitive interface for users and administrators alike. Its integrated booking system, coupled with real-time notifications and customer support tools, ensures a smooth, hassle-free experience for both customers and spa owners.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Heart Connect - APP with WEB APP', 'urls': hc }
      ]
    },
    {
      "id": "p7",
      "name": "Assavio - Portal with Admin Dashboard",
      "p_category": "Real Estate",
      "category": "Real Estate",
      "p_status": "Live",
      "startDate": "15 April 2023",
      "endDate": "15 April 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Bootstrap",
      "web_link": "https://www.assavio.com",
      "playStore_link": "N/A",
      "headImg_url": assavio,
      "overview": "Assavio is a real estate portal with an integrated admin dashboard designed to simplify property management and enhance user experience for both real estate businesses and potential buyers. The platform allows easy property listing, advanced search and filter options, and a mortgage calculator for potential buyers.",
      "detailsPoints": [
        "Property listings",
        "Admin dashboard for property management",
        "Search and filter properties",
        "User reviews",
        "Mortgage calculator"
      ],
      "projectsSmallImg_urls": [
        "assavio_img1.png",
        "assavio_img2.png",
        "assavio_img3.png"
      ],
      "conclusion": "Assavio simplifies the property search and management process for real estate businesses and buyers, making it easier to find, manage, and buy properties with advanced search and filtering options.",
      "relatedProjects_ids": [
        { 'pName': 'Multi-Branch Bike Showroom System', 'urls': archita },
        { 'pName': 'Studit - A eLearning Platform', 'urls': studit },
        { 'pName': 'Some Spa Booking & Admin Dashboard', 'urls': spas }
      ]
    },
    {
      "id": "p8",
      "name": "SnapTest - Reliable Online Test Proctoring Service",
      "p_category": "Test Proctoring",
      "category": "Education",
      "p_status": "Live",
      "startDate": "5 May 2023",
      "endDate": "5 May 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Material UI",
      "web_link": "https://www.snaptest.com",
      "playStore_link": "N/A",
      "headImg_url": snaptest,
      "overview": "SnapTest is an online test proctoring platform that uses AI-powered technology to ensure exam integrity. The platform offers real-time monitoring, video recording, and test timer features to create a secure testing environment. It also provides result analytics to track and assess performance.",
      "detailsPoints": [
        "AI-powered proctoring",
        "Real-time monitoring",
        "Video recording",
        "Test timer",
        "Result analytics"
      ],
      "projectsSmallImg_urls": [
        "snaptest_img1.png",
        "snaptest_img2.png",
        "snaptest_img3.png"
      ],
      "conclusion": "SnapTest ensures a secure and efficient testing environment by combining AI-driven monitoring with real-time features and analytics, helping educational institutions maintain exam integrity.",
      "relatedProjects_ids": [
        { 'pName': 'Comprehensive Travel & Booking Platform', 'urls': weekend },
        { 'pName': 'Studit - A eLearning Platform', 'urls': studit },
        { 'pName': 'Some Spa Booking & Admin Dashboard', 'urls': spas }
      ]
    },
    {
      "id": "p9",
      "name": "Online Food Ordering Website",
      "p_category": "Food Ordering",
      "category": "E-Commerce",
      "p_status": "Live",
      "startDate": "15 June 2023",
      "endDate": "15 June 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Tailwind CSS",
      "web_link": "https://www.onlineordering.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.onlineordering",
      "headImg_url": oOrdering,
      "overview": "This is a user-friendly online food ordering platform that allows customers to browse menus, place orders, and track deliveries in real time. It also integrates payment gateways and offers customer reviews to enhance the user experience.",
      "detailsPoints": [
        "Menu browsing",
        "Order tracking",
        "Payment gateway integration",
        "Real-time delivery status",
        "User reviews"
      ],
      "projectsSmallImg_urls": [
        "onlineOrdering_img1.png",
        "onlineOrdering_img2.png",
        "onlineOrdering_img3.png"
      ],
      "conclusion": "This platform provides a seamless food ordering experience, allowing customers to easily browse menus, place orders, and track deliveries, resulting in increased customer satisfaction and restaurant sales.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Multi-Branch Bike Showroom System', 'urls': archita },
        { 'pName': 'SnapTest - Reliable Online Test Proctoring Service', 'urls': snaptest }
      ]
    },
    {
      "id": "p10",
      "name": "Doctegritty",
      "p_category": "Healthcare",
      "category": "Health Care",
      "p_status": "Live",
      "startDate": "1 July 2023",
      "endDate": "1 July 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Tailwind CSS",
      "web_link": "https://www.doctegritty.com",
      "playStore_link": "N/A",
      "headImg_url": doctegritty,
      "overview": "Doctegritty is a healthcare platform for managing patient records and scheduling doctor appointments. The system offers tools for managing patient data, tracking appointments, booking online consultations, and handling prescriptions.",
      "detailsPoints": [
        "Patient management",
        "Appointment scheduling",
        "Doctor availability tracker",
        "Online consultation booking",
        "Prescription management"
      ],
      "projectsSmallImg_urls": [
        "doctegritty_img1.png",
        "doctegritty_img2.png",
        "doctegritty_img3.png"
      ],
      "conclusion": "Doctegritty streamlines healthcare management by providing a digital platform for managing patient information, scheduling doctor appointments, and handling prescriptions, improving both patient care and clinic efficiency.",
      "relatedProjects_ids": [
        { 'pName': 'IBER - Saloon & Spa POS and CRM System', 'urls': iber },
        { 'pName': 'Studit - A eLearning Platform', 'urls': studit },
        { 'pName': 'Some Spa Booking & Admin Dashboard', 'urls': spas }
      ]
    }
  ];


  // Find the project that matches the projectId from the URL
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <React.Fragment>
      <SecondaryNavbar />
      <DetailsHeroSection project={project} />
      <ProjectsOverview project={project} />
      <RelatedProjects relatedProjectIds={project.relatedProjects_ids} />
    </React.Fragment>
  );
}

export default ProjectDetails;