import React, { useState } from 'react'

export const Counter = () => {
	const [state, setState] = useState(0)

	const increase = () => {
		setState(state + 1)
	}

	const decrease = () => {
		setState(state - 1)
	}

	return (
		<div>
			<h1>
				Contador <span>{state}</span>
			</h1>
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
		</div>
	)
}
