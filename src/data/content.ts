// =====================================================================
// CREATIVESITE サイトコンテンツ (Phase 1: 型付き定数)
// Phase 2 で microCMS に差し替え可能なよう、データ層をここに集約。
// テキストの修正はこのファイルだけ編集すればOKです。
// =====================================================================

export const SITE = {
  name: "CREATIVESITE",
  tagline: "「困った」を、しくみで解く。",
  description:
    "京都発・個人事業のIT/業務改善パートナー。日々の小さな手間からAIを使った自動化まで、オンライン中心で伴走します。",
  // 公開URL (Vercel デプロイ後に確定したドメインに変更)
  url: "https://creativesite.jp",
  // お問い合わせ送信先 (Web3Forms)。下の手順で取得したキーを入れてください。
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  contactEmail: "contact@creativesite.jp",
} as const;

// ── トップの検索欄フォーカス時に出す固定キーワード (Q4=a) ──
export const SEARCH_SUGGESTIONS: string[] = [
  "Wi-Fiが遅い",
  "Excelを自動化したい",
  "経費精算を楽にしたい",
  "Windows 11に移行したい",
  "議事録をAIでまとめたい",
];

// ── ヒーローのタイプライター文言 ──
export const TYPEWRITER_PHRASES: string[] = [
  "Excelの集計、自動にできます。",
  "経費精算、もう手入力しません。",
  "Wi-Fiの不調、原因から直します。",
  "AIで、議事録を一瞬に。",
];

// ── 事業内容 (/services + 概要モーダル前半) ──
export type Service = {
  icon: string; // react-icons (Fa6) のキー名
  title: string;
  summary: string;
  detail: string;
};

export const SERVICES: Service[] = [
  {
    icon: "FaLaptopCode",
    title: "業務の自動化・効率化",
    summary: "繰り返し作業をしくみ化",
    detail:
      "Excelの集計やコピペ作業、フォーム入力などの定型業務を、マクロやツール化で自動化します。「毎月の手間」を一度の仕組みづくりに変えます。",
  },
  {
    icon: "FaRobot",
    title: "AI活用サポート",
    summary: "議事録・文章・要約をAIで",
    detail:
      "生成AIを使った議事録作成、文章作成、データ整理の導入を支援します。専門知識がなくても日々の業務で使える形に落とし込みます。",
  },
  {
    icon: "FaWindows",
    title: "PC・OS移行サポート",
    summary: "Windows 11 移行も安心",
    detail:
      "Windows 10サポート終了に備えた移行可否診断・移行作業・データ引っ越しまで対応。軽量Linuxへの切替もご相談いただけます。",
  },
  {
    icon: "FaWifi",
    title: "ネットワーク・環境改善",
    summary: "遅い・繋がらないを解消",
    detail:
      "Wi-Fiの不調やネットワーク環境を原因から診断し、メッシュWi-Fiの導入提案などで快適な作業環境を整えます。",
  },
  {
    icon: "FaShieldHalved",
    title: "セキュリティ・データ保全",
    summary: "バックアップとパスワード管理",
    detail:
      "クラウド＋外付けの多重バックアップ構築、パスワード管理の仕組みづくりなど、「失わない・漏らさない」体制づくりを支援します。",
  },
  {
    icon: "FaPuzzlePiece",
    title: "オーダーメイド開発",
    summary: "あなた専用のツールを",
    detail:
      "既製ツールでは届かない部分に、Chrome拡張機能や小さなWebアプリなどを個別開発。AIORC(経費精算自動入力)はその代表例です。",
  },
];

// ── 提供スタイル ──
export const DELIVERY: { label: string; main: string; sub: string }[] = [
  { label: "対応エリア", main: "オンライン全国対応", sub: "訪問対応は開始予定" },
  { label: "ヒアリング", main: "Web打ち合わせ", sub: "Zoom / Google Meet 等" },
  { label: "対応時間", main: "夜間中心", sub: "平日夜間・水曜など" },
  { label: "ご利用方法", main: "完全予約制", sub: "お問い合わせ後にご案内" },
];

// ── 創業者紹介 (概要モーダル後半 Q2=c) ──
export const FOUNDER = {
  name: "よういちろう",
  role: "CREATIVESITE 代表",
  location: "京都",
  bio: [
    "京都を拠点に、個人や事業者のIT・業務の「困った」を解決しています。",
    "得意分野は、日々の繰り返し作業を見つけて自動化すること。OCRと自動入力で経費精算を無人化するChrome拡張「AIORC」など、現場で本当に使えるしくみづくりを大切にしています。",
    "「便利そう」で終わらせず、相手の業務に馴染むまで伴走する——それがCREATIVESITEの仕事の流儀です。",
  ],
};

// ── 事例 (/cases 一覧) ──
export type CaseItem = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  hasDetail: boolean;
};

export const CASES: CaseItem[] = [
  {
    slug: "aiorc",
    title: "AIORC — 経費精算の自動入力",
    tag: "Chrome拡張 / OCR / 自動化",
    summary:
      "領収書・請求書の画像をOCRで読み取り、経費精算システムのフォームへ自動入力。手入力を限りなくゼロに近づけたChrome拡張機能。",
    hasDetail: true,
  },
  {
    slug: "calc-generator",
    title: "計算問題ジェネレーター",
    tag: "Webアプリ / 教育",
    summary:
      "学習用の計算問題を条件指定で自動生成・印刷できるWebツール。繰り返しのプリント作成作業を一瞬に。",
    hasDetail: false,
  },
];

// ── AIORC 個別事例 (/cases/aiorc) ──
export const AIORC_CASE = {
  title: "AIORC — 経費精算の自動入力ツール",
  lead: "「領収書を見て、フォームに手で打つ」を、しくみでなくす。",
  problem: [
    "経費精算では、領収書や請求書を1枚ずつ確認し、金額・日付・支払先などをフォームに手入力する必要があります。",
    "件数が増えるほど時間がかかり、転記ミスも起きやすい——そんな日常的な負担がありました。",
  ],
  solution: [
    "画面の領収書画像をOCR(文字認識)で読み取り、内容を解析して、経費精算システムのフォームへ自動で入力します。",
    "請求書・領収書など複数のフォーマットに対応し、判別が難しい書類は安全にスキップ。完全自動運転を目指して改良を重ねています。",
  ],
  results: [
    { label: "手入力", value: "ほぼゼロへ" },
    { label: "対応フォーム", value: "6種類" },
    { label: "稼働", value: "無人運転対応" },
  ],
  tech: ["Chrome拡張 (Manifest V3)", "Google Vision API (OCR)", "JavaScript", "GitHub / Gist 連携"],
};
