import React from 'react';
import DashboardComp from '../components/DashboardComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';
// import ProjectLayoutComp from '../components/layout/ProjectLayout';

const Dashboard = () => {
  return (
    <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
      {/* sidebar */}
      <div className=''>
        <DashboardSideNav />
      </div>
      <div className='tw-pt-4'>
        <DashboardComp />
      </div>
    </div>
  );
};

export default Dashboard;
