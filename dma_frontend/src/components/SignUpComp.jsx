import React from 'react';
import '../styles/signup.css';
import { Link } from 'react-router-dom'
import { BsEyeSlash } from 'react-icons/bs';

const SignUpComp = () => {
  return (
    <div className=''>
      <div className=''>
        {/* TYPE YOUR CODE HERE. IF YOU USE TAILWINDCSS MAKE SURE TO ADD THE tw- PREFIX TO THE UTILITY CLASS AND IF YOU WRITE VANILLA CSS KINDLY USE signup.css FILE */}
      <div className="signup">
        <div className="signup--left"></div>
        <div className="signup--right">
          <div className="signup-logo">
            {/* Logo goes here... */}
          </div>
          <h1 className='signup--title'>Sign up</h1>
          <form action="">
            <div className="form--group">
              <label htmlFor="name" className="form--label">Full Name*</label>
              <input type="text" id='name' className="form--input" placeholder='Enter Your Full Name'  required/>
            </div>
            <div className="form--group">
              <label htmlFor="email" className="form--label">Email*</label>
              <input type="email" id='email' className="form--input" placeholder='Enter Your Email' required/>
            </div>
            <div className="form--group input--icon">
              <label htmlFor="password" className="form--label">Password*</label>
              <input type="password" id='password' className="form--input" placeholder='********' required />
              <BsEyeSlash className="signup--icon" />
            </div>
            <div className="form--group">
              <input type="checkbox" id='checkbox' className="form--checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="form--group">
            <input type="submit" className="form--input form--submit" value={'Sign Up'} />
            </div>
            <p className='signup--paragraph'>
              <span className='signup--span'>Already have an account?</span>
              <Link to='/login' className='signup--link'>Sign In</Link>
              </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignUpComp;
