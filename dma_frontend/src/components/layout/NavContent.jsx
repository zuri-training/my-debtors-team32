import React from 'react';
import { NavLink } from 'react-router-dom';

const NavContentComp = () => {
  let activeStyle = {
    color: '#003865',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  };

  return (
    <div className='tw-relative tw-flex tw-min-h-[80vh] tw-flex-col'>
      <div className='tw-flex tw-flex-col tw-space-y-5'>
        <NavLink
          to='/'
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>

        {/* <NavLink
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/features'
        >
          Features
        </NavLink> */}

        {/* <NavLink
          className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500 '
          to='/adddeptor'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Add Deptor
        </NavLink> */}

        {/* <NavLink
          className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/deptorlist'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Deptor List
        </NavLink> */}

        {/* <NavLink
          className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/deptorsearch'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Deptor Search
        </NavLink> */}

        {/* <NavLink
          className='tw-font-fam1 tw-text-inherit tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/deptorcontend'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Deptor Contend
        </NavLink> */}

        <NavLink
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/about'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/contact'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
        <NavLink
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/documentation'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Documentation
        </NavLink>
      </div>
      {/* login | register */}
      <div className='tw-absolute tw-inset-x-0 tw-bottom-3 tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-font-fam1'>
        <NavLink
          className='tw-w-full tw-rounded-lg tw-border tw-border-blue-900 tw-bg-transparent tw-py-2 tw-px-10 tw-text-center tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-100'
          to='/signin'
        >
          Login
        </NavLink>
        <NavLink
          className=' tw-w-full tw-rounded-lg tw-bg-blue-900  tw-py-2 tw-px-10 tw-text-center  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
          to='/schoolreg'
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavContentComp;
