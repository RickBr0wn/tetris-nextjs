import { createStage } from './../helpers/gameHelper'
import { randomTetromino } from './../tetrominoes/index'
import { useState } from 'react'

export const useStage = () => {
	const [stage, setStage] = useState(createStage())

	return [stage]
}
