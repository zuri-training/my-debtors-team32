import React from 'react';
import '../styles/contact-us.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';


const ContactUsComp = () => {
  return (
    <div className='tw-container tw-mx-auto my-container'>
        <div className='banner tw-grid tw-grid-cols-1 md:tw-grid-cols-2'>
          <div className='left md:tw-w-5/6'>
            <h5 className='tw-text-lg tw-font-bold tw-text-left explore'>
              Let's explore how DMA works
            </h5>
            <h1 className='big-heading tw-text-4xl tw-font-bold tw-text-left'>
              Get in touch with us today
            </h1>
            <div className='office'>
            <h3 className='tw-text-2xl tw-font-bold'>Our Office</h3>
            <ul className='contact-list'>
              <li className='contact-detail'>
                <div>
                  <HiOutlineLocationMarker className='dot-icon' size="2rem"/>
                </div>
                <div>
                  <h5 className='tw-text-lg tw-font-bold'>Address</h5>
                  <p>891 Glen Ridge St. Gainesville, VA 20155</p>
                  <p>137 Market St Singapore 048943</p>
                </div>
              </li>
              <li className='contact-detail'>
                <div>
                  <FiPhoneCall className='dot-icon' size="2rem"/>
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
                  <FaRegEnvelope className='dot-icon' size="2rem"/>
                </div>
                <div>
                  <h5 className='tw-text-lg tw-font-bold'>Email Address</h5>
                  <p>schrueder.ulces@yahoo.com</p>
                </div>
              </li>
            </ul>
            </div>
            
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
              <div className='tw-flex btn-div'>
                <button className='submit-btn' type='button'>
                  <strong>Submit</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ContactUsComp;
