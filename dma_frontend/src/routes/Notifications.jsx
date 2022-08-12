import React from 'react';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import NotificationComp from '../components/NotificationComp';

const Notifications = () => {
  return (
    <div className='tw-flex tw-flex-col tw-space-x-6 lg:tw-flex-row '>
      {/* sidebar */}
      <div className=''>
        <DashboardSideNav />
      </div>
      <div className='tw-pt-4'>
        <NotificationComp />
      </div>
    </div>
  );
};

export default Notifications;
