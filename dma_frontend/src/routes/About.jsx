import React from 'react';
import AboutUsComp from '../components/AboutUsComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import '../styles/About-us-page.css';
const AboutPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <AboutUsComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default AboutPage;
