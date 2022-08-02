import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginPage = () => {
  return (
    <div>
      <header className='tw-w-full tw-p-3'>
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
      <p>Login Page</p>
      <div className='info'>
        <div className='image'>
          <img src='' alt='logo' />
        </div>
        <h2>Welcome back!</h2>
        <p>Please enter your details</p>
        <div className='login-form'>
          <form action='' method='post'>
            <label for='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='johndoe@email.com'
            />
            <label for='password'>Password</label>
            <ion-icon
              name='lock-closed-outline'
              id='lock-closed-outline'
            ></ion-icon>
            <input type='password' name='password' id='password' />
            <ion-icon name='eye-off-outline' id='eye-off-outline'></ion-icon>
            <div className='login-remember'>
              <label>
                {/* <input type="checkbox" name="login-remember" id="login-remember" checked /> */}
                <ion-icon name='checkmark-circle-outline'></ion-icon>
                {/* <ion-icon name="ellipse-outline"></ion-icon> */}
                Remember me
              </label>
            </div>
            <input type='button' value='Sign In' />
            <div>
              <p>
                Forgot password?{' '}
                <a className='a-link' href='/'>
                  Reset Password
                </a>{' '}
              </p>
              <p>
                Don't have an account?{' '}
                <a className='a-link' href='/'>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
