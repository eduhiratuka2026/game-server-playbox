import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { GameStateService } from './game-state.service';
import { GameController } from './game.controller';

@Module({
	controllers: [GameController],
	providers: [GameGateway, GameStateService],
})
export class GameModule {}
