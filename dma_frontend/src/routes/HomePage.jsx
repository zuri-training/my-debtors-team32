import React from 'react';
import '../styles/home.css';
import '../styles/homepage.css';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import HeaderLayoutComp from '../components/layout/HeaderLayout';
import { Link } from 'react-router-dom';
import SwiperComp from '../components/SwiperComp';

const HomePageComp = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <HeaderLayoutComp />

        <div className=''>
          <div className=''>
            {/* TYPE YOUR CODE HERE. IF YOU USE TAILWINDCSS MAKE SURE TO ADD THE tw- PREFIX TO THE UTILITY CLASS AND IF YOU WRITE VANILLA CSS KINDLY USE contact-us.css FILE */}
            <main className='main_content'>
              {/* homepage top section */}

              <section className='top_content'>
                <div className='tc_wrapper'>
                  <p className='tc_para'>
                    Assisting Schools to grow financially and debt free with our
                    Debt Solutions team.
                  </p>
                </div>
                <div className='tc_img_container'>
                  <div className='headerImg'></div>
                </div>
                <Link to='/schoolreg' className='reg_btn'>
                  Register
                </Link>
              </section>
              {/* Who we are section */}
              {/* <SwiperComp /> */}
              {/* bottom content section */}
              <section className='bottom_content tw-pt-12'>
                <div className='bt_wrapper'>
                  <div className='bt_img_container'>
                    <div className='bt_img'></div>
                  </div>
                  <div className='bt_content'>
                    <h2 className='bt_title'>
                      Register Your <span>School</span> With Us Today
                    </h2>
                    <p className='bt_paragraph'>
                      DMA ensures minimal financial loss of these schools by
                      allowing schools within a given region to list a directory
                      of wards of parents or guardians who owe, which in turn
                      prevent them from admitting wards of these parents or
                      guardians
                    </p>
                    <Link to='/schoolreg' className='bt_reg'>
                      Register
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </ProjectLayoutComp>
    </div>
  );
};

export default HomePageComp;
