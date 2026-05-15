import React from 'react';
import {
  CheckCircle, Building, CircleDollarSign, TrendingUp, Megaphone,
  Landmark, Database, Users, GraduationCap, Award, Wrench, Headset,
  FileText, MessagesSquare, Handshake, MonitorPlay, Coins, Download, ArrowRight
} from 'lucide-react';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners-page fade-in">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="container partners-hero-container">
          {/* Left Split */}
          <div className="partners-hero-left">
            <span className="ph-label">함께 성장하는 파트너십</span>
            <h1 className="ph-title">ARCAI 파트너 모집</h1>
            <p className="ph-desc">
              AI 기반 산업안전 솔루션으로<br />
              더 안전한 산업 현장을 함께 만들어갑니다.
            </p>

            <div className="ph-features-grid">
              <div className="ph-feature">
                <CheckCircle className="ph-feature-icon" size={32} strokeWidth={1.5} />
                <h4>검증된 솔루션</h4>
                <p>AI 기술로 검증된 안전 솔루션 제공</p>
              </div>
              <div className="ph-feature">
                <Building className="ph-feature-icon" size={32} strokeWidth={1.5} />
                <h4>새로운 시장</h4>
                <p>정부지원으로 시장 진입 용이</p>
              </div>
              <div className="ph-feature">
                <CircleDollarSign className="ph-feature-icon" size={32} strokeWidth={1.5} />
                <h4>안정적 수익</h4>
                <p>높은 계약 전환율과 지속적 수익 구조</p>
              </div>
              <div className="ph-feature">
                <TrendingUp className="ph-feature-icon" size={32} strokeWidth={1.5} />
                <h4>성장 지원</h4>
                <p>교육, 마케팅, 기술까지 본사 전폭 지원</p>
              </div>
            </div>

            <div className="ph-highlight-box">
              <Megaphone className="ph-highlight-icon" size={36} />
              <div className="ph-highlight-text">
                지금 시작해야 지역 시장을 선점할 수 있습니다!<br />
                선착순 우선 파트너 모집 중!
              </div>
            </div>

            <div className="ph-badges">
              <div className="ph-badge">
                <Landmark className="ph-badge-icon" size={20} />
                정부지원 최대 70~80%
              </div>
              <div className="ph-badge">
                <Database className="ph-badge-icon" size={20} />
                고객 부담 ↓ 계약 속도 ↑
              </div>
              <div className="ph-badge">
                <Users className="ph-badge-icon" size={20} />
                성과 기준 충족 시 지역 우선권 부여
              </div>
            </div>
          </div>

          {/* Right Split - Profit Card */}
          <div className="partners-hero-right">
            <div className="profit-card">
              <h3 className="profit-card-title">수익 한눈에 보기</h3>

              <div className="profit-top-grid">
                <div className="profit-col">
                  <div className="profit-col-header">한 현장 수익</div>
                  <div className="profit-col-value">300 ~ 800만원</div>
                  <div className="profit-col-icon">
                    <Coins size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="profit-col">
                  <div className="profit-col-header">월 예상 수익</div>
                  <div className="profit-col-value">1,000 ~ 3,000<span style={{ fontSize: '1rem' }}>+만원 이상</span></div>
                  <div className="profit-col-icon">
                    <TrendingUp size={48} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="profit-bottom-grid">
                <div className="pb-card">
                  <Wrench size={24} color="#64748b" style={{ marginBottom: '8px' }} />
                  <div className="pb-card-title">출장비 / 장착비</div>
                  <div className="pb-card-val">100 ~ 300만원</div>
                  <div className="pb-card-desc">현장 방문 및<br />장착 시 발생</div>
                </div>
                <div className="pb-card">
                  <Coins size={24} color="#64748b" style={{ marginBottom: '8px' }} />
                  <div className="pb-card-title">한 현장 수익</div>
                  <div className="pb-card-val">300 ~ 800만원</div>
                  <div className="pb-card-desc">설치 완료 후<br />발생하는 기본 수익</div>
                </div>
                <div className="pb-card pb-highlight">
                  <div className="pb-card-title" style={{ color: '#b45309' }}>정부지원으로 계약이 쉽습니다!</div>
                  <div className="pb-card-desc" style={{ color: '#92400e' }}>
                    고객 부담은 줄고,<br />계약 전환율은 높아집니다.
                  </div>
                  <div className="pb-card-val" style={{ color: '#b45309', marginTop: '8px', fontSize: '1.2rem' }}>
                    정부지원 최대<br />70~80%
                  </div>
                </div>
              </div>
              <div className="profit-note">※ 수익은 현장 규모와 조건에 따라 달라질 수 있습니다.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Steps */}
      <section className="partners-support-section">
        <div className="container">
          <h2 className="ps-title">ARCAI가 파트너의 성장을 지원합니다</h2>
          <div className="ps-steps">
            <div className="ps-step">
              <GraduationCap className="ps-step-icon" size={24} />
              <span>전문 교육 지원</span>
            </div>
            <div className="ps-step">
              <Megaphone className="ps-step-icon" size={24} />
              <span>마케팅 지원</span>
            </div>
            <div className="ps-step">
              <Headset className="ps-step-icon" size={24} />
              <span>전담 지원</span>
            </div>
            <div className="ps-step">
              <Award className="ps-step-icon" size={24} />
              <span>공식 파트너 인증</span>
            </div>
            <div className="ps-step">
              <Wrench className="ps-step-icon" size={24} />
              <span>기술 지원</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Boxes Section */}
      <section className="partners-boxes-section">
        <div className="container p-boxes-container">
          <div className="p-box p-box-1">
            <h3 className="p-box-title">리스크는 낮습니다!</h3>
            <ul className="p-box-list">
              <li><CheckCircle size={16} /> 초기 재고 부담 없음</li>
              <li><CheckCircle size={16} /> 선금 구조 운영</li>
              <li><CheckCircle size={16} /> 본사 정산 시스템 제공</li>
              <li><CheckCircle size={16} /> 기술지원 및 영업 지원</li>
            </ul>
            <p style={{ marginTop: 'auto', fontSize: '0.9rem', color: '#064e3b', fontWeight: '600' }}>현금 흐름이 안정적인 구조로 운영됩니다.</p>
          </div>

          <div className="p-box p-box-2">
            <h3 className="p-box-title">이런 분을 찾습니다!</h3>
            <ul className="p-box-list">
              <li><CheckCircle size={16} color="#34d399" /> 영업 경험이 있으신 분</li>
              <li><CheckCircle size={16} color="#34d399" /> 건설 / 안전 / 통신 / 전기업 종사자</li>
              <li><CheckCircle size={16} color="#34d399" /> 기존 거래처를 보유한 사업자</li>
              <li><CheckCircle size={16} color="#34d399" /> 지역 기반으로 사업 확장을 원하시는 분</li>
            </ul>
            <div className="highlight-text">초보도 가능합니다! (교육 지원)</div>
          </div>

          <div className="p-box p-box-3">
            <CircleDollarSign size={64} color="#01b0b0" strokeWidth={1} style={{ marginBottom: '20px' }} />
            <h3 className="p-box-title">마진율 30~50% 가능</h3>
            <div className="p-box-3-val">추가인센티브 지급 최대 5%</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="partners-process-section">
        <div className="container">
          <h2 className="pp-title">파트너 등록 절차</h2>
          <div className="pp-steps">
            <div className="pp-step">
              <FileText className="pp-step-icon" size={40} strokeWidth={1.5} />
              <div className="pp-step-info">
                <span className="pp-step-num">01 신청 접수</span>
                <span className="pp-step-title">파트너 신청서 제출</span>
              </div>
            </div>
            <ArrowRight className="pp-arrow" size={24} />

            <div className="pp-step">
              <MessagesSquare className="pp-step-icon" size={40} strokeWidth={1.5} />
              <div className="pp-step-info">
                <span className="pp-step-num">02 심층 상담</span>
                <span className="pp-step-title">요건 확인 및 개별 상담</span>
              </div>
            </div>
            <ArrowRight className="pp-arrow" size={24} />

            <div className="pp-step">
              <Handshake className="pp-step-icon" size={40} strokeWidth={1.5} />
              <div className="pp-step-info">
                <span className="pp-step-num">03 계약 체결</span>
                <span className="pp-step-title">파트너 계약 체결</span>
              </div>
            </div>
            <ArrowRight className="pp-arrow" size={24} />

            <div className="pp-step">
              <MonitorPlay className="pp-step-icon" size={40} strokeWidth={1.5} />
              <div className="pp-step-info">
                <span className="pp-step-num">04 교육 진행</span>
                <span className="pp-step-title">제품 및 영업 교육</span>
              </div>
            </div>
            <ArrowRight className="pp-arrow" size={24} />

            <div className="pp-step">
              <TrendingUp className="pp-step-icon" size={40} strokeWidth={1.5} />
              <div className="pp-step-info">
                <span className="pp-step-num">05 파트너 활동</span>
                <span className="pp-step-title">영업 및 마케팅 활동</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container">
        <div className="partners-form-section">
          <div className="pf-left">
            <Headset className="pf-icon" size={56} strokeWidth={1.5} />
            <div className="pf-left-text">
              <h2>파트너 모집에 대해<br />더 궁금하신가요?</h2>
              <p>전문 상담원이 친절하게 안내해 드립니다.</p>
            </div>
          </div>
          <div className="pf-right">
            <div className="pf-form-grid">
              <div className="pf-input-group">
                <label>이름</label>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="pf-input-group">
                <label>연락처</label>
                <input type="tel" placeholder="010-1234-5678" />
              </div>
              <div className="pf-input-group">
                <label>지역</label>
                <select defaultValue="">
                  <option value="" disabled>지역을 선택하세요</option>
                  <option value="seoul">서울</option>
                  <option value="gyeonggi">경기</option>
                  <option value="incheon">인천</option>
                  <option value="other">기타</option>
                </select>
              </div>
            </div>
            <div className="pf-actions">
              <div className="pf-checkbox">
                <input type="checkbox" id="privacyCheck" />
                <label htmlFor="privacyCheck">개인정보 수집 및 이용에 동의합니다.</label>
              </div>
              <div className="pf-buttons">
                <button className="btn-submit">
                  파트너 상담 신청 <ArrowRight size={18} />
                </button>
                <button className="btn-download">
                  파트너 가이드 다운로드 <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer Banner */}
      <div className="partners-dark-footer">
        <div className="container pdf-container">
          <div className="pdf-quote">
            "이 사업은 제품이 아니라 <span className="highlight">구조로 돈 버는 시장</span>입니다."
          </div>
          <div className="pdf-right-text">
            ARCAI와 함께 성장할 파트너를 기다립니다.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Partners;
