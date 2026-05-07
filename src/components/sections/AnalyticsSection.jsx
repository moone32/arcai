import React from 'react';
import { Download, AlertTriangle } from 'lucide-react';
import './AnalyticsSection.css';

const AnalyticsSection = () => {
  return (
    <section className="analytics section-dark" id="analytics">
      <div className="container">
        
        <div className="analytics-header">
          <div className="title-wrapper">
            <span className="badge-ai">AI</span>
            <h2 className="analytics-title">AI가 증명하는<br/>안전 관리 효과</h2>
          </div>
          
          <ul className="analytics-features">
            <li><span className="dot blue"></span> 위험 감지 · 사고 예방</li>
            <li><span className="dot blue"></span> 데이터 분석 · 예측 파악</li>
            <li><span className="dot blue"></span> 비용 절감 · 효율 향상</li>
          </ul>
          
          <button className="btn btn-outline detail-btn">
            자세히 보기 <span className="arrow">→</span>
          </button>
        </div>
        
        <div className="analytics-dashboard">
          <div className="dash-header">
            <h3>ARCAI 안전 분석 리포트</h3>
            <span className="date">2024.06.01 ~ 2024.06.31</span>
            <button className="download-btn"><Download size={14}/> 리포트 다운로드</button>
          </div>
          
          <div className="dash-grid">
            {/* 상단 통계 카드 */}
            <div className="stat-panel">
              <span className="panel-title">위험 감지</span>
              <div className="panel-value">24<small>건</small></div>
            </div>
            <div className="stat-panel">
              <span className="panel-title">위험 감소율</span>
              <div className="panel-value green">35<small>%</small></div>
            </div>
            <div className="stat-panel highlight">
              <span className="panel-title">안전 상태</span>
              <div className="circle-chart">
                <span>86%</span>
              </div>
            </div>

            {/* 하단 차트 영역 */}
            <div className="chart-panel col-span-2">
              <span className="panel-title">시간대별 위험 발생</span>
              <div className="bar-chart-mock">
                {/* 막대들 */}
                {[20, 35, 15, 60, 40, 85, 45, 30, 50].map((h, i) => (
                  <div key={i} className="bar" style={{height: `${h}%`}}></div>
                ))}
              </div>
            </div>
            
            <div className="chart-panel">
              <span className="panel-title">위험 유형 분석</span>
              <div className="donut-chart-mock">
                <div className="donut"></div>
                <ul className="chart-legend">
                  <li><span className="color-box red"></span> 추락 위험 <small>50%</small></li>
                  <li><span className="color-box orange"></span> 화재 위험 <small>35%</small></li>
                  <li><span className="color-box blue"></span> 충돌 위험 <small>15%</small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-cases-panel">
          <div className="panel-head">
            <h3>최근 위험 사례</h3>
            <span className="live-badge"><span className="live-dot"></span> LIVE</span>
          </div>
          <div className="case-image-placeholder">
            <AlertTriangle className="alert-icon-large" />
            <div className="case-overlay">
              <p>작업장 외곽쪽 이동통로 감지 <span className="tag">위험</span></p>
              <div className="case-meta">
                <span>위험 상황: 충돌</span>
                <span className="severity">★★★★★</span>
              </div>
            </div>
          </div>
          <button className="text-btn">전체 사례 보기 →</button>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsSection;
