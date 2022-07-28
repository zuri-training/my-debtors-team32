import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  return (
    <div>
      <header className='w-full'>
        <nav className='mx-4 my-2 flex justify-between'>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/features'>Features</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <ul className='flex space-x-3'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Typography>Features Page</Typography>
    </div>
  );
};

export default FeaturesPage;
