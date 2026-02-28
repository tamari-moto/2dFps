import express from 'express';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { GameRoom } from './rooms/GameRoom';

const PORT = Number(process.env.PORT) || 2567;

const app = express();
app.use(express.json());

// Health check
app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: '2dFps server' });
});

const httpServer = createServer(app);

const gameServer = new Server({ server: httpServer });
gameServer.define('game_room', GameRoom);

httpServer.listen(PORT, () => {
  console.log(`[Server] listening on ws://localhost:${PORT}`);
});
