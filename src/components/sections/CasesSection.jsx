import React from 'react';
import { MapPin, Clock, Wrench, ShieldCheck } from 'lucide-react';
import './CasesSection.css';
import { navigateTo } from '../../utils/navigation';

const CasesSection = () => {
  const cases = [
    { id: '01', title: '건설 현장', desc: 'AI 위험 감지 솔루션 구축으로\n추락 사고 예방 및안전 관리 강화', imgClass: 'case-img-1', image: '/case_construction.png' },
    { id: '02', title: '제조 공장', desc: 'AI 기반 실시간 모니터링으로\n설비 이상 감지 및사고 예방', imgClass: 'case-img-2', image: '/case_factory.png' },
    { id: '03', title: '물류 센터', desc: '지게차·보행자 충돌 예방 시스템\n구축으로 안전한물류 환경 구현', imgClass: 'case-img-3', image: '/case_logistics.png' },
    { id: '04', title: '플랜트', desc: '유해가스 감지 및 위협 알림\n시스템으로 중대 사고 예방', imgClass: 'case-img-4', image: '/case_plant.png' },
    { id: '05', title: '터널', desc: 'AI 기반 터널 낙석·붕괴 위험, 화재\n실시간 감지로 작업자 안전 확보', imgClass: 'case-img-5', image: '/case_tunnel.png' },
    { id: '06', title: '철도', desc: '철도 선로 장애물 및 작업자 추돌\n감지 시스템으로 운행 안전성 강화', imgClass: 'case-img-6', image: '/case_railway.png' },
  ];

  return (
    <>
      <section className="cases section section-light" id="cases">
        <div className="container">
          <div className="cases-gallery">
            <div className="gallery-header">
              <h2 className="section-title text-left title-with-bar">ARCAI 적용 가능한 솔루션</h2>
            </div>

            <div className="gallery-grid">
              {cases.map((c) => (
                <div className="case-card fade-in" key={c.id} onClick={() => navigateTo('/cases')}>
                  <div className={`case-img ${c.imgClass}`}>
                    <span className="case-id">{c.id}</span>
                    <img src={c.image} alt={c.title} />
                  </div>
                  <div className="case-info">
                    <div className="case-text">
                      <span className="c-title"><span className="icon"></span> {c.title}</span>
                      <span className="c-desc" style={{ whiteSpace: 'pre-line' }}>{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="disclaimer">* 적용 사례이며, 공정 환경에 따라 결과는 다를 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* Network Banner Section */}
      <section className="network-banner-section">
        <div className="container">
          <div className="network-banner-content">

            {/* Left text area */}
            <div className="nb-text-area">
              <h2 className="nb-title">전국 설치 대응 가능</h2>
              <p className="nb-desc">
                전국 네트워크를 통해 빠른 설치와 완벽한 사후관리를<br />
                제공합니다.
              </p>
              <button className="nb-btn desktop-btn" onClick={() => navigateTo('/installServce')}>
                전국 설치 네트워크 보기
              </button>
            </div>

            {/* Middle Map Area */}
            <div className="nb-map-area">
              <img src="/korea_map.png" alt="전국 지도" className="nb-map-img" />
              {/* Glowing Pins */}
              <div className="nb-pin" style={{ top: '25%', left: '35%' }}></div>
              <div className="nb-pin" style={{ top: '35%', left: '42%' }}></div>
              <div className="nb-pin" style={{ top: '45%', left: '48%' }}></div>
              <div className="nb-pin" style={{ top: '60%', left: '32%' }}></div>
              <div className="nb-pin" style={{ top: '55%', left: '55%' }}></div>
              <div className="nb-pin" style={{ top: '75%', left: '45%' }}></div>
              <div className="nb-pin" style={{ top: '65%', left: '60%' }}></div>
              <div className="nb-pin" style={{ top: '80%', left: '38%' }}></div>
              <div className="nb-pin" style={{ top: '85%', left: '55%' }}></div>
            </div>

            {/* Right Features Area */}
            <div className="nb-features-area">
              <div className="nb-feature">
                <div className="nb-icon">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <span className="nb-f-text">전국 어디든 설치 가능</span>
              </div>
              <div className="nb-feature">
                <div className="nb-icon">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <span className="nb-f-text">24시간 이내 신속 대응</span>
              </div>
              <div className="nb-feature">
                <div className="nb-icon">
                  <Wrench size={24} strokeWidth={1.5} />
                </div>
                <span className="nb-f-text">전문 엔지니어 지원</span>
              </div>
              <div className="nb-feature">
                <div className="nb-icon">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <span className="nb-f-text">체계적인 사후 관리</span>
              </div>
            </div>

            {/* Mobile Button Area */}
            <div className="mobile-btn-area">
              <button className="nb-btn mobile-btn" onClick={() => navigateTo('/installServce')}>
                전국 설치 네트워크 보기
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CasesSection;
