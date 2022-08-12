import React from 'react';
import AddDebtorComp from '../components/AddDebtorComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const AddDeptor = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <div className='tw-mx-auto tw-flex tw-h-screen tw-w-screen tw-max-w-screen-lg tw-items-center tw-justify-center'>
          <AddDebtorComp />
        </div>
      </div>
    </div>
  );
};

export default AddDeptor;
