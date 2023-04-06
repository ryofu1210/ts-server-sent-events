// server.ts

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use((_req: Request, res: Response, next: () => void) => {
  // 全てのオリジンからのアクセスを許可
  res.setHeader("Access-Control-Allow-Origin", "*");

  // 必要に応じて、他のCORSヘッダーを設定
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.get("/events", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  setInterval(() => {
    console.log("Sending event");
    res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
