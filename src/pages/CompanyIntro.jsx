import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import './CompanyIntro.css';

const CompanyIntro = () => {
  const notices = [
    { no: 5, title: '중소기업 지정 기사', date: '2025-10-15' },
    { no: 4, title: '뉴스 인터뷰', date: '2025-09-28' },
    { no: 3, title: '회사 계약 체결 확인서', date: '2025-08-11' },
    { no: 2, title: '설치메뉴얼', date: '2025-05-22' },
    { no: 1, title: '제품 메뉴얼', date: '2025-03-10' },
  ];

  return (
    <div className="company-intro-page fade-in">
      {/* Hero Section */}
      <section className="intro-hero">
        <div 
          className="intro-hero-bg" 
          style={{ backgroundImage: `url('file:///C:/Users/jm/.gemini/antigravity-ide/brain/32bfc556-1608-41e7-9392-a7b993ee33aa/company_intro_hero_1781229036567.png')` }}
        >
          <div className="intro-hero-overlay"></div>
        </div>
        <div className="container intro-hero-content">
          <h1 className="intro-title">안전한 산업 현장을 위한 혁신</h1>
          <p className="intro-subtitle">아크아이(ARCAI) AI 산업안전 솔루션</p>
        </div>
      </section>

      {/* About ARCAI Section */}
      <section className="intro-about container section-padding">
        <div className="about-content">
          <h2 className="section-title text-center">우리는 산업의 내일을 지킵니다</h2>
          <div className="about-text-box">
            <p>
              <strong>(주)아크아이</strong>는 최첨단 인공지능(AI) 영상 분석 기술을 바탕으로 산업 현장의 안전을 책임지는 혁신 기업입니다. 
              국내 최저 비용으로 최고 수준의 객체 인식 및 지능형 모니터링 시스템을 제공하며, 
              근로자의 생명과 기업의 소중한 자산을 보호하는 것을 최우선 가치로 삼고 있습니다.
            </p>
            <p>
              안전모 및 안전조끼 미착용 감지, 쓰러짐 감지, 화재 및 연기 감지, 중장비 협착 방지 등 
              다양한 산업 재해를 사전에 예방하는 맞춤형 AI 솔루션을 통해 중대재해처벌법에 완벽히 대응할 수 있도록 지원합니다. 
              현장의 특성을 고려한 유연한 시스템 구축과 지속적인 딥러닝 고도화를 통해 안전 패러다임의 새로운 기준을 제시합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="intro-notice bg-light section-padding">
        <div className="container">
          <div className="notice-header">
            <h2 className="section-title">NOTICE</h2>
            <p className="section-desc">아크아이의 새로운 소식과 주요 안내사항을 확인하세요.</p>
          </div>
          
          <div className="notice-board">
            <table className="notice-table">
              <thead>
                <tr>
                  <th className="th-no">NO</th>
                  <th className="th-title">제목</th>
                  <th className="th-date">작성시간</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.no}>
                    <td className="td-no">{notice.no}</td>
                    <td className="td-title">
                      <div className="title-wrapper">
                        <FileText size={16} className="title-icon" />
                        <span className="title-text">{notice.title}</span>
                      </div>
                    </td>
                    <td className="td-date">{notice.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyIntro;
