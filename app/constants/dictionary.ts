// src/constants/dictionary.ts

// 다국어 언어팩의 구조적 통일성을 규격화하는 타입 정의 영역
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

// 기본 언어 설정 영역
export const DEFAULT_LANG = "en";

// 국가별 다국어 사전 리소스 관리 저장소 영역
export const DICTIONARY: Record<string, LanguagePack> = {
  // 영문(English) 사전 리소스 정의 영역
  en: {
    title: "MacGyver-Tool",
    theme: "Theme",
    sideMenu: {
      img: "Image Conv",
      count: "Counter",
      sha: "SHA Hash",
      bcrypt: "Bcrypt Hash",
    },
    donate: "Support with Coffee",
    paypal: "Support with PayPal",
    adFree: "Enter Ad-Free Code",
    adActive: "Ad-Free Mode Active",
    desc: "Free online tools for image conversion, word count, and secure encryption. \nYour everyday digital Swiss knife - support our development with a coffee!",
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
      mismatch: "MISMATCHED ❌",
    },
  },
  // 국문(Korean) 사전 리소스 정의 영역
  ko: {
    title: "MacGyver-Tool",
    theme: "테마",
    sideMenu: {
      img: "이미지 변환",
      count: "글자수 세기",
      sha: "SHA 암호화",
      bcrypt: "Bcyrpt 암호화",
    },
    donate: "커피 한 잔 후원하기",
    toss: "토스 기부하기",
    paypal: "페이팔로 후원하기",
    adFree: "광고 제거 코드 입력",
    adActive: "광고 없는 모드 활성화 중",
    desc: "이미지 변환, 글자수 세기, 암호화까지 - \n일상의 번거로움을 해결해 주는 평생 무료 만능 도구함. \n개발자에게 따뜻한 커피 한 잔을 후원해 주세요!",
    copy: "복사",
    download: "다운로드",
    img: {
      drag: "이미지를 클릭하거나 이곳에 드래그하세요",
      format: "변환 포맷",
    },
    counter: {
      placeholder: "내용을 입력해 주세요...",
      char: "글자수",
      byte: "바이트",
    },
    bcrypt: {
      pass: "비밀번호 (평문)",
      hash: "해시값",
      gen: "해시 생성",
      verify: "일치 검증",
      match: "일치합니다 ✅",
      mismatch: "일치하지 않습니다 ❌",
    },
  },
  // 일문(Japanese) 사전 리소스 정의 영역
  ja: {
    title: "MacGyver-Tool",
    theme: "テーマ",
    sideMenu: {
      img: "画像変換",
      count: "文字数カウント",
      sha: "SHA暗号化",
      bcrypt: "Bcrypt暗号化",
    },
    donate: "コーヒーを支援する",
    paypal: "PayPalで支援する",
    adFree: "広告除去コード入力",
    adActive: "広告なしモード有効",
    desc: "画像変換、文字数カウント、暗号化まで —\n日常のわずらわしさを解決, 永久無料の万能ツールボックス。\n開発者に温かいコーヒーを一杯ご馳走してください！",
    copy: "コピー",
    download: "ダウンロード",
    img: {
      drag: "画像をクリックまたはドラッグしてください",
      format: "変換形式",
    },
    counter: {
      placeholder: "ここに入力してください...",
      char: "文字数",
      byte: "バイト",
    },
    bcrypt: {
      pass: "パスワード (平文)",
      hash: "ハッシュ値",
      gen: "ハッシュ生成",
      verify: "一致検証",
      match: "一致しています ✅",
      mismatch: "一致していません ❌",
    },
  },
  // 불문(French) 사전 리소스 정의 영역
  fr: {
    title: "MacGyver-Tool",
    theme: "Mode",
    sideMenu: {
      img: "Conv Image",
      count: "Compteur",
      sha: "SHA Hash",
      bcrypt: "Bcrypt Hash",
    },
    donate: "Soutenir avec un café",
    paypal: "Soutenir avec PayPal",
    adFree: "Entrer le code sans publicité",
    adActive: "Mode sans publicité actif",
    desc: "Outils en ligne gratuits pour la conversion d'images, \nle comptage de mots et le cryptage. \nVotre couteau suisse numérique quotidien - offrez-moi un café !",
    copy: "Copier",
    download: "Télécharger",
    img: { drag: "Cliquez ou glissez l'image ici", format: "Format cible" },
    counter: {
      placeholder: "Écrivez ici...",
      char: "Caractères",
      byte: "Octets",
    },
    bcrypt: {
      pass: "Mot de passe (Clair)",
      hash: "Valeur de hachage",
      gen: "Hacher",
      verify: "Vérifier",
      match: "Correspondance ✅",
      mismatch: "Non-correspondance ❌",
    },
  },
  // 서문(Spanish) 사전 리소스 정의 영역
  es: {
    title: "MacGyver-Tool",
    theme: "Tema",
    sideMenu: {
      img: "Conv Imagen",
      count: "Contador",
      sha: "SHA Hash",
      bcrypt: "Bcrypt Hash",
    },
    donate: "Apoya con un café",
    paypal: "Apoya con PayPal",
    adFree: "Ingresar código sin publicidad",
    adActive: "Modo sin anuncios activo",
    desc: "Herramientas gratuitas para convertir imágenes, \ncontar palabras y cifrado seguro. \nTu navaja suiza digital para el día a día. ¡Invítame a un café!",
    copy: "Copiar",
    download: "Descargar",
    img: { drag: "Haz clic o arrastra la imagen aquí", format: "Formato" },
    counter: {
      placeholder: "Escribe aquí...",
      char: "Caracteres",
      byte: "Bytes",
    },
    bcrypt: {
      pass: "Contraseña (Texto plano)",
      hash: "Valor Hash",
      gen: "Generar Hash",
      verify: "Verificar",
      match: "Coincide ✅",
      mismatch: "No coincide ❌",
    },
  },
};
