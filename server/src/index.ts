import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { GameRoom } from './rooms/GameRoom';

const PORT = Number(process.env.PORT ?? 2567);

const app = express();
app.use(cors());
app.use(express.json());
// Colyseus monitor (dev only) — http://localhost:2567/colyseus
app.use('/colyseus', monitor());

const httpServer = createServer(app);

const gameServer = new Server({ server: httpServer });
gameServer.define('game_room', GameRoom);

gameServer.listen(PORT).then(() => {
  console.log(`[2dFps] Colyseus server running on ws://localhost:${PORT}`);
  console.log(`[2dFps] Monitor: http://localhost:${PORT}/colyseus`);
});
