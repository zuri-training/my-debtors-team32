import React from 'react';
import AddDebtorComp from '../components/AddDebtorComp';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const AddDeptor = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <AddDebtorComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default AddDeptor;
