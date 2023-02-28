import { FC, useState } from 'react'
import Stage from './stage'
import Display from './display'
import StartButton from './start-button'
import { createStage } from '../helpers/gameHelper'
import log from './log'
import { StyledTetrisWrapper } from './styled-compoenents/styled-tetris-wrapper'
import { StyledTetris } from './styled-compoenents/styled-tetris'
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

type Props = {}

const Tetris: FC<Props> = (): JSX.Element => {
	const [dropTime, setDropTime] = useState(null)
	const [gameOver, setGameOver] = useState(false)

	const [player] = usePlayer()
	const [stage, setStage] = useStage()

	log('re-render', 're-render', 16)

	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text='Game Over' />
					) : (
						<div>
							<Display gameOver={false} text='Score: ' />
							<Display gameOver={false} text='Rows: ' />
							<Display gameOver={false} text='Level: ' />{' '}
						</div>
					)}
					<StartButton callback={() => {}} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	)
}

export default Tetris

// Path: pages/components/tetris.tsx
// Created at: 12:43:31 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
