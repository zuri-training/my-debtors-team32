import React from 'react';
import '../styles/About-us-page.css';
import { BiBullseye } from 'react-icons/bi';
import AboutUs01 from '../images/AboutUs01.jpg';
import AboutUs02 from '../images/AboutUs02.png';
import AboutUs03 from '../images/AboutUs03.png';
import Focus from '../images/Focus.png';
import Rectangle01 from '../images/Rectangle01.png';
import Rectangle02 from '../images/Rectangle02.png';
import Rectangle03 from '../images/Rectangle03.png';
import Rectangle04 from '../images/Rectangle04.png';
import reg from '../images/reg.png';
import HeaderLayoutComp from './layout/HeaderLayout';

const AboutUsComp = () => {
  return (
<<<<<<< HEAD
    <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
=======
    <div className='about-body tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
      <HeaderLayoutComp />
      <div className=''>
        {
          <div>
            <div className='heading'>
              <div className='us'>
                <h2>About Us</h2> <br />
                <p>
                  DMA is a welcome development in <br /> the school mode of
                  operation as <br /> it has fostered credit worthiness <br />{' '}
                  in parents/guardians
                </p>
                <a href='SignUpComp.jsx'>
                  <button className='abt-btn01'>Register</button>
                </a>
              </div>
              <div className='us-images'>
                <div className='img01'>
                  <img id='grid-img01' src={AboutUs01} alt='img01' />
                </div>
                <div className='img02'>
                  <img id='grid-img02' src={AboutUs02} alt='img02' />
                </div>
                <div className='img03'>
                  <img id='grid-img03' src={AboutUs03} alt='img03' />
                </div>
              </div>
<<<<<<< HEAD
              <a href='SignUpComp.jsx'>
                <button className='mabt-btn01'>Register</button>
              </a>
=======
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
            </div>
            <div className='middle01'>
              <div className='head-purpose'>
                <h2>Our Purpose</h2>
              </div>
              <div className='text-purpose'>
                <ul className='mylist'>
<<<<<<< HEAD
                  <li>
                    To ensure that the school's financing needs and its payment
                    obligationsare met at <br />
                    the lowest possible cost over the medium to long run,
                    consistent with a prudent <br /> degree of risk
                  </li>
                  <br />
                  <li>
                    we make sure parents/guardians of the wards are free to
                    contend such claims via <br /> submission of payment
                    evidence, and can also plead to be given more time
                  </li>
                  <br />
                  <li>
                    We help you build reliable financial systems by fishing out
                    potential debtors
                  </li>
=======
                  <div className='point'>
                    <BiBullseye className='bull-eye'/>
                    <li>    
                      To ensure that the school's financing needs and its payment
                      obligationsare met at <br />
                      the lowest possible cost over the medium to long run,
                      consistent with a prudent <br /> degree of risk
                    </li>
                  </div>
                  <br />
                  <div className='point'>
                    <BiBullseye className='bull-eye'/>
                    <li>    
                      We make sure parents/guardians of the wards are free to
                      contend such claims via <br /> submission of payment
                      evidence, and can also plead to be given more time
                    </li>
                  </div>
                  
                  <br />
                  <div className='point'>
                    <BiBullseye className='bull-eye'/>
                    <li>    
                      We help you build reliable financial systems by fishing out
                      potential debtors
                    </li>
                  </div>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                </ul>
              </div>
            </div>

            <div className='middle02'>
              <div className='head-focus'>
                <h2>Our Focus</h2>
                <br />
                <p>
                  Our focus is to help you attain financial <br /> freedom by
                  closing out every financial <br /> gap possible.
                </p>
                <br />
                <button className='foc-btn02'>Login</button>
              </div>
              <div className='focus-img'>
                <div className='img04'>
                  <img id='grid-img04' src={Focus} alt='img04' />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div className='myfooter01'>
              <div className='team-meet'>
                <h2>Meet Our Team</h2>
              </div>
              <br />
              <br />
              <div className='team-img'>
                <div className='fig-parent'>
                  <figure id='fig01'>
                    <img id='grid-img06' src={Rectangle01} alt='img06' />
<<<<<<< HEAD
                    <figcaption id='myfig1'>
                      {' '}
                      Daniel Grey <br />
=======
                    <figcaption id='myfig1' className='myfig'>
                      {' '}
                      <span>Daniel Grey</span> <br />
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      CEO
                    </figcaption>
                  </figure>

                  <figure id='fig02'>
                    <img id='grid-img07' src={Rectangle02} alt='img07' />
<<<<<<< HEAD
                    <figcaption id='myfig2'>
                      {' '}
                      Priscilla Evans <br /> Head of Operations
=======
                    <figcaption id='myfig2' className='myfig'>
                      {' '}
                      <span>Priscillia Evans</span> <br /> Head of Operations
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                    </figcaption>
                  </figure>

                  <figure id='fig03'>
                    <img id='grid-img08' src={Rectangle03} alt='img08' />
<<<<<<< HEAD
                    <figcaption id='myfig3'>
                      {' '}
                      Samuel Murphy <br />
=======
                    <figcaption id='myfig3' className='myfig'>
                      {' '}
                      <span>Samuel Murphy</span> <br />
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      Advisor and angel investor
                    </figcaption>
                  </figure>

                  <figure id='fig04'>
                    <img id='grid-img09' src={Rectangle04} alt='img09' />
<<<<<<< HEAD
                    <figcaption id='myfig4'>
                      Eric Navani <br />
=======
                    <figcaption id='myfig4' className='myfig'>
                    <span>Eric Navani</span> <br />
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
                      Director
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='myfooter02'>
              <div className='reg01'>
                <h2>
                  Register Your{' '}
                  <a id='blueschool' href='AboutUsComp.jsx'>
                    School
                  </a>{' '}
                  with Us Today
                </h2>
                <br />
                <p>
                  DMA ensures minimial financial loss of these schools by <br />{' '}
                  allowing schools within a given region to list a directory of{' '}
                  <br /> wards of parents or guardians who owe, which in turn{' '}
                  <br /> prevent them from admitting wards of these parents or{' '}
                  <br /> guardians{' '}
                </p>
                <br />
<<<<<<< HEAD
                <button className='reg-btn03'>Register</button>
=======
                <button className='abt-btn01'>Register</button>
>>>>>>> 14aa1ecebece8f2bb937239a30dfc23369b02131
              </div>

              <div className='reg-img'>
                <img id='grid-img10' src={reg} alt='img10' />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutUsComp;
