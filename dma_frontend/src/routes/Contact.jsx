import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact-us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';

const ContactPage = () => {
  return (
    <div>
      <header className='tw-w-full tw-p-3'>
        <nav className='tw-mx-4 tw-my-2 tw-flex tw-justify-between'>
          <ul className='tw-flex tw-space-x-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/features'>Features</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <ul className='tw-flex tw-space-x-3'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='tw-container tw-mx-auto'>
        <div className='banner tw-grid tw-grid-cols-1 md:tw-grid-cols-2'>
          <div className='left md:tw-w-5/6'>
            <h5 className='tw-text-center tw-text-lg tw-font-bold md:tw-text-left'>
              Let's explore how DMA works
            </h5>
            <h1 className='big-heading tw-text-center tw-text-4xl tw-font-bold md:tw-text-left'>
              Get in touch with us today
            </h1>
            <h3 className='tw-text-2xl tw-font-bold'>Our Office</h3>
            <ul className='contact-list'>
              <li className='contact-detail'>
                <div>
                  <FontAwesomeIcon icon={faCircleDot} className='dot-icon' />
                </div>
                <div>
                  <h5 className='tw-text-lg tw-font-bold'>Address</h5>
                  <p>891 Glen Ridge St. Gainesville, VA 20155</p>
                  <p>137 Market St Singapore 048943</p>
                </div>
              </li>
              <li className='contact-detail'>
                <div>
                  <FontAwesomeIcon icon={faCircleDot} className='dot-icon' />
                </div>
                <div>
                  <h5 className='tw-text-lg tw-font-bold'>Office Phone</h5>
                  <p>
                    <a className='phone' href='tel:+33700555479'>
                      (+33) 700 555 479
                    </a>
                  </p>
                </div>
              </li>
              <li className='contact-detail'>
                <div>
                  <FontAwesomeIcon icon={faCircleDot} className='dot-icon' />
                </div>
                <div>
                  <h5 className='tw-text-lg tw-font-bold'>Email Address</h5>
                  <p>schrueder.ulces@yahoo.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='right tw-w-11/12'>
            <form>
              <div className='input-entry tw-mb-4'>
                <label
                  for='fullname'
                  className='tw-mb-3 tw-block tw-text-sm tw-font-bold tw-text-gray-700'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                  id='fullname'
                  placeholder='Enter Your Full Name'
                />
              </div>
              <div className='input-entry tw-mb-4'>
                <label
                  for='email'
                  className='tw-mb-3 tw-block tw-text-sm tw-font-bold tw-text-gray-700'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                  id='email'
                  placeholder='Enter Your Email'
                />
              </div>
              <div className='input-entry tw-mb-4'>
                <label
                  for='message'
                  className='tw-mb-3 tw-block tw-text-sm tw-font-bold tw-text-gray-700'
                >
                  Message
                </label>
                <textarea
                  className='tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
                  id='message'
                  rows='8'
                  placeholder='Enter Your Message'
                ></textarea>
              </div>
              <div className=' tw-flex'>
                <Button
                  variant='outlined-info'
                  className='tw-w-full tw-capitalize'
                >
                  <strong>Submit</strong>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
