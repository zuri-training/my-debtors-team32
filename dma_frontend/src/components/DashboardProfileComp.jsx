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

function DashboardProfileComp() {
  const [key, setKey] = useState('first');
  let navigate = useNavigate();

  function styleNav(agba) {
    if (key === agba) {
      return 'navoo';
    } else {
      return 'saliba';
    }
  }

  return (
<<<<<<< HEAD
    <div>
=======
    <div className='profile-all'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
      <div className='profile-header'>
        <div className='p-header-title p-header'>
          <h2>Apata Memorial High School</h2>
          <p>School ID: 3589DT47R9</p>
        </div>
        <div className='p-header-button p-header'>
          <Button
            onClick={() => navigate('/admin/profile/update')}
<<<<<<< HEAD
            variant='secondary'
=======
            variant='default'
            className='update-button'
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
          >
            Update profile
          </Button>{' '}
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
              <Nav.Item bsPrefix={styleNav('first')}>
                <Nav.Link className='navoo-link' eventKey='first'>
                  <b>About</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={3} bsPrefix='uche col'>
              <Nav.Item bsPrefix={styleNav('second')}>
                <Nav.Link className='navoo-link' eventKey='second'>
                  <b>Administration</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
              <Container bsPrefix='user-details'>
                <div className='each-user'>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Name of School</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Apata Memorial High School</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>School Address</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Ireakari Estate, Isolo, Lagos</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Email Address</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>apatamemorial@gmail.com</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>School Category</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Private</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Contact Number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>08056789123</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Description</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>
                        military-style private boarding school in Lagos,
                        Nigeria.It has about 1550 pupils and 150 teachers. There
                        are both boarding and day students. It is said to be the
                        best school in Oshodi-Isolo local government and one of
                        the best in lagos state.
                      </b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <p>Uploaded Documents:</p>
                  <div className='docs-list'>
                    <ul>
                      <li className='req-list'>
                        <b>
                          Tax certification for Schools <BsCheckLg />
                        </b>
                      </li>
                      <li className='req-list'>
                        <b>
                          School Registration Certificate <BsCheckLg />
                        </b>
                      </li>
                      <li className='req-list'>
                        <b>
                          Approval by Ministry of Education <BsCheckLg />
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey='second'>
              <Container bsPrefix='user-details'>
                <div className='each-user'>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Name of Proprietor</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Adachukwu Ezenwaka</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>adachukwuezenwaka@gmail.com</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>08012345678</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Name of Proprietor</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Adachukwu Ezenwaka</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>adachukwuezenwaka@gmail.com</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>08012345678</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Name of Proprietor</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>Adachukwu Ezenwaka</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>adachukwuezenwaka@gmail.com</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
<<<<<<< HEAD
                    <Col md={4}>
=======
                    <Col md={4} className='detail-title'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>08012345678</b>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default DashboardProfileComp;
