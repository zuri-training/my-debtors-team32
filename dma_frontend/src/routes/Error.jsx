import Button from 'react-bootstrap/Button';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className='tw-mx-2 tw-flex tw-h-screen tw-flex-col tw-items-center tw-justify-center'>
      {/* image */}
      <div className='tw-relative tw-h-44 tw-w-44 md:tw-h-80 md:tw-w-80'>
        <img src='error_1.png' alt='error name' />
      </div>

      <div className='tw-flex tw-flex-col tw-space-y-1'>
        <p className='tw-bg-gradient-to-r tw-from-red-500 tw-to-yellow-400 tw-bg-clip-text tw-text-center tw-text-xl tw-font-black tw-text-transparent md:tw-text-3xl'>
          This Page is Missing!!!
        </p>

        <p className='tw-text-center tw-text-xs tw-text-gray-400 md:tw-text-base'>
          You Navigated to a wrong place
        </p>
      </div>

      <div className='tw-mt-5'>
        <Button
          className='capitalize'
          variant='outlined-primary'
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
