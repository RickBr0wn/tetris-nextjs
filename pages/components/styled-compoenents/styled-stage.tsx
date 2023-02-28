import styled from 'styled-components'

export const StyledStage = styled.div<{ height: number; width: number }>`
	display: grid;
	grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}, 1fr));
	grid-template-columns: repeat(${props => props.width}, 1fr);
	grid-gap: 1px;
	border: 2px solid #333;
	width: 100%;
	max-width: 60vw;
	height: 80vh;
	background: #111;
`

// Path: pages/components/styled-compoenents/styled-stage.tsx
// Created at: 14:46:30 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
