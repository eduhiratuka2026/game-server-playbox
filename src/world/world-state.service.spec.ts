import { Test, TestingModule } from '@nestjs/testing';
import { WorldStateService } from './world-state.service';

describe('WorldStateService', () => {
	let service: WorldStateService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [WorldStateService],
		}).compile();

		service = module.get<WorldStateService>(WorldStateService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
