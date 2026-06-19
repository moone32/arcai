import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
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
        <div className="logo" onClick={(e) => navigateTo(e, '/')} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="ARCAI" className="logo-img" />
        </div>

        <nav className="desktop-nav">
          <a href="/companyIntro" className={currentPath === '/companyIntro' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/companyIntro')}>기업소개</a>
          <a href="/solutions" className={currentPath === '/solutions' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/solutions')}>솔루션</a>
          <a href="/benefits" className={currentPath === '/benefits' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/benefits')}>도입효과</a>
          <a href="/products" className={currentPath === '/products' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/products')}>제품소개</a>
          <a href="/support" className={currentPath === '/support' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/support')}>정부지원</a>
          <a href="/cases" className={currentPath === '/cases' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/cases')}>구축사례</a>
          <a href="/installServce" className={currentPath === '/installServce' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/installServce')}>전국설치대응가능</a>
          <a href="/partners" className={`highlight-nav ${currentPath === '/partners' ? 'active-nav' : ''}`} onClick={(e) => navigateTo(e, '/partners')}>★ 파트너 모집</a>
        </nav>

        <div className="header-actions">
          <a href="tel:15516616" className="contact-phone">
            <Phone size={18} />
            <span>1551-6616</span>
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
          <a href="/companyIntro" className={currentPath === '/companyIntro' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/companyIntro'); closeMobileMenu(); }}>기업소개</a>
          <a href="/solutions" className={currentPath === '/solutions' ? 'active-nav' : ''} onClick={(e) => navigateTo(e, '/solutions')}>솔루션</a>
          <a href="/benefits" className={currentPath === '/benefits' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/benefits'); closeMobileMenu(); }}>도입효과</a>
          <a href="/products" className={currentPath === '/products' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/products'); closeMobileMenu(); }}>제품소개</a>
          <a href="/support" className={currentPath === '/support' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/support'); closeMobileMenu(); }}>정부지원</a>
          <a href="/cases" className={currentPath === '/cases' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/cases'); closeMobileMenu(); }}>구축사례</a>
          <a href="/installServce" className={currentPath === '/installServce' ? 'active-nav' : ''} onClick={(e) => { navigateTo(e, '/installServce'); closeMobileMenu(); }}>전국설치대응가능</a>
          <a href="/partners" className={`highlight-nav ${currentPath === '/partners' ? 'active-nav' : ''}`} onClick={(e) => { navigateTo(e, '/partners'); closeMobileMenu(); }}>★ 파트너 모집</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
