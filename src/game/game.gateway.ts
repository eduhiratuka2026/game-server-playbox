import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GameStateService } from './game-state.service';

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class GameGateway {
	@WebSocketServer()
	server: Server;

	constructor(private readonly gameState: GameStateService) {}

	@SubscribeMessage('player:move')
	handlePlayerMove(@MessageBody() data: any) {
		this.gameState.updatePlayer(data);

		// envia estado atualizado para todos
		this.server.emit('game:state', this.gameState.getState());
	}
}
