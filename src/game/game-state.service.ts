import { Injectable } from '@nestjs/common';
import { Direction, Position } from './types';
import { WorldStateService } from 'src/world/world-state.service';

@Injectable()
export class GameStateService {
	constructor(private readonly world: WorldStateService) {}

	private state = {
		player: {
			position: { x: 0, z: 0 } as Position,
			facing: 'front' as Direction,
		},
	};
	private PLAYER_SPEED = 0.05;

	updatePlayer(dx: number, dz: number, facing: Direction) {
		const target: Position = {
			x: this.state.player.position.x + dx,
			z: this.state.player.position.z + dz,
		};

		if (!this.world.canMoveTo(target)) {
			return { moved: false };
		}

		this.state.player.position = target;
		this.state.player.facing = facing;

		return { moved: true };
	}

	getState() {
		return {
			player: this.state.player,
			objects: this.world.getObjects(),
		};
	}
}
