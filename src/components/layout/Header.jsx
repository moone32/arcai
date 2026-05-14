import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigateTo = (e, path) => {
    if (path.startsWith('/')) {
      e.preventDefault();
      window.history.pushState({}, '', path);
      window.dispatchEvent(new Event('pushstate'));
      if (isMobileMenuOpen) closeMobileMenu();
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo" onClick={(e) => navigateTo(e, '/')} style={{cursor: 'pointer'}}>
          <img src="/logo.png" alt="ARCAI" className="logo-img" />
        </div>

        <nav className="desktop-nav">
          <a href="/solutions" onClick={(e) => navigateTo(e, '/solutions')}>솔루션</a>
          <a href="/benefits" onClick={(e) => navigateTo(e, '/benefits')}>도입효과</a>
          <a href="/products" onClick={(e) => navigateTo(e, '/products')}>제품소개</a>
          <a href="/support" onClick={(e) => navigateTo(e, '/support')}>정부지원</a>
          <a href="/cases" onClick={(e) => navigateTo(e, '/cases')}>구축사례</a>
          <a href="/partners" className="highlight-nav" onClick={(e) => navigateTo(e, '/partners')}>★ 파트너 모집</a>
        </nav>

        <div className="header-actions">
          <a href="tel:15880800" className="contact-phone">
            <Phone size={18} />
            <span>1588-0800</span>
          </a>
          <button className="btn btn-primary consult-btn" onClick={(e) => navigateTo(e, '/consult')}>
            도입 상담 <ArrowRight size={16} />
          </button>
          <button
            className="mobile-menu-btn"
            aria-label="메뉴 열기"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="/solutions" onClick={(e) => navigateTo(e, '/solutions')}>솔루션</a>
          <a href="/benefits" onClick={(e) => { navigateTo(e, '/benefits'); closeMobileMenu(); }}>도입효과</a>
          <a href="/products" onClick={(e) => { navigateTo(e, '/products'); closeMobileMenu(); }}>제품소개</a>
          <a href="/support" onClick={(e) => { navigateTo(e, '/support'); closeMobileMenu(); }}>정부지원</a>
          <a href="/cases" onClick={(e) => { navigateTo(e, '/cases'); closeMobileMenu(); }}>구축사례</a>
          <a href="#pricing" onClick={closeMobileMenu}>가격안내</a>
          <a href="/partners" className="highlight-nav" onClick={(e) => { navigateTo(e, '/partners'); closeMobileMenu(); }}>★ 파트너 모집</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
