import React, { useEffect } from 'react';
import { Play } from 'lucide-react';
import './ProductCategory.css';
import { categories, productsData } from '../../data/products';

const ProductCategory = ({ categoryPath = 'product-all' }) => {

  // Handle tab click to change route
  const handleTabClick = (categoryId) => {
    window.history.pushState({}, '', `/productCategory/${categoryId}`);
    window.dispatchEvent(new Event('pushstate'));
  };

  // Handle detail click
  const handleDetailClick = (product) => {
    // Navigate to productDetail with id query param
    window.history.pushState({}, '', `/productCategory/productDetail?id=${product.id}`);
    window.dispatchEvent(new Event('pushstate'));
  };

  // Filter products based on selected category
  const filteredProducts = categoryPath === 'product-all'
    ? productsData
    : productsData.filter(product => product.categoryId === categoryPath);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryPath]);

  return (
    <div className="product-category-page">
      <div className="product-category-container">

        <div className="category-header fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="category-title">산업 현장을 위한 스마트 안전 솔루션</h1>
          <p className="category-subtitle">
            ARCAI는 산업 현장 전 영역을 아우르는 통합 안전 솔루션을 제공합니다.
          </p>
        </div>

        <div className="category-tabs fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${categoryPath === cat.id ? 'active' : ''}`}
              onClick={() => handleTabClick(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.title}
              className="product-tile fade-in"
              style={{ animationDelay: `${0.1 * (index % 10)}s` }}
            >
              <div className="product-image-container">
                <span className="product-badge">{product.category}</span>
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-actions">
                  <button
                    className="btn-detail"
                    onClick={() => handleDetailClick(product)}
                  >
                    자세히보기
                  </button>
                  <button className="btn-video" onClick={() => alert('영상 준비중입니다.')}>
                    <Play size={16} /> 영상 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px', color: '#64748b' }}>
            해당 카테고리의 제품이 없습니다.
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductCategory;
