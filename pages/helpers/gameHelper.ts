import { TetrominoKeys } from './../tetrominoes/index'
export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export type _Stage = [TetrominoKeys, string][][]

export const createStage = (): _Stage => {
	const stage: _Stage = new Array(STAGE_HEIGHT)
		.fill([0, 'clear'])
		.map(() => new Array(STAGE_WIDTH).fill([0, 'clear']))

	return stage
}
