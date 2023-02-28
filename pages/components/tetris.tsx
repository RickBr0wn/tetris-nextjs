import { FC } from 'react'
import Stage from './stage'
import Display from './display'
import StartButton from './start-button'

type Props = {}

const Tetris: FC<Props> = (): JSX.Element => {
	return (
		<div>
			<Stage stage='' />
			<aside>
				<div>
					<Display gameOver={() => {}} text='Score: ' />
					<Display gameOver={() => {}} text='Rows: ' />
					<Display gameOver={() => {}} text='Level: ' />{' '}
				</div>
				<StartButton callback={() => {}} />
			</aside>
		</div>
	)
}

export default Tetris

// Path: pages/components/tetris.tsx
// Created at: 12:43:31 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
