import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const NavContentComp = () => {
  let activeStyle = {
    color: '#003865',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  };
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['dma-cookies']);

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
      {!cookies['dma-cookies'] ? (
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
      ) : (
        <div className='tw-absolute tw-inset-x-0 tw-bottom-3 tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-font-fam1'>
          <button
            className=' tw-w-full tw-rounded-lg tw-bg-blue-900  tw-py-2 tw-px-10 tw-text-center  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
            onClick={() => {
              setCookie('dma-cookies', 'null');
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavContentComp;
