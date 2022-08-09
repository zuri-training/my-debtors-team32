import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/dashboard.css';
import notification from '../images/notification.svg';
// import DashboardSideNav from './layout/DashboardSideNav';

const DashboardComp = () => {
  return (
    <div className=''>
      {/* main content */}
      {/* <div>sidebar</div> */}
      <div className="dashboard">
        <div className="dashboard--header">
          <h1 className='text--1'>Welcome <br /> <span className='text--2'>to Apata Memorial High School Dashboard!</span></h1>
          <div className="dashbord--notify">
          <img className='notify--icon' src={notification} alt='img1' />
          <h3 className='notify--text'>Notifications</h3>
          <h4 className='notify--num'>3</h4>
          </div>
        </div>
        <hr />
        <div className="dashboard--cards">
          <div className="cards bg--gray">
            <div className="">
            <h1 className="card--text">You have received a new contend from a parent</h1>
            <p className="card--date">25/07/2022</p>
            </div>
            <Link to='' className='card--view'>View</Link>
          </div>
          <div className="cards bg--gray">
            <div className="">
            <h1 className="card--text">List of debtors has been updated</h1>
            <p className="card--date">20/07/2022</p>
            </div>
            <Link to='' className='card--view'>View</Link>
          </div>
          <div className="cards bg--gray">
            <div className="">
            <h1 className="card--text">D-Ivy college commented on your post</h1>
            <p className="card--date">5/07/2022</p>
            </div>
            <Link to='' className='card--view'>View</Link>
          </div>
          <div className="cards" id='col-gray'>
            <div className="">
            <h1 className="card--text">British International School commented on your post</h1>
            <p className="card--date">28/06/2022</p>
            </div>
            <Link to='' className='card--view' id='view-gray'>View</Link>
          </div>
          <div className="cards" id='col-gray'>
            <div className="">
            <h1 className="card--text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card--date">25/07/2022</p>
            </div>
            <Link to='' className='card--view' id='view-gray'>View</Link>
          </div>
          <div className="cards" id='col-gray'>
            <div className="">
            <h1 className="card--text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card--date">25/07/2022</p>
            </div>
            <Link to='' className='card--view' id='view-gray'>View</Link>
          </div>
          <div className="cards" id='col-gray'>
            <div className="">
            <h1 className="card--text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card--date">25/07/2022</p>
            </div>
            <Link to='' className='card--view' id='view-gray'>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
