import React from 'react';
import './CoreFunctionsSection.css';

const CoreFunctionsSection = () => {
  const functions = [
    { 
      id: '01', 
      title: '안전모 / 안전장비 감지', 
      desc: '작업자의 안전모 및 장비 착용 여부를 실시간으로 감지합니다.',
      image: '/sol_img_01.png' 
    },
    { 
      id: '02', 
      title: '화재 / 연기 감지', 
      desc: '화재 불꽃 및 연기를 조기에 감지하여 대형 사고를 예방합니다.',
      image: '/sol_img_02.png' 
    },
    { 
      id: '03', 
      title: '쓰러짐 / 이상행동 감지', 
      desc: '작업자의 쓰러짐이나 이상행동을 인식하여 즉각 알림을 보냅니다.',
      image: '/sol_img_03.png' 
    },
    { 
      id: '04', 
      title: '출입 / 침입 통제', 
      desc: '인가되지 않은 인원의 위험 구역 출입을 실시간으로 통제합니다.',
      image: '/sol_img_04.png' 
    },
    { 
      id: '05', 
      title: '데이터 분석 & 리포트', 
      desc: '수집된 데이터를 바탕으로 안전 현황을 분석하고 리포트를 제공합니다.',
      image: '/sol_img_05.png' 
    },
    { 
      id: '06', 
      title: '모바일 실시간 알림', 
      desc: '위험 상황 발생 시 관리자의 모바일로 즉각적인 알림을 전송합니다.',
      image: '/sol_img_06.png' 
    },
  ];

  return (
    <section className="core-functions section section-light" id="functions">
      <div className="container">
        <h2 className="section-title text-left title-with-bar">ARCAI 스마트 안전 솔루션 핵심 기능</h2>
        
        <div className="functions-grid">
          {functions.map((fn) => (
            <div className="function-card" key={fn.id}>
              <div className="fn-img-box">
                <span className="fn-badge">{fn.id}</span>
                <img src={fn.image} alt={fn.title} />
              </div>
              <div className="fn-body">
                <p className="fn-title">{fn.title}</p>
                <p className="fn-desc">{fn.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreFunctionsSection;
