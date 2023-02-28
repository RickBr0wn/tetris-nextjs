import { randomTetromino } from './../tetrominoes/index'
import { useState } from 'react'

export const usePlayer = () => {
	const [player, setPlayer] = useState({
		position: { x: 0, y: 0 },
		tetromino: randomTetromino().shape,
		collied: false
	})

	return [player]
}
