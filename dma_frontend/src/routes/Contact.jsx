import React from 'react';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import ContactUsComp from '../components/ContactUsComp';

const ContactPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <ContactUsComp />
      </ProjectLayoutComp>
    </div>
  );
};

export default ContactPage;
