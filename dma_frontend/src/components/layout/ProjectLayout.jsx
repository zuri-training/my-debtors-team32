import React from 'react';
import FooterLayoutComp from './FooterLayout';
import HeaderLayoutComp from './HeaderLayout';

const ProjectLayoutComp = ({ children }) => {
  return (
    <div className=''>
      <HeaderLayoutComp />
      <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
        {children}
      </div>

      <FooterLayoutComp />
    </div>
  );
};

export default ProjectLayoutComp;
