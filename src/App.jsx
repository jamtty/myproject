import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/style.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  // 현재 호스트가 GitHub Pages인 경우에만 basename 설정
  const basename = window.location.hostname === 'jamtty.github.io' ? '/myproject' : '';

  return (
    <Router basename={basename}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 