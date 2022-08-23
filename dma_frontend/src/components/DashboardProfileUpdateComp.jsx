import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { BsCheckLg } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/dashboard-profile.css';
import { useNavigate } from 'react-router-dom';
import ProfileInput from './ProfileInput';
import { useContextData } from '../lib/GlobalContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMount, useCookie } from 'react-use';

function DashboardProfileUpdateComp() {
  const [key, setKey] = useState('first');
  const [heading, setHeading] = useState('Update Profile');
  let navigate = useNavigate();
  const { schoolInfo, setSchoolInfo } = useContextData();
  delete schoolInfo.username;
  const [formValue, setFormValue] = useState(schoolInfo);
  // const [newPass, setNewPass] = useState({
  //   new_password1: '',
  //   new_password2: '',
  // });
  console.log('formValue', formValue);
  // console.log('newPass', newPass);
  // const handlePasswordChange = (e) => {
  //   setNewPass({ ...newPass, [e.target.name]: e.target.value });
  // };
  // const [imageName, setImageName] = useState({
  //   school_cert: '',
  //   registeration_cert: '',
  //   ministry_approval: '',
  // });
  const handleForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    // setImageName({ ...imageName, [name]: value.name });
  };
  const handleUpdateSubmit = async () => {
    // e.preventDefault();
    try {
      const {
        school_name,
        school_category,
        description,
        school_address,
        contact_number,
        school_cert,
        registeration_cert,
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
        // username,
        email,
      } = formValue;
      if (
        school_name &&
        school_category &&
        description &&
        school_address &&
        contact_number &&
        school_cert &&
        registeration_cert &&
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
        // username &&
        email &&
        school_name !== '' &&
        school_category !== '' &&
        description !== '' &&
        school_address !== '' &&
        contact_number !== '' &&
        school_cert !== '' &&
        registeration_cert !== '' &&
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
        // username !== '' &&
        email !== ''
      ) {
        const result1 = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/r/register/${formValue?.id}/`,
          // {
          //   headers: { Authorization: `Token ${localCookies}` },
          // },
          {
            ...formValue,
            // description: formValue?.description,
          }
        );
        console.log('updated profile', result1);
        setSchoolInfo(result1?.data);
        toast.success('School Profile Updated Successfully');
        setTimeout(() => {
          navigate('/admin/profile');
        }, 3000);
      } else {
        toast.error('Please fill all the fields');
      }
    } catch (error) {
      toast.error('SOmething went wrong. Please try again');
      console.error(error);
    }
    // navigate('/admin/profile/update');
  };

  // const handlePasswordSubmit = async () => {
  //   const { new_password1, new_password2 } = newPass;
  //   if (
  //     new_password1 &&
  //     new_password2 &&
  //     new_password1 !== '' &&
  //     new_password2 !== ''
  //   ) {
  //     if (new_password1 === new_password2) {
  //       try {
  //         const { data } = await axios.post(
  //           `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/password/change/`,
  //           {
  //             headers: { Authorization: `Token ${localCookies}` },
  //           },
  //           {
  //             ...newPass,
  //           }
  //         );
  //         console.log('password change :>> ', data);
  //         toast.success('Password changed successfully');
  //       } catch (error) {
  //         console.error(error);
  //         toast.error(`There was an error changing your password`);
  //       }
  //     } else {
  //       toast.error('Password does not match');
  //     }
  //   }
  // };

  function styleNav(agba) {
    if (key === agba) {
      return 'navoo';
    } else {
      return 'saliba';
    }
  }

  return (
    <div className='profile-all dashboardInfo'>
      <div className='profile-header'>
        <div className='p-header-title p-header'>
          <h2>{heading}</h2>
        </div>
      </div>
      <Tab.Container
        id='left-tabs-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Row>
          <Nav variant='default' className='tab-row'>
            <Col sm={3} bsPrefix='uche col'>
              <Nav.Item
                onClick={() => {
                  setHeading('Update Profile');
                }}
                bsPrefix={styleNav('first')}
              >
                <Nav.Link className='navoo-link' eventKey='first'>
                  <b>Profile</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
            {/* <Col sm={3} bsPrefix='uche col'>
              <Nav.Item
                onClick={() => {
                  setHeading('Change Password');
                }}
                bsPrefix={styleNav('second')}
              >
                <Nav.Link className='navoo-link' eventKey='second'>
                  <b>Password</b>
                </Nav.Link>
              </Nav.Item>
            </Col> */}
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
              <form>
                <Container bsPrefix='user-details'>
                  <div className='each-user'>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='school_name'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Name of School
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <input
                          type='text'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='school_name'
                          name='school_name'
                          value={formValue?.school_name}
                          onChange={handleForm}
                          placeholder='Enter the name of your school'
                        />
                      </Col>
                    </Row>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='school_address'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          School Address
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <input
                          type='text'
                          name='school_address'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='school_address'
                          value={formValue?.school_address}
                          onChange={handleForm}
                          placeholder='Enter Your School Address'
                        />
                      </Col>
                    </Row>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='email'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Email Address
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <input
                          type='text'
                          name='email'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='email'
                          value={formValue?.email}
                          onChange={handleForm}
                          placeholder='Enter School Email Address'
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className='each-user'>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='school_category'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          School Category
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <select
                          name='school_category'
                          onChange={handleForm}
                          // name='schselect'
                          value={formValue.school_category}
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='school_category'
                          // id='reg-input'
                        >
                          <option value=''>Select School Category</option>
                          <option value='Public'>Public School</option>
                          <option value='Private'>Private School</option>
                        </select>
                      </Col>
                    </Row>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='contact_number'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Contact Number
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <input
                          type='text'
                          name='contact_number'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='contact_number'
                          value={formValue?.contact_number}
                          onChange={handleForm}
                          placeholder='Enter School Contact Number'
                        />
                      </Col>
                    </Row>
                    <Row className='row-entry'>
                      <Col md={4}>
                        <label
                          htmlFor='description'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Description
                        </label>
                      </Col>
                      <Col className='final-detail'>
                        <textarea
                          className=' final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='description'
                          name='description'
                          rows='8'
                          value={formValue?.description}
                          onChange={handleForm}
                          placeholder='Description'
                        ></textarea>
                      </Col>
                    </Row>
                  </div>
                  <div className='each-user'>
                    <p>Update Documents:</p>
                    <div className='update-docs'>
                      <label
                        htmlFor='school_cert'
                        className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                      >
                        Tax certification for Schools
                      </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='school_cert'
                        name='school_cert'
                        onChange={handleImageForm}
                      />
                      {formValue?.school_cert && (
                        <a
                          href={formValue.school_cert}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Image
                        </a>
                      )}

                      <label
                        htmlFor='registeration_cert'
                        className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                      >
                        School Registration Certificate
                      </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='registeration_cert'
                        name='registeration_cert'
                        // value={formValue?.description}
                        onChange={handleImageForm}
                      />
                      {formValue?.registeration_cert && (
                        <a
                          href={formValue.registeration_cert}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Image
                        </a>
                      )}

                      <label
                        htmlFor='ministry_approval'
                        className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                      >
                        Approval by Ministry of Education
                      </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='ministry_approval'
                        name='ministry_approval'
                        onChange={handleImageForm}
                      />
                      {formValue?.school_cert && (
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
                </Container>
                <h4>Admin Access</h4>
                <Container bsPrefix='user-details'>
                  <div className='each-user'>
                    <p className='tw-text-xl tw-font-bold'>Principal</p>

                    <ProfileInput
                      id='proprietor_name'
                      label='Name'
                      placeholder='Enter Proprietor Name'
                      type='text'
                      value={formValue?.proprietor_name}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='proprietor_email'
                      label='Email'
                      placeholder='Enter Proprietor Email'
                      type='text'
                      value={formValue?.proprietor_email}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='proprietor_number'
                      label='Phone number'
                      placeholder='Enter Proprietor Phone number'
                      type='tel'
                      value={formValue?.proprietor_number}
                      handleForm={handleForm}
                    />
                  </div>
                  <div className='each-user'>
                    <ProfileInput
                      id='principal_name'
                      label='Name'
                      placeholder='Enter Principal Name'
                      type='text'
                      value={formValue?.principal_name}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='principal_email'
                      label='Email'
                      placeholder='Enter Principal Email'
                      type='text'
                      value={formValue?.principal_email}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='principal_number'
                      label='Phone Number'
                      placeholder='Enter Principal Phone number'
                      type='tel'
                      value={formValue?.principal_number}
                      handleForm={handleForm}
                    />
                  </div>
                  <div className='each-user'>
                    <ProfileInput
                      id='bursar_name'
                      label='Name of Bursar'
                      placeholder='Enter Bursar Name'
                      type='text'
                      value={formValue?.bursar_name}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='bursar_email'
                      label='Email Address'
                      placeholder='Enter Bursar Email'
                      type='text'
                      value={formValue?.bursar_email}
                      handleForm={handleForm}
                    />
                    <ProfileInput
                      id='bursar_number'
                      label='Phone Number'
                      placeholder='Enter Bursar Phone number'
                      type='tel'
                      value={formValue?.bursar_number}
                      handleForm={handleForm}
                    />
                  </div>
                </Container>
                <div className='update-all-button'>
                  <Button
                    // onClick={() => }
                    onClick={async () => await handleUpdateSubmit()}
                    variant='primary'
                  >
                    Update profile
                  </Button>
                </div>
              </form>
            </Tab.Pane>

            {/* <Tab.Pane eventKey='second'>
              <form>
                <Container>
                  <div className='tw-mt- tw-w-full tw-overflow-hidden tw-rounded-xl tw-border tw-p-4 tw-shadow-lg'>
                    
                    <ProfileInput
                      id='new_password1'
                      label='Enter New Password'
                      type='password'
                      placeholder='Enter New Password'
                      value={newPass?.new_password1}
                      handleForm={handlePasswordChange}
                    />
                    <ProfileInput
                      id='new_password2'
                      label='Confirm New Password'
                      type='password'
                      placeholder='Re-type new Password'
                      value={newPass?.new_password2}
                      handleForm={handlePasswordChange}
                    />
                    <div className='change-pass-button'>
                      <Button
                        onClick={async () => await handlePasswordSubmit()}
                        variant='primary'
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </Container>
              </form>
            </Tab.Pane> */}
          </Tab.Content>
        </Row>
      </Tab.Container>
      <ToastContainer />
    </div>
  );
}

export default DashboardProfileUpdateComp;
