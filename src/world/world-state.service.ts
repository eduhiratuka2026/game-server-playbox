import { Injectable } from '@nestjs/common';
import { Position, TilePosition, WorldObject } from 'src/game/types';

@Injectable()
export class WorldStateService {
	private readonly width = 20;
	private readonly height = 20;

	private readonly size = 20;

	private readonly objects: WorldObject[] = [
		{
			id: 'tree-1',
			type: 'tree',
			blocking: true,
			tiles: [{ x: 5, z: 5 }],
		},
		{
			id: 'rock-1',
			type: 'rock',
			blocking: true,
			tiles: [{ x: 10, z: 3 }],
		},
		{
			id: 'house-1',
			type: 'house',
			blocking: true,
			tiles: [
				{ x: 12, z: 12 },
				{ x: 13, z: 12 },
				{ x: 12, z: 13 },
				{ x: 13, z: 13 },
			],
		},
	];

	isInsideMap(tile: TilePosition): boolean {
		const halfWidth = this.width/2;
		const halfHeight = this.height/2;
		return (
			tile.x > -halfWidth &&
			tile.z > -halfHeight &&
			tile.x < halfWidth &&
			tile.z < halfHeight
		);
	}

	isTileBlocked(tile: TilePosition): boolean {
		for (const obj of this.objects) {
			if (!obj.blocking) continue;

			for (const t of obj.tiles) {
				if (t.x === tile.x && t.z === tile.z) {
					return true;
				}
			}
		}

		return false;
	}

	canMoveTo(tile: TilePosition): boolean {
		if (!this.isInsideMap(tile)) return false;
		if (this.isTileBlocked(tile)) return false;
		return true;
	}

	getObjects(): WorldObject[] {
		return this.objects;
	}
}
