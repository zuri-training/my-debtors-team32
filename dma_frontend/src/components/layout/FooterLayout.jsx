import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const FooterLayoutComp = () => {
  const year = new Date();
  // console.log(year.getFullYear());
  return (
    <div className='tw-bg-zinc-800 tw-px-6 tw-pt-14 tw-pb-8 '>
      <div className='tw-mx-auto tw-max-w-screen-xl tw-transition-all tw-duration-300 tw-ease-in-out'>
        {/* large screens */}
        <div className='tw-hidden tw-flex-col tw-text-white lg:tw-flex'>
          <div className='tw-grid tw-grid-cols-4 tw-gap-4'>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-4 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Get In Touch</span>
              <span className='tw-pt-4 tw-text-base tw-font-semibold'>
                0800 123 456
              </span>
              <span className='tw-text-base tw-font-semibold'>
                info@dma.com
              </span>
            </div>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-4 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Follow Us</span>
              <span className='tw-pt-4 tw-text-base tw-font-semibold'>
                Instagram
              </span>
              <span className='tw-text-base tw-font-semibold'>Twitter</span>
            </div>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-4 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Support</span>
              <span className='tw-pt-4 tw-text-base tw-font-semibold'>
                Terms of Service
              </span>
              <span className='tw-text-base tw-font-semibold'>
                Privacy Policy
              </span>
            </div>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-4 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>
                Subscribe To Our Newsletter
              </span>
              <div className='tw-flex'>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='Enter your email'
                    aria-label='SUbscriber email'
                    aria-describedby='Fotter input group'
                  />
                  <button
                    className=' tw-w-fit tw-rounded-lg tw-border tw-bg-red-600 tw-py-2 tw-px-5  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-red-700 hover:tw-text-white'
                    to='/register'
                  >
                    Subscribe
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
          <span className='tw-pt-10 tw-text-center'>
            Copyright, DMA {year.getFullYear()}. All Right Reserved
          </span>
        </div>

        {/* small screens */}
        <div className='tw-flex tw-flex-col tw-space-y-6 tw-text-white lg:tw-hidden'>
          {/* subscribe */}
          <div className='tw-it tw-flex  tw-w-fit tw-flex-col tw-justify-center tw-space-y-3 tw-font-fam1'>
            <span className='tw-text-2xl tw-font-semibold'>
              Subscribe To Our Newsletter
            </span>
            <div className='tw-flex'>
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder='Enter your email'
                  aria-label='SUbscriber email'
                  aria-describedby='Fotter input group'
                />
                <button
                  className=' tw-w-fit tw-rounded-lg tw-border tw-bg-red-700 tw-py-2 tw-px-5  tw-text-white tw-no-underline tw-transition-all  tw-duration-300 tw-ease-in-out hover:tw-bg-red-500 hover:tw-text-white'
                  to='/register'
                >
                  Subscribe
                </button>
              </InputGroup>
            </div>
          </div>
          {/* get in touch | follow us | support */}
          <div className='tw-grid tw-grid-cols-2 tw-gap-8'>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-1 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Get In Touch</span>
              <span className='tw-pt-2 tw-text-base tw-font-semibold'>
                0800 123 456
              </span>
              <span className='tw-text-base tw-font-semibold'>
                info@dma.com
              </span>
            </div>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-1 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Follow Us</span>
              <span className='tw-pt-2 tw-text-base tw-font-semibold'>
                Instagram
              </span>
              <span className='tw-text-base tw-font-semibold'>Twitter</span>
            </div>
            <div className='tw-flex tw-flex-col  tw-justify-center tw-space-y-1 tw-font-fam1'>
              <span className='tw-text-2xl tw-font-semibold'>Support</span>
              <span className='tw-pt-2 tw-text-base tw-font-semibold'>
                Terms of Service
              </span>
              <span className='tw-text-base tw-font-semibold'>
                Privacy Policy
              </span>
            </div>
          </div>
          <span className='tw-pt-10 tw-text-center'>
            Copyright, DMA {year.getFullYear()}. All Right Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutComp;
