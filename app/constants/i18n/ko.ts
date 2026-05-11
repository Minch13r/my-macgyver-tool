// src/constants/i18n/ko.ts
import type { LanguagePack } from "./type";

// 한국어 사전 데이터 정의 영역
export const ko: LanguagePack = {
  title: "MacGyver-Tool",
  theme: "테마",
  sideMenu: { img: "이미지 변환", count: "글자수 세기", sha: "SHA 암호화", bcrypt: "Bcyrpt 암호화" },
  search: "도구 검색...",
  donate: "커피 한 잔 후원하기",
  toss: "토스 익명 송금하기",
  paypal: "페이팔로 후원하기",
  adFree: "광고 제거 코드 입력",
  adActive: "광고 없는 모드 활성화 중",
  desc: "이미지 변환, 글자수 세기, 암호화까지 모든 도구를 무료로 이용하세요.",
  copy: "복사",
  download: "다운로드",
  img: {
    drag: "이미지를 클릭하거나 이곳에 드래그하세요",
    format: "변환 포맷",
    desc: "전문가용 무료 온라인 파비콘 생성기 및 이미지 변환기. \n화질 저하 없이 웹사이트 아이콘 제작, 크기 조절, 이미지 압축(PNG, JPG, WebP) 및 일괄 변환을 간편하게 처리하세요. \n당신을 위한 디지털 만능 도구함.",
    drop: "파일들을 여기에 놓아주세요",
    click: "또는 클릭하여 탐색기 열기",
    processing: "변환 중...",
    convBtn: "개별 다운로드",
    quality: "압축 화질",
    resize: "크기 조절 (0은 원본)",
    width: "가로(px)",
    height: "세로(px)",
    keepRatio: "비율 유지",
    base64: "Base64 코드 추출",
    zipBtn: "ZIP으로 일괄 다운로드",
    clear: "목록 비우기",
    favicon: "파비콘 생성 (32x32)"
  },
  counter: { placeholder: "내용을 입력해 주세요...", char: "글자수", byte: "바이트" },
  bcrypt: { pass: "비밀번호", hash: "해시값", gen: "해시 생성", verify: "일치 검증", match: "일치합니다 ✅", mismatch: "일치하지 않습니다 ❌" },
  sha: {
    desc: "강력한 일방향 암호화 알고리즘으로 데이터를 해싱하십시오.",
    placeholder: "암호화할 내용을 입력하십시오...",
    labelAlgo: "알고리즘 선택",
    labelInput: "원문 텍스트"
  },
  thanksTitle: "감사합니다!",
  thanksMsg: "MacGyver-Tool을 사용해주셔서 감사합니다.\n후원해주시면 개발자에게 큰 도움이 됩니다.",
  donateBtn: "후원하러 가기 ❤️",
  closeBtn: "닫기"
};