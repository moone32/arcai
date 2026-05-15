import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <div className="custom-icon-wrapper">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#01b0b0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* 사람 머리 옆모습 실루엣 */}
            <path d="M12 2a8.5 8.5 0 0 0-8.5 8.5c0 1.5.5 2.8 1.3 3.9l.7 1.1c.3.5.5 1 .5 1.5v1.5c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5v-1c0-.6.4-1 1-1h.5c.8 0 1.5-.7 1.5-1.5v-3.5A8.5 8.5 0 0 0 12 2z" />
            <text x="8" y="13.5" fontSize="6.5" fontWeight="800" fill="#01b0b0" stroke="none">AI</text>
          </svg>
        </div>
      ),
      label: '사고 위험',
      highlight: '▼ 60%',
      desc: 'AI 위험 예측으로 사고 감소',
    },
    {
      icon: (
        <div className="custom-icon-wrapper">
          <Clock size={44} strokeWidth={1.8} color="#01b0b0" />
        </div>
      ),
      label: '관리 시간',
      highlight: '▼ 50%',
      desc: '업무 자동화로 효율 향상',
    },
    {
      icon: (
        <div className="custom-icon-wrapper">
          <ShieldCheck size={44} strokeWidth={1.8} color="#01b0b0" />
        </div>
      ),
      label: '지원금 연계 가능',
      highlight: null,
      desc: '정부지원 사업 연계 지원\n(장비/설치비)',
    },
    {
      icon: (
        <div className="custom-icon-wrapper">
          <div className="icon-won-circle">₩</div>
        </div>
      ),
      label: '도입 비용 절감',
      highlight: '최대 80%',
      desc: '정부지원 무료 대행 지원',
    },
    {
      icon: (
        <div className="custom-icon-wrapper">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#01b0b0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* AI 칩/반도체 모양 */}
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
            <text x="8" y="14.5" fontSize="6.5" fontWeight="800" fill="#01b0b0" stroke="none">AI</text>
          </svg>
        </div>
      ),
      label: 'AI 24시간 관제',
      highlight: null,
      desc: '365일 24시간\n실시간 모니터링',
    }
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits-panel">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon-area">
                {item.icon}
              </div>
              <div className="benefit-text-area">
                <span className="benefit-label">{item.label}</span>
                {item.highlight && <div className="benefit-highlight">{item.highlight}</div>}
                <p className="benefit-desc">
                  {item.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
