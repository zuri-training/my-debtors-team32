import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
const SignupComp = () => {
  return (
    <div>
      <header className='tw-w-full tw-bg-[#b4b1b1] tw-p-3'>
        <nav className='tw-mx-4 tw-flex tw-justify-between tw-py-2'>
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
      <div className='flex-container'>
        <div className='flex-item-1'>
          <p id='p-1'>Sign up</p>

          <form className='form'>
            <label for='name'>Full name</label>
            <br />
            <input
              type='text'
              className='fname'
              placeholder='Enter your full name'
            />
            <br />
            <br />

            <label for='email'>Email address</label>
            <br />
            <input
              type='email'
              className='email'
              placeholder='Enter your Email Address'
            />
            <br />
            <br />

            <label for='pswd'>Password</label>
            <br />
            <input type='password' className='pswd' placeholder='*******' />
            <br />
            <br />

            <label for='cpswd'>Confirm password</label>
            <br />
            <input type='password' className='cpswd' placeholder='*******' />
            <br />

            <p id='p-2'>
              <small>
                By clicking the button you are agreeing to our
                <a className='bold' href='!#'>
                  {' '}
                  Terms of services
                </a>
              </small>
            </p>
            <br />
            <button className='btn'>Create account</button>
            <br />
            <br />
            <small id='small2'>
              Already have an account? <a href='!#'>Log in</a>
            </small>
          </form>
        </div>
        <div className='flex-item-2'>
          <p>image</p>
        </div>
      </div>
    </div>
  );
};

export default SignupComp;
