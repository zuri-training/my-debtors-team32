import { Button, Typography } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className='mx-2 flex h-screen flex-col items-center justify-center'>
      {/* image */}
      <div className='relative h-44 w-44 md:h-80 md:w-80'>
        <img src='error_1.png' alt='error name' />
      </div>

      <div className='flex flex-col space-y-1'>
        <Typography className='bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-center text-xl font-black text-transparent md:text-3xl'>
          This Page is Missing!!!
        </Typography>

        <Typography className='text-center text-xs text-gray-400 md:text-base'>
          You Navigated to a wrong place
        </Typography>
      </div>

      <div className='mt-5'>
        <Button
          className='capitalize'
          variant='outlined'
          // color='error'
          onClick={() => navigate(`/`)}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
