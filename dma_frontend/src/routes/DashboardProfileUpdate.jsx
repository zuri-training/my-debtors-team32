import React from 'react';
import DashboardProfileUpdateComp from '../components/DashboardProfileUpdateComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const DashboardProfileUpdate = () => {
  return (
    <div className='tw-flex tw-flex-col tw-space-x-6 lg:tw-flex-row '>
      {/* sidebar */}
      <div className=''>
        <DashboardSideNav />
      </div>
      <DashboardProfileUpdateComp />
    </div>
  );
};

export default DashboardProfileUpdate;
