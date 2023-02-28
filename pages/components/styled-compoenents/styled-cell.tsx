import { TetrominoKeys } from '@/pages/tetrominoes'
import styled from 'styled-components'

export const StyledCell = styled.div<{ type: TetrominoKeys }>`
	width: auto;
	background: rgba(${props => props.color}, 0.8);
	border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
	border-bottom-color: rgba(${props => props.color}, 0.1);
	border-right-color: rgba(${props => props.color}, 0.1);
	border-top-color: rgba(${props => props.color}, 0.1);
	border-left-color: rgba(${props => props.color}, 0.3);
`

// Path: pages/components/styled-compoenents/styled-cell.tsx
// Created at: 14:37:16 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
