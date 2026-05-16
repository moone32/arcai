import React from 'react';
import {
  ShieldCheck,
  Database,
  Clock,
  FileCheck2,
  ArrowDown,
  ArrowUp,
  Headset,
  ChevronRight
} from 'lucide-react';
import './Benefits.css';
import { navigateTo } from '../utils/navigation';

const Benefits = () => {
  const steps = [
    {
      icon: <ShieldCheck size={36} />,
      title: '사고 위험 감소',
      desc: 'AI가 위험을 사전에 감지하여 사고 발생을 예방합니다.'
    },
    {
      icon: <Database size={36} />,
      title: '관리 비용 절감',
      desc: '자동화된 관제로 인건비와 운영 비용을 절감합니다.'
    },
    {
      icon: <Clock size={36} />,
      title: '24시간 AI 관제',
      desc: '365일 24시간 끊김 없는 실시간 모니터링을 제공합니다.'
    },
    {
      icon: <FileCheck2 size={36} />,
      title: '컴플라이언스 지원',
      desc: '법규 준수와 안전 관리 체계 구축을 지원합니다.'
    }
  ];

  const stats = [
    {
      num: '70%',
      icon: <ArrowDown size={32} strokeWidth={3} />,
      title: '사고 발생률 감소',
      desc: '실제 고객사 평균 기준'
    },
    {
      num: '50%',
      icon: <ArrowDown size={32} strokeWidth={3} />,
      title: '관리 비용 절감',
      desc: '운영 효율화 효과'
    },
    {
      num: '100%',
      icon: null,
      title: '24시간 모니터링',
      desc: '365일 끊김 없는 관제'
    },
    {
      num: '90%',
      icon: <ArrowUp size={32} strokeWidth={3} />,
      title: '위험 대응 속도 향상',
      desc: '즉시 알림으로 신속 대응'
    },
    {
      num: '98%',
      icon: null,
      title: '고객 만족도',
      desc: '도입 고객사 만족도 기준'
    }
  ];

  return (
    <div className="benefits-page fade-in">
      {/* Hero Section */}
      <section className="benefits-hero">
        <div className="container benefits-hero-container">
          <div className="benefits-hero-text">
            <span className="bh-label">도입효과</span>
            <h1 className="bh-title">
              더 안전한 현장,<br />
              더 효율적인 관리
            </h1>
            <p className="bh-desc">
              ARCAI 산업안전 플랫폼은 AI와 데이터로<br />
              사고를 예방하고 관리 효율을 높여드립니다.
            </p>
          </div>
          <div className="benefits-hero-mockup">
            <img src="/benefits_hero2.png" alt="ARCAI Benefits Hero" />
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="benefits-steps-section">
        <div className="container">
          <div className="benefits-steps-grid">
            {steps.map((step, idx) => (
              <div className="b-step-card" key={idx}>
                <div className="b-step-icon">
                  {step.icon}
                </div>
                <h3 className="b-step-title">{step.title}</h3>
                <p className="b-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="benefits-stats-section">
        <div className="container">
          <h2 className="b-stats-title">ARCAI 도입 후 변화</h2>
          <div className="b-stats-grid">
            {stats.map((stat, idx) => (
              <div className="b-stat-col" key={idx}>
                <div className="b-stat-num">
                  {stat.num}
                  {stat.icon && stat.icon}
                </div>
                <h4 className="b-stat-subtitle">{stat.title}</h4>
                <p className="b-stat-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult Banner */}
      <section className="container">
        <div className="benefits-consult">
          <div className="consult-info">
            <div className="consult-icon">
              <Headset size={56} strokeWidth={1.5} />
            </div>
            <div className="consult-text">
              <h2>우리 현장에 맞는 도입 효과가 궁금하신가요?</h2>
              <p>전문가가 맞춤 분석과 함께 최적의 솔루션을 제안해드립니다.</p>
            </div>
          </div>
          <button className="consult-action-btn" onClick={() => navigateTo('/consult')}>
            도입 효과 상담 신청 <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
