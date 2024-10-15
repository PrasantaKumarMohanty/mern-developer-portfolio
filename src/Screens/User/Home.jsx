import React from 'react';
import HeroSection from '../../Components/Home/HeroSection';
import SpecialitiesSection from '../../Components/Home/SpecialitiesSection ';
import HomeAbout from '../../Components/Home/HomeAbout';
import Skills from '../../Components/Home/Skills';
import Tools from '../../Components/Home/Tools';
import Os from '../../Components/Home/Os';
import Resume from '../../Components/Home/Resume';
import RecentProjects from '../../Components/Home/RecentProjects';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <SpecialitiesSection />
      <HomeAbout />
      <Skills />
      <Tools />
      <Os />
      <Resume />
      <RecentProjects />
    </React.Fragment>
  )
}

export default Home
