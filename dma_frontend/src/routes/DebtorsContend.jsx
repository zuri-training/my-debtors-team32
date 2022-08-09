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

        <DebtorContendComp />
      </div>
    </div>
  );
};

export default DeptorsContend;
