// src/constants/dictionary.ts

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
    desc: string;
    drop: string;
    click: string;
    processing: string;
    convBtn: string;
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

export const DEFAULT_LANG = "en";

export const DICTIONARY: Record<string, LanguagePack> = {
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
    desc: "Free online tools for image conversion...",
    copy: "Copy",
    download: "Download",
    img: {
      drag: "Click or Drag Image Here",
      format: "Target Format",
      desc: "Fast and safe conversion with MacGyver-Tool technology.",
      drop: "Drop your file here",
      click: "or click to browse files",
      processing: "Processing...",
      convBtn: "Convert & Download",
    },
    counter: { placeholder: "Type here...", char: "Characters", byte: "Bytes" },
    bcrypt: {
      pass: "Password",
      hash: "Hash",
      gen: "GENERATE HASH",
      verify: "VERIFY",
      match: "MATCHED ✅",
      mismatch: "MISMATCHED ❌",
    },
  },
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
    toss: "토스 익명 송금하기",
    paypal: "페이팔로 후원하기",
    adFree: "광고 제거 코드 입력",
    adActive: "광고 없는 모드 활성화 중",
    desc: "이미지 변환, 글자수 세기, 암호화까지 - ...",
    copy: "복사",
    download: "다운로드",
    img: {
      drag: "이미지를 클릭하거나 이곳에 드래그하세요",
      format: "변환 포맷",
      desc: "MacGyver-Tool의 기술로 빠르고 안전하게 변환하세요.",
      drop: "파일을 여기에 놓아주세요",
      click: "또는 클릭하여 탐색기 열기",
      processing: "처리 중...",
      convBtn: "변환 및 다운로드",
    },
    counter: {
      placeholder: "내용을 입력해 주세요...",
      char: "글자수",
      byte: "바이트",
    },
    bcrypt: {
      pass: "비밀번호",
      hash: "해시값",
      gen: "해시 생성",
      verify: "일치 검증",
      match: "일치합니다 ✅",
      mismatch: "일치하지 않습니다 ❌",
    },
  },
  ja: {
    title: "MacGyver-Tool",
    theme: "テーマ",
    sideMenu: {
      img: "画像変換",
      count: "文字数カウント",
      sha: "SHA暗号化",
      bcrypt: "Bcrypt暗호화",
    },
    donate: "コーヒーを支援する",
    paypal: "PayPalで支援する",
    adFree: "広告除去コード入力",
    adActive: "広告なしモード有効",
    desc: "画像変換、文字数カウント、暗号화까지 — ...",
    copy: "コピー",
    download: "ダウンロード",
    img: {
      drag: "画像をクリックまたはドラッグしてください",
      format: "変換形式",
      desc: "MacGyver-Toolの技術で高速かつ安全に変換します。",
      drop: "ここにファイルをドロップしてください",
      click: "またはクリックしてファイルを参照",
      processing: "処理中...",
      convBtn: "変換してダウンロード",
    },
    counter: {
      placeholder: "ここに入力してください...",
      char: "文字数",
      byte: "バイト",
    },
    bcrypt: {
      pass: "パスワード",
      hash: "ハッシュ値",
      gen: "ハッシュ生成",
      verify: "一致検証",
      match: "一致しています ✅",
      mismatch: "一致していません ❌",
    },
  },
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
    desc: "Outils en ligne gratuits...",
    copy: "Copier",
    download: "Télécharger",
    img: {
      drag: "Cliquez ou glissez l'image ici",
      format: "Format cible",
      desc: "Conversion rapide et sûre avec la technologie MacGyver-Tool.",
      drop: "Déposez votre fichier ici",
      click: "ou cliquez pour parcourir les fichiers",
      processing: "Traitement...",
      convBtn: "Convertir et Télécharger",
    },
    counter: {
      placeholder: "Écrivez ici...",
      char: "Caractères",
      byte: "Octets",
    },
    bcrypt: {
      pass: "Mot de passe",
      hash: "Valeur",
      gen: "Hacher",
      verify: "Vérifier",
      match: "Correspondance ✅",
      mismatch: "Non-correspondance ❌",
    },
  },
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
    desc: "Herramientas gratuitas para convertir imágenes...",
    copy: "Copiar",
    download: "Descargar",
    img: {
      drag: "Haz clic o arrastra la imagen aquí",
      format: "Formato",
      desc: "Conversión rápida y segura con la tecnología MacGyver-Tool.",
      drop: "Suelta tu archivo aquí",
      click: "o haz clic para buscar archivos",
      processing: "Procesando...",
      convBtn: "Convertir y Descargar",
    },
    counter: {
      placeholder: "Escribe aquí...",
      char: "Caracteres",
      byte: "Bytes",
    },
    bcrypt: {
      pass: "Contraseña",
      hash: "Valor Hash",
      gen: "Generar Hash",
      verify: "Verificar",
      match: "Coincide ✅",
      mismatch: "No coincide ❌",
    },
  },
};
