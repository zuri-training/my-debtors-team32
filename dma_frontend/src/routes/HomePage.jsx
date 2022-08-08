import React, { useState } from 'react';
import '../styles/home.css';
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
        <div className='tw-relative tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
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
        <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
          <div className=''>
            {/* TYPE YOUR CODE HERE. IF YOU USE TAILWINDCSS MAKE SURE TO ADD THE tw- PREFIX TO THE UTILITY CLASS AND IF YOU WRITE VANILLA CSS KINDLY USE contact-us.css FILE */}
          </div>
        </div>
      </ProjectLayoutComp>
    </div>
  );
};

export default HomePageComp;
