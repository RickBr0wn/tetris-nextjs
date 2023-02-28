import { FC } from 'react'
import Cell from './cell'

type StageProps = {
	stage: string
}

const Stage: FC<StageProps> = ({ stage }): JSX.Element => {
	return (
		<h1>
			<Cell type='' />
		</h1>
	)
}

export default Stage

// Path: pages/components/stage.tsx
// Created at: 12:43:35 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
