import React from 'react';
import DashboardComp from '../components/DashboardComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const Dashboard = () => {
  return (
    <ProjectLayoutComp>
      <DashboardComp />
    </ProjectLayoutComp>
  );
};

export default Dashboard;
