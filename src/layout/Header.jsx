import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">LOGO</Link>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/services">서비스</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 