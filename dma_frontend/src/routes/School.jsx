import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowBack } from 'react-icons/io';

import { Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const SchoolPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
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

            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>School Description:</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>School Address:</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
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

          <Button variant='outline-primary'>Upload Document</Button>

          <div className=' pt-8'>
            <Button variant='primary'>Submit</Button>
          </div>
        </section>
      </ProjectLayoutComp>
    </div>
  );
};

export default SchoolPage;
