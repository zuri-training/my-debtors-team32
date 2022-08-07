import React from 'react';
import DashboardProfileComp from '../components/DashboardProfileComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const DashboardProfile = () => {
  return (
    <ProjectLayoutComp>
      <DashboardProfileComp />
    </ProjectLayoutComp>
  );
};

export default DashboardProfile;