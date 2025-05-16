import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer">		
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>회사 정보</h3>
            <p>주소: 서울특별시</p>
            <p>전화: 02-1234-5678</p>
            <p>이메일: info@example.com</p>
          </div>
          <div className="footer-section">
            <h3>바로가기</h3>
            <ul>
              <li><Link to="/about">회사 소개</Link></li>
              <li><Link to="/services">서비스</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 