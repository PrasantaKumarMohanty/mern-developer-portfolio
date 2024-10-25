import React from 'react';
import SecondaryNavbar from '../../Components/Layout/SecondaryNavbar';
import DetailsHeroSection from '../../Components/ProjectDetails/DetailsHeroSection';
import ProjectsOverview from '../../Components/ProjectDetails/ProjectsOverview';
import RelatedProjects from '../../Components/ProjectDetails/RelatedProjects';

const ProjectDetails = () => {
  return (
    <React.Fragment>
      <SecondaryNavbar />
      <DetailsHeroSection />
      <ProjectsOverview />
      <RelatedProjects />
    </React.Fragment>
  );
}

export default ProjectDetails;