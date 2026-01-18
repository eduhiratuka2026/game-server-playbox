import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateService } from './game-state/game-state.service';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('game')
export class GameController {
	constructor(
		private readonly gameService: GameService,
		private readonly gameState: GameStateService,
	) {}

	@Get('state')
	getState() {
		return this.gameState.getState();
	}

	@Post('player')
	updatePlayer(@Body() body: UpdatePlayerDto) {
		return this.gameState.updatePlayer(body);
	}
}
