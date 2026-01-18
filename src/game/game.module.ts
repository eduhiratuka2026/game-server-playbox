import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { GameStateService } from './game-state.service';
import { GameController } from './game.controller';
import { WorldStateService } from 'src/world/world-state.service';

@Module({
	controllers: [GameController],
	providers: [GameGateway, GameStateService, WorldStateService],
})
export class GameModule {}
