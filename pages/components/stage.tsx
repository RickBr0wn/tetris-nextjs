import { FC } from 'react'
import Cell from './cell'

import log from './log'
import { TetrominoKeys } from '../tetrominoes'
import { StyledStage } from './styled-compoenents/styled-stage'

type StageProps = {
	stage: [TetrominoKeys, string][][]
}

const Stage: FC<StageProps> = ({ stage }): JSX.Element => {
	return (
		<StyledStage width={stage[0].length} height={stage.length}>
			{stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
		</StyledStage>
	)
}

export default Stage

// Path: pages/components/stage.tsx
// Created at: 12:43:35 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
