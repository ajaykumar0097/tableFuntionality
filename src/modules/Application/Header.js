import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul className="nav-links">
          <li>Qualifications</li>
          <li>Organizations</li>
          <li>Research & Analysis</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </nav>
      <button className="enrollment-button">Enrolment</button>
    </header>
  );
};

export default Header;
