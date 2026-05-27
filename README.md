# CREATIVESITE — ホームページ (Phase 1 MVP)

京都発・個人事業 **CREATIVESITE** の公式サイト Phase 1。
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion で構築しています。

---

## 含まれているもの (Phase 1 スコープ)

- トップページ（泡アニメ背景 / タイプライター見出し / 検索UI）
- 事業内容ページ `/services`
- 事例一覧 `/cases` ＋ AIORC 個別事例 `/cases/aiorc`
- お問い合わせモーダル（**Web3Forms** で送信）
- 概要(About)モーダル（事業説明 ＋ 代表紹介）
- 検索欄フォーカス時に **固定5件** のキーワード表示（クリックでお問い合わせに引き継ぎ）
- 会社案内 PDF ダウンロード
- レスポンシブ / モバイル折り畳みメニュー
- OGP・favicon（暫定）

> Phase 1 の検索は AI 検索ではなく、入力内容を **お問い合わせモーダルに引き継ぐ** 動作です（AI検索本体は Phase 2）。

---

## ローカルで動かす

Node.js 18.18 以上が必要です。

```bash
npm install
npm run dev
```

→ ブラウザで http://localhost:3000 を開きます。

```bash
npm run build   # 本番ビルド
npm start       # 本番モードで起動
```

> 初回ビルド時に Google Fonts（Zen Maru Gothic / Zen Kaku Gothic New）を取得するため、
> インターネット接続が必要です（オフライン環境ではフォント取得に失敗します）。

---

## Vercel へのデプロイ

1. このフォルダを GitHub リポジトリにプッシュ
2. [Vercel](https://vercel.com/) で「Add New → Project」からそのリポジトリを Import
3. フレームワークは自動で **Next.js** と認識されます。設定はデフォルトのまま「Deploy」
4. 独自ドメイン（例: `creativesite.jp`）は Vercel の Project → Settings → Domains から追加

環境変数の設定は不要です（お問い合わせキーはコード内の定数管理。下記参照）。

---

## 設定・差し替えガイド

### 1. お問い合わせフォーム（Web3Forms キー）

`src/data/content.ts` の `web3formsKey` を、ご自身のキーに差し替えてください。

1. https://web3forms.com/ にアクセス
2. 受信したいメールアドレスを入力して **Access Key** を無料発行
3. `src/data/content.ts` の以下を書き換え：

```ts
web3formsKey: "ここに発行された Access Key",
contactEmail: "表示用の連絡先メール",
```

> キーは「送信先メールを指定するための公開キー」で、ブラウザに出ても問題ない設計です。

### 2. ロゴの差し替え（※ロゴは支給ありとのことなので、ファイル受領後に対応）

現在はテキストロゴ（コーラルの「C」マーク）で暫定表示しています。

1. ロゴ画像を `public/logo.svg`（推奨）または `public/logo.png` として配置
2. `src/components/layout/Logo.tsx` の中身を、次のように画像表示へ変更：

```tsx
import Image from "next/image";
// <span>...C...</span> のブロックを以下に差し替え
<Image src="/logo.svg" alt="CREATIVESITE" width={160} height={36} priority />
```

### 3. favicon / OGP 画像

暫定で `public/favicon.svg`・`public/apple-touch-icon.png`・`public/og.png` を同梱しています。
ロゴ確定後、同じファイル名で上書きすれば差し替え完了です（OGP は 1200×630px 推奨）。

### 4. 会社案内 PDF

`public/CREATIVESITE_brochure.pdf` は **プレースホルダ** です。
パンフレットの実 PDF を同じファイル名で `public/` に上書きしてください。

### 5. 文言・サービス・事例の編集

サイトのテキストはすべて `src/data/content.ts` に集約しています。
このファイルだけ編集すれば、サービス内容・事例・検索キーワード・代表紹介などを更新できます。

---

## 技術スタック

| 項目 | 採用 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS 3 |
| アニメ | Framer Motion |
| アイコン | react-icons |
| フォント | Zen Maru Gothic / Zen Kaku Gothic New (next/font) |
| デプロイ | Vercel |

## ディレクトリ

```
src/
├── app/
│   ├── layout.tsx        ルートレイアウト・メタ・フォント
│   ├── page.tsx          トップ
│   ├── services/page.tsx 事業内容
│   └── cases/
│       ├── page.tsx      事例一覧
│       └── aiorc/page.tsx AIORC個別
├── components/
│   ├── layout/           Header / Footer / Logo
│   ├── modals/           ModalProvider / Inquiry / About / ModalShell
│   ├── BubbleBackground.tsx
│   ├── TypewriterText.tsx
│   ├── SearchInput.tsx
│   ├── Reveal.tsx / CtaButton.tsx / ServiceIcon.tsx
└── data/
    └── content.ts        ★ サイト文言の編集はここ
```

---

© CREATIVESITE
