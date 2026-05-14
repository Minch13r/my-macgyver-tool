// src/constants/i18n/es.ts
import type { LanguagePack } from "./type";

// 스페인어 사전 데이터 정의 영역
export const es: LanguagePack = {
  title: "MacGyver-Tool",
  theme: "Tema",
  sideMenu: {
    img: "Conv Imagen",
    count: "Contador",
    sha: "SHA Hash",
    bcrypt: "Bcrypt Hash",
    feedback: "Comentarios",
  },
  search: "Buscar herramientas...",
  donate: "Apoya con un café",
  paypal: "Apoya con PayPal",
  adFree: "Ingresar código sin publicidad",
  adActive: "Modo sin anuncios activo",
  desc: "Herramientas gratuitas para conversión de imágenes, contador y cifrado.",
  copy: "Copy",
  download: "Download",

  // 이미지 변환 도구 문구 영역
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
    favicon: "Generar Favicon (32x32)",
  },

  // 글자수 세기 도구 문구 영역
  counter: {
    placeholder: "Escribe aquí...",
    char: "Caracteres",
    byte: "Bytes",
  },

  // Bcrypt 암호화 도구 문구 영역
  bcrypt: {
    pass: "Contraseña",
    hash: "Valor Hash",
    gen: "Generar Hash",
    verify: "Verificar",
    match: "Coincide ✅",
    mismatch: "No coincide ❌",
    pageDesc: "Genere y verifique hashes de costo variable con sales potentes.",
    costTip:
      "* Los números más altos aumentan la seguridad pero ralentizan la generación. (Recomendado: 10-12)",
    securityTipTitle: "Consejo de seguridad",
    securityTipDesc:
      "Bcrypt genera automáticamente una sal única para cada hash para evitar ataques de tablas arcoíris.",
    passPlaceholder: "Ingrese la contraseña...",
  },

  // SHA 암호화 도구 문구 영역
  sha: {
    desc: "Hashee sus datos con potentes algoritmos de cifrado unidireccionales.",
    placeholder: "Ingrese el contenido a cifrar...",
    labelAlgo: "Seleccionar algoritmo",
    labelInput: "Texto plano",
  },

  // 감사 팝업 및 후원 문구 영역
  thanksTitle: "¡Gracias!",
  thanksMsg:
    "Gracias por usar MacGyver-Tool.\nTu apoyo es de gran ayuda para el desarrollador.",
  donateBtn: "Apoyar ❤️",
  closeBtn: "Cerrar",
  notFound: {
    title: "¿Estás perdido?",
    desc: "La página que buscas no existe o ha sido movida.",
    goHome: "Inicio",
    goBack: "Volver",
  },
  feedback: {
    title: "Enviar comentarios",
    desc: "Siéntase libre de sugerir nuevas funciones o informar problemas.",
    labelType: "Tipo de consulta",
    labelContent: "Contenido",
    placeholder: "Ingrese los detalles aquí...",
    typeFeature: "Sugerencia",
    typeBug: "Reportar error",
    typeEtc: "Otros",
    submitBtn: "Enviar",
    success: "¡Gracias por sus comentarios!",
    error: "Error al enviar. Inténtelo de nuevo más tarde.",
  },
};
