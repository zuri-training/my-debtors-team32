import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About-us-page.css';
const AboutPage = () => {
  return (
    <div>
      <header className='tw-w-full tw-bg-[#b4b1b1]'>
        <nav className='tw-mx-4 tw-flex tw-justify-between tw-py-2'>
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
      <div className='head1'>
        <div className='what'>
          <h2>What we do</h2>
        </div>

        <div className='header-2'></div>
      </div>

      <div className='purpose'>
        <h2>Our purpose</h2>
        <br />
        <p>
          Debitor Monitoring Agency is a platform used by school management to
          verify the authencity of parents and financial prudence. we help you
          build reliable financial systems y fishing out potential debtors
        </p>
        <br />
        <p>
          Our aim is to help more schools become financially independent. we are
          concerned about the way schools go bankrupt due to extended debts, so
          this platform is being set up to help sschool managements trace their
          debtors and recover their losses
        </p>
      </div>
      <div className='body-1'>
        <div className='child-1'>
          <h2>Our Focus</h2> <br />
          <br />
          <p>
            Our focus is to help you attain financial freedom by closing out
            every financial gap possible
          </p>
          <br />
          <button className=' btn'>Learn More &rsaquo; </button>
        </div>
        <div className='child-2'></div>
      </div>
      <footer>
        <div className='text'>
          <h2>Our Team</h2> <br />
          <p>
            Our team is made up of experience professionals in different fields{' '}
            <br /> of legal and financial institutions to help you bring
            financial balance to your business <br /> while impacting lifes.
          </p>
        </div>
        <br />

        <div className='team1-2'>
          <div className='team1'>
            <img className='img-style' src='pic01.jpeg' alt='tinuke' />
            <p>
              Tinuke
              <br /> financial Analyst <br />
              <br /> Passionate about schools <br /> and seeing them succeed.
            </p>
          </div>

          <div className='team2'>
            <img className='img-style' src='pic02.jpeg' alt='folarin' />
            <p>
              Folarin
              <br /> Consultant <br />
              <br /> Enthusiastic about building <br /> system that works.
            </p>
          </div>
        </div>

        <div className='team3-4'>
          <div className='team3'>
            <img className='img-style' src='pic04.jpeg' alt='Lydia' />
            <p>
              Lydia
              <br /> Accountant <br />
              <br /> creating financial awareness
              <br /> in the society.
            </p>
          </div>

          <div className='team4'>
            <img className='img-style' src='pic03.jpeg' alt='James' />
            <p>
              James
              <br /> Life coach <br />
              <br /> Building societies to withstand <br /> tough times.
            </p>
          </div>
        </div>

        <div className='footer-2'></div>
      </footer>
    </div>
  );
};

export default AboutPage;
