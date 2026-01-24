import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GameStateService } from './game-state.service';
import { Direction } from './types';

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
	handleMove(
		@MessageBody()
		data: {
			dx: number;
			dz: number;
			facing: Direction;
		},
	) {
        console.log(`Chegou ${data.dx},${data.dz}`)
		const result = this.gameState.updatePlayer(
			data.dx,
			data.dz,
			data.facing,
		);

		// envia estado atualizado para todos
		this.server.emit('game:state', this.gameState.getState());

		return result;
	}

	@SubscribeMessage('player:spawn')
	handleSpawn(
		@MessageBody()
		data: {},
	) {
		this.server.emit('game:state', this.gameState.getState());
	}
}
