import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import './InstallServce.css';

const InstallServce = () => {
  const navigateToConsult = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/consult');
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  const regions = [
    { name: '서울/경기/인천', center: '수도권 본부 및 15개 대리점' },
    { name: '강원', center: '강원 지사 및 3개 대리점' },
    { name: '충청/대전/세종', center: '충청 지사 및 6개 대리점' },
    { name: '전라/광주', center: '호남 지사 및 5개 대리점' },
    { name: '경상/대구/부산/울산', center: '영남 지사 및 12개 대리점' },
    { name: '제주', center: '제주 지사 및 2개 대리점' },
  ];

  return (
    <div className="install-service-page">
      {/* Top Banner Section */}
      <section className="install-banner">
        <div className="install-banner-bg" style={{ backgroundImage: `url('/korea_map.png')` }}>
          <div className="banner-overlay"></div>
        </div>
        <div className="container banner-content">
          <h1 className="banner-title">전국 설치 대응 가능 설치 안내</h1>
          <p className="banner-subtitle">어디서든 ARCAI의 전문적인 설치 및 유지보수 서비스를 경험하세요.</p>
        </div>
      </section>

      {/* Middle Map Section */}
      <section className="map-section container section-padding">
        <div className="section-header text-center">
          <h2 className="section-title">전국 서비스 네트워크</h2>
          <p className="section-desc">전국 주요 권역에 위치한 전문 대리점과 서비스 센터를 통해 신속하게 지원합니다.</p>
        </div>

        <div className="map-content-wrapper">
          <div className="map-image-container">
            <img
              src="/korea_map.png"
              alt="전국 서비스 지도"
              className="korea-map-img"
            />
          </div>

          <div className="regions-list-container">
            <h3 className="regions-list-title">권역별 대리점 안내</h3>
            <div className="regions-grid">
              {regions.map((region, index) => (
                <div key={index} className="region-card">
                  <div className="region-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="region-info">
                    <h4 className="region-name">{region.name}</h4>
                    <p className="region-center">{region.center}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="install-cta-section">
        <div className="container text-center">
          <h2 className="cta-title">전문가와 상담을 원하시나요?</h2>
          <p className="cta-desc">고객님의 환경에 맞는 최적의 솔루션을 제안해 드립니다.</p>
          <button className="btn btn-primary btn-lg cta-button" onClick={navigateToConsult}>
            도입상담 신청하기 <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstallServce;
