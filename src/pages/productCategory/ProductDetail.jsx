import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './ProductDetail.css';
import { productsData } from '../../data/products';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Parse query string for id or title
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const titleParam = urlParams.get('title');

    if (idParam) {
      const foundProduct = productsData.find(p => p.id.toString() === idParam);
      setProduct(foundProduct);
    } else if (titleParam) {
      const foundProduct = productsData.find(p => p.title === titleParam);
      setProduct(foundProduct);
    }

    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.history.back();
    // In case history.back doesn't trigger the custom event properly, 
    // we can fallback to programmatic routing to all-products after a slight delay
    setTimeout(() => {
      window.dispatchEvent(new Event('pushstate'));
    }, 50);
  };

  const handleConsultClick = () => {
    window.history.pushState({}, '', '/consult');
    window.dispatchEvent(new Event('pushstate'));
  };

  if (!product) {
    return (
      <div className="product-detail-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>제품을 찾을 수 없습니다.</h2>
          <button onClick={handleBack} className="btn-secondary" style={{ marginTop: '20px' }}>목록으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page fade-in">
      <div className="product-detail-container">
        <div className="detail-header">
          <button className="btn-back" onClick={handleBack}>
            <ArrowLeft size={20} /> 목록으로
          </button>
        </div>

        <div className="detail-content">
          <div className="detail-image-section">
            <img src={product.image} alt={product.title} className="detail-image" />
          </div>

          <div className="detail-info-section">
            <div style={{ alignSelf: 'flex-start' }}>
              <span className="detail-badge">{product.category}</span>
            </div>

            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-short-desc">{product.description}</p>

            <div className="detail-full-desc">
              {product.detailDescription}
            </div>

            <div className="detail-actions">
              <button className="btn-primary" onClick={handleConsultClick}>
                견적 문의하기
              </button>
              <button className="btn-secondary" onClick={() => alert('카탈로그 준비중입니다.')}>
                카탈로그 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
