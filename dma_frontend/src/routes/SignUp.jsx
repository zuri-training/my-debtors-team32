import React from 'react';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import SignUpComp from '../components/SignUpComp';
import '../styles/signup.css';
const SignupComp = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <SignUpComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default SignupComp;
