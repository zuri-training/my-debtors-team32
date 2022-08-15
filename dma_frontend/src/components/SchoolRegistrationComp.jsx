import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/school-register.css';
import '../styles/schoolsadmin.css';
// import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useMount } from 'react-use';
import { useCookies } from 'react-cookie';

const SchoolRegistrationComp = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [registerValue, setRegisterValue] = useState({});

  const [cookies] = useCookies(['dma-cookies']);

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
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/${result1?.data?.pk}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      return result2?.data;
    } catch (error) {
      return error;
    }
  };

  useMount(async () => {
    const result = await handleRole();
    console.log('result :>> ', result.message);
    if (cookies['dma-cookies'] && !result?.message) {
      navigate('/dashboard');
    } else if (cookies['dma-cookies'] !== 'null') {
      navigate('/contend');
    }
  });

  const handleShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterValue({ ...registerValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/registration/`,
        {
          // username: formValue?.username,
          // email: formValue?.schoolEmail,
          // password1: formValue?.password1,
          // password2: formValue?.password2,
          ...registerValue,
        }
      );
      console.log('result :>> ', result.data);
      const token = result?.data?.key;

      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/user/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log('result2', result2?.data);

      const result3 = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/register/`,
        {
          ...formValue,
          author: result2?.data?.pk,
        }
      );
      console.log('result3 :>> ', result3.data);
      showToast();
    } catch (error) {
      console.error(error);
    }
  };

  console.log('reister formValue', formValue);
  console.log('registerValue', registerValue);
  const showToast = () => {
    toast.success(
      `
    🎉 Regristration Complete. You will be sent a confirmation mail once all your details have been
          confirmed
    `,
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div
      className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'
      id='top-page-reg'
    >
      {!showNext && (
        <div>
          <header class='first-reg'>
            <h2>School Registration</h2>
          </header>
          <main>
            <form className='Reg-form'>
              <div className='form-group'>
                <label htmlFor='reg-parent' className='reg-label'>
                  Name of School
                </label>
                <input
                  name='school_name'
                  type='text'
                  onChange={(e) => handleForm(e)}
                  className='reg-input'
                  id='reg-parent'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-category' className='reg-label'>
                  School Category
                </label>
                <select
                  name='school_category'
                  onChange={(e) => handleForm(e)}
                  // name='schselect'
                  className='reg-input'
                  id='reg-input'
                >
                  <option selected value='Public'>
                    Select School Category
                  </option>
                  <option value='Public'>Public School</option>
                  <option value='Private'>Private School</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='reg-contact' className='reg-label'>
                  Description
                </label>
                <input
                  name='description'
                  onChange={(e) => handleForm(e)}
                  type='text'
                  className='reg-input'
                  id='reg-contact'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-schaddress' className='reg-label'>
                  School Address
                </label>
                <input
                  name='school_address'
                  onChange={(e) => handleForm(e)}
                  type='text'
                  className='reg-input'
                  id='reg-schaddress'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  Contact Number
                </label>
                <input
                  name='contact_number'
                  onChange={(e) => handleForm(e)}
                  type='tel'
                  className='reg-input'
                  // id='reg-num'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  User Name
                </label>
                <input
                  name='username'
                  onChange={(e) => handleRegister(e)}
                  type='text'
                  className='reg-input'
                  // id='reg-num'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-email' className='reg-label'>
                  Email address
                </label>
                <input
                  name='email'
                  onChange={(e) => handleRegister(e)}
                  type='email'
                  className='reg-input'
                  // id='reg-parent'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='pswd' className='reg-label'>
                  Password*
                </label>

                <input
                  type={`${showPass ? 'text' : 'password'}`}
                  name='password1'
                  className='reg-input'
                  onChange={(e) => handleRegister(e)}
                  // id='reg-parent'
                />
                <button onClick={(e) => handleShow(e)} className='tw-ml-2'>
                  Show
                </button>
              </div>
              <div className='form-group'>
                <label htmlFor='pswd' className='reg-label'>
                  Confirm Password
                </label>

                <input
                  type={`${showPass ? 'text' : 'password'}`}
                  name='password2'
                  onChange={(e) => handleRegister(e)}
                  className='reg-input'
                  // id='reg-parent'
                />
              </div>
              <div className='reg-doc'>
                <div>
                  <h3 className='reg-text'>Upload document</h3>
                </div>
              </div>
              <br />
              <br />
              <div className='reg-title'>
                <form action=''>
                  <div>
                    <label htmlFor='file1'>The certificate for schools:</label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                    <br />
                    <label htmlFor='file1'>
                      School registration certificate:
                    </label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                    <br />
                    <label htmlFor='file1'>
                      Approval by ministry of Education:
                    </label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                  </div>
                </form>
              </div>{' '}
              <br />
              <br />
              <label htmlFor='' className='reg-label'></label>
              <input
                type='submit'
                value='Upload Document'
                className='reg-input reg-btn01'
              />
            </form>
            <div className='next-btn'>
              <button
                id='next-nav'
                onClick={() => {
                  setShowNext(true);
                  navigate('/schoolreg#');
                }}
              >
                Next
              </button>
            </div>
          </main>
        </div>
      )}
      {showNext && (
        <div class='f-item-1' id='top-page'>
          <h2 id='Sch-admin'>School admin</h2>

          <form class='form'>
            <label for='name' id='lab'>
              Name of proprietor
            </label>
            <input
              name='proprietor_name'
              type='text'
              onChange={(e) => handleForm(e)}
              class='proname'
              id='text'
            />
            <br />
            <br />

            <label for='email' id='lab'>
              Proprietor's Email
            </label>
            <input
              name='proprietor_email'
              type='Email'
              onChange={(e) => handleForm(e)}
              class='proemail'
              id='email'
            />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input
              name='proprietor_number'
              type='tel'
              onChange={(e) => handleForm(e)}
              class='pronumber'
              id='number'
            />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of principal
            </label>
            <input
              name='principal_name'
              type='text'
              onChange={(e) => handleForm(e)}
              class='prinname'
              id='text'
            />
            <br />
            <br />

            <label for='email' id='lab'>
              Principal's Email
            </label>
            <input
              name='principal_email'
              type='email'
              onChange={(e) => handleForm(e)}
              class='prinemail'
              id='email'
            />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input
              name='principal_number'
              type='tel'
              class='pronumber'
              onChange={(e) => handleForm(e)}
              id='number'
            />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of Busar
            </label>
            <input
              name='bursar_name'
              onChange={(e) => handleForm(e)}
              type='text'
              class='burname'
              id='text'
            />
            <br />
            <br />

            <label for='email' id='lab'>
              Bursar's Email
            </label>
            <input
              name='bursar_email'
              type='email'
              onChange={(e) => handleForm(e)}
              class='buremail'
              id='email'
            />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input
              name='bursar_number'
              type='tel'
              onChange={(e) => handleForm(e)}
              class='pronumber'
              id='number'
            />
            <br />
            <br />
            <div className='tw-flex tw-justify-center'>
              <div
                onClick={(e) => {
                  setTimeout(() => {
                    navigate('/signin');
                  }, 5000);
                  // showToast();
                  handleSubmit(e);
                  // navigate('/dashboard');
                }}
                // onClick={(e) => {
                //   handleSubmit(e);
                // }}

                class='tw-w-1/2 tw-cursor-pointer tw-rounded-lg tw-bg-blue-800 tw-px-8 tw-py-2 tw-text-center tw-text-white tw-no-underline tw-shadow-lg tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
              >
                Submit
              </div>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SchoolRegistrationComp;
