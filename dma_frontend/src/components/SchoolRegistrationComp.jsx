import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/school-register.css';
import '../styles/schoolsadmin.css';
// import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useMount, useUpdateEffect } from 'react-use';
import { useCookies } from 'react-cookie';

const SchoolRegistrationComp = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formValue, setFormValue] = useState({
    school_name: '',
    school_category: '',
    description: '',
    school_address: '',
    contact_number: '',
    school_cert: '',
    registration_cert: '',
    ministry_approval: '',
    proprietor_name: '',
    proprietor_email: '',
    proprietor_number: '',
    principal_name: '',
    principal_email: '',
    principal_number: '',
    bursar_name: '',
    bursar_email: '',
    bursar_number: '',
  });
  const [registerValue, setRegisterValue] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [imageName, setImageName] = useState({
    school_cert: '',
    registration_cert: '',
    ministry_approval: '',
  });
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
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const final = result2.data.filter(
        (school) => school?.username === result1?.data?.username
      );
      return final[0];
    } catch (error) {
      return error;
    }
  };

  useMount(async () => {
    if (cookies['dma-cookies']) {
      const result = await handleRole();
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

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleImageForm = async (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    // console.log('value', value);
    let formData = new FormData();
    formData.append('file', value);
    formData.append('upload_preset', 'luvely-preset');
    let response = await axios.post(
      'https://api.cloudinary.com/v1_1/luvely/image/upload',
      formData
    );
    const imageUrl = response?.data?.secure_url;
    setFormValue({ ...formValue, [name]: imageUrl });
    setImageName({ ...imageName, [name]: value.name });
  };

  const handleRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterValue({ ...registerValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        school_name,
        school_category,
        description,
        school_address,
        contact_number,
        school_cert,
        registration_cert,
        ministry_approval,
        proprietor_name,
        proprietor_email,
        proprietor_number,
        principal_name,
        principal_email,
        principal_number,
        bursar_name,
        bursar_email,
        bursar_number,
      } = formValue;

      const { username, email, password1, password2 } = registerValue;
      if (
        school_name &&
        school_category &&
        description &&
        school_address &&
        contact_number &&
        school_cert &&
        registration_cert &&
        ministry_approval &&
        proprietor_name &&
        proprietor_email &&
        proprietor_number &&
        principal_name &&
        principal_email &&
        principal_number &&
        bursar_name &&
        bursar_email &&
        bursar_number &&
        username &&
        email &&
        password1 &&
        password2 &&
        school_name !== '' &&
        school_category !== '' &&
        description !== '' &&
        school_address !== '' &&
        contact_number !== '' &&
        school_cert !== '' &&
        registration_cert !== '' &&
        ministry_approval !== '' &&
        proprietor_name !== '' &&
        proprietor_email !== '' &&
        proprietor_number !== '' &&
        principal_name !== '' &&
        principal_email !== '' &&
        principal_number !== '' &&
        bursar_name !== '' &&
        bursar_email !== '' &&
        bursar_number !== '' &&
        username !== '' &&
        email !== '' &&
        password1 !== '' &&
        password2 !== ''
      ) {
        if (password1 === password2) {
          const result = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/registration/`,
            {
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
              email,
              username,
              author: result2?.data?.pk,
            }
          );
          console.log('result3 :>> ', result3.data);
          toast.success(
            'School registered successfully, you will be sent an email once your account has been approved'
          );
          setTimeout(() => {
            navigate('/signin');
          }, 3000);
        } else {
          toast.error('Password does not match');
        }
      } else {
        toast.error('Please fill all the fields');
      }
    } catch (error) {
      toast.error(error.response?.data?.non_field_errors[0]);
      console.error(error);
    }
  };

  console.log('reister formValue', formValue);
  console.log('registerValue', registerValue);

  return (
    <div
      className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'
      id='top-page-reg'
    >
      {!showNext && (
        <div>
          <header className='first-reg'>
            <h2>School Registration</h2>
          </header>
          <main>
            <form className='Reg-form'>
              <div className='form-group'>
                <label htmlFor='reg-parent' className='reg-label'>
                  Name of School<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='school_name'
                  type='text'
                  value={formValue.school_name}
                  onChange={(e) => handleForm(e)}
                  className='reg-input'
                  id='reg-parent'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-category' className='reg-label'>
                  School Category<span className='tw-text-red-500'>*</span>
                </label>
                <select
                  name='school_category'
                  onChange={(e) => handleForm(e)}
                  // name='schselect'
                  value={formValue.school_category}
                  className='reg-input'
                  id='reg-input'
                >
                  <option value=''>Select School Category</option>
                  <option value='Public'>Public School</option>
                  <option value='Private'>Private School</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='reg-contact' className='reg-label'>
                  Description<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='description'
                  onChange={(e) => handleForm(e)}
                  value={formValue.description}
                  type='text'
                  className='reg-input'
                  id='reg-contact'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-schaddress' className='reg-label'>
                  School Address<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='school_address'
                  onChange={(e) => handleForm(e)}
                  type='text'
                  value={formValue.school_address}
                  className='reg-input'
                  id='reg-schaddress'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  Contact Number<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='contact_number'
                  onChange={(e) => handleForm(e)}
                  value={formValue.contact_number}
                  type='tel'
                  className='reg-input'
                  // id='reg-num'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  User Name<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='username'
                  onChange={(e) => handleRegister(e)}
                  type='text'
                  value={registerValue.username}
                  className='reg-input'
                  // id='reg-num'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-email' className='reg-label'>
                  Email address<span className='tw-text-red-500'>*</span>
                </label>
                <input
                  name='email'
                  value={registerValue.email}
                  onChange={(e) => handleRegister(e)}
                  type='email'
                  className='reg-input'
                  // id='reg-parent'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='pswd' className='reg-label'>
                  Password<span className='tw-text-red-500'>*</span>
                </label>

                <input
                  type={`${showPass ? 'text' : 'password'}`}
                  name='password1'
                  value={registerValue.password1}
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
                  Confirm Password<span className='tw-text-red-500'>*</span>
                </label>

                <input
                  type={`${showPass ? 'text' : 'password'}`}
                  name='password2'
                  value={registerValue.password2}
                  onChange={(e) => handleRegister(e)}
                  className='reg-input'
                  // id='reg-parent'
                />
              </div>
              <div className='reg-doc'>
                <div>
                  <h3 className='reg-text'>
                    Upload document (Only Upload Images)
                  </h3>
                </div>
              </div>
              <br />
              <br />
              <div className='reg-title'>
                <div>
                  <label htmlFor='file1'>
                    The certificate for schools:
                    <span className='tw-text-red-500'>*</span>
                  </label>
                  <br />
                  <br />
                  <div className='file-lab'>
                    <input
                      type='file'
                      id='myFile'
                      name='school_cert'
                      onChange={(e) => handleImageForm(e)}
                      accept='image/*'
                      // accept='.png, .jpg, .jpeg .webp'
                    />
                  </div>
                  <br />
                  {formValue.school_cert && (
                    <a
                      href={formValue.school_cert}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Image
                    </a>
                  )}
                  <br />
                  <label htmlFor='file1'>
                    School registration certificate:
                    <span className='tw-text-red-500'>*</span>
                  </label>
                  <br />
                  <br />
                  <div className='file-lab'>
                    <input
                      type='file'
                      id='myFile'
                      accept='image/*'
                      name='registration_cert'
                      onChange={(e) => handleImageForm(e)}
                    />
                  </div>
                  <br />
                  {formValue.registration_cert && (
                    <a
                      href={formValue.registration_cert}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Image
                    </a>
                  )}

                  <br />
                  <label htmlFor='file1'>
                    Approval by ministry of Education:
                    <span className='tw-text-red-500'>*</span>
                  </label>
                  <br />
                  <br />
                  <div className='file-lab'>
                    <input
                      type='file'
                      accept='image/*'
                      name='ministry_approval'
                      onChange={(e) => handleImageForm(e)}
                      id='myFile'
                    />
                  </div>
                  <br />
                  {formValue.ministry_approval && (
                    <a
                      href={formValue.ministry_approval}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Image
                    </a>
                  )}
                </div>
              </div>
              <br />
              <br />
            </form>
            <div className='next-btn'>
              <button
                id='next-nav'
                onClick={() => {
                  setShowNext(true);
                  navigate('#');
                }}
              >
                Next
              </button>
            </div>
          </main>
        </div>
      )}
      {showNext && (
        <div className='f-item-1 tw-pb-4' id='top-page'>
          <div>
            <button className='' onClick={() => setShowNext(false)}>
              Back
            </button>
            <h2 id='Sch-admin'>School admin</h2>
          </div>

          <form className='form'>
            <label htmlFor='proprietor_name' id='lab'>
              Name of proprietor<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='proprietor_name'
              type='text'
              value={formValue.proprietor_name}
              onChange={(e) => handleForm(e)}
              className='proname'
              id='text'
            />
            <br />
            <br />

            <label htmlFor='proprietor_email' id='lab'>
              Proprietor's Email<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='proprietor_email'
              type='Email'
              value={formValue.proprietor_email}
              onChange={(e) => handleForm(e)}
              className='proemail'
              id='email'
            />
            <br />
            <br />

            <label htmlFor='proprietor_number' id='lab'>
              Proprietor Phone number<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='proprietor_number'
              type='tel'
              value={formValue.proprietor_number}
              onChange={(e) => handleForm(e)}
              className='pronumber'
              id='number'
            />
            <br />
            <br />

            <label htmlFor='principal_name' id='lab'>
              Name of principal<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='principal_name'
              type='text'
              value={formValue.principal_name}
              onChange={(e) => handleForm(e)}
              className='prinname'
              id='text'
            />
            <br />
            <br />

            <label htmlFor='principal_email' id='lab'>
              Principal's Email<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='principal_email'
              type='email'
              value={formValue.principal_email}
              onChange={(e) => handleForm(e)}
              className='prinemail'
              id='email'
            />
            <br />
            <br />

            <label htmlFor='principal_number' id='lab'>
              Principal Phone number<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='principal_number'
              type='tel'
              value={formValue.principal_number}
              className='pronumber'
              onChange={(e) => handleForm(e)}
              id='number'
            />
            <br />
            <br />

            <label htmlFor='bursar_name' id='lab'>
              Name of Busar<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='bursar_name'
              onChange={(e) => handleForm(e)}
              type='text'
              value={formValue.bursar_name}
              className='burname'
              id='text'
            />
            <br />
            <br />

            <label htmlFor='bursar_email' id='lab'>
              Bursar's Email<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='bursar_email'
              type='email'
              value={formValue.bursar_email}
              onChange={(e) => handleForm(e)}
              className='buremail'
              id='email'
            />
            <br />
            <br />

            <label htmlFor='bursar_number' id='lab'>
              Bursar Phone number<span className='tw-text-red-500'>*</span>
            </label>
            <input
              name='bursar_number'
              type='tel'
              value={formValue.bursar_number}
              onChange={(e) => handleForm(e)}
              className='pronumber'
              id='number'
            />
            <br />
            <br />
            <div className='tw-flex tw-justify-center'>
              <div
                onClick={(e) => {
                  // showToast();
                  handleSubmit(e);
                  // navigate('/dashboard');
                }}
                className='tw-w-1/2 tw-cursor-pointer tw-rounded-lg tw-bg-blue-800 tw-px-8 tw-py-2 tw-text-center tw-text-white tw-no-underline tw-shadow-lg tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
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
