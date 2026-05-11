// src/constants/i18n/en.ts
import type { LanguagePack } from "./type";

// 영어 사전 데이터 정의 영역
export const en: LanguagePack = {
  title: "MacGyver-Tool",
  theme: "Theme",
  sideMenu: { 
    img: "Image Conv", 
    count: "Counter", 
    sha: "SHA Hash", 
    bcrypt: "Bcrypt Hash" 
  },
  search: "Search tools...",
  donate: "Support with Coffee",
  paypal: "Support with PayPal",
  adFree: "Enter Ad-Free Code",
  adActive: "Ad-Free Mode Active",
  desc: "Free online tools for image conversion, counting, and hashing.",
  copy: "Copy",
  download: "Download",

  // 이미지 변환 도구 문구 영역
  img: {
    drag: "Click or Drag Image Here",
    format: "Target Format",
    desc: "Free professional online Favicon generator and Image converter. \nEasily create website icons, resize, compress, and convert images (PNG, JPG, WebP) in bulk without losing quality. \nYour all-in-one digital utility kit.",
    drop: "Drop your files here",
    click: "or click to browse files",
    processing: "Processing...",
    convBtn: "Individual Download",
    quality: "Compression Quality",
    resize: "Resize (0 for Original)",
    width: "Width(px)",
    height: "Height(px)",
    keepRatio: "Keep Aspect Ratio",
    base64: "Extract Base64",
    zipBtn: "Batch Download as ZIP",
    clear: "Clear List",
    favicon: "Generate Favicon (32x32)"
  },

  // 글자수 세기 도구 문구 영역
  counter: { 
    placeholder: "Type here...", 
    char: "Characters", 
    byte: "Bytes" 
  },

  // Bcrypt 암호화 도구 문구 영역
  bcrypt: { 
    pass: "Password", 
    hash: "Hash", 
    gen: "GENERATE HASH", 
    verify: "VERIFY", 
    match: "MATCHED ✅", 
    mismatch: "MISMATCHED ❌" 
  },

  // SHA 암호화 도구 문구 영역
  sha: {
    desc: "Hash your data with powerful one-way encryption algorithms.",
    placeholder: "Enter content to encrypt...",
    labelAlgo: "Select Algorithm",
    labelInput: "Plain Text"
  },

  // 감사 팝업 및 후원 문구 영역
  thanksTitle: "Thank You!",
  thanksMsg: "Thank you for using MacGyver-Tool.\nYour support is a great help to the developer.",
  donateBtn: "Support Now ❤️",
  closeBtn: "Close"
};