// src/constants/i18n/fr.ts
import type { LanguagePack } from "./type";

// 프랑스어 사전 데이터 정의 영역
export const fr: LanguagePack = {
  title: "MacGyver-Tool",
  theme: "Mode",
  sideMenu: {
    img: "Conv Image",
    count: "Compteur",
    sha: "SHA Hash",
    bcrypt: "Bcrypt Hash",
    feedback: "Commentaires",
  },
  search: "Rechercher des outils...",
  donate: "Soutenir avec un café",
  paypal: "Soutenir avec PayPal",
  adFree: "Entrer le code sans publicité",
  adActive: "Mode sans publicité actif",
  desc: "Outils en ligne gratuits pour la conversion d'images, le comptage et le hachage.",
  copy: "Copier",
  download: "Télécharger",

  // 이미지 변환 도구 문구 영역
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
    favicon: "Générer un Favicon (32x32)",
  },

  // 글자수 세기 도구 문구 영역
  counter: {
    placeholder: "Écrivez ici...",
    char: "Caractères",
    byte: "Octets",
  },

  // Bcrypt 암호화 도구 문구 영역
  bcrypt: {
    pass: "Mot de passe",
    hash: "Valeur",
    gen: "Hacher",
    verify: "Vérifier",
    match: "Correspondance ✅",
    mismatch: "Non-correspondance ❌",
    pageDesc:
      "Générez et vérifiez des hachages à coût variable avec des sels forts.",
    costTip:
      "* Des valeurs plus élevées augmentent la sécurité mais ralentissent la génération. (Recommandé : 10-12)",
    securityTipTitle: "Conseil de sécurité",
    securityTipDesc:
      "Bcrypt génère automatiquement un sel unique pour chaque hachage afin d'empêcher les attaques par table arc-en-ciel.",
    passPlaceholder: "Entrez le mot de passe...",
  },

  // SHA 암호화 도구 문구 영역
  sha: {
    desc: "Hachez vos données avec de puissants algorithmes de chiffrement unidirectionnels.",
    placeholder: "Entrez le contenu à chiffrer...",
    labelAlgo: "Sélectionner l'algorithme",
    labelInput: "Texte brut",
  },

  // 감사 팝업 및 후원 문구 영역
  thanksTitle: "Merci !",
  thanksMsg:
    "Merci d'utiliser MacGyver-Tool.\nVotre soutien est d'une grande aide pour le développeur.",
  donateBtn: "Soutenir ❤️",
  feedbackBtn: "Aller aux commentaires ❤️",
  feedbackMsg: "Merci d'avoir utilisé l'outil MacGyver.\nLes commentaires seront d'une grande aide pour les développeurs.",
  closeBtn: "Fermer",
  notFound: {
    title: "Êtes-vous perdu ?",
    desc: "La page que vous recherchez n'existe pas ou a été déplacée.",
    goHome: "Accueil",
    goBack: "Retour",
  },
  feedback: {
    title: "Envoyer un commentaire",
    desc: "N'hésitez pas à suggérer de nouvelles fonctionnalités ou à signaler des problèmes.",
    labelType: "Type de demande",
    labelContent: "Détails",
    placeholder: "Veuillez entrer les détails ici...",
    typeFeature: "Suggestion",
    typeBug: "Signalement de bug",
    typeEtc: "Autres",
    submitBtn: "Envoyer",
    success: "Merci pour vos commentaires !",
    error: "Échec de l'envoi. Veuillez réessuyer plus tard.",
  },
};
