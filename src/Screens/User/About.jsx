import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import AboutMe from '../../Components/About/AboutMe';
import Vission from '../../Components/About/Vission';
import AboutResume from '../../Components/About/AboutResume';

const About = () => {
  return (
    <React.Fragment>
      <SecondaryNavbar />

      <AboutMe />
      <Vission />
      <AboutResume />
    </React.Fragment>
  )
}

export default About
