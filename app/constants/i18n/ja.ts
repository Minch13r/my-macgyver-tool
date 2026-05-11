// src/constants/i18n/ja.ts
import type { LanguagePack } from "./type";

// 일본어 사전 데이터 정의 영역
export const ja: LanguagePack = {
  title: "MacGyver-Tool",
  theme: "テーマ",
  sideMenu: {
    img: "画像変換",
    count: "文字数カウント",
    sha: "SHA暗号化",
    bcrypt: "Bcrypt暗号化",
  },
  search: "ツールを検索...",
  donate: "コーヒーを支援する",
  paypal: "PayPalで支援する",
  adFree: "広告除去コード入力",
  adActive: "広告なしモード有効",
  desc: "画像変換、文字数カウント、暗号化まで、すべてのツールを無料で利用できます。",
  copy: "コピー",
  download: "ダウンロード",

  // 이미지 변환 도구 문구 영역
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
    zipBtn: "ZIP一括ダウンロード",
    clear: "リストをクリア",
    favicon: "ファビコン生成 (32x32)",
  },

  // 글자수 세기 도구 문구 영역
  counter: {
    placeholder: "ここに入력してください...",
    char: "文字数",
    byte: "バイト",
  },

  // Bcrypt 암호화 도구 문구 영역
  bcrypt: {
    pass: "パスワード",
    hash: "ハッシュ値",
    gen: "ハッシュ生成",
    verify: "一致検証",
    match: "一致しています ✅",
    mismatch: "一致していません ❌",
    pageDesc: "強力なソルトを含む可変コストハッシュを生成し、検証します。",
    costTip:
      "* 値が高いほどセキュリティは向上しますが、生成速度は低下します。(推奨: 10-12)",
    securityTipTitle: "セキュリティチップ",
    securityTipDesc:
      "Bcryptは、レインボーテーブル攻撃を防ぐために、各ハッシュに対して一意のソルトを自動的に生成します。",
    passPlaceholder: "パスワードを入力...",
  },

  // SHA 암호화 도구 문구 영역
  sha: {
    desc: "強力な一方向暗号化アルゴリズムでデータをハッシュ化します。",
    placeholder: "暗号化する内容を入力してください...",
    labelAlgo: "アルゴリズム選択",
    labelInput: "プレーンテキスト",
  },

  // 감사 팝업 및 후원 문구 영역
  thanksTitle: "ありがとうございます！",
  thanksMsg:
    "MacGyver-Toolをご利用いただきありがとうございます。\n皆様の支援が開発の大きな励みになります。",
  donateBtn: "支援する ❤️",
  closeBtn: "閉じる",
  notFound: {
    title: "道に迷いましたか？",
    desc: "お探しのページは存在しないか、移動した可能性があります。",
    goHome: "ホームに戻る",
    goBack: "戻る"
  }
};
