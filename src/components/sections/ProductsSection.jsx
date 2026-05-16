import React, { useState } from 'react';
import { Box, Camera, Video, AlertTriangle, ArrowRight, X } from 'lucide-react';
import './ProductsSection.css';

import { navigateTo } from '../../utils/navigation';

const ProductsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const products = [
    {
      id: 1,
      badge: 'AI 영상 분석',
      title: '이동형 CCTV',
      desc: '현장을 실시간으로 모니터링하고 위험 상황을 즉시 감지합니다.',
      image: '/cctv01.png',
      videoUrl: '3B9RhFDG2FY'
    },
    {
      id: 2,
      badge: 'AI 영상 분석',
      title: '설치형 CCTV',
      desc: '고화질 고정형 카메라로 24시간 현장을 감시합니다.',
      image: '/cctv02.png',
      videoUrl: 'brE03wiopvY'
    },
    {
      id: 3,
      badge: '위험 알림',
      title: '무선 현장 경보기',
      desc: '위험 감지 시 현장에 즉시 경고를 보내 사고를 예방합니다.',
      image: '/alert.png'
    },
    {
      id: 4,
      badge: '변위 모니터링',
      title: '변위 감지기',
      desc: '구조물의 변위를 실시간으로 측정하여 위험 징후를 조기에 감지합니다.',
      image: '/gamji.png'
    },
    {
      id: 5,
      badge: '가스 감지',
      title: '유해가스 감지기',
      desc: '유해가스를 실시간 감지하여 작업자의 안전을 보호합니다.',
      image: '/gas.png'
    },
    {
      id: 6,
      badge: '현장 지원',
      title: '부가 장비',
      desc: '태양광, 배터리 등 다양한 부가 장비로 현장 환경에 맞게 지원합니다.',
      image: '/etc.png'
    }
  ];

  return (
    <section className="products section section-gray" id="products">
      <div className="container">

        <div className="products-header">
          <h2 className="section-title text-left title-with-bar" style={{ marginBottom: 0 }}>ARCAI 주요 제품</h2>
          <button className="text-btn">전체 제품 보기 →</button>
        </div>

        <div className="products-container">
          <div className="products-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="prod-thumb">
                  <div className="prod-icon-wrapper" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={product.image} alt={product.title} style={{ maxWidth: '80%', maxHeight: '140px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="prod-body">
                  <span className="prod-badge">{product.badge}</span>
                  <h3 className="prod-title">{product.title}</h3>
                  <p className="prod-desc">{product.desc}</p>
                  <a
                    href="#detail"
                    className="prod-link"
                    onClick={(e) => {
                      if (product.videoUrl) {
                        e.preventDefault();
                        setActiveVideo(product.videoUrl);
                      }
                    }}
                  >
                    {product.videoUrl ? '영상 보기' : '자세히 보기'} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="product-cta">
            <h3 className="pcta-title">지금 무료로<br />체험하세요!</h3>
            <p className="pcta-desc">2주 무료 체험으로<br />안전관리 솔루션을<br />경험해보세요.</p>
            <button className="btn btn-outline pcta-btn" onClick={() => navigateTo('/consult')}>무료 체험 신청 <ArrowRight size={16} /></button>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
              <X size={28} />
            </button>
            <div className="video-responsive">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Product Video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
