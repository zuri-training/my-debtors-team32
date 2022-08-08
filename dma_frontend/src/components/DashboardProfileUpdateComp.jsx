import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/dashboard-profile.css';
import { useNavigate } from 'react-router-dom';
import ProfileInput from './ProfileInput';

function DashboardProfileUpdateComp() {
  const [key, setKey] = useState('first');
  const [heading, setHeading] = useState('Update Profile')
  let navigate = useNavigate();

  function styleNav(agba) {
    if (key === agba) {
      return 'navoo';
    } else {
      return 'saliba';
    }
  }

  // function changeHeading() {
  //   setHeading("Akpaka");
  // }

  function changeView(k) {
    setKey(k);
  }


  return (
    <div className='profile-all'>
      <div className='profile-header'>
        <div className='p-header-title p-header'>
          <h2>{heading}</h2>
          <p>School ID: 3589DT47R9</p>
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
              bsPrefix={styleNav('first')}>
                <Nav.Link className='navoo-link' eventKey='first'>
                  <b >Profile</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={3} bsPrefix='uche col'>
              <Nav.Item 
              onClick={() => {
                    setHeading('Change Password');
                  }} 
              bsPrefix={styleNav('second')}>
                <Nav.Link className='navoo-link' eventKey='second'>
                <b >Password</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
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
                        htmlFor='schoolName'
                        className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                      >
                        Name of School
                      </label>
                    </Col>
                    <Col className='final-detail'>
                      <input
                        type='text'
                        className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='schoolName'
                        placeholder='Enter the name of your school'
                      />
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <label
                          htmlFor='schoolAddress'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          School Address
                        </label>
                    </Col>
                    <Col className='final-detail'>
                      <input
                          type='text'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='schoolAddress'
                          placeholder='Enter Your School Address'
                        />
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <label
                          htmlFor='emailAddress'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Email Address
                        </label>
                    </Col>
                    <Col className='final-detail'>
                      <input
                          type='text'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='emailAddress'
                          placeholder='Enter School Email Address'
                        />
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <label
                          htmlFor='schoolCategory'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          School Category
                        </label>
                    </Col>
                    <Col className='final-detail'>
                      <input
                          type='text'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='schoolCategory'
                          placeholder='Enter School Category'
                        />
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <label
                          htmlFor='contactNumber'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Contact Number
                        </label>
                    </Col>
                    <Col className='final-detail'>
                      <input
                          type='text'
                          className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                          id='contactNumber'
                          placeholder='Enter School Contact Number'
                        />
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <label
                          htmlFor='desc'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Description
                        </label>
                    </Col>
                    <Col className='final-detail'>
                      <textarea
                      className=' final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                      id='desc'
                      rows='8'
                      placeholder='Description'
                    ></textarea>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <p>Update Documents:</p>
                  <div className='update-docs'>
                      <label
                          htmlFor='tax-cert'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Tax certification for Schools 
                        </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='tax-cert'
                      /> 

                      <label
                          htmlFor='school-reg-cert'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          School Registration Certificate
                        </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='school-reg-cert'
                      /> 

                      <label
                          htmlFor='appr-moe'
                          className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
                        >
                          Approval by Ministry of Education
                        </label>
                      <input
                        type='file'
                        className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                        id='appr-moe'
                      />
                  </div>
                </div>
              </Container>
              <h4>Admin Access</h4>
              <Container bsPrefix='user-details'>
                <div className='each-user'>
                  <ProfileInput 
                    id="proprietor"
                    label="Name of Proprietor"
                    placeholder="Enter Proprietor Name"
                    type="text"
                  />
                  <ProfileInput 
                    id="proprietorEmail"
                    label="Email Address"
                    placeholder="Enter Proprietor Email"
                    type="text"
                  />
                  <ProfileInput 
                    id="proprietorPhone"
                    label="Phone number"
                    placeholder="Enter Proprietor Phone number"
                    type="text"
                  />
                </div>
                <div className='each-user'>
                  <ProfileInput 
                    id="principal"
                    label="Name of Principal"
                    placeholder="Enter Principal Name"
                    type="text"
                  />
                  <ProfileInput 
                    id="principalEmail"
                    label="Email Address"
                    placeholder="Enter Principal Email"
                    type="text"
                  />
                  <ProfileInput 
                    id="principalPhone"
                    label="Phone Number"
                    placeholder="Enter Principal Phone number"
                    type="text"
                  />                 
                </div>
                <div className='each-user'>
                  <ProfileInput 
                      id="bursar"
                      label="Name of Bursar"
                      placeholder="Enter Bursar Name"
                      type="text"
                    />
                    <ProfileInput 
                      id="bursarEmail"
                      label="Email Address"
                      placeholder="Enter Bursar Email"
                      type="text"
                    />
                    <ProfileInput 
                      id="bursarPhone"
                      label="Phone Number"
                      placeholder="Enter Bursar Phone number"
                      type="text"
                    />
                </div>
              </Container>
                <div className='update-all-button'>
                  <Button
                    onClick={() => navigate('/admin/profile/update')}
                    variant='primary'
                  >
                    Update profile
                  </Button>{' '}
                </div>
              </form>
            </Tab.Pane>

            <Tab.Pane eventKey='second'>
            <form>
              <Container >
                <div className='each-password'>
                  <ProfileInput 
                    id="currentpass"
                    label="Current Password"
                    type="password"
                    placeholder="Enter Current Password"
                  />
                  <ProfileInput 
                    id="newpass"
                    label="Enter New Password"
                    type="password"
                    placeholder="Enter New Password"
                  />
                  <ProfileInput 
                    id="confirmnewpass"
                    label="Confirm New Password"
                    type="password"
                    placeholder="Re-type new Password"
                  />
                  <div className='change-pass-button'>
                    <Button
                      onClick={() => navigate('/admin/profile/update')}
                      variant='primary'
                    >
                      Update
                    </Button>{' '}
                  </div>
                </div>
                
              </Container>
            </form>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default DashboardProfileUpdateComp;

