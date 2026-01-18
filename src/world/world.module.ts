import { Module } from '@nestjs/common';
import { WorldStateService } from './world-state.service';
import { WorldController } from './world.controller';

@Module({
	controllers: [WorldController],
	providers: [WorldStateService],
})
export class WorldModule {}
