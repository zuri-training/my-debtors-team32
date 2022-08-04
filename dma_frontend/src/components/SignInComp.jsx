import React from 'react';
import '../styles/signin.css';
import signin from '../images/signin.jpg';
const SignInComp = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='in-container'>
          <div className='in-item-2'>
            <img id='flex-img-in' src={signin} alt='img2' />
          </div>
          <div className='in-item-1'>
            <div className='known-in'>
              <div className='tnav-in'>
                <img src='/svg/svg' alt='' />
                <div id='myLinks'>
                  <a href='HomePage.jsx'>Home</a>
                  <a href='SignInComp.jsx'>Sign In</a>
                  <a href='ContactUsComp.jsx'>Contact Us</a>
                </div>
                {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                 <i class="fa fa-bars"></i>
               </a> */}
              </div>
            </div>
            <img id='img-desktop-in' src='/svg/svg' alt='' />
            <p id='p-in'>Sign In</p>

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
                  <a href='HomePage.jsx'>Forgot Password?</a>
                </div>
              </div>

              <br />
              <br />
              <button className='btn-a-in'>Sign In</button>
              <br />
              <br />
              <small id='small2-in'>
                Don't have an account?{' '}
                <a href='SignInComp.jsx' className='bolde-2'>
                  Sign up
                </a>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComp;
