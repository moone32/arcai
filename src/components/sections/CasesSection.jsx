import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import './CasesSection.css';
import { navigateTo } from '../../utils/navigation';

const CasesSection = () => {
  const [activeId, setActiveId] = useState('01');
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const cases = [
    { id: '01', title: '건설 현장', desc: 'AI 위험 감지 솔루션 구축으로 추락 사고 예방 및\n안전 관리 강화', imgClass: 'case-img-1', image: '/case_construction.png' },
    { id: '02', title: '제조 공장', desc: 'AI 기반 실시간 모니터링으로 설비 이상 감지 및\n사고 예방', imgClass: 'case-img-2', image: '/case_factory.png' },
    { id: '03', title: '물류 센터', desc: '지게차·보행자 충돌 예방 시스템 구축으로 안전한\n물류 환경 구현', imgClass: 'case-img-3', image: '/case_logistics.png' },
    { id: '04', title: '플랜트', desc: '유해가스 감지 및 위협 알림 시스템으로\n중대 사고 예방', imgClass: 'case-img-4', image: '/case_plant.png' },
    { id: '05', title: '터널', desc: 'AI 기반 터널 내 낙석·붕괴 위험 및 화재 실시간 감지로\n작업자 안전 확보', imgClass: 'case-img-5', image: '/case_tunnel.png' },
    { id: '06', title: '철도', desc: '철도 선로 내 장애물 및 작업자 추돌 감지 시스템으로\n운행 안전성 강화', imgClass: 'case-img-6', image: '/case_railway.png' },
  ];

  const slide1Items = cases.slice(0, 4);
  const slide2Items = [cases[2], cases[3], cases[4], cases[5]];

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setMobileSlideIndex(1);
    } else if (diff < -50) {
      setMobileSlideIndex(0);
    }
  };

  return (
    <section className="cases section section-light" id="cases">
      <div className="container">
        <div className="cases-container">

          <div className="cases-map">
            <h2 className="section-title text-left">전국 설치 대응 가능</h2>
            <p className="cases-desc">전국에 원격 유지보수와 방문 설치·지원 가능합니다</p>

            <div className="map-visual">
              <div className="korea-map-placeholder">
                <img src="/korea_map.png" alt="대한민국 지도" className="korea-map-img" />
                <MapPin className="map-pin pin-seoul" />
                <MapPin className="map-pin pin-daejeon" />
                <MapPin className="map-pin pin-gwangju" />
                <MapPin className="map-pin pin-daegu" />
              </div>

              <div className="map-features">
                <div className="m-feature">
                  <span className="m-icon">🏢</span>
                  <div className="m-text">
                    <strong>전국 24시간 설치 지원</strong>
                    <span>365일 전문가 실시간 대응</span>
                  </div>
                </div>
                <div className="m-feature">
                  <span className="m-icon">🌐</span>
                  <div className="m-text">
                    <strong>전국 파트너 네트워크</strong>
                    <span>전국 어디서나 신속하게 대응</span>
                  </div>
                </div>
                <div className="m-feature">
                  <span className="m-icon">📞</span>
                  <div className="m-text">
                    <strong>24시간 상담 지원</strong>
                    <span>언제든지 상담 가능</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-cta">
              <span className="q-text"><MapPin size={16} /> 우리 현장도 가능할까?</span>
              <button className="btn btn-outline small-btn" onClick={() => navigateTo('/consult')}>무료 상담 신청 <ArrowRight size={14} /></button>
            </div>
          </div>

          <div className="cases-gallery">
            <div className="gallery-header">
              <h2 className="section-title text-center">현장별 적용 가능한 솔루션</h2>
            </div>

            {/* Desktop / Tablet View */}
            <div className="desktop-cases-view">
              <div className="sec-cases-filters">
                {cases.map((c) => (
                  <button
                    key={c.id}
                    className={`sec-filter-btn ${activeId === c.id ? 'active' : ''}`}
                    onClick={() => setActiveId(c.id)}
                  >
                    {c.title}
                  </button>
                ))}
              </div>

              <div className="gallery-grid single-active-grid">
                {cases
                  .filter((c) => c.id === activeId)
                  .map((c) => (
                    <div className="case-card fade-in" key={c.id}>
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
            </div>

            {/* Mobile View Slider */}
            <div className="mobile-cases-view">
              <div 
                className="mobile-slider-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="mobile-slides-track"
                  style={{ transform: `translateX(-${mobileSlideIndex * 100}%)` }}
                >
                  <div className="mobile-slide">
                    {slide1Items.map((c) => (
                      <div className="case-card" key={`slide1-${c.id}`}>
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
                  <div className="mobile-slide">
                    {slide2Items.map((c) => (
                      <div className="case-card" key={`slide2-${c.id}`}>
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
                </div>
              </div>
              <div className="mobile-slider-dots">
                <button 
                  className={`dot ${mobileSlideIndex === 0 ? 'active' : ''}`}
                  onClick={() => setMobileSlideIndex(0)}
                  aria-label="Slide 1"
                />
                <button 
                  className={`dot ${mobileSlideIndex === 1 ? 'active' : ''}`}
                  onClick={() => setMobileSlideIndex(1)}
                  aria-label="Slide 2"
                />
              </div>
            </div>

            <p className="disclaimer">* 적용 사례이며, 공정 환경에 따라 결과는 다를 수 있습니다.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CasesSection;
