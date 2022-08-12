import React from 'react';
import DocumentationPlainComp from '../components/DocumentationPlainComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const DocumentationPlain = () => {
  return (
    <div className=''>
      <ProjectLayoutComp>
        <DocumentationPlainComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default DocumentationPlain;
