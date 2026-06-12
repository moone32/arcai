import React, { useState } from 'react';
import {
  Send,
  Lock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Consult.css';

const Consult = () => {
  const [formData, setFormData] = useState({
    company: '',
    businessNumber: '',
    name: '',
    title: '',
    phone: '',
    category: '',
    email: '',
    region: '',
    message: '',
    privacyAgree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.privacyAgree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    // EmailJS 환경 변수 혹은 직접 키 입력 필요 (임시 플레이스홀더)
    // EmailJS 회원가입 후 Service ID, Template ID, Public Key를 발급받아 아래에 채워넣어야 합니다.
    const serviceID = 'service_ezjr9id'; // 예: service_12345
    const templateID = 'template_e4a6j8k'; // 예: template_12345
    const publicKey = 'xeIRoDkcc1HxeyHjS'; // 예: abcdefg12345

    const templateParams = {
      to_email: 'moone34@gmail.com', // 수신자 이메일
      from_name: formData.name,
      company: formData.company,
      businessNumber: formData.businessNumber,
      title: formData.title,
      phone: formData.phone,
      category: formData.category,
      email: formData.email,
      region: formData.region,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert('문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
        setFormData({
          company: '',
          businessNumber: '',
          name: '',
          title: '',
          phone: '',
          category: '',
          email: '',
          region: '',
          message: '',
          privacyAgree: false
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            <form onSubmit={handleSubmit}>
              <div className="form-grid">

                <div className="form-row-2">
                  <div className="form-group">
                    <label>회사명 <span className="required-star">*</span></label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="회사명을 입력해주세요" required />
                  </div>
                  <div className="form-group">
                    <label>사업자번호</label>
                    <input type="text" name="businessNumber" value={formData.businessNumber} onChange={handleChange} placeholder="사업자번호를 입력해주세요" />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>성함 <span className="required-star">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="이름을 입력해주세요" required />
                  </div>
                  <div className="form-group">
                    <label>직함</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="직함을 입력해주세요" />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>연락처 <span className="required-star">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678" required />
                  </div>
                  <div className="form-group">
                    <label>문의 분야 <span className="required-star">*</span></label>
                    <select name="category" value={formData.category} onChange={handleChange} required>
                      <option value="" disabled>문의 분야를 선택해주세요</option>
                      <option value="솔루션 도입 문의">솔루션 도입 문의</option>
                      <option value="정부지원 사업 문의">정부지원 사업 문의</option>
                      <option value="파트너 제휴 문의">파트너 제휴 문의</option>
                      <option value="기타 문의">기타 문의</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>이메일 <span className="required-star">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일을 입력해주세요" required />
                  </div>
                  <div className="form-group">
                    <label>지역 <span className="required-star">*</span></label>
                    <select name="region" value={formData.region} onChange={handleChange} required>
                      <option value="" disabled>지역(시/도)을 선택해주세요</option>
                      <option value="서울">서울특별시</option>
                      <option value="부산">부산광역시</option>
                      <option value="대구">대구광역시</option>
                      <option value="인천">인천광역시</option>
                      <option value="광주">광주광역시</option>
                      <option value="대전">대전광역시</option>
                      <option value="울산">울산광역시</option>
                      <option value="세종">세종특별자치시</option>
                      <option value="경기">경기도</option>
                      <option value="강원">강원특별자치도</option>
                      <option value="충북">충청북도</option>
                      <option value="충남">충청남도</option>
                      <option value="전북">전북특별자치도</option>
                      <option value="전남">전라남도</option>
                      <option value="경북">경상북도</option>
                      <option value="경남">경상남도</option>
                      <option value="제주">제주특별자치도</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>문의 내용 <span className="required-star">*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="문의 내용을 입력해주세요" required></textarea>
                </div>

              </div>

              <div className="form-bottom">
                <div className="privacy-check">
                  <input type="checkbox" id="privacyAgree" name="privacyAgree" checked={formData.privacyAgree} onChange={handleChange} required />
                  <label htmlFor="privacyAgree">개인정보 수집 및 이용에 동의합니다. <span className="sub-text">(필수)</span></label>
                </div>

                <div className="privacy-policy-box">
                  개인정보 수집 및 이용동의 (필수){'\n'}
                  (주)아크아이는 견적 및 시스템 문의 시 최소한의 필요 정보를 아래와 같이 수집 및 이용합니다.{'\n'}
                  문의자는 개인정보를 수집 및 이용하는 것에 동의 의무는 없으며, 동의하지 않을 경우 신고제도 이용에 제한이 있을 수 있습니다.{'\n\n'}
                  수집ㆍ이용목적{'\n'}
                  구매문의 서비스 운영을 위한 문의 내용 접수 및 연락 등{'\n\n'}
                  수집항목{'\n'}
                  소속,사업자번호,이름,직함,이메일,연락처
                </div>

                <button type="submit" className="btn-submit-consult" disabled={isSubmitting}>
                  <Send size={20} /> {isSubmitting ? '접수 중...' : '무료 도입 상담 신청'}
                </button>

                <div className="security-note">
                  <Lock size={14} /> 입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                </div>
              </div>
            </form>
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
              <div className="ci-card-value small-text" style={{ color: '#64748b', fontWeight: '500', fontSize: '1rem', lineHeight: '1.5' }}>경기 안산시 상록구<br />한양대학교 55, 6층</div>
              <div className="ci-card-desc" style={{ marginTop: '12px' }}>평일 09:00 - 18:00</div>
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
