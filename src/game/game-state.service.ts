import { Injectable } from '@nestjs/common';

@Injectable()
export class GameStateService {
	private state = {
		player: {
			x: 0,
			z: 0,
			facing: 'front',
		},
	};

	updatePlayer(data: any) {
		const speed = 0.05;

		this.state.player.x += data.dx * speed;
		this.state.player.z += data.dz * speed;
		this.state.player.facing = data.facing;

		const limit = 10 - 0.5;
		this.state.player.x = Math.max(
			-limit,
			Math.min(limit, this.state.player.x),
		);
		this.state.player.z = Math.max(
			-limit,
			Math.min(limit, this.state.player.z),
		);
	}

	getState() {
		return this.state;
	}
}
