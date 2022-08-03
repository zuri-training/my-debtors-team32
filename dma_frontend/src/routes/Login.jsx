import React from 'react';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import SignInComp from '../components/SignInComp';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <SignInComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default LoginPage;
