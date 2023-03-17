import React from 'react'

const Card = ({ title, description, footer }) => {
	return (
		<div>
			<h1>{title}</h1>
			<h2>{description}</h2>
			<h4>{footer}</h4>
		</div>
	)
}

export default Card
