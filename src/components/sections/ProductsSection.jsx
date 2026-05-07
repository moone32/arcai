import React from 'react';
import { Box, Camera, Video, AlertTriangle, ArrowRight } from 'lucide-react';
import './ProductsSection.css';

const ProductsSection = () => {
  const products = [
    { name: '무선형 영상기기', icon: <Video size={48} strokeWidth={1} /> },
    { name: '이동형 CCTV', icon: <Camera size={48} strokeWidth={1} /> },
    { name: '설치형 CCTV(고급)', icon: <Camera size={48} strokeWidth={1} /> },
    { name: '변위탐지기', icon: <Box size={48} strokeWidth={1} /> },
    { name: '유해가스 감지기', icon: <AlertTriangle size={48} strokeWidth={1} /> },
  ];

  return (
    <section className="products section section-gray" id="products">
      <div className="container">
        
        <div className="products-header">
          <h2 className="section-title text-left title-with-bar" style={{marginBottom: 0}}>ARCAI 주요 제품</h2>
          <button className="text-btn">전체 제품 보기 →</button>
        </div>

        <div className="products-container">
          <div className="products-list">
            {products.map((prod, idx) => (
              <div className="product-card" key={idx}>
                <div className="product-img-placeholder">
                  {prod.icon}
                </div>
                <p className="product-name">{prod.name}</p>
              </div>
            ))}
          </div>

          <div className="product-cta">
            <h3 className="pcta-title">지금 무료로<br/>체험하세요!</h3>
            <p className="pcta-desc">2주 무료 체험으로<br/>안전관리 솔루션을<br/>경험해보세요.</p>
            <button className="btn btn-outline pcta-btn">무료 체험 신청 <ArrowRight size={16}/></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
