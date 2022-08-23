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
import { useContextData } from '../lib/GlobalContext';
import { AiOutlineClose } from 'react-icons/ai';
// import { useMount, useCookie } from 'react-use';
function DashboardProfileComp() {
  const [key, setKey] = useState('first');
  let navigate = useNavigate();
  const { schoolInfo } = useContextData();

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
          <h2>{schoolInfo?.school_name}</h2>
          {/* <p>School ID: 3589DT47R9</p> */}
        </div>
        <div className='p-header-button p-header'>
          <Button
            onClick={() => navigate('/admin/profile/update')}
            variant='default'
            className='update-button'
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
            <Col sm={3} bsPrefix='uche col' className='abt'>
              <Nav.Item bsPrefix={styleNav('first')}>
                <Nav.Link className='navoo-link' eventKey='first'>
                  <b className='abpt'>About</b>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={3} bsPrefix='uche col'>
              <Nav.Item bsPrefix={styleNav('second')}>
                <Nav.Link className='navoo-link' eventKey='second'>
                  <b className='abpt'>Administration</b>
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
                      <b>{schoolInfo?.school_name}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>School Address</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.school_address}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Email Address</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.email}</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>School Category</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.school_category}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Contact Number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.contact_number}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4}>
                      <p>Description</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.description}</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <p>Uploaded Documents:</p>
                  <div className='docs-list'>
                    <ul>
                      <li className='req-list'>
                        <b>
                          Tax certification for Schools{' '}
                          {schoolInfo?.school_cert ? (
                            <BsCheckLg />
                          ) : (
                            <AiOutlineClose />
                          )}
                        </b>
                      </li>
                      <li className='req-list'>
                        <b>
                          School Registration Certificate{' '}
                          {schoolInfo?.registeration_cert ? (
                            <BsCheckLg />
                          ) : (
                            <AiOutlineClose />
                          )}
                        </b>
                      </li>
                      <li className='req-list'>
                        <b>
                          Approval by Ministry of Education{' '}
                          {schoolInfo?.ministry_approval ? (
                            <BsCheckLg />
                          ) : (
                            <AiOutlineClose />
                          )}{' '}
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
                  <p className='tw-text-xl tw-font-bold'>Proprietor</p>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Name</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.proprietor_name}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.proprietor_email}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.proprietor_number}</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <p className='tw-text-xl tw-font-bold'>Principal</p>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Name</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.principal_name}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.principal_email}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.principal_number}</b>
                    </Col>
                  </Row>
                </div>
                <div className='each-user'>
                  <p className='tw-text-xl tw-font-bold'>Bursar</p>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Name</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.bursar_name}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Email</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.bursar_email}</b>
                    </Col>
                  </Row>
                  <Row className='row-entry'>
                    <Col md={4} className='detail-title'>
                      <p>Phone number</p>
                    </Col>
                    <Col className='final-detail'>
                      <b>{schoolInfo?.bursar_number}</b>
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
