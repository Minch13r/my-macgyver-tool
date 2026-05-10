// src/constants/dictionary.ts

{/* 다국어 지원을 위한 언어팩 인터페이스 정의 영역 */}
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
    quality: string;
    resize: string;
    width: string;
    height: string;
    keepRatio: string;
    base64: string;
    zipBtn: string;
    clear: string;
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

{/* 각 언어별 사전 데이터 정의 영역 */}
export const DICTIONARY: Record<string, LanguagePack> = {
  en: {
    title: "MacGyver-Tool",
    theme: "Theme",
    sideMenu: { img: "Image Conv", count: "Counter", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    donate: "Support with Coffee",
    paypal: "Support with PayPal",
    adFree: "Enter Ad-Free Code",
    adActive: "Ad-Free Mode Active",
    desc: "Free online tools for image conversion, counting, and hashing.",
    copy: "Copy",
    download: "Download",
    img: {
      drag: "Click or Drag Image Here",
      format: "Target Format",
      desc: "Professional tool for resizing, compression, and batch conversion.",
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
      clear: "Clear List"
    },
    counter: { placeholder: "Type here...", char: "Characters", byte: "Bytes" },
    bcrypt: { pass: "Password", hash: "Hash", gen: "GENERATE HASH", verify: "VERIFY", match: "MATCHED ✅", mismatch: "MISMATCHED ❌" },
  },
  ko: {
    title: "MacGyver-Tool",
    theme: "테마",
    sideMenu: { img: "이미지 변환", count: "글자수 세기", sha: "SHA 암호화", bcrypt: "Bcyrpt 암호화" },
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
      desc: "리사이징, 압축, 일괄 변환까지 가능한 전문가용 도구입니다.",
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
      clear: "목록 비우기"
    },
    counter: { placeholder: "내용을 입력해 주세요...", char: "글자수", byte: "바이트" },
    bcrypt: { pass: "비밀번호", hash: "해시값", gen: "해시 생성", verify: "일치 검증", match: "일치합니다 ✅", mismatch: "일치하지 않습니다 ❌" },
  },
  ja: {
    title: "MacGyver-Tool",
    theme: "テーマ",
    sideMenu: { img: "画像変換", count: "文字数カウント", sha: "SHA暗号化", bcrypt: "Bcrypt暗号化" },
    donate: "コーヒーを支援する",
    paypal: "PayPalで支援する",
    adFree: "広告除去コード入力",
    adActive: "広告なしモード有効",
    desc: "画像変換、文字数カウント、暗号化まで、すべてのツールを無料で利用できます。",
    copy: "コピー",
    download: "ダウンロード",
    img: {
      drag: "画像をクリックまたはドラッグしてください",
      format: "変換形式",
      desc: "リサイズ、圧縮、一括変換が可能なプロ仕様のツールです。",
      drop: "ここにファイルをドロップしてください",
      click: "またはクリックしてファイルを参照",
      processing: "処理中...",
      convBtn: "個別ダウンロード",
      quality: "圧縮品質",
      resize: "リサイズ (0は元サイズ)",
      width: "幅(px)",
      height: "高さ(px)",
      keepRatio: "比率を維持",
      base64: "Base64抽出",
      zipBtn: "ZIP一括ダウンロード",
      clear: "リストをクリア"
    },
    counter: { placeholder: "ここに入力してください...", char: "文字数", byte: "バイト" },
    bcrypt: { pass: "パスワード", hash: "ハッシュ値", gen: "ハッシュ生成", verify: "一致検証", match: "一致しています ✅", mismatch: "一致していません ❌" },
  },
  fr: {
    title: "MacGyver-Tool",
    theme: "Mode",
    sideMenu: { img: "Conv Image", count: "Compteur", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    donate: "Soutenir avec un café",
    paypal: "Soutenir avec PayPal",
    adFree: "Entrer le code sans publicité",
    adActive: "Mode sans publicité actif",
    desc: "Outils en ligne gratuits pour la conversion d'images, le comptage et le hachage.",
    copy: "Copier",
    download: "Télécharger",
    img: {
      drag: "Cliquez ou glissez l'image ici",
      format: "Format cible",
      desc: "Outil professionnel pour le redimensionnement, la compression et la conversion par lots.",
      drop: "Déposez vos fichiers ici",
      click: "ou cliquez pour parcourir les fichiers",
      processing: "Traitement...",
      convBtn: "Téléchargement individuel",
      quality: "Qualité de compression",
      resize: "Redimensionner (0 pour original)",
      width: "Largeur(px)",
      height: "Hauteur(px)",
      keepRatio: "Garder le ratio",
      base64: "Extraire Base64",
      zipBtn: "Télécharger tout en ZIP",
      clear: "Vider la liste"
    },
    counter: { placeholder: "Écrivez ici...", char: "Caractères", byte: "Octets" },
    bcrypt: { pass: "Mot de passe", hash: "Valeur", gen: "Hacher", verify: "Vérifier", match: "Correspondance ✅", mismatch: "Non-correspondance ❌" },
  },
  es: {
    title: "MacGyver-Tool",
    theme: "Tema",
    sideMenu: { img: "Conv Imagen", count: "Contador", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    donate: "Apoya con un café",
    paypal: "Apoya con PayPal",
    adFree: "Ingresar código sin publicidad",
    adActive: "Modo sin anuncios activo",
    desc: "Herramientas gratuitas para conversión de imágenes, contador y cifrado.",
    copy: "Copiar",
    download: "Descargar",
    img: {
      drag: "Haz clic o arrastra la imagen aquí",
      format: "Formato",
      desc: "Herramienta profesional para redimensionar, comprimir y convertir por lotes.",
      drop: "Suelta tus archivos aquí",
      click: "o haz clic para buscar archivos",
      processing: "Procesando...",
      convBtn: "Descarga individual",
      quality: "Calidad de compresión",
      resize: "Redimensionar (0 para original)",
      width: "Ancho(px)",
      height: "Alto(px)",
      keepRatio: "Mantener proporción",
      base64: "Extraer Base64",
      zipBtn: "Descargar todo en ZIP",
      clear: "Limpiar lista"
    },
    counter: { placeholder: "Escribe aquí...", char: "Caracteres", byte: "Bytes" },
    bcrypt: { pass: "Contraseña", hash: "Valor Hash", gen: "Generar Hash", verify: "Verificar", match: "Coincide ✅", mismatch: "No coincide ❌" },
  },
};