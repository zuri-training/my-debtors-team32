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
      <NotificationComp />
    </div>
  );
};

export default Notifications;
