import React from 'react';
import '../styles/signin.css';
import signin from '../images/signin.jpg';
import HeaderLayoutComp from './layout/HeaderLayout';
import { Link, useNavigate } from 'react-router-dom';
const SignInComp = () => {
  let navigate = useNavigate();
  return (
    <div className=' tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      <HeaderLayoutComp />
      <div className=''>
        <div className='in-container'>
          <div className='in-item-2'>
            <img id='flex-img-in' src={signin} alt='img2' />
          </div>
          <div className='in-item-1'>
            <img id='img-desktop-in' src='/svg/svg' alt='' />
            <p id='p-in'>Sign In To Your Account</p>

            <form className='forme'>
              <label htmlFor='email'>Email address*</label>
              <br />
              <br />
              <input
                type='email'
                className='email-in'
                name='email'
                required=''
                placeholder='Enter your Email Address'
              />
              <br />
              <br />
              <br />

              <label htmlFor='pswd'>Password*</label>
              <br />
              <br />
              <input
                type='password'
                name='password'
                placeholder='******************'
                className='pswd01-in'
                autocomplete='current-password'
                required=''
                id='id_password-in'
              />
              <i className='far fa-eye' id='togglePassword-in'></i>
              <script src='signup.js'></script>
              <br />
              <br />
              <div className='Rem-For'>
                <div className='Rem'>
                  <input type='Checkbox' id='remember' />
                  &nbsp;
                  <label htmlFor='remember'>Remember Me</label>
                </div>
                <div className='For'>
                  <a href='/forgot-password'>Forgot Password?</a>
                </div>
              </div>

              <br />
              <br />
              <button
                onClick={() => navigate('/dashboard')}
                className='btn-a-in'
              >
                Sign In
              </button>
              <br />
              <br />
              <small id='small2-in'>
                Don't have an account?{' '}
                <Link to='/signup' className='bolde-2'>
                  <strong>Sign up</strong>
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComp;
