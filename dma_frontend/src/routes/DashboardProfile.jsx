import React from 'react';
import DashboardProfileComp from '../components/DashboardProfileComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const DashboardProfile = () => {
  return (
    <div className='tw-flex tw-flex-col tw-space-x-6 lg:tw-flex-row '>
      {/* sidebar */}
      <div className=''>
        <DashboardSideNav />
      </div>
      <div className='tw-pt-4'>
        <DashboardProfileComp />
      </div>
    </div>
  );
};

export default DashboardProfile;
