import React from 'react';
import { PhoneCall, Building2, ArrowUp } from 'lucide-react';
import './FloatingMenu.css';

const FloatingMenu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-menu">
      <a href="#talk" className="floating-item talk-item" title="카카오톡 상담">
        <div className="icon-container">
          <div className="talk-bubble">TALK</div>
        </div>
      </a>

      <a href="#call" className="floating-item call-item" title="전화 상담">
        <div className="icon-container">
          <PhoneCall size={26} strokeWidth={2.5} />
        </div>
      </a>

      {/*<a href="#inquiry" className="floating-item building-item" title="도입 문의">
        <div className="icon-container">
          <Building2 size={26} strokeWidth={2} />
        </div>
      </a>*/}

      <div className="floating-divider"></div>

      <button className="floating-item top-item" onClick={scrollToTop} title="맨 위로">
        <div className="icon-circle">
          <ArrowUp size={22} strokeWidth={2} />
        </div>
      </button>
    </div>
  );
};

export default FloatingMenu;
