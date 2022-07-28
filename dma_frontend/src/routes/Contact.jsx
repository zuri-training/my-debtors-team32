import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Home</Link> | <Link to='/contact'>Contact</Link> |{' '}
        <Link to='/about'>About</Link>
      </nav>
      <div>ContactPage</div>
    </div>
  );
};

export default ContactPage;
