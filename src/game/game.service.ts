import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
	ping() {
		return {
			status: 'ok',
			time: Date.now(),
		};
	}
}
