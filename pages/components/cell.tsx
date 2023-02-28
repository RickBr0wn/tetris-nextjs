import { FC } from 'react'

type CellProps = {
	type: string
}

const Cell: FC<CellProps> = ({ type }): JSX.Element => {
	return <h1>Cell</h1>
}

export default Cell

// Path: pages/components/cell.tsx
// Created at: 12:42:46 - 28/02/2023
// Language: Typescript
// Framework: React/Next.js
