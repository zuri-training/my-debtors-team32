import React, { useState } from 'react';
import { Image, Offcanvas } from 'react-bootstrap';
import dmalogo from '../../images/dmalogo.png';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { FiUserCheck, FiEdit } from 'react-icons/fi';
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineListAlt,
  MdAddCircleOutline,
} from 'react-icons/md';
import {
  AiOutlineFileAdd,
  AiOutlineBell,
  AiOutlineMenu,
  AiOutlinePoweroff,
} from 'react-icons/ai';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { useCookie } from 'react-use';
import { useCookies } from 'react-cookie';

const DashboardSideNav = () => {
  const navigate = useNavigate();
  const [showDebtors, setShowDebtors] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [show, setShow] = useState(false);
  // const [value] = useCookie('dma-cookies');
  // console.log('value', value);
  const [setCookie] = useCookies(['dma-cookies']);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log('cookies', cookies['dma-cookies']);

  let activeStyle = {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#0047AB',
    borderLeftWidth: '10px',
    borderColor: 'grey',
  };
  const handleDebtor = () => setShowDebtors(!showDebtors);
  const handleFeatures = () => setShowFeatures(!showFeatures);

  return (
    <div className=''>
      {/* large screens */}
      <div className=' tw-relative tw-hidden tw-h-screen tw-w-[15rem] tw-bg-zinc-700 lg:tw-block'>
        <div className=' tw-space-y-5 tw-py-2 tw-text-white '>
          {/* logo and name */}
          <div className=' tw-flex tw-items-center tw-px-6 '>
            <Image
              src={dmalogo}
              alt='dma logo'
              // roundedCircle
              className='tw-flex tw-w-16 tw-items-center '
            />
            <div className='tw-flex tw-flex-col'>
              <h1 className='tw-text-2xl tw-font-bold '>DMA</h1>
              <h2 className='-tw-mt-2 tw-text-xs tw-font-semibold '>
                Debtor Monitoring Agency
              </h2>
            </div>
          </div>
          {/* search bar */}
          <div className='tw-mt-2 tw-flex tw-flex-col tw-px-6 '>
            <Form.Control type='search' placeholder='🔍 Quick Search' />
          </div>
          {/* links */}
          <div className='tw-flex tw-flex-col tw-space-y-5 tw-text-white'>
            <NavLink
              to='/dashboard'
              className='tw-cursor-pointer  tw-py-2 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-space-x-2  tw-px-4'>
                <BiHome />
                <span>My Home</span>
              </div>
            </NavLink>
            <NavLink
              to='/admin/profile'
              className='tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-space-x-2  tw-px-4'>
                <FiUserCheck />
                <span>Profile</span>
              </div>
            </NavLink>
            <div
              onClick={() => handleDebtor()}
              className='tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-justify-between tw-px-4'>
                <div className='tw-flex tw-items-center tw-space-x-2'>
                  <FiEdit />
                  <span>Debtors</span>
                </div>
                {showDebtors ? (
                  <MdArrowDropUp className='tw-text-lg' />
                ) : (
                  <MdArrowDropDown className='tw-text-lg' />
                )}
              </div>
            </div>
            {showDebtors && (
              <div className='tw-space-y-5'>
                <NavLink
                  to='/admin/adddebtor'
                  className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                    <MdAddCircleOutline />
                    <span>Add Debtors</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/admin/contend'
                  className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                    <MdOutlineListAlt />
                    <span>List of Contends</span>
                  </div>
                </NavLink>
              </div>
            )}
            <NavLink
              to='/admin/listdebtors'
              className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                <MdAddCircleOutline />
                <span>List of Debtors</span>
              </div>
            </NavLink>
            <div
              onClick={() => handleFeatures()}
              className='tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-justify-between tw-px-4'>
                <div className='tw-flex tw-items-center tw-space-x-2'>
                  <AiOutlineFileAdd />
                  <span>Features</span>
                </div>
                {showFeatures ? (
                  <MdArrowDropUp className='tw-text-lg' />
                ) : (
                  <MdArrowDropDown className='tw-text-lg' />
                )}
              </div>
            </div>
            {showFeatures && (
              <div className='tw-space-y-5'>
                <NavLink
                  to='/admin/listschools'
                  className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                    <MdOutlineListAlt />
                    <span>List of Schools</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/admin/documentation'
                  className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                    <MdOutlineListAlt />
                    <span>Documentation</span>
                  </div>
                </NavLink>
              </div>
            )}
            <NavLink
              to='/admin/notifications'
              className='tw-flex tw-cursor-pointer tw-py-2 tw-pl-3 tw-font-fam1 tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-white'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                <AiOutlineBell />
                <span>Notifications</span>
              </div>
            </NavLink>
          </div>
        </div>
        {/* logout */}
        <div className='tw-absolute tw-inset-x-0 tw-bottom-4 tw-flex tw-w-full tw-justify-center'>
          <button
            onClick={() => {
              // setCookie('dma-cookies', null);
              // setCookie('dma-cookies', null);
              navigate('/');
            }}
            className='tw-flex tw-cursor-pointer tw-rounded-md tw-bg-green-300 tw-py-2 tw-px-3 tw-font-fam1 tw-text-blue-500 tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-blue-500 '
          >
            Log out
          </button>
        </div>
      </div>
      {/* small screens */}
      <div className='tw-block tw-text-white lg:tw-hidden '>
        <div className='tw-flex tw-justify-between tw-bg-zinc-700'>
          {/* logo and name */}
          <div className=' tw-flex tw-items-center tw-space-x-1 tw-px-6'>
            <Image
              src={dmalogo}
              alt='dma logo'
              // roundedCircle
              className='tw-flex tw-w-16 tw-items-center '
            />
            <div className='tw-flex tw-flex-col'>
              <h1 className='tw-text-xl tw-font-bold '>DMA</h1>
              <h2 className='-tw-mt-2 tw-text-xs tw-font-semibold '>
                Debtor Monitoring Agency
              </h2>
            </div>
          </div>
          {/* hamburger */}
          <div
            onClick={handleShow}
            className='tw-w-fit  tw-cursor-pointer tw-rounded-full tw-border-0 tw-bg-transparent tw-px-4 tw-py-3 tw-text-black
          tw-transition-all tw-duration-500 tw-ease-in-out '
          >
            <AiOutlineMenu className='tw-text-[22px] tw-text-white' />
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>DMA</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body className='tw-relative'>
            {/* search bar */}
            <div className='tw-mt-2 tw-flex tw-flex-col tw-px-6 '>
              <Form.Control type='search' placeholder='🔍 Quick Search' />
            </div>
            {/* links */}
            <div className='tw-mt-6 tw-flex tw-flex-col tw-space-y-5'>
              <NavLink
                to='/dashboard'
                className='tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-space-x-2  tw-px-4'>
                  <BiHome />
                  <span>My Home</span>
                </div>
              </NavLink>
              <NavLink
                to='/admin/profile'
                className='tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-space-x-2  tw-px-4'>
                  <FiUserCheck />
                  <span>Profile</span>
                </div>
              </NavLink>
              <div
                onClick={() => handleDebtor()}
                className='tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-justify-between tw-px-4'>
                  <div className='tw-flex tw-items-center tw-space-x-2'>
                    <FiEdit />
                    <span>Debtors</span>
                  </div>
                  {showDebtors ? (
                    <MdArrowDropUp className='tw-text-lg' />
                  ) : (
                    <MdArrowDropDown className='tw-text-lg' />
                  )}
                </div>
              </div>
              {showDebtors && (
                <div className='tw-space-y-5'>
                  <NavLink
                    to='/admin/adddebtor'
                    className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                      <MdAddCircleOutline />
                      <span>Add Debtors</span>
                    </div>
                  </NavLink>
                  <NavLink
                    to='/admin/contend'
                    className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                      <MdOutlineListAlt />
                      <span>List of Contends</span>
                    </div>
                  </NavLink>
                </div>
              )}
              <NavLink
                to='/admin/listdebtors'
                className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                  <MdAddCircleOutline />
                  <span>List of Debtors</span>
                </div>
              </NavLink>
              <div
                onClick={() => handleFeatures()}
                className='tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-justify-between tw-px-4'>
                  <div className='tw-flex tw-items-center tw-space-x-2'>
                    <AiOutlineFileAdd />
                    <span>Features</span>
                  </div>
                  {showFeatures ? (
                    <MdArrowDropUp className='tw-text-lg' />
                  ) : (
                    <MdArrowDropDown className='tw-text-lg' />
                  )}
                </div>
              </div>
              {showFeatures && (
                <div className='tw-space-y-5'>
                  <NavLink
                    to='/admin/listschools'
                    className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                      <MdOutlineListAlt />
                      <span>List of Schools</span>
                    </div>
                  </NavLink>
                  <NavLink
                    to='/admin/documentation'
                    className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                      <MdOutlineListAlt />
                      <span>Documentation</span>
                    </div>
                  </NavLink>
                </div>
              )}
              <NavLink
                to='/admin/notifications'
                className='tw-flex tw-cursor-pointer tw-py-2 tw-font-fam1 tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-black'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className='tw-flex tw-items-center tw-space-x-2 tw-px-4 '>
                  <AiOutlineBell />
                  <span>Notifications</span>
                </div>
              </NavLink>
            </div>
            {/* logout */}
            <div className='tw-absolute tw-inset-x-0 tw-bottom-4 tw-flex tw-w-full tw-justify-center'>
              <button
                onClick={() => {
                  // setCookie('dma-cookies', null);
                  navigate('/');
                }}
                className='tw-flex tw-cursor-pointer tw-rounded-md tw-bg-green-300 tw-py-2 tw-px-3 tw-font-fam1 tw-text-blue-500 tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-text-blue-500 '
              >
                <a
                  href='/'
                  className='tw-flex tw-items-center tw-space-x-2 tw-px-4 tw-no-underline'
                >
                  <AiOutlinePoweroff />
                  <span>Log Out</span>
                </a>
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default DashboardSideNav;
