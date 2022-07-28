import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, TextField } from '@mui/material';

const StudentPage = () => {
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
      <div className='flex w-full px-4 pt-8'>
        <Link to='/register' className='flex items-center space-x-2'>
          {' '}
          <ArrowBackIcon /> <span>Back</span>
        </Link>
        <h1 className='w-full text-center text-2xl font-bold'>
          Register As Student
        </h1>
      </div>
      <section className='mx-auto my-5 flex max-w-lg flex-col space-y-4 rounded-md p-3 shadow-md'>
        <div className='flex items-center space-x-2 '>
          <label for='name' name='name' className='w-2/3'>
            <p>Name of Student: </p>
          </label>
          <TextField
            variant='outlined'
            name='name'
            id='name'
            size='small'
            className=' w-full rounded-md'
          />
        </div>
        <div className='flex items-center space-x-2 '>
          <label for='email' name='email' className='w-2/3'>
            <p>Email Address: </p>
          </label>
          <TextField
            variant='outlined'
            type='email'
            name='email'
            id='email'
            size='small'
            className='w-full rounded-md'
          />
        </div>

        <div className='flex items-center space-x-2 '>
          <label for='contact' name='contact' className='w-2/3'>
            <p>Phone Number: </p>
          </label>
          <TextField
            variant='outlined'
            type='tel'
            size='small'
            name='contact'
            id='contact'
            className=' w-full rounded-md'
          />
        </div>
        <div className='flex items-center space-x-2 '>
          <label for='schoolName' name='schoolName' className='w-2/3'>
            <p>Name of school: </p>
          </label>
          <TextField
            variant='outlined'
            type='text'
            size='small'
            name='schoolName'
            id='schoolName'
            className=' w-full rounded-md'
          />
        </div>
        <div className='flex space-x-2 '>
          <label for='parentName' name='parentName' className='w-2/3'>
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
            className='w-full rounded-md'
          />
        </div>

        <p className='py-4 text-lg font-bold '>Document uploads</p>
        <div className='flex items-center space-x-2'>
          <label for='taxCertificate' name='taxCertificate' className='w-2/3'>
            <p>School Identity Card: </p>
          </label>
          <input
            type='file'
            name='taxCertificate'
            id='taxCertificate'
            accept='.doc, .docx, .pdf'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <label
            for='registrationCertificate'
            name='registrationCertificate'
            className='w-2/3'
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
          className=' w-fit rounded-md px-4 py-2 capitalize transition duration-300 ease-in-out'
        >
          Upload Document
        </Button>

        <div className=' pt-8'>
          <Button
            variant='contained'
            className='w-full rounded-md bg-blue-400 px-4 py-2 capitalize text-white transition duration-300 ease-in-out hover:bg-blue-500'
          >
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudentPage;
