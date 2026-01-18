import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameStateService } from './game-state.service';

@Controller('game')
export class GameController {
	constructor(private readonly gameState: GameStateService) {}

	@Get('state')
	getState() {
		return this.gameState.getState();
	}
}
