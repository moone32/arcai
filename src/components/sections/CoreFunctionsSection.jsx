import React from 'react';
import { HardHat, Flame, PersonStanding, DoorClosed, LineChart, Smartphone } from 'lucide-react';
import './CoreFunctionsSection.css';

const CoreFunctionsSection = () => {
  const functions = [
    { id: '01', title: '안전모 / 안전장비 감지', icon: <HardHat size={40} /> },
    { id: '02', title: '화재 / 연기 감지', icon: <Flame size={40} /> },
    { id: '03', title: '쓰러짐 / 이상행동 감지', icon: <PersonStanding size={40} /> },
    { id: '04', title: '출입 / 침입 통제', icon: <DoorClosed size={40} /> },
    { id: '05', title: '데이터 분석 & 리포트', icon: <LineChart size={40} /> },
    { id: '06', title: '모바일 실시간 알림', icon: <Smartphone size={40} /> },
  ];

  return (
    <section className="core-functions section section-light" id="functions">
      <div className="container">
        <h2 className="section-title text-left title-with-bar">ARCAI 스마트 안전 솔루션 핵심 기능</h2>
        
        <div className="functions-grid">
          {functions.map((fn) => (
            <div className="function-item" key={fn.id}>
              <div className="fn-icon-box">
                <span className="fn-badge">{fn.id}</span>
                {fn.icon}
              </div>
              <p className="fn-title">{fn.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFunctionsSection;
