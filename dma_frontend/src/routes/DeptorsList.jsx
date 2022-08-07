import React from 'react';
import DeptorListComp from '../components/DeptorListComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const DeptorsList = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <div className='tw-mb-10'>
          <DeptorListComp />
        </div>
      </ProjectLayoutComp>
    </div>
  );
};

export default DeptorsList;
