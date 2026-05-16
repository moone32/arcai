import React, { useState } from 'react';
import {
  ShieldAlert, Clock, BarChart3, ShieldCheck,
  Flame, PersonStanding, DoorClosed, LineChart,
  BellRing, Headset, ChevronRight, User
} from 'lucide-react';
import './Solutions.css';
import { navigateTo } from '../utils/navigation';
const Solutions = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const heroFeatures = [
    {
      icon: <ShieldAlert size={32} />,
      title: 'AI 위험 감지',
      desc: 'AI가 위험 상황을 자동으로 감지하고 즉시 알림'
    },
    {
      icon: <Clock size={32} />,
      title: '24시간 관제',
      desc: '365일 24시간 끊김 없는 실시간 현장 모니터링'
    },
    {
      icon: <BarChart3 size={32} />,
      title: '데이터 분석 & 리포트',
      desc: '정확한 데이터 분석으로 안전 관리 효율을 극대화'
    }
  ];

  const solutionCards = [
    {
      id: '01',
      category: 'detection',
      title: '안전모/안전장비 감지',
      desc: 'AI가 안전모, 안전조끼 등 보호구 착용 여부를 감지',
      icon: <ShieldCheck size={28} />,
      thumbClass: 'thumb-bg-1',
      thumbContent: (
        <img src="/sol_img_01.png" alt="안전모/안전장비 감지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    },
    {
      id: '02',
      category: 'detection',
      title: '화재/연기 감지',
      desc: 'AI가 화재나 연기를 감지하여 즉시 알림을 보내고 초기 대응을 돕습니다.',
      icon: <Flame size={28} />,
      thumbClass: 'thumb-bg-2',
      thumbContent: (
        <img src="/sol_img_02.png" alt="화재/연기 감지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    },
    {
      id: '03',
      category: 'detection',
      title: '쓰러짐/이상행동 감지',
      desc: '작업자의 쓰러짐이나 이상행동을 감지하여 신속한 대응을 지원합니다.',
      icon: <PersonStanding size={28} />,
      thumbClass: 'thumb-bg-3',
      thumbContent: (
        <img src="/sol_img_03.png" alt="쓰러짐/이상행동 감지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    },
    {
      id: '04',
      category: 'security',
      title: '침입/출입 통제',
      desc: '위험 구역의 출입이나 외부 침입을 감지하여 보안과 안전을 강화합니다.',
      icon: <DoorClosed size={28} />,
      thumbClass: 'thumb-bg-4',
      thumbContent: (
        <img src="/sol_img_04.png" alt="침입/출입 통제" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    },
    {
      id: '05',
      category: 'monitoring',
      title: '데이터 분석 & 리포트',
      desc: '현장 데이터를 분석하고 직관적인 리포트로 제공하여 안전 관리 효율을 높입니다.',
      icon: <LineChart size={28} />,
      thumbClass: 'thumb-bg-5',
      thumbContent: (
        <img src="/sol_img_05.png" alt="데이터 분석 & 리포트" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    },
    {
      id: '06',
      category: 'monitoring',
      title: '모바일 실시간 알림',
      desc: '위험 감지 시 즉시 알림을 전송하여 어디서나 신속하게 대응할 수 있습니다.',
      icon: <BellRing size={28} />,
      thumbClass: 'thumb-bg-6',
      thumbContent: (
        <img src="/sol_img_06.png" alt="모바일 실시간 알림" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )
    }
  ];

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'detection', label: 'AI 감지 솔루션' },
    { id: 'security', label: '보안/통제' },
    { id: 'monitoring', label: '모니터링/분석' }
  ];

  const filteredCards = activeFilter === 'all'
    ? solutionCards
    : solutionCards.filter(card => card.category === activeFilter);

  return (
    <div className="solutions-page fade-in">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="container solutions-hero-container">
          <div className="solutions-hero-text">
            <span className="sh-label">ARCAI 스마트 안전 솔루션 <span>핵심 기능</span></span>
            <h1 className="sh-title">
              AI로 예측하고,<br />
              실시간으로 지키는 안전
            </h1>
            <p className="sh-desc">
              AI와 IoT 기술로 위험을 감지하고 즉시 알림하여<br />
              더 안전한 현장을 만들어갑니다.
            </p>
          </div>
          <div className="solutions-hero-mockup">
            <img src="/dashboard_mockup2.png" alt="ARCAI Dashboard Mockup" />
          </div>
          <div className="solutions-hero-features">
            {heroFeatures.map((feat, idx) => (
              <div className="sh-feature-item" key={idx}>
                <div className="sh-feature-icon">{feat.icon}</div>
                <div className="sh-feature-text">
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="solutions-grid">
            {filteredCards.map(card => (
              <div className="sol-card" key={card.id}>
                <div className={`sol-thumb ${card.thumbClass}`}>
                  <div className="sol-thumb-content">
                    {card.thumbContent}
                  </div>
                </div>
                <div className="sol-body">
                  <div className="sol-num">{card.id}</div>
                  <h3 className="sol-title">{card.title}</h3>
                  <p className="sol-desc">{card.desc}</p>
                  <div className="sol-icon">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consult Banner */}
          <div className="solutions-consult">
            <div className="consult-info">
              <div className="consult-icon">
                <Headset size={56} strokeWidth={1.5} />
              </div>
              <div className="consult-text">
                <h2>우리 현장에 맞는 솔루션이 궁금하신가요?</h2>
                <p>전문가가 현장을 분석하고 최적의 솔루션을 제안해드립니다.</p>
              </div>
            </div>
            <button className="consult-action-btn" onClick={() => navigateTo('/consult')}>
              맞춤 솔루션 상담 신청 <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
