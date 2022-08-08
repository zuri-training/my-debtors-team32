import React from 'react';
import '../styles/signup.css';
import signup from '../images/signup.png';
import HeaderLayoutComp from './layout/HeaderLayout';
import { Link } from 'react-router-dom';
const SignUpComp = () => {
  return (
    <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      <HeaderLayoutComp />
      <div className='flex-contain '>
        <div className='flex-item-2'>
          <img id='flex-img' src={signup} alt='img1' />
        </div>
        <div className='flex-item-1'>
          <img id='img-desktop' src='/svg/svg' alt='' />
          <p id='p-1'>Sign up</p>

          <form className='forme'>
            <label htmlFor='name'>Full name*</label>
            <br />
            <br />
            <input
              type='text'
              className='fname'
              name='text'
              required=''
              placeholder='Enter your full name'
            />
            <br />
            <br />

            <label htmlFor='email'>Email address*</label>
            <br />
            <br />
            <input
              type='email'
              className='email'
              name='email'
              required=''
              placeholder='Enter your Email Address'
            />
            <br />
            <br />

            <label htmlFor='pswd'>Password*</label>
            <br />
            <br />
            <input
              type='password'
              name='password'
              placeholder='******************'
              className='pswd01'
              autocomplete='current-password'
              required=''
              id='id_password'
            />
            <i className='far fa-eye' id='togglePassword'></i>
            <script src='signup.js'></script>
            <p id='p-2'>
              <small>
                By clicking the button you are agreeing to our
                <a href='HomePage.jsx' className='bold-1'>
                  {' '}
                  Terms of services
                </a>
              </small>
            </p>
            <br />
            <button className='btn-a'>Sign Up</button>
            <br />
            <small id='small2'>
              Already have an account?{' '}
              <Link to='/signin' className='bold-2'>
                Sign In
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
