import React from 'react';
import { Link } from 'react-router-dom';

const NavContentComp = () => {
  return (
    <div className='tw-relative tw-flex tw-min-h-[80vh] tw-flex-col'>
      <div className='tw-flex tw-flex-col tw-space-y-5'>
        <Link
          to='/'
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
        >
          Home
        </Link>

        <Link
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/features'
        >
          Features
        </Link>

        <Link
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/about'
        >
          About Us
        </Link>
        <Link
          className='tw-font-fam1 tw-text-black tw-no-underline tw-transition-all hover:tw-text-gray-500'
          to='/contact'
        >
          Contact Us
        </Link>
      </div>
      {/* login | register */}
      <div className='tw-absolute tw-inset-x-0 tw-bottom-3 tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-font-fam1'>
        <Link
          className='tw-w-full tw-rounded-lg tw-border tw-border-blue-900 tw-bg-transparent tw-py-2 tw-px-10 tw-text-center tw-text-black tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-100'
          to='/login'
        >
          Login
        </Link>
        <Link
          className=' tw-w-full tw-rounded-lg tw-bg-blue-900  tw-py-2 tw-px-10 tw-text-center  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
          to='/signup'
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavContentComp;
