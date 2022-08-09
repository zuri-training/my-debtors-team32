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
        <AddDebtorComp />
      </div>
    </div>
  );
};

export default AddDeptor;
