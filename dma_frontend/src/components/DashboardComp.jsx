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
      <div className="dash">
        <div className="dashboard__header">
          <h1 className='text__1'>Welcome <br /> <span className='text--2'>to Apata Memorial High School Dashboard!</span></h1>
          <div className="dashbord__notify">
          <img className='notify__icon' src={notification} alt='img1' />
          <h3 className='notify__text'>Notifications</h3>
          <h4 className='notify__num'>3</h4>
          </div>
        </div>
        <hr />
        <div className="dashboard__cards">
          <div className="cards bg__gray">
            <div className="">
            <h1 className="card__text">You have received a new contend from a parent</h1>
            <p className="card__date">25/07/2022</p>
            </div>
            <Link to='' className='card__view'>View</Link>
          </div>
          <div className="cards bg__gray">
            <div className="">
            <h1 className="card__text">List of debtors has been updated</h1>
            <p className="card__date">20/07/2022</p>
            </div>
            <Link to='' className='card__view'>View</Link>
          </div>
          <div className="cards bg__gray">
            <div className="">
            <h1 className="card__text">D-Ivy college commented on your post</h1>
            <p className="card__date">5/07/2022</p>
            </div>
            <Link to='' className='card--view'>View</Link>
          </div>
          <div className="cards" id='col__gray'>
            <div className="">
            <h1 className="card__text">British International School commented on your post</h1>
            <p className="card--date">28/06/2022</p>
            </div>
            <Link to='' className='card__view' id='view__gray'>View</Link>
          </div>
          <div className="cards" id='col__gray'>
            <div className="">
            <h1 className="card__text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card__date">25/07/2022</p>
            </div>
            <Link to='' className='card__view' id='view__gray'>View</Link>
          </div>
          <div className="cards" id='col__gray'>
            <div className="">
            <h1 className="card__text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card__date">25/07/2022</p>
            </div>
            <Link to='' className='card__view' id='view__gray'>View</Link>
          </div>
          <div className="cards" id='col__gray'>
            <div className="">
            <h1 className="card__text">Ebun Pro Veritas International School posted a new debtor</h1>
            <p className="card__date">25/07/2022</p>
            </div>
            <Link to='' className='card__view' id='view__gray'>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
