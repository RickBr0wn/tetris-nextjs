import { FC } from 'react'
import { StyledDisplay } from './styled-compoenents/styled-display'

type DisplayProps = {
	gameOver: boolean
	text: string
}

const Display: FC<DisplayProps> = ({ gameOver, text }): JSX.Element => {
	return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
}

export default Display

// Path: pages/components/display.tsx
// Created at: 12:42:59 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
