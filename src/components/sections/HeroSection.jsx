import React from 'react';
import { CheckCircle2, BellRing, ShieldAlert, BarChart3, ChevronRight } from 'lucide-react';
import './HeroSection.css';

import { navigateTo } from '../../utils/navigation';

const HeroSection = () => {
  return (
    <section className="hero section-dark" id="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <div className="alert-badge">
            <span className="live-dot"></span> 중대재해 처벌법 대책 마련 - 지금 설치 안하면 책임은 회사가 집니다.
          </div>

          <h2 className="hero-top-title">
            <span className="text-gradient"> AI</span> 산업안전 플랫폼
          </h2>

          <h1 className="hero-title">
            AI가 위험을 <br />
            <span className="text-gradient"> 실시간</span> 감지하고 <br />
            사고를 예방합니다.
          </h1>

          <ul className="hero-features">
            <li><CheckCircle2 className="check-icon" /> 1일 설치 / 즉시 사용</li>
            <li><CheckCircle2 className="check-icon" /> 정부지원 최대 80%</li>
            <li><CheckCircle2 className="check-icon" /> 전국 설치 대응 가능</li>
          </ul>

          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn" onClick={() => navigateTo('/consult')}>
              무료 견적 받기 <ChevronRight size={18} />
            </button>
            <button className="btn btn-outline hero-btn" onClick={() => navigateTo('/products')}>
              제품 자세히 보기 <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="card-header">
              <h3>실시간 감지 현황</h3>
              <span className="live-indicator"><span className="live-dot"></span> LIVE</span>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-label">위험 감지</span>
                <span className="stat-value alert">24<small>건</small></span>
              </div>
              <div className="stat-box">
                <span className="stat-label">안전 상태</span>
                <span className="stat-value safe">86<small>%</small></span>
              </div>
              <div className="stat-box">
                <span className="stat-label">AI 분석 중</span>
                <span className="stat-value">12<small>건</small></span>
              </div>
            </div>

            <div className="chart-container">
              <span className="chart-label">시간대별 위험 감지 추이</span>
              <div className="bar-chart">
                {/* CSS 기반 임시 막대 그래프 연출 */}
                {[40, 60, 30, 80, 50, 90, 70, 40, 60, 50, 70, 90].map((h, i) => (
                  <div key={i} className="bar-wrapper">
                    <div className="bar" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="chart-x-axis">
                <span>00:00</span>
                <span>05:00</span>
                <span>11:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>

          {/* 가상 AI 감지 박스 연출 (배경 이미지가 있다고 가정) */}
          <div className="ai-bounding-box box-1">
            <span>위험 객체</span>
          </div>
          <div className="ai-bounding-box box-2 safe-box">
            <span>안전모 착용</span>
          </div>
        </div>

      </div>
    </section >
  );
};

export default HeroSection;
