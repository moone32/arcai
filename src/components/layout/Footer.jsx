import React from 'react';
import './Footer.css';
import { Video, Camera, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-cta">
          <div className="cta-content">
            <h2>지금 바로 ARCAI와 함께<br /><span className="text-highlight">안전한 현장</span>을 만드세요!</h2>
            <p>무료 상담부터 정부지원 컨설팅까지, 모두 도와드립니다.</p>
          </div>
          <div className="cta-actions">
            <div className="consult-box">
              <span className="box-label">지금 바로 상담·문의</span>
              <div className="phone-number">
                <span className="icon">📞</span> 1551-6616
              </div>
              <p className="time">평일 09:00 - 18:00 | info@arcai.co.kr</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <span className="footer-logo">ARCAI</span>
            <span className="copyright">© 2026 ARCAI. All rights reserved.</span>
            <div className="legal-links">
              <a href="#terms">개인정보처리방침</a>
              <a href="#terms">이용약관</a>
            </div>
            <p className="company-details">
              사업자등록번호: 292-87-03849 | 대표자: 이윤진<br />
              주소: 경기도 남양주시 진접읍 경복대로 425-80, 6508호 경복대학교
            </p>
          </div>
          <div className="social-links">
            <a href="#youtube" className="social-icon youtube"><Video size={20} /></a>
            <a href="#blog" className="social-icon blog">B</a>
            <a href="#insta" className="social-icon insta"><Camera size={20} /></a>
            <a href="#kakao" className="social-icon kakao"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
