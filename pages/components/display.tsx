import { FC } from 'react'

type DisplayProps = {
	gameOver: () => void
	text: string
}

const Display: FC<DisplayProps> = (): JSX.Element => {
	return <h1>Display</h1>
}

export default Display

// Path: pages/components/display.tsx
// Created at: 12:42:59 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
