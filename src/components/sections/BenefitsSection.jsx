import React, { useState, useEffect, useRef } from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const benefits = [
    {
      title: '사고 예방 효과',
      highlight: '▼ 75%',
      before: 90,
      after: 22,
      isIncrease: false
    },
    {
      title: '현장 대응 시간',
      highlight: '▼ 60%',
      before: 100,
      after: 40,
      isIncrease: false
    },
    {
      title: '관리 비용 절감',
      highlight: '▼ 50%',
      before: 80,
      after: 40,
      isIncrease: false
    },
    {
      title: '현장 안전 수준 향상',
      highlight: '▲ 85%',
      before: 25,
      after: 85,
      isIncrease: true
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let timer;
    if (isMobile) {
      timer = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % benefits.length);
      }, 2000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [benefits.length, isMobile]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setSlideIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      setSlideIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
    }
  };

  const renderCardContent = (item) => (
    <>
      <div className="benefit-text-area">
        <span className="benefit-label">{item.title}</span>
        <div className={`benefit-highlight ${item.isIncrease ? 'increase' : 'decrease'}`}>
          {item.highlight}
        </div>
      </div>
      
      <div className="before-after-graph vertical">
        <div className="graph-col">
          <div className="graph-bar-container-vertical">
            <div className="graph-bar-vertical before" style={{ height: `${item.before}%` }}>
              <span className="bar-value">{item.before}%</span>
            </div>
          </div>
          <span className="graph-label">도입 전</span>
        </div>
        <div className="graph-col">
          <div className="graph-bar-container-vertical">
            <div 
              className="graph-bar-vertical after" 
              style={{ 
                height: `${item.after}%`, 
                backgroundColor: item.isIncrease ? '#3b82f6' : '#01b0b0' 
              }}
            >
              <span className="bar-value">{item.after}%</span>
            </div>
          </div>
          <span className="graph-label">도입 후</span>
        </div>
      </div>
    </>
  );

  return (
    <section className="benefits section section-light" id="benefits">
      <div className="container">
        <h2 className="benefits-title text-left title-with-bar">ARCAI 도입효과</h2>
        
        {isMobile ? (
          <>
            <div 
              className="benefits-slider-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="benefits-slides-track" 
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {benefits.map((item, index) => (
                  <div className="benefit-card slide-card" key={index}>
                    {renderCardContent(item)}
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-slider-dots">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${slideIndex === index ? 'active' : ''}`}
                  onClick={() => setSlideIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="benefits-panel">
            {benefits.map((item, index) => (
              <div className="benefit-card" key={index}>
                {renderCardContent(item)}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default BenefitsSection;
