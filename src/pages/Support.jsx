import React from 'react';
import {
  CircleDollarSign,
  PieChart,
  ClipboardCheck,
  Headset,
  ShieldCheck,
  HardHat,
  Factory,
  ChevronRight
} from 'lucide-react';
import './Support.css';
import { navigateTo } from '../utils/navigation';

const Support = () => {
  const benefits = [
    {
      icon: <CircleDollarSign size={40} strokeWidth={1.5} />,
      title: '설치비 부담 완화',
      desc: '정부지원 연계로\n도입 비용 부담을 줄여드립니다.'
    },
    {
      icon: <PieChart size={40} strokeWidth={1.5} />,
      title: '최대 80% 지원',
      desc: '지원 사업에 따라\n최대 80%까지 지원 가능합니다.',
      chart: true
    },
    {
      icon: <ClipboardCheck size={40} strokeWidth={1.5} />,
      title: '간편한 신청 절차',
      desc: '전문가가 신청부터 승인까지\n모든 과정을 지원해드립니다.'
    },
    {
      icon: <Headset size={40} strokeWidth={1.5} />,
      title: '무료 상담 지원',
      desc: '지원 가능 여부를 확인하고\n최적의 지원 사업을 안내해 드립니다.'
    }
  ];

  const programs = [
    {
      icon: <ShieldCheck size={32} />,
      title: '산업안전보건 강화 지원사업',
      badge: '지원 비율 50~80%',
      desc: '중소기업의 안전보건 관리체계 구축을\n위한 비용 지원'
    },
    {
      icon: <HardHat size={32} />,
      title: '스마트 안전장비 지원사업',
      badge: '지원 비율 50~70%',
      desc: '스마트 안전장비 도입을 통한\n산재 예방 비용 지원'
    },
    {
      icon: <Factory size={32} />,
      title: '중소기업 안전투자 혁신사업',
      badge: '지원 비율 50~80%',
      desc: '위험 설비 개선 및 안전 투자 확대를\n위한 비용 지원'
    }
  ];

  return (
    <div className="support-page fade-in">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="container support-hero-container">
          <div className="support-hero-text">
            <span className="su-label">정부지원</span>
            <h1 className="su-title">
              정부지원 사업 연계로<br />
              <span className="highlight">비용 부담은 줄이고,</span>
              <span className="highlight">안전 관리는 더 스마트하게</span>
            </h1>
            <p className="su-desc">
              ARCAI는 정부지원 사업과 연계하여<br />
              AI 안전 솔루션 도입 비용 부담을 낮춰드립니다.
            </p>
          </div>
          <div className="support-hero-mockup">
            <img src="/support_hero.png" alt="ARCAI 정부지원" />
          </div>
        </div>
      </section>

      {/* 4 Benefits Grid */}
      <section className="support-benefits-section">
        <div className="container">
          <div className="support-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="su-benefit-item" key={idx}>
                <div className={`su-benefit-icon ${benefit.chart ? '' : ''}`}>
                  {benefit.icon}
                </div>
                <h3 className="su-benefit-title">{benefit.title}</h3>
                <p className="su-benefit-desc" style={{ whiteSpace: 'pre-line' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="support-programs-section">
        <div className="container">
          <h2 className="support-programs-title">주요 지원 사업</h2>
          <div className="support-programs-grid">
            {programs.map((prog, idx) => (
              <div className="su-program-card" key={idx}>
                <div className="su-prog-icon">
                  {prog.icon}
                </div>
                <h3 className="su-prog-title">{prog.title}</h3>
                <span className="su-prog-badge">{prog.badge}</span>
                <p className="su-prog-desc" style={{ whiteSpace: 'pre-line' }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult Banner */}
      <section className="container">
        <div className="support-consult">
          <div className="consult-info">
            <div className="consult-icon">
              <Headset size={48} strokeWidth={1.5} />
            </div>
            <div className="consult-text">
              <h2>우리 사업장도 지원받을 수 있을까요?</h2>
              <p>지원 가능 여부를 무료로 확인해 드립니다.</p>
            </div>
          </div>
          <button className="consult-action-btn" onClick={() => navigateTo('/consult')}>
            지원 가능 여부 확인하기 <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Support;
