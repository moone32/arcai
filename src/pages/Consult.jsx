import React from 'react';
import { 
  Send, 
  Lock, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import './Consult.css';

const Consult = () => {
  return (
    <div className="consult-page fade-in">
      {/* Header Area */}
      <section className="consult-header">
        <div className="container">
          <h1 className="consult-title">도입 문의</h1>
          
          <div className="consult-badges">
            <div className="cb-left">
              <div className="cb-icon">₩</div>
              국내 최저 비용
            </div>
            <div className="cb-right">
              <span className="cb-ai">AI</span> 산업안전 플랫폼
            </div>
          </div>
          <div className="consult-divider"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="consult-form-section">
        <div className="container">
          <div className="consult-form-card">
            <div className="form-grid">
              
              <div className="form-row-2">
                <div className="form-group">
                  <label>회사명 · 직함</label>
                  <input type="text" placeholder="회사명을 입력해주세요" />
                </div>
                <div className="form-group">
                  <label>성함 <span className="required-star">*</span></label>
                  <input type="text" placeholder="이름을 입력해주세요" />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>연락처 <span className="required-star">*</span></label>
                  <input type="tel" placeholder="010-1234-5678" />
                </div>
                <div className="form-group">
                  <label>문의 분야 <span className="required-star">*</span></label>
                  <select defaultValue="">
                    <option value="" disabled>문의 분야를 선택해주세요</option>
                    <option value="solution">솔루션 도입 문의</option>
                    <option value="support">정부지원 사업 문의</option>
                    <option value="partnership">파트너 제휴 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>이메일 · 문의내용</label>
                <textarea placeholder="문의 내용을 입력해주세요"></textarea>
              </div>

            </div>

            <div className="form-bottom">
              <div className="privacy-check">
                <input type="checkbox" id="privacyAgree" />
                <label htmlFor="privacyAgree">개인정보 수집 및 이용에 동의합니다. <span className="sub-text">(필수)</span></label>
              </div>

              <button className="btn-submit-consult">
                <Send size={20} /> 무료 도입 상담 신청
              </button>

              <div className="security-note">
                <Lock size={14} /> 입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="consult-info-section">
        <div className="consult-info-container">
          <h2 className="ci-title">다양한 방법으로 문의하세요</h2>
          <div className="ci-divider"></div>

          <div className="ci-grid">
            <div className="ci-card">
              <div className="ci-icon-wrapper">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="ci-card-title">전화 문의</h3>
              <div className="ci-card-value">1588-0800</div>
              <div className="ci-card-desc">평일 09:00 - 18:00</div>
            </div>

            <div className="ci-card">
              <div className="ci-icon-wrapper">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h3 className="ci-card-title">이메일 문의</h3>
              <div className="ci-card-value small-text">contact@arcai.co.kr</div>
              <div className="ci-card-desc">24시간 접수 가능</div>
            </div>

            <div className="ci-card">
              <div className="ci-icon-wrapper">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="ci-card-title">본사 위치</h3>
              <div className="ci-card-value small-text" style={{color: '#64748b', fontWeight: '500', fontSize: '1rem', lineHeight: '1.5'}}>경기 안산시 상록구<br/>한양대학교 55, 6층</div>
              <div className="ci-card-desc" style={{marginTop: '12px'}}>평일 09:00 - 18:00</div>
            </div>
          </div>

          <div className="ci-footer-note">
            문의하신 내용은 내부 확인 후 담당자가 신속하게 연락드리겠습니다.
          </div>
        </div>
      </section>

    </div>
  );
};

export default Consult;
