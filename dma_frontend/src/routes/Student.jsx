import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const StudentPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <div className='tw-tw-flex tw-w-full tw-px-4 tw-pt-8'>
          <Link to='/register' className='tw-flex tw-items-center tw-space-x-2'>
            {' '}
            <IoMdArrowBack /> <span>Back</span>
          </Link>
          <h1 className='tw-w-full tw-text-center tw-text-2xl tw-font-bold'>
            Register As Student
          </h1>
        </div>

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
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
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
      </ProjectLayoutComp>
    </div>
  );
};

export default StudentPage;
