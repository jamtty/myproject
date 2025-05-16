import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    // 현재 호스트가 GitHub Pages인 경우에만 URL 수정
    if (window.location.hostname === 'jamtty.github.io') {
      window.history.replaceState(null, '', '/myproject/');
    } else {
      window.history.replaceState(null, '', '/');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>LOGO</Link>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/about">회사소개</Link></li>
            <li><Link to="/services">서비스</Link></li>
			<li><Link to="/contact">문의하기</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 