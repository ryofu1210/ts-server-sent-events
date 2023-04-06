# 概要
Server-Sent Events(SSE)のサンプルコード

SSEによってブラウザ上の時刻が一定時刻ごとに更新される

./public/sse-image.pngを表示
![デモイメージ](./public/sse-image.png "サンプル")

# 手順
```
npm install

# サーバ起動
npm run dev

# フロントエンドのjsファイルをコンパイル
npx tsc src/client.ts

# index.htmlをブラウザで開く
open src/index.html
```
