import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import DetailsHeroSection from '../../Components/ProjectDetails/DetailsHeroSection';
import ProjectsOverview from '../../Components/ProjectDetails/ProjectsOverview';
import RelatedProjects from '../../Components/ProjectDetails/RelatedProjects';
import { useParams } from "react-router";
import iber from '../../Assets/Projects/projectBanner.png';

const ProjectDetails = () => {
  const { projectId } = useParams();

  console.log('params', projectId);

  const allProjects = [
    {
      "id": "p1",
      "name": "IBER - POS and CRM System",
      "p_category": "POS & CRM",
      "category": "Saloon & Spa",
      "p_status": "Live",
      "startDate": "1 March 2023",
      "endDate": "1 March 2023",
      "tools": "React, Node.js, MongoDB",
      "design": "Tailwind CSS",
      "web_link": "https://www.iber.com",
      "playStore_link": "https://play.google.com/store/apps/details?id=com.iber",
      "headImg_url": iber,
      "overview": "A POS and CRM system for managing Saloon & Spa services.",
      "detailsPoints": [
        "POS system for managing appointments",
        "CRM features for customer management",
        "Integration with payment gateways",
        "Staff management",
        "Customer notifications"
      ],
      "projectsSmallImg_urls": [
        "iber_img1.png",
        "iber_img2.png",
        "iber_img3.png"
      ],
      "conclusion": "The IBER system efficiently manages Saloon & Spa operations, improving both customer and staff experience.",
      "relatedProjects_ids": ["p2", "p3", "p4"]
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
      "headImg_url": "hc.png",
      "overview": "A dating app with integrated admin dashboard for managing users.",
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
      "conclusion": "Heart Connect provides a seamless platform for dating with real-time chat and robust admin controls.",
      "relatedProjects_ids": ["p1", "p5", "p7"]
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
      "headImg_url": "archita.png",
      "overview": "A multi-branch bike showroom management system.",
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
      "conclusion": "The system enables efficient management of multiple branches, improving sales and customer satisfaction.",
      "relatedProjects_ids": ["p2", "p4", "p5"]
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
      "headImg_url": "weekend.png",
      "overview": "A comprehensive tour planning and booking platform.",
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
      "conclusion": "Weekend Bhraman provides a seamless platform for planning and booking tours, making travel easy and enjoyable.",
      "relatedProjects_ids": ["p1", "p2", "p5"]
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
      "headImg_url": "studit.png",
      "overview": "An online education platform for courses and video lectures.",
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
      "conclusion": "Studit helps learners access online courses and videos for various topics, enhancing the learning experience.",
      "relatedProjects_ids": ["p1", "p3", "p4"]
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
      "headImg_url": "spas.webp",
      "overview": "A platform for spa services booking and admin management.",
      "detailsPoints": [
        "Service booking",
        "Admin dashboard for managing appointments",
        "User reviews",
        "Payment integration",
        "Customer support system"
      ],
      "projectsSmallImg_urls": [
        "spas_img1.png",
        "spas_img2.png",
        "spas_img3.png"
      ],
      "conclusion": "This platform enhances the spa booking experience and simplifies management for spa owners.",
      "relatedProjects_ids": ["p1", "p2", "p4"]
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
      "headImg_url": "assavio.png",
      "overview": "A real estate portal with an integrated admin dashboard.",
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
      "conclusion": "Assavio simplifies the property search and management process for real estate businesses and buyers.",
      "relatedProjects_ids": ["p3", "p5", "p6"]
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
      "headImg_url": "snaptest.png",
      "overview": "An online test proctoring platform for ensuring exam integrity.",
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
      "conclusion": "SnapTest ensures a secure testing environment with advanced AI proctoring capabilities.",
      "relatedProjects_ids": ["p4", "p5", "p6"]
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
      "headImg_url": "onlineOrdering.png",
      "overview": "A user-friendly online food ordering platform.",
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
      "conclusion": "This platform provides a seamless food ordering experience, improving customer satisfaction and restaurant sales.",
      "relatedProjects_ids": ["p1", "p3", "p8"]
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
      "headImg_url": "doctegritty.png",
      "overview": "A platform for managing patient records and doctor appointments.",
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
      "conclusion": "Doctegritty streamlines healthcare management, improving patient care and clinic efficiency.",
      "relatedProjects_ids": ["p1", "p5", "p6"]
    }
  ]

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