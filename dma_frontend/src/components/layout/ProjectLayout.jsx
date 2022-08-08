import React from 'react';
import FooterLayoutComp from './FooterLayout';
// import HeaderLayoutComp from './HeaderLayout';

const ProjectLayoutComp = ({ children }) => {
  return (
    <div className=''>
      {/* <HeaderLayoutComp /> */}
      <div className=''>{children}</div>

      <FooterLayoutComp />
    </div>
  );
};

export default ProjectLayoutComp;
