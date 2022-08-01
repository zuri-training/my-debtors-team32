import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
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
      <section className='mx-auto my-6 max-w-2xl rounded-lg shadow-md '>
        <div className='flex justify-between p-8'>
          <img
            src='https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg'
            alt='registraion placeholder'
            className='h-[12rem] w-[15rem] overflow-hidden rounded-lg'
          />
          <div className='flex flex-col space-y-4'>
            <h2 className='text-xl font-bold'>
              Register your account for free!
            </h2>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link
                  to='/school'
                  className='w-fit rounded-md border p-2 text-sm'
                >
                  🏫 Register as a school
                </Link>

                <Link
                  to='/student'
                  className='w-fit rounded-md border p-2 text-sm'
                >
                  👨🏽‍🎓 Register as a student
                </Link>
              </li>
            </ul>
            <div className=' pt-6 text-center text-xs text-gray-500'>
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
