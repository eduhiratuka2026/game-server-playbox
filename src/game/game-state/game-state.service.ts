import { Injectable } from '@nestjs/common';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class GameStateService {
	private state = {
		player: {
			x: 0,
			z: 0,
			facing: 'front',
		},
	};

	getState() {
		return this.state;
	}

	updatePlayer(data: UpdatePlayerDto) {
		this.state.player = {
			...this.state.player,
			...data,
		};

		return this.state.player;
	}
}
