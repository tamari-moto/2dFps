# デプロイ手順

## 構成概要

| 役割 | ホスト | URL |
|------|--------|-----|
| クライアント (React SPA) | GitHub Pages | https://tamari-moto.github.io/2dFps/ |
| サーバー (Colyseus WebSocket) | Railway | wss://xxx.railway.app |

Railway のリバースプロキシが TLS (`wss://`) を終端し、コンテナ内は通常の `ws://` でリッスンします。

---

## Railway サーバーのデプロイ

### 初回セットアップ（Railway Dashboard）

1. [railway.app](https://railway.app) にログイン
2. **New Project** → **Deploy from GitHub repo** でリポジトリを選択
3. サービス設定で **Root Directory** を `server` に変更
4. デプロイが自動で始まる → ビルドログ・起動ログで確認
5. **Settings → Domains** から Railway URL を取得（例: `2dfps.up.railway.app`）

### 自動デプロイ（以降）

`main` ブランチへ push すると Railway が自動ビルド・デプロイします。

### ビルドコマンド（`server/railway.toml` で定義済み）

```
npm install && npm run build   # TypeScript → dist/ へコンパイル
npm start                      # node dist/index.js
```

### 環境変数

| 変数 | 設定場所 | 説明 |
|------|---------|------|
| `PORT` | Railway 自動注入 | サーバーのリッスンポート（設定不要） |
| `NODE_ENV` | Railway Dashboard（任意） | `production` |

### ヘルスチェック確認

Railway URL の `/` にアクセスして以下が返れば正常:

```json
{ "status": "ok", "service": "2dFps server" }
```

---

## クライアントのデプロイ（GitHub Pages）

### 初回 or Railway URL 変更時

1. `.env.production` を開き `VITE_SERVER_URL` を Railway の実際の URL に更新する

   ```
   VITE_SERVER_URL=wss://2dfps.up.railway.app
   ```

2. ビルド & デプロイ:

   ```bash
   npm run deploy
   ```

   → `dist/` へビルド後、`gh-pages` ブランチに自動プッシュされます。

### 通常のクライアント更新

コード変更後に `npm run deploy` を実行するだけです（`.env.production` の変更は不要）。

---

## ローカル開発

```bash
# サーバー起動 (ws://localhost:2567)
cd server && npm run dev

# クライアント起動 (http://localhost:5173/2dFps/)
npm run dev
```

ローカルでは `VITE_SERVER_URL` が未設定のため、ロビーのデフォルト値 `ws://localhost:2567` が使われます。

---

## トラブルシューティング

| 症状 | 確認事項 |
|------|---------|
| Railway でビルドが失敗 | Root Directory が `server` になっているか確認 |
| 接続エラー（`wss://` ではない） | `.env.production` の URL が `wss://` で始まっているか確認 |
| 初回接続が遅い | Railway 無料プランはアイドル時スリープ。数秒待つと起動する |
| GitHub Pages に反映されない | `npm run deploy` 後、数分待ってキャッシュクリア |
