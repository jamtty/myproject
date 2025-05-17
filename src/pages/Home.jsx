import React from 'react';
import bgVisual from '../assets/images/bg_visual.png';

const Home = () => {
  return (
    <div className="container">
      <section className="hero-section">
        <h1>환영합니다</h1>
        <p className="text-center mt-2">
          메인 페이지입니다.<br />
          메인 페이지 입니다.<br />
          메인 페이지 입니다.<br />
          자동 배포 테스트<br />
          자동 배포 테스트2
        </p>
      </section>

      <section className="image-section">
        <div className="image-grid">
          <div className="image-item">
            <img 
              src={bgVisual}
              alt="메인 이미지" 
              style={{ width: '100%', maxWidth: '800px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 