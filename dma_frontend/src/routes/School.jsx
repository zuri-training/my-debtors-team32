import React from 'react';
import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IoMdArrowBack } from 'react-icons/io';
// import {
//   Button,
//   FormControl,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material';
import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SchoolPage = () => {
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
      <div className='tw-flex tw-w-full tw-px-4 tw-pt-8'>
        <Link to='/register' className='tw-flex tw-items-center tw-space-x-2'>
          {' '}
          <IoMdArrowBack /> <span>Back</span>
        </Link>
        <h1 className='tw-w-full tw-text-center tw-text-2xl tw-font-bold'>
          Register As School
        </h1>
      </div>

      <section className='tw-mx-auto tw-my-5 tw-flex tw-max-w-xl tw-flex-col tw-space-y-4 tw-rounded-md tw-p-3 tw-shadow-md'>
        <Form className='tw-space-y-4'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name of School:</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>School Category:</Form.Label>

            <Form.Select aria-label='Default select example'>
              <option>--Please choose an option--</option>
              <option value='dog'>Pre School</option>
              <option value='cat'>Primary</option>
              <option value='hamster'>Secondary</option>
              <option value='parrot'>Tertiary</option>
              <option value='spider'>Post Graduate</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>School Description:</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>School Address:</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Contact Number:</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <p className='tw-py-4 tw-text-lg tw-font-bold '>Document uploads</p>
          <Form.Group controlId='taxCertificate' className='mb-3'>
            <Form.Label>Tax Certificate:</Form.Label>
            <Form.Control type='file' />
          </Form.Group>

          <Form.Group controlId='registrationCertificate' className='mb-3'>
            <Form.Label>Registration Certificate:</Form.Label>
            <Form.Control type='file' />
          </Form.Group>

          <Form.Group controlId='ministryApproval' className='mb-3'>
            <Form.Label>Registration Certificate:</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
        </Form>

        <Button
          variant='outline-primary'
          // className=' tw-w-fit tw-rounded-md tw-px-4 tw-py-2 tw-capitalize tw-transition tw-duration-300 tw-ease-in-out'
        >
          Upload Document
        </Button>

        <div className=' pt-8'>
          <Button
            variant='primary'
            // className='tw-w-full tw-rounded-md  tw-px-4 tw-py-2 tw-capitalize  tw-transition tw-duration-300 tw-ease-in-out '
          >
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolPage;
