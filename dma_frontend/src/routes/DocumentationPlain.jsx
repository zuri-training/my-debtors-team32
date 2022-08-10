import React from 'react';
// import DocumentationComp from '../components/DocumentationComp';
import DocumentationPlainComp from '../components/DocumentationPlainComp';
import HeaderLayoutComp from '../components/layout/HeaderLayout';
// import DashboardSideNav from '../components/layout/DashboardSideNav';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const DocumentationPlain = () => {
  return (
    <div className=''>
      <ProjectLayoutComp>
        <HeaderLayoutComp />
        <DocumentationPlainComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default DocumentationPlain;
