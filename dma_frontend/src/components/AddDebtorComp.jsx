import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
// import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContextData } from '../lib/GlobalContext';
// import useWindowSize from 'react-use/lib/useWindowSize';
// import Confetti from 'react-confetti';
// import { useWindowSize } from 'rooks';
// import { useMount, useCookie } from 'react-use';
import { useCookies } from 'react-cookie';
import slugify from 'react-slugify';
const AddDeptorComp = () => {
  const formRef = useRef();
  let navigate = useNavigate();
  // const { width, height } = useWindowSize();
  // const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  // let navigate = useNavigate();

  const [formValue, setformValue] = useState({});
  // const [backendForm, setBackendForm] = useState(formValue)
  const [modalShow, setModalShow] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);

  console.log('formValue', formValue);
  const { schoolInfo } = useContextData();

  const handleClose = () => {
    navigate('/dashboard');
    setModalShow(false);
    setBtnLoad(false);
  };
  const handleShow = () => setModalShow(true);

  const handleForm = (e) => {
    e.preventDefault();

    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const [cookies] = useCookies(['dma-cookies']);
  const token = cookies['dma-cookies'];

  const backendSubmit = async () => {
    formValue['school_owed'] = schoolInfo?.school_name;
    formValue['author'] = schoolInfo?.author;
    formValue['status'] = 'Abandoned payment';
    formValue['slug'] = slugify(schoolInfo?.school_name);
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/r/dashboard/`,
      {
        ...formValue,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    console.log('result', result);
  };

  const handleSubmit = async (e) => {
    console.log('this is formValue', formRef.current);
    // formValue['link'] = 'https://my-debtors-team32.vercel.app/contend';
    e.preventDefault();
    setBtnLoad(true);
    // await backendSubmit();

    emailjs
      .sendForm(
        'service_v3hk5ps',
        'template_tpoab74',
        formRef.current,
        'user_yKG0o8oFE1edTjUtFO2Dh'
      )
      .then(
        async (result) => {
          console.log(result);
          await backendSubmit();
          handleShow();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className='tw-flex tw-flex-col tw-rounded-lg tw-p-4 '>
      {/* heading */}
      <div>
        <h1 className='tw-mb-4 tw-font-fam1 tw-text-2xl tw-font-semibold tw-text-blue-900'>
          Add A Debtor
        </h1>
      </div>

      <Form
        className='tw-space-y-0 lg:tw-space-y-2'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='tw-flex tw-flex-col tw-items-center tw-space-y-3 lg:tw-flex-row lg:tw-space-y-0 lg:tw-space-x-4'>
          <Form.Group className='mb-3 tw-w-full' controlId='name_of_student'>
            <Form.Label className='tw-font-semibold'>Student Name</Form.Label>
            <Form.Control
              type='text'
              placeholder="Enter Student's Name"
              name='name_of_student'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
          <Form.Group className='mb-3 tw-w-full' controlId='name_of_parent'>
            <Form.Label className='tw-font-semibold'>Parent Name</Form.Label>
            <Form.Control
              type='text'
              placeholder="Enter Parent's Name"
              name='name_of_parent'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
        </div>
        <div className='tw-flex tw-flex-col tw-items-center tw-space-y-3 lg:tw-flex-row lg:tw-space-y-0 lg:tw-space-x-4'>
          <Form.Group className='mb-3 tw-w-full' controlId='email'>
            <Form.Label className='tw-font-semibold'>Parent Email</Form.Label>
            <Form.Control
              type='email'
              placeholder="Enter Parent's Name"
              name='email'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
          <Form.Group className='mb-3 tw-w-full' controlId='phone_number'>
            <Form.Label className='tw-font-semibold'>
              Parent Phone Number
            </Form.Label>
            <Form.Control
              type='tel'
              placeholder="Enter Parent's Number"
              name='phone_number'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
        </div>
        <div className='tw-flex tw-flex-col tw-items-center tw-space-y-3 lg:tw-flex-row lg:tw-space-y-0 lg:tw-space-x-4'>
          <Form.Group className='mb-3 tw-w-full' controlId='amount_owed'>
            <Form.Label className='tw-font-semibold'>Amount</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Amount'
              name='amount_owed'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
          <Form.Group controlId='formFile' className='mb-3 tw-w-full'>
            <Form.Label className='tw-font-semibold'>Evidence</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
        </div>
        <div className='tw-flex tw-flex-col tw-items-center tw-space-y-3 lg:tw-flex-row lg:tw-space-y-0 lg:tw-space-x-4'>
          <Form.Group className='mb-3 tw-w-full' controlId='amount'>
            {/* <Form.Label className='tw-font-semibold'>Amount</Form.Label> */}
            <Form.Control
              type='text'
              hidden
              // placeholder='Contend Link'
              value='https://my-debtors-team32.vercel.app/signup'
              name='link'
              onChange={(e) => handleForm(e)}
            />
          </Form.Group>
        </div>
        {/* submit button */}
        <div className='tw-flex tw-items-center tw-justify-center tw-pt-4'>
          <button
            disabled={btnLoad}
            type='submit'
            className=' tw-w-2/3  tw-cursor-pointer tw-rounded-lg tw-bg-blue-900  tw-py-2 tw-px-10 tw-text-center  tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
            // onClick={() => handleSubmit()}
          >
            Sumbit
          </button>
        </div>
      </Form>
      <Modal
        show={modalShow}
        onHide={handleClose}
        // size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Mail Sent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* mail has been sent to the parent that is owing */}
          <p className='tw-text-lg tw-font-semibold tw-text-gray-600 lg:tw-text-xl'>
            The parent of this ward has been sent a mail to notify them of this
            debt they are owing your institution
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='   tw-cursor-pointer tw-rounded-lg tw-bg-blue-900  tw-py-2 tw-px-6 tw-text-center  tw-text-white tw-no-underline tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
            onClick={handleClose}
          >
            See Deptor List
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddDeptorComp;
