import { FC } from 'react'
import { StyledButton } from './styled-compoenents/styled-button'

type Props = {
	callback: () => void
}

const StartButton: FC<Props> = ({ callback }): JSX.Element => {
	return <StyledButton>START GAME</StyledButton>
}

export default StartButton

// Path: pages/components/start-button.tsx
// Created at: 12:43:27 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
