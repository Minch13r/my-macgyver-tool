// src/constants/dictionary.ts

// 개별 다국어 언어팩의 구조적 통일성을 규격화하는 타입 정의
export interface LanguagePack {
  title: string;
  theme: string;
  sideMenu: {
    img: string;
    count: string;
    sha: string;
    bcrypt: string;
  };
  donate: string;
  adFree: string;
  adActive: string;
  desc: string;
  copy: string;
  download: string;
  img: {
    drag: string;
    format: string;
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
  };
}

// 기본 언어 'en'으로 설정
export const DEFAULT_LANG = 'en';

// 각 국가별 코드에 매핑되는 번역 자원을 객체 형태로 관리하는 다국어 사전 저장
export const DICTIONARY: Record<string, LanguagePack> = {
  // 영문(English) 사전 리소스 정의
  en: {
    title: "OMNI TOOLKIT",
    theme: "Theme",
    sideMenu: { img: "Image Conv", count: "Counter", sha: "SHA Hash", bcrypt: "Bcrypt" },
    donate: "Support with Coffee",
    adFree: "Enter Ad-Free Code",
    adActive: "Ad-Free Mode Active",
    desc: "This tool is free forever. Buy me a coffee!",
    copy: "Copy",
    download: "Download",
    img: { drag: "Click or Drag Image Here", format: "Target Format" },
    counter: { placeholder: "Type here...", char: "Characters", byte: "Bytes" },
    bcrypt: {
      pass: "Password (Plain)",
      hash: "Hash Value",
      gen: "GENERATE HASH",
      verify: "VERIFY",
      match: "MATCHED ✅",
      mismatch: "MISMATCHED ❌"
    }
  },
  // 국문(Korean) 사전 리소스 정의
  ko: {
    title: "옴니 툴킷",
    theme: "테마",
    sideMenu: { img: "이미지 변환", count: "글자수 세기", sha: "SHA 암호화", bcrypt: "비크립트" },
    donate: "커피 한 잔 후원하기",
    adFree: "광고 제거 코드 입력",
    adActive: "광고 없는 모드 활성화 중",
    desc: "이 도구는 평생 무료입니다. 개발자에게 따뜻한 커피 한 잔을 후원해 주세요!",
    copy: "복사",
    download: "다운로드",
    img: { drag: "이미지를 클릭하거나 이곳에 드래그하세요", format: "변환 포맷" },
    counter: { placeholder: "내용을 입력해 주세요...", char: "글자수", byte: "바이트" },
    bcrypt: {
      pass: "비밀번호 (평문)",
      hash: "해시값",
      gen: "해시 생성",
      verify: "일치 검증",
      match: "일치합니다 ✅",
      mismatch: "일치하지 않습니다 ❌"
    }
  },
  // 일문(Japanese) 사전 리소스 정의
  ja: {
    title: "オムニツールキット",
    theme: "テーマ",
    sideMenu: { img: "画像変換", count: "文字数カウント", sha: "SHA暗호化", bcrypt: "Bcrypt" },
    donate: "コーヒーを支援する",
    adFree: "広告除去コード入力",
    adActive: "広告なしモード有効",
    desc: "このツールは永久に無料です。開発者にコーヒーを一杯ご馳走してください！",
    copy: "コピー",
    download: "ダウンロード",
    img: { drag: "画像をクリックまたはドラッグしてください", format: "変換形式" },
    counter: { placeholder: "ここに入力してください...", char: "文字数", byte: "バイト" },
    bcrypt: {
      pass: "パスワード (平文)",
      hash: "ハッシュ値",
      gen: "ハッシュ生成",
      verify: "一致検証",
      match: "一致しています ✅",
      mismatch: "一致していません ❌"
    }
  },
  // 불문(French) 사전 리소스 정의
  fr: {
    title: "Boîte à Outils Omni",
    theme: "Mode",
    sideMenu: { img: "Conv Image", count: "Compteur", sha: "SHA Hash", bcrypt: "Bcrypt" },
    donate: "Soutenir avec un café",
    adFree: "Entrer le code sans publicité",
    adActive: "Mode sans publicité actif",
    desc: "Cet outil est gratuit pour toujours. Offrez-moi un café !",
    copy: "Copier",
    download: "Télécharger",
    img: { drag: "Cliquez ou glissez l'image ici", format: "Format cible" },
    counter: { placeholder: "Écrivez ici...", char: "Caractères", byte: "Octets" },
    bcrypt: {
      pass: "Mot de passe (Clair)",
      hash: "Valeur de hachage",
      gen: "Hacher",
      verify: "Vérifier",
      match: "Correspondance ✅",
      mismatch: "Non-correspondance ❌"
    }
  },
  // 서문(Spanish) 사전 리소스 정의
  es: {
    title: "Caja de Herramientas Omni",
    theme: "Tema",
    sideMenu: { img: "Conv Imagen", count: "Contador", sha: "SHA Hash", bcrypt: "Bcrypt" },
    donate: "Apoya con un café",
    adFree: "Ingresar código sin publicidad",
    adActive: "Modo sin anuncios activo",
    desc: "Esta herramienta es gratuita para siempre. ¡Invítame a un café!",
    copy: "Copiar",
    download: "Descargar",
    img: { drag: "Haz clic o arrastra la imagen aquí", format: "Formato" },
    counter: { placeholder: "Escribe aquí...", char: "Caracteres", byte: "Bytes" },
    bcrypt: {
      pass: "Contraseña (Texto plano)",
      hash: "Valor Hash",
      gen: "Generar Hash",
      verify: "Verificar",
      match: "Coincide ✅",
      mismatch: "No coincide ❌"
    }
  }
};