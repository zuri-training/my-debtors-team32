import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div>
      <header className='tw-w-full'>
        <nav className='tw-mx-4 tw-my-2 tw-flex tw-justify-between'>
          <ul className='tw-flex tw-space-x-4'>
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
          <ul className='tw-flex tw-space-x-3'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className='tw-mx-auto tw-my-6 tw-max-w-2xl tw-rounded-lg tw-shadow-md '>
        <div className='tw-flex tw-justify-between tw-p-8'>
          <img
            src='https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg'
            alt='registraion placeholder'
            className='tw-h-[12rem] tw-w-[15rem] tw-overflow-hidden tw-rounded-lg'
          />
          <div className='tw-flex tw-flex-col tw-space-y-4'>
            <h2 className='tw-text-xl tw-font-bold'>
              Register your account for free!
            </h2>
            <ul>
              <li className='tw-flex tw-flex-col tw-space-y-2'>
                <Link
                  to='/school'
                  className='tw-w-fit tw-rounded-md tw-border tw-p-2 tw-text-sm'
                >
                  🏫 Register as a school
                </Link>

                <Link
                  to='/student'
                  className='tw-w-fit tw-rounded-md tw-border tw-p-2 tw-text-sm'
                >
                  👨🏽‍🎓 Register as a student
                </Link>
              </li>
            </ul>
            <div className=' tw-pt-6 tw-text-center tw-text-xs tw-text-gray-500'>
              <span>Already have an account? </span>
              <Link to='/login'>Login here</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
