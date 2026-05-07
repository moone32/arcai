import React from 'react';
import { ShieldCheck, Clock, Coins, Eye } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={32} />,
      title: '사고 위험 ↓ 60%',
      desc: '사고 위험 60% 감소',
    },
    {
      icon: <Clock size={32} />,
      title: '관리 시간 ↓ 50%',
      desc: '안전관리 시간 50% 절감',
    },
    {
      icon: <Coins size={32} />,
      title: '지원금 80%',
      desc: '정부지원 최대 비용 절감',
    },
    {
      icon: <Eye size={32} />,
      title: 'AI 24시간 감시',
      desc: 'AI가 24시간 안전을 지킵니다',
    }
  ];

  return (
    <section className="benefits section section-light" id="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon-wrapper">
                {/* 썸네일 이미지 자리 연출 */}
                <div className="benefit-image-placeholder"></div>
                <div className="benefit-icon">{item.icon}</div>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
                <span className="benefit-arrow">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
