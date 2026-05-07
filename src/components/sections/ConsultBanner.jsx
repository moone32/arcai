import React from 'react';
import { HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';
import './ConsultBanner.css';

const ConsultBanner = () => {
  return (
    <section className="consult-banner section" id="consult">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-content">
            <div className="banner-icon">
              <HelpCircle size={40} color="white" />
            </div>
            <h2 className="banner-title">우리 현장도 적용 가능할까?</h2>
            
            <div className="banner-checks">
              <span className="check-item"><CheckCircle size={16} /> 정부지원 가능 여부 확인</span>
              <span className="check-item"><CheckCircle size={16} /> 1일 맞춤 컨설팅 제공</span>
              <span className="check-item"><CheckCircle size={16} /> 전문가 빠른 상담</span>
            </div>
          </div>
          
          <button className="btn btn-outline banner-btn">
            우리 현장 비용 10초 확인 <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultBanner;
