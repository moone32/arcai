import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import './CasesSection.css';

const CasesSection = () => {
  const cases = [
    { id: '01', title: '건설공사', desc: '사고 감소 62%', imgClass: 'case-img-1' },
    { id: '02', title: '물류창고', desc: '안전사고 45% 감소', imgClass: 'case-img-2' },
    { id: '03', title: '터널공사', desc: '위험 감지 85% 향상', imgClass: 'case-img-3' },
    { id: '04', title: '공공공사', desc: '추락 30% 감소', imgClass: 'case-img-4' },
  ];

  return (
    <section className="cases section section-light" id="cases">
      <div className="container">
        <div className="cases-container">
          
          <div className="cases-map">
            <h2 className="section-title text-left">전국 설치 대응 가능</h2>
            <p className="cases-desc">전국 어디든 원격 유지보수와 방문 설치·지원이 가능합니다.</p>
            
            <div className="map-visual">
              <div className="korea-map-placeholder">
                <MapPin className="map-pin pin-seoul" />
                <MapPin className="map-pin pin-busan" />
                <MapPin className="map-pin pin-daejeon" />
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
              <span className="q-text"><MapPin size={16}/> 우리 현장도 가능할까?</span>
              <button className="btn btn-outline small-btn">무료 상담 신청 <ArrowRight size={14}/></button>
            </div>
          </div>
          
          <div className="cases-gallery">
            <div className="gallery-header">
              <h2 className="section-title text-left">전국에서 검증된 적용 사례</h2>
              <button className="text-btn">전체 사례 보기 →</button>
            </div>
            
            <div className="gallery-grid">
              {cases.map((c) => (
                <div className="case-card" key={c.id}>
                  <div className={`case-img ${c.imgClass}`}>
                    <span className="case-id">{c.id}</span>
                  </div>
                  <div className="case-info">
                    <div className="case-text">
                      <span className="c-title"><span className="icon">🏢</span> {c.title}</span>
                      <span className="c-desc">{c.desc}</span>
                    </div>
                    <span className="case-link">사례 보기 →</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="disclaimer">* 고객사 실제 적용 사례이며, 공정 환경에 따라 결과는 다를 수 있습니다.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CasesSection;
