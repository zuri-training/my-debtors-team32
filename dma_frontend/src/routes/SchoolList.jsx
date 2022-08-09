import React from 'react';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import SchoolListComp from '../components/SchoolListComp';

const SchoolList = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <SchoolListComp />
      </div>
    </div>
  );
};

export default SchoolList;
