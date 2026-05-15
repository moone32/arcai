import React, { useState } from 'react';
import {
  ShieldCheck, Wifi, Cloud, Settings,
  Cctv, Video, Siren, RadioReceiver, Flame, BatteryCharging,
  ArrowRight, Video as VideoIcon, Wifi as WifiIcon, CloudCog, MonitorPlay, Smartphone, X
} from 'lucide-react';
import './Products.css';

const Products = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const heroFeatures = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'AI 기반',
      desc: '지능형 위험 감지'
    },
    {
      icon: <Wifi size={32} />,
      title: '실시간 연동',
      desc: '24시간 모니터링'
    },
    {
      icon: <Cloud size={32} />,
      title: 'IoT 통합',
      desc: '다양한 장비 연동'
    },
    {
      icon: <Settings size={32} />,
      title: '간편 설치',
      desc: '현장 맞춤 설치 지원'
    }
  ];

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

  const workflow = [
    {
      icon: <VideoIcon size={32} />,
      title: '현장 장비',
      desc: 'CCTV, 센서, 경보기 등'
    },
    {
      icon: <WifiIcon size={32} />,
      title: '데이터 전송',
      desc: '실시간 데이터 수집 및 전송'
    },
    {
      icon: <CloudCog size={32} />,
      title: 'AI 플랫폼',
      desc: 'AI 분석 및 위험 감지'
    },
    {
      icon: <MonitorPlay size={32} />,
      title: '통합 관제 시스템',
      desc: '실시간 모니터링 및 알림'
    },
    {
      icon: <Smartphone size={32} />,
      title: '모바일 알림',
      desc: '즉시 알림 및 현장 대응'
    }
  ];

  return (
    <div className="products-page fade-in">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container products-hero-container">
          <div className="products-hero-text">
            <span className="ph-label">제품</span>
            <h1 className="ph-title">
              현장에 최적화된<br />
              <span style={{ color: '#01b0b0' }}>AI </span>안전 장비
            </h1>
            <p className="ph-desc">
              ARCAI 산업안전 플랫폼은 다양한 AI 안전 장비와<br />
              IoT 센서를 통해 위험을 감지하고 실시간으로 관리합니다.
            </p>
          </div>
          <div className="products-hero-features">
            {heroFeatures.map((feat, idx) => (
              <div className="ph-feature" key={idx}>
                <div className="ph-feature-icon">
                  {feat.icon}
                </div>
                <div className="ph-feature-text">
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="products-main-section">
        <div className="container">
          <div className="products-header">
            <h2>주요 제품</h2>
            <a href="#all" className="view-all-link">
              모든 제품 보기 <ArrowRight size={18} />
            </a>
          </div>

          <div className="products-grid">
            {products.map(product => (
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
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="container workflow-container">
          <div className="workflow-text">
            <h2>장비 연동 개요</h2>
            <p>
              다양한 장비가 하나의 플랫폼으로 연결되어<br />
              통합 관제 및 데이터 분석이 가능합니다.
            </p>
          </div>
          <div className="workflow-steps">
            {workflow.map((step, idx) => (
              <div className="wf-step" key={idx}>
                <div className="wf-icon">
                  {step.icon}
                </div>
                <h4 className="wf-title">{step.title}</h4>
                <p className="wf-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Products;
