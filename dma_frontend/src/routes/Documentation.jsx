import React from 'react';
import DocumentationComp from '../components/DocumentationComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

const Documentation = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>

        <div className='tw-pt-4'>
          <DocumentationComp />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
