import React, { useState } from 'react';
import '../styles/signup.css';
import signup from '../images/signup.png';
import HeaderLayoutComp from './layout/HeaderLayout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useMount } from 'react-use';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpComp = () => {
  const [showPass, setShowPass] = useState(false);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [cookies, setCookie] = useCookies(['dma-cookies']);
  console.log('sign up', formValue);
  const handleForm = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password1, password2 } = formValue;
    try {
      if (
        username !== '' &&
        email !== '' &&
        password1 !== '' &&
        password2 !== '' &&
        username &&
        email &&
        password1 &&
        password2
      ) {
        if (password1 !== password2) {
          toast.error('Password does not match');
        } else {
          const result = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/registration/`,

            {
              ...formValue,
            }
          );
          setCookie('dma-cookies', result?.data?.key);
          toast.success('Successfully registered');
          navigate('/contend');
        }
      } else {
        toast.error('Please fill all fields');
      }
    } catch (error) {
      toast.error('Not Completed, Please try again with different credentials');
    }
  };
  // console.log('cookies', cookies);

  let navigate = useNavigate();

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

  const handleShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
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
            <label htmlFor='name'>User Name*</label>
            <br />
            <br />
            <input
              type='text'
              className='fname'
              name='username'
              value={formValue?.username}
              onChange={(e) => handleForm(e)}
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
              value={formValue?.email}
              name='email'
              onChange={(e) => handleForm(e)}
              required=''
              placeholder='Enter your Email Address'
            />
            <br />
            <br />

            <div className='tw-flex tw-items-center tw-justify-between'>
              <label htmlFor='pswd'>Password*</label>
              <button onClick={(e) => handleShow(e)}>Show</button>
            </div>
            <br />
            <input
              type={`${showPass ? 'text' : 'password'}`}
              name='password1'
              placeholder='******************'
              className='pswd01'
              value={formValue?.password1}
              onChange={(e) => handleForm(e)}
              // autoComplete
              required
              id='id_password'
            />
            <br />
            <br />
            <label htmlFor='pswd'>Confirm Password*</label>
            <br />
            <br />
            <input
              type={`${showPass ? 'text' : 'password'}`}
              name='password2'
              placeholder='******************'
              className='pswd01'
              value={formValue?.password2}
              onChange={(e) => handleForm(e)}
              required
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
            <button onClick={(e) => handleSubmit(e)} className='btn-a'>
              Sign Up
            </button>
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
      <ToastContainer />
    </div>
  );
};

export default SignUpComp;
