import React from 'react';
import Forgotimage from '../images/Forgotimage.jpg';
import HeaderLayoutComp from './layout/HeaderLayout';
import '../styles/forgot-password.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordComp = () => {
  const navigate = useNavigate();
  const showToast = () => {
    toast.success(
      `
    🎉 Successfully changed your password. You will be redirected to the login page
    `,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  return (
    <div>
      <HeaderLayoutComp />
      {
        <div className='form-container'>
          <div className='cath-image'>
            <img src={Forgotimage} alt='forgot-password' />
          </div>
          <div className='forgot-pwd-form'>
            <h2>Don't panic, Recover your account with ease!</h2>
            <p>Please enter your details</p>
            <form className='first-form'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email'
              />
            </form>
            <p className='code'>A code will be sent to your email</p>
            <button className='btn receive-btn'>Receive Code</button>
            <form className='second-form'>
              <div>
                <label htmlFor='code'>Enter code</label>
                <input type='password' name='code' id='code' />
              </div>
              <div>
                <label>New Password</label>
                <input
                  type='new-password'
                  name='new-password'
                  id='new-password'
                />
              </div>
              <div>
                <label htmlFor='confirm-password'>Confirm password</label>
                <input
                  type='confirm-password'
                  name='confirm-password'
                  id='confirm-password'
                />
              </div>
            </form>
            <button
              onClick={() => {
                setTimeout(() => {
                  navigate('/signin');
                }, 4000);
                showToast();
              }}
              className='cath-submit-btn'
            >
              Submit
            </button>
          </div>
        </div>
      }
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordComp;
