import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import './PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      type: '구독형',
      price: '300',
      period: '만원~',
      features: ['정부지원 최대 80% 가능', '설치 및 교육 지원', '1년 무상 유지보수']
    },
    {
      type: '렌탈형',
      price: '50',
      period: '만원~/월',
      features: ['초기 비용 부담 없음', '설치·운영·유지보수 포함', '언제든지 해지 가능']
    },
    {
      type: '필요형',
      price: '별도 문의',
      period: '',
      features: ['현장 맞춤 설계 100% 가능', '대량/다수현장 할인', '자체 서버 구축 지원']
    }
  ];

  return (
    <section className="pricing section section-gray" id="pricing">
      <div className="container">
        
        <div className="pricing-container">
          <div className="pricing-intro">
            <h2 className="section-title text-left pricing-main-title">합리적인 비용으로<br/>최고의 안전을</h2>
            <div className="intro-badges-wrap">
              <div className="intro-badge">
                <span className="badge-icon">W</span> 국내 최저 비용
              </div>
              <div className="intro-badge">
                <span className="badge-icon">AI</span> AI 연동 시스템
              </div>
            </div>
          </div>

          <div className="pricing-cards">
            {plans.map((plan, idx) => (
              <div className="price-card" key={idx}>
                <h3 className="plan-type">{plan.type}</h3>
                <div className="plan-price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check" /> {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pricing-cta">
            <div className="cta-icon"><MessageCircle size={32} /></div>
            <p>전문 부서로 상담하세요!<br/><span>전문가가 빠르게 답변 드립니다.</span></p>
            <button className="btn btn-outline cta-btn">무료 체험 신청 <span className="arrow">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
