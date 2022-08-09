import React from 'react';
import HeaderLayoutComp from '../components/layout/HeaderLayout';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import SchoolRegistrationComp from '../components/SchoolRegistrationComp';

const SchoolRegistration = () => {
  return (
    <ProjectLayoutComp>
      <HeaderLayoutComp />
      <SchoolRegistrationComp />
    </ProjectLayoutComp>
  );
};

export default SchoolRegistration;
