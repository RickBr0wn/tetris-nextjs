import { FC } from 'react'

type Props = {
	callback: () => void
}

const StartButton: FC<Props> = ({ callback }): JSX.Element => {
	return <h1>Start Game</h1>
}

export default StartButton

// Path: pages/components/start-button.tsx
// Created at: 12:43:27 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
