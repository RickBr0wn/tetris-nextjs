import styled from 'styled-components'

export const StyledDisplay = styled.div<{ gameOver: boolean }>`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 0 20px 0;
	padding: 20px;
	border: 4px solid #333;
	min-height: 20px;
	width: 100%;
	border-radius: 20px;
	color: ${props => (props.gameOver ? 'red' : '#999')};
	background: #000;
	font-size: 0.8rem;
`

// Path: pages/components/styled-compoenents/styled-display.tsx
// Created at: 15:21:27 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
