import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/contact-us.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

const ContactPage = () => {
  return (
    <div>
      <header className='w-full'>
        <nav className='mx-4 my-2 flex justify-between'>
          <ul className='flex space-x-4'>
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
          <ul className='flex space-x-3'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 banner'>
          <div className="left md:w-5/6">
            <h5 className='text-lg font-bold text-center md:text-left'>Let's explore how DMA works</h5>
            <h1 className='text-4xl font-bold big-heading text-center md:text-left'>Get in touch with us today</h1>
            <h3 className='text-2xl font-bold'>Our Office</h3>
            <ul className="contact-list">
              <li className="contact-detail">
                <div>
                  <FontAwesomeIcon icon={faCircleDot} className="dot-icon"/>
                </div>
                <div>
                  <h5 className='text-lg font-bold'>Address</h5>
                  <p>891 Glen Ridge St. Gainesville, VA 20155</p>
                  <p>137 Market St Singapore 048943</p>
                </div>
              </li>
              <li className="contact-detail">
                <div><FontAwesomeIcon icon={faCircleDot} className="dot-icon"/></div>
                <div>
                  <h5 className='text-lg font-bold'>Office Phone</h5>
                  <p><a className="phone" href="tel:+33700555479">(+33) 700 555 479</a></p>
                </div>
              </li>
              <li className="contact-detail">
                <div><FontAwesomeIcon icon={faCircleDot} className="dot-icon"/></div>
                <div>
                  <h5 className='text-lg font-bold'>Email Address</h5>
                  <p>schrueder.ulces@yahoo.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-11/12 right">
            <form>
              <div className="mb-4 input-entry">
                <label for="fullname" className="block text-gray-700 text-sm font-bold mb-3">Full Name</label>
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-300" id="fullname" placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-4 input-entry">
                <label for="email" className="block text-gray-700 text-sm font-bold mb-3">Email Address</label>
                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-300" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="mb-4 input-entry">
                <label for="message" className="block text-gray-700 text-sm font-bold mb-3">Message</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-300" id="message" rows="8" placeholder="Enter Your Message"></textarea>
              </div>
              <div className="flex">
                <button className="submit-btn btn" type="button"><strong>Submit</strong></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
