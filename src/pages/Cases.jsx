import React, { useState } from 'react';
import { 
  Building2,
  HardHat,
  ShieldCheck,
  TrendingUp,
  Clock,
  ClipboardList,
  ChevronRight
} from 'lucide-react';
import './Cases.css';

const Cases = () => {
  const [activeFilter, setActiveFilter] = useState('전체');

  const stats = [
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      num: '200+',
      desc: '구축 현장 수'
    },
    {
      icon: <HardHat size={32} strokeWidth={1.5} />,
      num: '20+',
      desc: '적용 산업 분야'
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      num: '98%',
      desc: '고객 만족도'
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      num: '70%',
      desc: '사고 감소 효과'
    }
  ];

  const filters = ['전체', '건설 현장', '제조 공장', '물류·유통', '플랜트', '기타'];

  const casesData = [
    {
      id: 1,
      category: '건설 현장',
      image: '/case_construction.png',
      title: '○○ 건설 현장',
      desc: 'AI 위험 감지 솔루션 구축으로\n추락 사고 예방 및 안전 관리 강화',
      metric1: { label: '사고 감소', value: '75%', icon: <ShieldCheck size={16} /> },
      metric2: { label: '관제 효율', value: '80%', icon: <Clock size={16} /> }
    },
    {
      id: 2,
      category: '제조 공장',
      image: '/case_factory.png',
      title: '○○ 제조 공장',
      desc: 'AI 기반 실시간 모니터링으로\n설비 이상 감지 및 사고 예방',
      metric1: { label: '사고 감소', value: '68%', icon: <ShieldCheck size={16} /> },
      metric2: { label: '관리 효율', value: '60%', icon: <Clock size={16} /> }
    },
    {
      id: 3,
      category: '물류·유통',
      image: '/case_logistics.png',
      title: '○○ 물류 센터',
      desc: '지게차·보행자 충돌 예방 시스템 구축으로\n안전한 물류 환경 구현',
      metric1: { label: '사고 감소', value: '72%', icon: <ShieldCheck size={16} /> },
      metric2: { label: '운영 효율', value: '55%', icon: <Clock size={16} /> }
    },
    {
      id: 4,
      category: '플랜트',
      image: '/case_plant.png',
      title: '○○ 플랜트',
      desc: '유해가스 감지 및 위협 알림 시스템으로\n중대 사고 예방',
      metric1: { label: '사고 감소', value: '70%', icon: <ShieldCheck size={16} /> },
      metric2: { label: '대응 시간', value: '50%', icon: <Clock size={16} /> }
    }
  ];

  const filteredCases = activeFilter === '전체' 
    ? casesData 
    : casesData.filter(c => c.category === activeFilter);

  return (
    <div className="cases-page fade-in">
      {/* Hero & Stats Section */}
      <section className="cases-hero">
        <div className="container cases-hero-container">
          <div className="cases-hero-text">
            <span className="ch-label">구축사례</span>
            <h1 className="ch-title">
              다양한 현장에 최적화된<br />
              <span className="highlight">AI 안전 솔루션</span> 구축
            </h1>
            <p className="ch-desc">
              ARCAI는 다양한 산업 현장에 AI 안전 솔루션을 구축하여<br />
              위험을 줄이고 안전한 환경을 만들어가고 있습니다.
            </p>
          </div>
          <div className="cases-hero-stats">
            {stats.map((stat, idx) => (
              <div className="ch-stat-item" key={idx}>
                <div className="ch-stat-icon">{stat.icon}</div>
                <div className="ch-stat-num">{stat.num}</div>
                <div className="ch-stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="cases-gallery-section">
        <div className="container">
          
          {/* Filters */}
          <div className="cases-filters">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="cases-grid">
            {filteredCases.length > 0 ? (
              filteredCases.map(item => (
                <div className="case-card fade-in" key={item.id}>
                  <div className="case-thumb">
                    <span className="case-badge">{item.category}</span>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="case-body">
                    <h3 className="case-title">{item.title}</h3>
                    <p className="case-desc" style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
                    
                    <div className="case-metrics">
                      <div className="cm-item">
                        <span className="cm-label">
                          {item.metric1.icon} {item.metric1.label}
                        </span>
                        <span className="cm-value">{item.metric1.value}</span>
                      </div>
                      <div className="cm-item">
                        <span className="cm-label">
                          {item.metric2.icon} {item.metric2.label}
                        </span>
                        <span className="cm-value">{item.metric2.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '60px 0', textAlign: 'center', gridColumn: '1 / -1', color: '#6b7280' }}>
                <p>해당 카테고리의 구축 사례를 준비 중입니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Consult Banner */}
      <section className="container">
        <div className="cases-consult">
          <div className="consult-info">
            <div className="consult-icon">
              <ClipboardList size={36} strokeWidth={1.5} />
            </div>
            <div className="consult-text">
              <h2>우리 현장에도 적용할 수 있을까요?</h2>
              <p>전문가가 맞춤 컨설팅과 구축 사례를 안내해 드립니다.</p>
            </div>
          </div>
          <button className="consult-action-btn">
            구축 사례 상담 신청 <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
