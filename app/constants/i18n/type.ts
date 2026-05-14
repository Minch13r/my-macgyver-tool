// src/constants/i18n/type.ts

// 다국어 지원 언어팩 인터페이스 정의 영역
export interface LanguagePack {
  title: string;
  theme: string;
  sideMenu: {
    img: string;
    count: string;
    sha: string;
    bcrypt: string;
    feedback?: string;
  };
  search: string;
  donate: string;
  toss?: string;
  paypal?: string;
  adFree: string;
  adActive: string;
  desc: string;
  copy: string;
  download: string;
  img: {
    drag: string;
    format: string;
    desc: string;
    drop: string;
    click: string;
    processing: string;
    convBtn: string;
    quality: string;
    resize: string;
    width: string;
    height: string;
    keepRatio: string;
    base64: string;
    zipBtn: string;
    clear: string;
    favicon: string;
  };
  counter: {
    placeholder: string;
    char: string;
    byte: string;
  };
  bcrypt: {
    pass: string;
    hash: string;
    gen: string;
    verify: string;
    match: string;
    mismatch: string;
    pageDesc: string;
    costTip: string;
    securityTipTitle: string;
    securityTipDesc: string;
    passPlaceholder: string;
  };
  sha: {
    desc: string;
    placeholder: string;
    labelAlgo: string;
    labelInput: string;
  };
  feedback: {
    title: string;         // 페이지 제목
    desc: string;          // 서비스 설명
    labelType: string;     // 문의 종류 라벨
    labelContent: string;  // 작성 내용 라벨
    placeholder: string;   // 입력창 도움말
    typeFeature: string;   // 기능 요청 유형
    typeBug: string;       // 버그 제보 유형
    typeEtc: string;       // 기타 문의 유형
    submitBtn: string;     // 제출 버튼 문구
    success: string;       // 완료 메시지
    error?: string;        // 실패 메시지
  };
  thanksTitle: string;
  thanksMsg: string;
  donateBtn: string;
  feedbackBtn: string;
  closeBtn: string;
  notFound: {
    title: string;
    desc: string;
    goHome: string;
    goBack: string;
  };
}