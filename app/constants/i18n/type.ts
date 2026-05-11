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
  thanksTitle: string;
  thanksMsg: string;
  donateBtn: string;
  closeBtn: string;
  notFound: {
    title: string;
    desc: string;
    goHome: string;
    goBack: string;
  };
}