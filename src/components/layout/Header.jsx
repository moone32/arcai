import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo">
          <span className="logo-text">ARCAI</span>
        </div>
        
        <nav className="desktop-nav">
          <a href="#solutions">솔루션</a>
          <a href="#benefits">도입효과</a>
          <a href="#cases">구축사례</a>
          <a href="#pricing">가격안내</a>
          <a href="#partners" className="highlight-nav">★ 파트너 모집</a>
        </nav>

        <div className="header-actions">
          <a href="tel:15880800" className="contact-phone">
            <Phone size={18} />
            <span>1588-0800</span>
          </a>
          <button className="btn btn-primary consult-btn">
            도입 상담 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
