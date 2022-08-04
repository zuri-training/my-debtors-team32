import React from 'react';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import '../styles/About-us-page.css';
const AboutPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <div className='head1'>
          <div className='what'>
            <h2>What we do</h2>
          </div>

          <div className='header-2'></div>
        </div>

        <div className='purpose'>
          <h2>Our purpose</h2>
          <br />
          <p>
            Debitor Monitoring Agency is a platform used by school management to
            verify the authencity of parents and financial prudence. we help you
            build reliable financial systems y fishing out potential debtors
          </p>
          <br />
          <p>
            Our aim is to help more schools become financially independent. we
            are concerned about the way schools go bankrupt due to extended
            debts, so this platform is being set up to help sschool managements
            trace their debtors and recover their losses
          </p>
        </div>
        <div className='body-1'>
          <div className='child-1'>
            <h2>Our Focus</h2> <br />
            <br />
            <p>
              Our focus is to help you attain financial freedom by closing out
              every financial gap possible
            </p>
            <br />
            <button className=' btn'>Learn More &rsaquo; </button>
          </div>
          <div className='child-2'></div>
        </div>
      </ProjectLayoutComp>
    </div>
  );
};

export default AboutPage;
