import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../styles/home.css';
const HomePageComp = () => {
  let navigate = useNavigate();
  return (
    <div>
      <header className='top-section'>
        <nav className='main-nav nav-container'>
          <div className='nav-header' id='left-nav-item'>
            <a className='brand-logo' href='index.html'>
              <img src='#' alt='logo' />
            </a>
          </div>
          <div className='hambuger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='right-nav'>
            <div className='nav-list tw-w-full' id='mid-nav-item'>
              <ul className='nav-bar-items' id='pry-nav'>
                <li className=' nav-item'>
                  <Link className='active' to='/'>
                    Home
                  </Link>
                </li>
                {/* <li className=' nav-item'>
                  <a href='#about'>About</a>
                </li>
                <li className=' nav-item'>
                  <a href='#!'>Features</a>
                </li>
                <li className=' nav-item'>
                  <a href='#!'>About Us</a>
                </li>
                <li className=' nav-item'>
                  <a href='#!'>Contact Us</a>
                </li> */}
                <li className=' nav-item'>
                  <Link to='/features'>Features</Link>
                </li>
                <li className=' nav-item'>
                  <Link to='/about'>About</Link>
                </li>
                <li className=' nav-item'>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li className=' nav-item'>
                  <Link to='/signup'>Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className='nav-list' id='right-nav-item'>
              <button
                onClick={() => navigate(`/login`)}
                className='login btn_1 tw-flex tw-w-fit tw-justify-center'
                id='top_login'
              >
                LogIn
              </button>
              <button
                onClick={() => navigate(`/register`)}
                className='reg btn_1 tw-flex tw-w-fit tw-justify-center tw-no-underline'
                id='top_reg'
              >
                Register
              </button>
            </div>
          </div>
        </nav>
        <p id='top_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          cupiditate iusto quo veniam commodi ratione atque inventore quae,
          necessitatibus possimus a! Praesentium, voluptatem!
        </p>
      </header>
      <div className='vid mt-20'>
        <video src='#'></video>
      </div>
      <main className='main_Page'></main>
      {/* who we are */}
      <div id='about' className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8'>
            <h2 className='home_h2'>Who Are We?</h2>
            <br />
            <h4 className='home_h4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-grey'>
        <div className='row_1'>
          <div className='col-sm-8'>
            <h2 className='home_h2'>What We Do?</h2>
            <br />

            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <button className='btn_1'>Register</button>
          </div>
          <div className='col-sm-4'>
            <img src='images/grey.png' style={{ height: '100%' }} alt='' />
          </div>
          <div className='col-sm-4'>
            <img src='images/grey.png' style={{ height: '100%' }} alt='' />
          </div>
        </div>
      </div>
      {/* impack section */}
      <div id='#' className='container-fluid text-center'>
        <h2 className='home_h2'>Our Impacts and Contributions</h2>

        <br />
        <br />
        <div className='row slideanim'>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-leaf logo-small'></span>
            <h4 className='home_h4'>GREEN</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-certificate logo-small'></span>
            <h4 className='home_h4'>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-wrench logo-small'></span>
            <h4 className='home_h4' style={{ color: '#303030' }}>
              HARD WORK
            </h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>
      {/* what schol thinks about us */}
      <div id='#' className='container-fluid text-center bg-grey'>
        <h2 className='home_h2'>What Schools Think About Us?</h2>
        <div
          id='myCarousel'
          className='carousel slide text-center'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#myCarousel'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#myCarousel' data-slide-to='1'></li>
            <li data-target='#myCarousel' data-slide-to='2'></li>
          </ol>
          <div className='carousel-inner' role='listbox'>
            <div className='item active'>
              <h4 className='home_h4'>
                "This company is the best. I am so happy with the result!"
                <br />
                <span>Michael Roe, Vice President, Comment Box</span>
              </h4>
            </div>
            <div className='item'>
              <h4 className='home_h4'>
                "One word... WOW!!"
                <br />
                <span>John Doe, Salesman, Rep Inc</span>
              </h4>
            </div>
            <div className='item'>
              <h4 className='home_h4'>
                "Could I... BE any more happy with this company?"
                <br />
                <span>Chandler Bing, Actor, FriendsAlot</span>
              </h4>
            </div>
          </div>

          <a
            className='left carousel-control'
            href='#myCarousel'
            role='button'
            data-slide='prev'
          >
            <span
              className='glyphicon glyphicon-chevron-left'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='right carousel-control'
            href='#myCarousel'
            role='button'
            data-slide='next'
          >
            <span
              className='glyphicon glyphicon-chevron-right'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>

      <div className='container-fluid text-center'>
        <div className='row_1'>
          <div className='col-sm-8'>
            <h2 className='home_h2'>Register Your School With Us Today</h2>
            <br />

            <p>
              Our vision Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <br />
            <button className='btn_1'>Register</button>
          </div>
          <div className='col-sm-4'>
            <img src='images/grey.png' style={{ height: '100%' }} alt='' />
          </div>
        </div>
      </div>

      {/* footer section */}
      <footer className='bottom_section home_footer'>
        <div className='row'></div>
        <div className='row'>
          <div className='col'>
            <h3>Get In Touch</h3>
            <a href='tel:+2348012345678'>0801 234 5678</a>
            <a href='mailto:abecefgh@gmail.com'>abec@gmail.com</a>
          </div>
          <div className='col'>
            <h3>Follow Us</h3>
            <p>
              <i className='fa-brands fa-instagram'></i>
              <span>Instagram</span>
            </p>
            <p>
              <i className='fa-brands fa-twitter'></i>
              <span>Twitter</span>
            </p>
          </div>
          <div className='col'>
            <h3>Support</h3>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className='col'>
            <h3>Subscribe To Our Newsletter</h3>
            <form action='#' className='home_form'>
              <div className='news'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email'
                />
                <input type='button' value='Subscribe' id='submit' />
              </div>
            </form>
          </div>
        </div>
        <p className='copyright'>
          &copy;copyright abcdefghi 2022. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePageComp;
