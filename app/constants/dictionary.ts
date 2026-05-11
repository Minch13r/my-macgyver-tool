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
  };
  thanksTitle: string;
  thanksMsg: string;
  donateBtn: string;
  closeBtn: string;
}

export const DEFAULT_LANG = "en";

{/* 각 국가별 사전 데이터 정의 영역 */}
export const DICTIONARY: Record<string, LanguagePack> = {
  en: {
    title: "MacGyver-Tool",
    theme: "Theme",
    sideMenu: { img: "Image Conv", count: "Counter", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    search: "Search tools...",
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
    counter: { placeholder: "Type here...", char: "Characters", byte: "Bytes" },
    bcrypt: { pass: "Password", hash: "Hash", gen: "GENERATE HASH", verify: "VERIFY", match: "MATCHED ✅", mismatch: "MISMATCHED ❌" },
    thanksTitle: "Thank You!",
    thanksMsg: "Thank you for using MacGyver-Tool.\nYour support is a great help to the developer.",
    donateBtn: "Support Now ❤️",
    closeBtn: "Close"
  },
  ko: {
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
    thanksTitle: "감사합니다!",
    thanksMsg: "MacGyver-Tool을 사용해주셔서 감사합니다.\n후원해주시면 개발자에게 큰 도움이 됩니다.",
    donateBtn: "후원하러 가기 ❤️",
    closeBtn: "닫기"
  },
  ja: {
    title: "MacGyver-Tool",
    theme: "テーマ",
    sideMenu: { img: "画像変換", count: "文字数カウント", sha: "SHA暗号化", bcrypt: "Bcrypt暗号化" },
    search: "ツールを検索...",
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
      desc: "プロ仕様の無料オンライン・ファビコン作成および画像変換ツール。\n画質を落とさずにウェブサイトのアイコン作成、サイズ変更、画像圧縮（PNG, JPG, WebP）および一括変換を簡単に処理できます。\nあなたのためのデジタル万能ツールボックス。",
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
      zipBtn: "ZIP一ダウンロード",
      clear: "リストをクリア",
      favicon: "ファビコン生成 (32x32)"
    },
    counter: { placeholder: "ここに入力してください...", char: "文字数", byte: "バイト" },
    bcrypt: { pass: "パスワード", hash: "ハッシュ値", gen: "ハッシュ生成", verify: "一致検証", match: "一致しています ✅", mismatch: "一致していません ❌" },
    thanksTitle: "ありがとうございます！",
    thanksMsg: "MacGyver-Toolをご利用いただきありがとうございます。\n皆様の支援が開発の大きな励みになります。",
    donateBtn: "支援する ❤️",
    closeBtn: "閉じる"
  },
  fr: {
    title: "MacGyver-Tool",
    theme: "Mode",
    sideMenu: { img: "Conv Image", count: "Compteur", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    search: "Rechercher des outils...",
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
      desc: "Générateur de favicon et convertisseur d'images professionnel gratuit en ligne. \nCréez facilement des icônes de site Web, redimensionnez, compressez et convertissez des images (PNG, JPG, WebP) par lots sans perte de qualité. \nVotre boîte à outils numérique tout-en-un.",
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
      clear: "Vider la liste",
      favicon: "Générer un Favicon (32x32)"
    },
    counter: { placeholder: "Écrivez ici...", char: "Caractères", byte: "Octets" },
    bcrypt: { pass: "Mot de passe", hash: "Valeur", gen: "Hacher", verify: "Vérifier", match: "Correspondance ✅", mismatch: "Non-correspondance ❌" },
    thanksTitle: "Merci !",
    thanksMsg: "Merci d'utiliser MacGyver-Tool.\nVotre soutien est d'une grande aide pour le développeur.",
    donateBtn: "Soutenir ❤️",
    closeBtn: "Fermer"
  },
  es: {
    title: "MacGyver-Tool",
    theme: "Tema",
    sideMenu: { img: "Conv Imagen", count: "Contador", sha: "SHA Hash", bcrypt: "Bcrypt Hash" },
    search: "Buscar herramientas...",
    donate: "Apoya con un café",
    paypal: "Apoya con PayPal",
    adFree: "Ingresar código sin publicidad",
    adActive: "Modo sin anuncios activo",
    desc: "Herramientas gratuitas para conversión de imágenes, contador y cifrado.",
    copy: "Copiar",
    download: "Descargar",
    img: {
      drag: "Haz clic o arrastra la imagen aquí",
      format: "Format",
      desc: "Generador de favicons y convertidor de imágenes profesional gratuito en línea. \nCree fácilmente iconos de sitios web, redimensione, comprima y convierta imágenes (PNG, JPG, WebP) por lotes sin pérdida de calidad. \nSu kit de herramientas digitales todo en uno.",
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
      clear: "Limpiar lista",
      favicon: "Generar Favicon (32x32)"
    },
    counter: { placeholder: "Escribe aquí...", char: "Caracteres", byte: "Bytes" },
    bcrypt: { pass: "Contraseña", hash: "Valor Hash", gen: "Generar Hash", verify: "Verificar", match: "Coincide ✅", mismatch: "No coincide ❌" },
    thanksTitle: "¡Gracias!",
    thanksMsg: "Gracias por usar MacGyver-Tool.\nTu apoyo es de gran ayuda para el desarrollador.",
    donateBtn: "Apoyar ❤️",
    closeBtn: "Cerrar"
  },
};