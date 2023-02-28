export type _Tetromino = {
	shape: Array<string | number>[]
	color: string
}

export type _Tetrominos = {
	0: _Tetromino
	I: _Tetromino
	J: _Tetromino
	L: _Tetromino
	O: _Tetromino
	S: _Tetromino
	T: _Tetromino
	Z: _Tetromino
}

export type TetrominoKeys = 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z'

export const TETROMINOES: _Tetrominos = {
	0: { shape: [[0]], color: '0, 0, 0' },
	I: {
		shape: [
			[0, 'I', 0, 0],
			[0, 'I', 0, 0],
			[0, 'I', 0, 0],
			[0, 'I', 0, 0]
		],
		color: '80, 227, 230'
	},
	J: {
		shape: [
			[0, 'J', 0],
			[0, 'J', 0],
			[0, 'J', 0],
			['J', 'J', 0]
		],
		color: '36, 95, 223'
	},
	L: {
		shape: [
			[0, 'L', 0],
			[0, 'L', 0],
			[0, 'L', 0],
			[0, 'L', 'L']
		],
		color: '223, 173, 36'
	},
	O: {
		shape: [
			['O', 'O'],
			['O', 'O']
		],
		color: '223, 217, 36'
	},
	S: {
		shape: [
			[0, 'S', 'S'],
			['S', 'S', 0],
			[0, 0, 0]
		],
		color: '48, 211, 56'
	},
	Z: {
		shape: [
			['Z', 'Z', 0],
			[0, 'Z', 'Z'],
			[0, 0, 0]
		],
		color: '227, 78, 78'
	},
	T: {
		shape: [
			[0, 0, 0],
			['T', 'T', 'T'],
			[0, 'T', 0]
		],
		color: '132, 61, 198'
	}
}

export const randomTetromino = (): _Tetromino =>
	TETROMINOES['IJLOSTZ'[Math.floor(Math.random() * 'IJLOSTZ'.length)] as TetrominoKeys]
