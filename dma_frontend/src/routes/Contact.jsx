import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/bootstrap.min.css";
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
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 left">
            <h5>Let's explore how DMA works</h5>
            <h1>Get in touch with us today</h1>
            <h3>Our Office</h3>
            <ul className="contact-list">
              <li class="contact-detail">
                <div>
                  <FontAwesomeIcon icon={faCircleDot} className="dot-icon"/>
                </div>
                <div>
                  <h5>Address</h5>
                  <p>891 Glen Ridge St. Gainesville, VA 20155</p>
                  <p>137 Market St Singapore 048943</p>
                </div>
              </li>
              <li className="contact-detail">
                <div><FontAwesomeIcon icon={faCircleDot} className="dot-icon"/></div>
                <div>
                  <h5>Office Phone</h5>
                  <p><a className="phone" href="tel:+33700555479">(+33) 700 555 479</a></p>
                </div>
              </li>
              <li className="contact-detail">
                <div><FontAwesomeIcon icon={faCircleDot} className="dot-icon"/></div>
                <div>
                  <h5>Email Address</h5>
                  <p>schrueder.ulces@yahoo.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 right">
            <form>
              <div className="mb-3 input-entry">
                <label for="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3 input-entry">
                <label for="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3 input-entry">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="8" placeholder="Enter Your Message"></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button"><strong>Submit</strong></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
