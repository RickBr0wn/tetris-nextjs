import { FC } from 'react'
import { StyledCell } from './styled-compoenents/styled-cell'
import { TETROMINOES, TetrominoKeys } from '../tetrominoes'

type CellProps = {
	type: TetrominoKeys
}

const Cell: FC<CellProps> = ({ type }): JSX.Element => {
	return <StyledCell type={type} color={TETROMINOES[type].color} />
}

export default Cell

// Path: pages/components/cell.tsx
// Created at: 12:42:46 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
