import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { GameStateService } from './game-state.service';

@Module({
	providers: [GameGateway, GameStateService],
})
export class GameModule {}
