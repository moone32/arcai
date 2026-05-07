import React from 'react';
import { Download, ArrowRight, Settings, Repeat, DollarSign } from 'lucide-react';
import './RecruitSection.css';

const RecruitSection = () => {
  return (
    <section className="recruit-section section" id="recruit">
      <div className="container">
        <div className="recruit-wrapper">
          
          <div className="recruit-main">
            <h2 className="recruit-title">
              AI 안전 사업<br/>
              <span className="text-highlight">지역 파트너 모집</span>
            </h2>
            <p className="recruit-desc">안전관리의 혁신과 함께 성장할 파트너를 모십니다.</p>
            
            <div className="recruit-tags">
              <span>설치 수익</span>
              <span>유지관리 수익</span>
              <span>지원금 수익</span>
            </div>

            <div className="recruit-stats">
              <div className="stat-item">
                <span className="s-label">월 수익</span>
                <span className="s-value">1,000 ~ 3,000 <small>만원 예상</small></span>
              </div>
              <div className="stat-item divider"></div>
              <div className="stat-item">
                <span className="s-label">지역별 맞춤 지원</span>
                <span className="s-value small">현재 지역 내 사전 선점</span>
              </div>
            </div>
          </div>

          <div className="recruit-side">
            <h3 className="side-title">3가지 수익 모델로 <span>안정적인 수익 창출</span></h3>
            <div className="models">
              <div className="model-item">
                <div className="m-icon"><Settings size={24}/></div>
                <span>설치 수익<br/><small>설치 시 일시 수익</small></span>
              </div>
              <div className="model-item">
                <div className="m-icon"><Repeat size={24}/></div>
                <span>유지 수익<br/><small>유지관리에 따른 지속적 수익</small></span>
              </div>
              <div className="model-item">
                <div className="m-icon"><DollarSign size={24}/></div>
                <span>지원금 수익<br/><small>정부 지원금 확보 매출 극대화</small></span>
              </div>
            </div>
            
            <div className="recruit-actions">
              <button className="btn btn-outline dl-btn">
                <Download size={16}/> 사업설명서 다운로드
              </button>
              <button className="btn btn-primary join-btn">
                지역 대리점 신청 <ArrowRight size={16}/>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RecruitSection;
