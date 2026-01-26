# Prototype Games 🎮

ブラウザゲームのコレクションサイト

## 特徴

- 📱 モバイルフレンドリーなレスポンシブデザイン
- 🎨 モダンでシンプルなUI
- 🖼️ ゲーム画像表示対応
- ✨ 簡単なゲーム追加・管理システム

## ゲームの追加方法

### 1. ゲームファイルの配置

`games/` ディレクトリに新しいゲームフォルダを作成します：

```
games/
  └── your-game-name/
      ├── index.html
      ├── screenshot.png (オプション)
      └── ... (その他のゲームファイル)
```

### 2. games.json の更新

`games.json` ファイルに新しいゲーム情報を追加します：

```json
{
  "id": "unique-game-id",
  "title": "ゲームのタイトル",
  "description": "ゲームの説明（短めに）",
  "icon": "🎮",
  "image": "games/your-game-name/screenshot.png",
  "url": "games/your-game-name/index.html",
  "tags": ["ジャンル1", "ジャンル2"]
}
```

### フィールドの説明

- `id`: ゲームの一意な識別子
- `title`: ゲームのタイトル
- `description`: ゲームの簡単な説明
- `icon`: 画像がない場合に表示される絵文字
- `image`: ゲームのスクリーンショット画像のパス（省略可）
- `url`: ゲームのHTMLファイルへのパス
- `tags`: ゲームのジャンルや特徴を表すタグの配列

## ローカルでの実行

このサイトを動作させるには、ローカルサーバーが必要です：

### Python を使う場合：
```bash
python -m http.server 8000
```

### Node.js (http-server) を使う場合：
```bash
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセスします。

## ライセンス

MIT License