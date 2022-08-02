import React from 'react';
import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Button, TextField } from '@mui/material';
import { IoMdArrowBack } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StudentPage = () => {
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
      <div className='tw-tw-flex tw-w-full tw-px-4 tw-pt-8'>
        <Link to='/register' className='tw-flex tw-items-center tw-space-x-2'>
          {' '}
          <IoMdArrowBack /> <span>Back</span>
        </Link>
        <h1 className='tw-w-full tw-text-center tw-text-2xl tw-font-bold'>
          Register As Student
        </h1>
      </div>
      {/* <section className='tw-mx-auto tw-my-5 tw-flex tw-max-w-lg tw-flex-col tw-space-y-4 tw-rounded-md tw-p-3 tw-shadow-md'>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='name' name='name' className='tw-w-2/3'>
            <p>Name of Student: </p>
          </label>
          <TextField
            variant='outlined'
            name='name'
            id='name'
            size='small'
            className=' tw-w-full tw-rounded-md'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='email' name='email' className='tw-w-2/3'>
            <p>Email Address: </p>
          </label>
          <TextField
            variant='outlined'
            type='email'
            name='email'
            id='email'
            size='small'
            className='tw-w-full tw-rounded-md'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='contact' name='contact' className='tw-w-2/3'>
            <p>Phone Number: </p>
          </label>
          <TextField
            variant='outlined'
            type='tel'
            size='small'
            name='contact'
            id='contact'
            className=' tw-w-full tw-rounded-md'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='schoolName' name='schoolName' className='tw-w-2/3'>
            <p>Name of school: </p>
          </label>
          <TextField
            variant='outlined'
            type='text'
            size='small'
            name='schoolName'
            tw-
            id='schoolName'
            className=' tw-w-full tw-rounded-md'
          />
        </div>
        <div className='tw-flex tw-space-x-2 '>
          <label for='parentName' name='parentName' className='tw-w-2/3'>
            <p>Name of Parent(s): </p>
          </label>
          <TextField
            multiline
            variant='outlined'
            id='parentName'
            name='parentName'
            // size='small'
            rows={2}
            cols='33'
            className='tw-w-full tw-rounded-md'
          />
        </div>
        <p className='tw-py-4 tw-text-lg tw-font-bold '>Document uploads</p>
        <div className='tw-flex tw-items-center tw-space-x-2'>
          <label
            for='taxCertificate'
            name='taxCertificate'
            className='tw-w-2/3'
          >
            <p>School Identity Card: </p>
          </label>
          <input
            type='file'
            name='taxCertificate'
            id='taxCertificate'
            accept='.doc, .docx, .pdf'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2'>
          <label
            for='registrationCertificate'
            name='registrationCertificate'
            className='tw-w-2/3'
          >
            <p>Birth Certificate: </p>
          </label>
          <input
            type='file'
            name='registrationCertificate'
            id='registrationCertificate'
            accept='.doc, .docx, .pdf'
          />
        </div>
        <Button
          variant='outlined'
          className=' tw-w-fit tw-rounded-md tw-px-4 tw-py-2 tw-capitalize tw-transition tw-duration-300 tw-ease-in-out'
        >
          Upload Document
        </Button>
        <div className=' tw-pt-8'>
          <Button
            variant='contained'
            className='tw-w-full tw-rounded-md tw-bg-blue-400 tw-px-4 tw-py-2 tw-capitalize tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-500'
          >
            Submit
          </Button>
        </div>
      </section> */}
      <section className='tw-mx-auto tw-my-5 tw-flex tw-max-w-lg tw-flex-col tw-space-y-4 tw-rounded-md tw-p-3 tw-shadow-md'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name of Student:</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address:</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name of School:</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Name of Parent(s):</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <p className='tw-py-4 tw-text-lg tw-font-bold '>Document uploads</p>
          <Form.Group controlId='taxCertificate' className='mb-3'>
            <Form.Label>School Identity Card:</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
          <Form.Group controlId='taxCertificate' className='mb-3'>
            <Form.Label>School Identity Card:</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
          <Form.Group controlId='taxCertificate' className='mb-3'>
            <Form.Label>Birth Certificate:</Form.Label>
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
            variant='success'
            className='tw-w-full tw-rounded-md tw-bg-blue-400 tw-px-4 tw-py-2 tw-capitalize tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-500'
          >
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudentPage;
