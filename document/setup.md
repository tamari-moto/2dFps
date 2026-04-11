# セットアップガイド

## 前提条件

| ツール | 推奨バージョン |
|--------|--------------|
| Node.js | 20.x 以上 |
| npm | 10.x 以上（Node.js に同梱） |
| Git | 任意 |

## 手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/tamari-moto/2dFps.git
cd 2dFps
```

### 2. フロントエンドの依存パッケージをインストール

プロジェクトルートで実行:

```bash
npm install
```

### 3. サーバーの依存パッケージをインストール

`server/` ディレクトリで実行:

```bash
cd server
npm install
```

### 4. サーバーをビルド・起動

```bash
# server/ ディレクトリで
npm run build   # TypeScript → dist/ にコンパイル
npm start       # ws://localhost:2567 で起動
```

### 5. フロントエンド開発サーバーを起動

プロジェクトルートに戻って実行:

```bash
cd ..
npm run dev     # http://localhost:5173/2dFps/
```

### 6. ブラウザで開く

```
http://localhost:5173/2dFps/
```

---

## 起動確認チェックリスト

- [ ] `[Server] listening on ws://localhost:2567` がコンソールに表示されている
- [ ] ブラウザで `http://localhost:5173/2dFps/` が開ける
- [ ] ロビー画面が表示される

---

## オンラインモードの動作確認

1. サーバーが起動していることを確認
2. ブラウザを **2タブ** 開き、両方で `http://localhost:5173/2dFps/` にアクセス
3. 両タブで「オンライン接続」→ サーバーURL `ws://localhost:2567` を入力して接続
4. 2人接続するとゲームが自動で開始される

---

## スクリプト一覧

### フロントエンド（プロジェクトルート）

| コマンド | 内容 |
|---------|------|
| `npm run dev` | 開発サーバー起動 (http://localhost:5173/2dFps/) |
| `npm run build` | TypeScript コンパイル + 本番ビルド |
| `npm run lint` | ESLint 実行 |
| `npm run deploy` | GitHub Pages へデプロイ |

### サーバー（`server/` ディレクトリ）

| コマンド | 内容 |
|---------|------|
| `npm install` | 依存パッケージのインストール |
| `npm run build` | TypeScript コンパイル（→ `dist/`） |
| `npm start` | ビルド済みサーバー起動 |
| `npm run dev` | ts-node で直接起動（ビルド不要・開発用） |

---

## トラブルシューティング

### `Error: listen EADDRINUSE: address already in use :::2567`

ポート 2567 が既に使用中です。既存のサーバープロセスを終了してから再起動してください。

```bash
# Windows
netstat -ano | findstr :2567
taskkill /PID <PID番号> /F

# macOS / Linux
lsof -ti:2567 | xargs kill
```

### `npm install` でエラーが出る

Node.js のバージョンを確認してください:

```bash
node -v   # v20.x 以上を推奨
npm -v
```

### サーバーに接続できない

- サーバーが起動しているか確認（`[Server] listening on ws://localhost:2567` が出ているか）
- ブラウザの接続先 URL が `ws://localhost:2567` になっているか確認
- ファイアウォールがポート 2567 をブロックしていないか確認

### `DEPRECATION WARNING` が出る

Colyseus 0.15.x の既知の警告です。動作には影響しません。

---

## バージョン固定に関する注意

- サーバーとクライアントは **必ず同じ Colyseus メジャー.マイナー** を使うこと
  - サーバー: `colyseus@0.15.x`
  - クライアント: `colyseus.js@0.15.x`
- サーバーの TypeScript は **5.4.x** を使用すること（5.8.x はデコレーター仕様変更で動作しない）
- `npm audit fix --force` は実行しないこと（Colyseus のバージョンが壊れる可能性がある）
