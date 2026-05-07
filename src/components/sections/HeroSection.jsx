import React from 'react';
import { CheckCircle2, BellRing, ShieldAlert, BarChart3, ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero section-dark" id="hero">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="alert-badge">
            <span className="live-dot"></span> 중대재해 처벌법 대책 마련 - 지금 ARCAI와 강력한 예방을 시작하세요.
          </div>
          
          <h1 className="hero-title">
            AI가 위험을 즉시 감지<br />
            사고를 <span className="text-gradient">예방</span>합니다
          </h1>
          
          <ul className="hero-features">
            <li><CheckCircle2 className="check-icon" /> 1일 설치 / 즉시 사용</li>
            <li><CheckCircle2 className="check-icon" /> 정부지원 최대 80%</li>
            <li><CheckCircle2 className="check-icon" /> 전국 설치 대응 가능</li>
          </ul>
          
          <button className="btn btn-primary hero-btn">
            무료 견적 받기 <ChevronRight size={18} />
          </button>
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
    </section>
  );
};

export default HeroSection;
