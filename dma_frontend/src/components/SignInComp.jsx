import React, { useState } from 'react';
import '../styles/signin.css';
import signin from '../images/signin.jpg';
import HeaderLayoutComp from './layout/HeaderLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useMount, useUpdateEffect } from 'react-use';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInComp = () => {
  let navigate = useNavigate();
  // const [value, updateCookie] = useCookie('dma-cookies');
  const [cookies, setCookie] = useCookies(['dma-cookies']);
  const [formValue, setFormValue] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleRole = async () => {
    try {
      const token = cookies['dma-cookies'];
      const result1 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/user/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const final = result2.data.filter(
        (school) => school?.author === result1?.data?.pk
      );
      return final[0];
    } catch (error) {
      return error;
    }
  };

  useMount(async () => {
    if (cookies['dma-cookies']) {
      const result = await handleRole();
      console.log('result :>> ', result);
      if (result) {
        navigate('/dashboard');
      } else {
        navigate('/contend');
      }
    }
  });

  // console.log('cookies :>> ', cookies);
  // console.log('login', formValue);
  const handleForm = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        // '${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/login/',
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/login/`,
        {
          ...formValue,
        }
      );
      console.log('result', result);

      setCookie('dma-cookies', result?.data?.key);
      const token = result?.data?.key;
      const result1 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/user/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const final = result2.data.filter(
        (school) => school?.author === result1?.data?.pk
      );
      // const result2 = await handleRole();
      if (final[0]) {
        navigate('/dashboard');
        console.log('dashboard');
      } else {
        console.log('contend');
        navigate('/contend');
      }
    } catch (error) {
      console.error('error', error);
      toast.error('Incorrect Credentials', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    // navigate('/dashboard');
  };

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
              <label htmlFor='email'>Username*</label>

              <br />
              <br />
              <input
                type='text'
                className='email-in'
                name='username'
                onChange={(e) => handleForm(e)}
                required=''
                placeholder='Enter your User Name'
              />
              <br />
              <br />
              <br />

              <div className='tw-flex tw-justify-between'>
                <label htmlFor='pswd'>Password*</label>
                <button onClick={(e) => handleShow(e)} className='tw-ml-2'>
                  Show
                </button>
              </div>
              {/* <br /> */}
              <br />
              <input
                // type='password'
                type={`${showPass ? 'text' : 'password'}`}
                name='password'
                onChange={(e) => handleForm(e)}
                placeholder='******************'
                className='pswd01-in'
                autoComplete='current-password'
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
                  <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
              </div>

              <br />
              <br />
              <button onClick={(e) => handleSubmit(e)} className='btn-a-in'>
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
      <ToastContainer />
    </div>
  );
};

export default SignInComp;
