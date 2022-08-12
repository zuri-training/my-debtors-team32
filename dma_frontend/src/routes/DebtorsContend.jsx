import React from 'react';
import DebtorContendComp from '../components/DebtorContendComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const DeptorsContend = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>

        <div className='tw-pt-4'>
          <DebtorContendComp />
        </div>
      </div>
    </div>
  );
};

export default DeptorsContend;
