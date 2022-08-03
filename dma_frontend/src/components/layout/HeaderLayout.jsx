import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import dmalogo from '../../images/dmalogo.png';
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from 'react-icons/ri';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavContentComp from './NavContent';

const HeaderLayoutComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='tw-relative'>
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
              <h1 className='tw-text-2xl tw-font-bold tw-text-black '>DMA</h1>
              <h2 className='-tw-mt-2 tw-text-xs tw-font-semibold tw-text-gray-600'>
                Debtor Monitoring Agency
              </h2>
              <h4 className='-tw-mt-2 tw-text-[9px] tw-text-blue-600'>
                For Schools
              </h4>
            </div>
          </div>

          {/* links */}
          <div className='tw-hidden tw-items-center tw-justify-center tw-space-x-10 lg:tw-flex '>
            <Link
              to='/'
              className='tw-cursor-pointer tw-font-fam1  tw-text-inherit tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-gray-500'
            >
              Home
            </Link>

            <Link
              className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
              to='/features'
            >
              Features
            </Link>
            <Link
              className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
              to='/about'
            >
              About Us
            </Link>
            <Link
              className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
              to='/contact'
            >
              Contact Us
            </Link>
          </div>

          {/* login | register */}
          <div className='tw-hidden tw-items-center tw-justify-center tw-space-x-4 tw-font-fam1 lg:tw-flex '>
            <Link
              className='tw-w-fit tw-rounded-lg tw-border tw-border-blue-900 tw-bg-transparent tw-py-2 tw-px-10 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-100'
              to='/login'
            >
              Login
            </Link>
            {/* <Button className=' '>Login</Button> */}
            <Link
              className=' tw-w-fit tw-rounded-lg  tw-bg-blue-900 tw-py-2 tw-px-10  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
              to='/signup'
            >
              Register
            </Link>
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
  );
};

export default HeaderLayoutComp;
