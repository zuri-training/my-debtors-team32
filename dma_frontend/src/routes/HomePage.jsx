import React, { useState } from 'react';
import '../styles/home.css';
import '../styles/homepage.css';
import ProjectLayoutComp from '../components/layout/ProjectLayout';
import { Image, Offcanvas } from 'react-bootstrap';
import dmalogo from '../images/dmalogo.png';
import { NavLink } from 'react-router-dom';
import { RiMenu5Fill } from 'react-icons/ri';
import NavContentComp from '../components/layout/NavContent';


const HomePageComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let activeStyle = {
    color: '#003865',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  };
  return (
    <div>
      <ProjectLayoutComp>
        <div className='tw-relative tw-mx-auto  tw-max-w-screen-xl tw-bg-white tw-pt-6'>
          <div className='tw-mx-auto tw-max-w-screen-xl tw-transition-all tw-duration-300 tw-ease-in-out'>
            <div className='tw-mx-3 tw-flex tw-scroll-my-10 tw-justify-between lg:tw-mx-0'>
              {/* logo and name */}
              <div className='tw-mt-2 tw-flex tw-items-center tw-justify-center'>
                <Image
                  src={dmalogo}
                  alt='dma logo'
                  // roundedCircle
                  className='tw-flex tw-w-16 tw-items-center '
                />
                <div className='tw-flex tw-flex-col'>
                  <h1 className='tw-text-2xl tw-font-bold tw-text-black '>
                    DMA
                  </h1>
                  <h2 className='-tw-mt-2 tw-text-xs tw-font-semibold tw-text-gray-600'>
                    Debtor Monitoring Agency
                  </h2>
                  <h4 className='-tw-mt-2 tw-text-[9px] tw-text-blue-600'>
                    For Schools
                  </h4>
                </div>
              </div>

              {/* Navlinks */}
              <div className='tw-hidden tw-items-center tw-justify-center tw-space-x-10 lg:tw-flex '>
                <NavLink
                  to='/'
                  className='tw-cursor-pointer tw-font-fam1  tw-text-inherit tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-gray-500'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>

                {/* <NavLink
              className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
              to='/features'
            >
              Features
            </NavLink> */}
                {/* <NavDropdown title='Deptors' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/adddeptor'>
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500 '
                  to='/adddeptor'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Add Deptor
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href='/deptorlist'>
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500 '
                  to='/deptorlist'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Deptor List
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href='/deptorsearch'>
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
                  to='/deptorsearch'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Deptor Search
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href='/deptorcontend'>
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
                  to='/deptorcontend'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Deptor Contend
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown> */}
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
                  to='/about'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About Us
                </NavLink>
                <NavLink
                  className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
                  to='/contact'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact Us
                </NavLink>
              </div>

              {/* login | register */}
              <div className='tw-hidden tw-items-center tw-justify-center tw-space-x-4 tw-font-fam1 lg:tw-flex '>
                <NavLink
                  className='tw-w-fit tw-rounded-lg tw-border tw-border-blue-900 tw-bg-transparent tw-py-2 tw-px-10 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-100'
                  to='/signin'
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink>
                {/* <Button className=' '>Login</Button> */}
                <NavLink
                  className=' tw-w-fit tw-rounded-lg  tw-bg-blue-900 tw-py-2 tw-px-10  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
                  to='/schoolreg'
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Register
                </NavLink>
                {/* <Button className='tw-w-fit tw-border  tw-bg-blue-900 tw-px-10 tw-pb-8 hover:tw-bg-blue-700'>
              Register
            </Button> */}
              </div>

              {/* menu bar */}
              <div className='tw-flex tw-items-center tw-justify-center lg:tw-hidden'>
                <div
                  onClick={handleShow}
                  className='tw-w-fit  tw-cursor-pointer tw-rounded-full tw-border-0 tw-bg-transparent tw-p-3 tw-text-black
          tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-100'
                >
                  <RiMenu5Fill className='tw-text-[22px]' />
                </div>
              </div>
            </div>
          </div>

          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>DMA</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavContentComp />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className=''>
          <div className=''>
            {/* TYPE YOUR CODE HERE. IF YOU USE TAILWINDCSS MAKE SURE TO ADD THE tw- PREFIX TO THE UTILITY CLASS AND IF YOU WRITE VANILLA CSS KINDLY USE contact-us.css FILE */}
            <main className="main_content">
              {/* homepage top section */}
              
              <section className="top_content">
                <div className="tc_wrapper">
                  <p className="tc_para">
                  Assisting Schools to grow financially and debt free with our Debt Solutions team.
                  </p>
                </div>
                <div className="tc_img_container">
                  <div className="headerImg"></div>
                </div>
                <a href="/" className="reg_btn">
                  Register
                </a>
              </section>
              {/* Who we are section */}
              <section className="wwa_container">
                <div className="wwa_wrapper">
                  <div className="wwa_top_deco"></div>
                  <h2 className="wwa_title">
                    Who Are We?
                  </h2>
                  <p className="wwa_paragraph">
                  Debt Monitoring agency (DMA) is a platform that allows school owners manage debt crisis by checkmating the student debtors, and centrally co-ordinate debt management, its a debt management and collections system  that eliminates manual effort, reduces errors, and improves your ability to collect unpaid debts, such that school owners minimize the risk of admitting wards previously owing in their former schools, and want to ward off payment, with DMA, school managers increase their chances of admitting credit worthy wards, whose guardians take complete responsibility for their tuition.
                  </p>
                </div>
              </section>
              {/* Our impact and contribution section */}
              <section className="impact_container">
                <div className="impact_wrapper">
                  <div className="i-c_row row_001">
                    <h2 className="impact_title">
                      Our Impacts And Contributions
                    </h2>
                    <div className="impact_grid_block">
                      <div className="impact_col">
                        <div className="ic_row">
                          <div className="ic_icon_1">
                            
                          </div>
                          <p className="ic_para">
                            We have assisted these wards to be focused in their learning, because switching schools hinders fast learning, when wards change schools, they take time to adjust to the new learning environment.

                          </p>
                        </div>
                        <div className="ic_row">
                          <div className="ic_icon_3">
                            
                          </div>
                          <p className="ic_para">
                            DMA has contributed to the economy at large by playing a huge part domain debt recovery sector., reducing financial conflicts.

                          </p>
                        </div>
                      </div>
                      <div className="impact_col col_2">
                      <div className="ic_row">
                          <div className="ic_icon_2"></div>
                          <p className="ic_para">
                            We have raised the consciousness in parents/guardians about taking responsibility for their wards tuition, knowing fully well that with DMA, the fictitious practice of switching schools to evade debt has been defeated.

                          </p>
                        </div>
                        <div className="ic_row">
                          <div className="ic_icon_4"></div>
                          <p className="ic_para">
                            We have succeeded in assisting schools maximize their profit. This, in turn, helps these schools to maintain, even grow, their workforce, seeding economic growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="i-c_row">
                    <div className="impact_image_container">
                      <div className="impact_image"></div>

                    </div>
                    <div className="wwd">
                      <h3 className="wwd_title">
                        What We Do?
                      </h3>
                      <p className="wwd_para">
                        Our team is dedicated to providing up-to-date debt information to help Schools make compromisable decision as regard debt situations from parents.
                      </p>
                      <a href="/" className="wwd_btn">
                        About Us
                      </a>
                    </div>
                  </div>

                </div>
              </section>
              {/* Testimony Slider */}
              <section className="testimony_content">
                <div className="tm_wrapper">
                  <h2 className="tm_title">
                    What Schools Think About Us
                  </h2>
                  <div className="tm_slider slide" >
                    <div className="slider_element">
                      <div className="col_logo sl_logo_1">
                      </div>
                      <div className="col te_text">
                        <h3 className="slider_title">
                        Bridgerton High School
                        </h3>
                        <p className="s_para">
                        ‘DMA is a welcome development in the school mode of operation as it has fostered credit worthiness in parents/guardians
                        </p>
                      </div>
                    </div>
                    {/* <div className="slider_element">
                      <div className="col_logo sl_logo_2">
                      </div>
                      <div className="col te_text">
                        <h3 className="slider_title">
                        Bridgerton High School
                        </h3>
                        <p className="s_para">
                        ‘DMA is a welcome development in the school mode of operation as it has fostered credit worthiness in parents/guardians
                        </p>
                      </div>
                    </div>
                    <div className="slider_element">
                      <div className="col_logo sl_logo_3">
                      </div>
                      <div className="col te_text">
                        <h3 className="slider_title">
                        Bridgerton High School
                        </h3>
                        <p className="s_para">
                        ‘DMA is a welcome development in the school mode of operation as it has fostered credit worthiness in parents/guardians
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <div className="tm_slider_ribbon">
                    <span className="ribbon_span s-active"></span>
                    <span className="ribbon_span"></span>
                    <span className="ribbon_span"></span>
                    <span className="ribbon_span"></span>
                  </div>
                </div>
                    
              </section>
              {/* bottom content section */}
              <section className="bottom_content">
                <div className="bt_wrapper">
                  <div className="bt_img_container">
                    <div className="bt_img"></div>
                  </div>
                  <div className="bt_content">
                    <h2 className="bt_title">
                      Register Your <span>School</span> With Us Today
                      </h2>
                    <p className="bt_paragraph">
                    DMA ensures minimal financial loss of these schools by allowing schools within a given region to list a directory of wards of parents or guardians who owe, which in turn prevent them from admitting wards of these parents or guardians
                    </p>
                    <a href="/" className="bt_reg">Register</a>
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
