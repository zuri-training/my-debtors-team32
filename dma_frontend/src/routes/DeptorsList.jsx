import React from 'react';
import DeptorListComp from '../components/DeptorListComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const DeptorsList = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <DeptorListComp />
      </div>
    </div>
  );
};

export default DeptorsList;
