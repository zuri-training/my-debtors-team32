import React from 'react';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import UpdateDebtorComp from '../components/UpdateDebtorComp';

const UpdateDebtor = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <UpdateDebtorComp />
      </ProjectLayoutComp>
    </div>
  )
}

export default UpdateDebtor;