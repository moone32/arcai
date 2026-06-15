export const categories = [
  { id: 'product-all', label: '전체보기' },
  { id: 'worker-safety', label: '근로자안전' },
  { id: 'heavy-equipment', label: '중장비안전' },
  { id: 'facility', label: '시설물안전' },
  { id: 'environment', label: '환경안전' },
  { id: 'wireless-video', label: '무선영상장비' },
  { id: 'remote-control', label: '원격관제시스템' }
];

export const productsData = [
  {
    id: 1,
    title: "스마트 안전모",
    category: "근로자안전",
    categoryId: "worker-safety",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=스마트+안전모",
    description: "충격 감지 · 실시간 위치 · SOS 호출",
    detailDescription: "무게감 없는 60g의 초경량 설계와 충전에 대한 스트레스가 없는 배터리 기술은 현장 작업자의 만족도를 극대화합니다. 자발적 안전모 착용 유도 메커니즘, 위급 상황 시 즉각적인 SOS 신호 전송, 실시간 위치 및 쓰러짐 정밀 감지 기능을 제공합니다."
  },
  {
    id: 2,
    title: "스마트 안전밴드",
    category: "근로자안전",
    categoryId: "worker-safety",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=스마트+안전밴드",
    description: "심박 이상 및 쓰러짐 즉시 감지",
    detailDescription: "무게감 없는 25g의 초경량 설계와 IPX6 방수 기능, 장시간 배터리로 현장 작업자의 건강을 24시간 지킵니다. 체온·심박수 실시간 자동 측정 및 전송, 고온·심박 이상 시 즉각적인 알림 발송, 위치기반 안전구역 모니터링 서비스를 제공합니다."
  },
  {
    id: 3,
    title: "무선협착경보기",
    category: "중장비안전",
    categoryId: "heavy-equipment",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=무선협착경보기",
    description: "근로자 접근 감지 · 무선 경보 송출",
    detailDescription: "SD-H75의 지능형 AI는 현장의 복잡한 장애물 속에서도 '사람'만을 정확히 찾아냅니다. 12m 인체 트래킹(작업 환경에 맞춘 유연한 감지 범위 설정), 지능형 알고리즘(자재, 벽 등 고정 사물 오작동 99% 차단), 실시간 영상 저장(128GB 대용량 메모리로 사고 원인 분석 지원), 실시간 위치 관제(사용기록 모니터링, 옵션) 기능을 제공합니다."
  },
  {
    id: 4,
    title: "유선협착경보기",
    category: "중장비안전",
    categoryId: "heavy-equipment",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=유선협착경보기",
    description: "고정형 센서 · 안정적인 유선 연결",
    detailDescription: "AI 영상 분석 시스템이 현장의 자재, 장비, 구조물과 사람을 구별하여 인체만을 정확히 감지합니다. 1~12m 감지 범위 자유 설정(현장 특성에 맞춘 위험구역 조절), 운전자+보행자 동시 경고(양방향 음성 알람으로 이중 안전 확보), 10일간 영상 저장(128GB SD카드로 사고 발생 시 증거자료 확보) 기능을 제공합니다."
  },
  {
    id: 5,
    title: "붕괴경보기",
    category: "시설물안전",
    categoryId: "facility",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=붕괴경보기",
    description: "구조물 붕괴 위험 감지 · 즉시 경보 송출",
    detailDescription: "자석 부착 방식과 IP68 방수 기술은 누구나 빠르게 설치할 수 있으며, 15일~1년의 장기 배터리로 유지보수 부담을 최소화합니다. 3º/5º 2단계 정밀 기울기 감지 시스템, 110dB 고음량 경광등 + 사이렌 경보, 가시설물·노후 구조물·문화재 범용 적용이 가능합니다."
  },
  {
    id: 6,
    title: "변위감지기",
    category: "시설물안전",
    categoryId: "facility",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=변위감지기",
    description: "미세 변위 측정 · 구조물 안전 모니터링",
    detailDescription: "LTE 무선통신과 IP68 방수 기술로 누구나 빠르게 설치할 수 있으며, 장기 배터리로 유지보수 부담을 최소화합니다. 3축 경사계 + 3축 가속도 센서 정밀 감지, 실시간 데이터 전송 및 즉시 대피 알림, 가시설물·터널·노후 구조물 범용 적용이 가능합니다."
  },
  {
    id: 7,
    title: "유해가스감지기",
    category: "환경안전",
    categoryId: "environment",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=유해가스감지기",
    description: "다종 가스 동시 감지 · 위험 농도 즉시 경보",
    detailDescription: "SD-E80은 밀폐공간 내 산소 및 5종 유해가스를 실시간 정밀 측정합니다. 농도 데이터뿐만 아니라 현장의 온·습도 정보까지 무선 전송하며, 위험 상황 발생 시 즉각적인 음성 안내와 원격 경보로 사고를 선제적으로 방어합니다. 5종 유해가스(O2, CO, CO2, H2S, CH4) 및 온·습도 실시간 수집, 가스 누출 시 직관적인 현장 음성 알림 및 관리자 자동 발신, 자석 부착 방식의 무선 설계로 별도 배선 없이 간편 설치 및 이동 기능을 제공합니다."
  },
  {
    id: 8,
    title: "LED전광판",
    category: "환경안전",
    categoryId: "environment",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=LED전광판",
    description: "현장 정보 실시간 표시 · 고휘도 LED",
    detailDescription: "위험 상황에 맞춰 리모컨으로 즉시 문구 변경. 경량 설계와 삼각대 구조로 어디서나 빠르게 설치하고, 1회 충전으로 40시간 연속 사용 가능합니다. 1536개 LED로 주야간 선명한 시인성 확보, 리모컨으로 10개 문구 저장·즉시 변경 가능, IP65 방수방진으로 다양한 현장 환경 대응 기능을 제공합니다."
  },
  {
    id: 9,
    title: "이동형CCTV",
    category: "무선영상장비",
    categoryId: "wireless-video",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=이동형CCTV",
    description: "무선 영상 전송 · 설치 장소 자유로운 이동",
    detailDescription: "태양광 패널과 LTE 무선통신으로 복잡한 설치 공사 없이 10초 만에 설치 완료. 원격지, 임시 현장, 이동이 잦은 장소 어디든 즉시 투입 가능합니다. 태양광 자가 발전으로 100시간 연속 작동, LTE 무선통신으로 실시간 원격 관제, 설치비 제로, 이동 자유로운 백팩형 설계 기능을 제공합니다.",
    videoUrl: '3B9RhFDG2FY'
  },
  {
    id: 10,
    title: "휴대형CCTV(일반)",
    category: "무선영상장비",
    categoryId: "wireless-video",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=휴대형CCTV",
    description: "소형 경량 설계 · 간편한 휴대 및 설치",
    detailDescription: "무선 LTE 통신과 자석 부착 방식으로 별도 설치 공사 없이 10초 만에 운용 가능. 2.7kg 초경량 본체로 한 손으로 이동하며, 60시간 연속 촬영으로 유지관리 부담을 최소화합니다. 설치 공사 불필요, 10초 내 즉시 사용 가능, 2.7kg 경량 설계로 한 손 이동 & 자석 부착, 60시간 연속 촬영으로 주 1회 충전만 필요 기능을 제공합니다.",
    videoUrl: 'brE03wiopvY'
  },
  {
    id: 11,
    title: "스마트안전플랫폼",
    category: "원격관제시스템",
    categoryId: "remote-control",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=스마트안전플랫폼",
    description: "안전 데이터 통합 관리 · 실시간 분석",
    detailDescription: "다양한 스마트 안전장비의 센서 정보를 실시간으로 수집·분석하여 웹과 앱으로 한눈에 확인. 현장 안전지수 산출과 위험 알림으로 사고를 사전에 예방합니다. 근로자 위치·건강 상태·개인보호구 착용 실시간 모니터링, 웹/앱 통합 대시보드로 언제 어디서나 접속 가능, AI 기반 안전지수 산출로 취약 부문 집중 관리 기능을 제공합니다."
  },
  {
    id: 12,
    title: "CCTV관제시스템",
    category: "원격관제시스템",
    categoryId: "remote-control",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=CCTV관제시스템",
    description: "다중 영상 통합 관제 · 이벤트 기록",
    detailDescription: "오탐지를 최소화한 딥러닝 기반 영상 분석으로 안전모 미착용, 쓰러짐, 위험구역 침입 등을 실시간 감지. 사고 발생 전 즉각 경보하여 건설현장의 안전사고를 예방합니다. 안전모 착용·쓰러짐·접근 감지 등 AI 영상분석(옵션), 멀티채널 관제로 소수 인원의 효율적 현장 관리, 국산 제품 구성으로 빠른 AS 및 맞춤 개발 지원 기능을 제공합니다."
  }
];
