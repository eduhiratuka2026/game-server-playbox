export type Direction = 'front' | 'back' | 'left' | 'right';

export interface Position {
	x: number;
	z: number;
}

export interface TilePosition {
	x: number;
	z: number;
}

export interface WorldObject {
	id: string;
	type: string;
	tiles: TilePosition[];
	blocking: boolean;
}
