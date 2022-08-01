import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const SchoolPage = () => {
  return (
    <div>
      <header className='tw-w-full'>
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
        <Link to='/register' className='tw-flex tw-space-x-2'>
          {' '}
          <ArrowBackIcon /> <span>Back</span>
        </Link>
        <h1 className='tw-w-full tw-text-center tw-text-2xl tw-font-bold'>
          Register As School
        </h1>
      </div>
      <section className='tw-mx-auto tw-my-5 tw-flex tw-max-w-lg tw-flex-col tw-space-y-4 tw-rounded-md tw-p-3 tw-shadow-md'>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='name' name='Name' className='tw-w-2/3'>
            <p>Name of School: </p>
          </label>
          <TextField
            name='name'
            size='small'
            id='name'
            variant='outlined'
            className='tw-w-full tw-overflow-hidden tw-rounded-md tw-p-1'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2'>
          <label
            for='schoolCategory'
            name='schoolCategory'
            className='tw-w-2/3'
          >
            <p>School Category: </p>
          </label>
          <FormControl sx={{ m: 1 }} className='tw-w-full' size='small'>
            <Select
              name='schoolCategory'
              id='schoolCategory'
              className='tw-w-full tw-rounded-md'
            >
              <MenuItem value=''>--Please choose an option--</MenuItem>
              <MenuItem value='dog'>Pre School</MenuItem>
              <MenuItem value='cat'>Primary</MenuItem>
              <MenuItem value='hamster'>Secondary</MenuItem>
              <MenuItem value='parrot'>Tertiary</MenuItem>
              <MenuItem value='spider'>Post Graduate</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='tw-flex tw-space-x-2 '>
          <label for='description' name='description' className='tw-w-2/3'>
            <p>School Description: </p>
          </label>
          <TextField
            multiline
            id='description'
            name='description'
            rows={3}
            variant='outlined'
            className='tw-w-full tw-rounded-md tw-p-1'
          />
        </div>
        <div className='tw-flex tw-space-x-2 '>
          <label for='address' name='address' className='tw-w-2/3'>
            <p>School Address: </p>
          </label>
          <TextField
            multiline
            id='address'
            variant='outlined'
            name='address'
            rows={2}
            className=' tw-w-full tw-rounded-md'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2 '>
          <label for='contact' name='contact' className='tw-w-2/3'>
            <p>Contact Number: </p>
          </label>
          <TextField
            type='tel'
            name='contact'
            id='contact'
            size='small'
            className='tw-w-full tw-overflow-hidden tw-rounded-md tw-p-1'
          />
        </div>
        <p className='tw-py-4 tw-text-lg tw-font-bold '>Document uploads</p>
        <div className='tw-flex tw-items-center tw-space-x-2'>
          <label
            for='taxCertificate'
            name='taxCertificate'
            className='tw-w-2/3'
          >
            <p>Tax Certificate: </p>
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
            <p>Registration Certificate: </p>
          </label>
          <input
            type='file'
            name='registrationCertificate'
            id='registrationCertificate'
            accept='.doc, .docx, .pdf'
          />
        </div>
        <div className='tw-flex tw-items-center tw-space-x-2'>
          <label
            for='ministryApproval'
            name='ministryApproval'
            className='tw-w-2/3'
          >
            <p>Ministry Approval: </p>
          </label>
          <input
            type='file'
            name='ministryApproval'
            id='ministryApproval'
            accept='.doc, .docx, .pdf'
          />
        </div>

        <Button
          variant='outlined'
          className=' tw-w-fit tw-rounded-md tw-px-4 tw-py-2 tw-capitalize tw-transition tw-duration-300 tw-ease-in-out'
        >
          Upload Document
        </Button>

        <div className=' pt-8'>
          <Button
            variant='contained'
            className='tw-w-full tw-rounded-md tw-bg-blue-400 tw-px-4 tw-py-2 tw-capitalize tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-500'
          >
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolPage;
