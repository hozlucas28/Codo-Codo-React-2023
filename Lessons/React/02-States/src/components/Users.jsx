import React, { useState } from 'react'
import Card from './Card.jsx'

const Users = () => {
	const [user, setUser] = useState({
		name: 'Lucas Hoz',
		role: 'Desarrollador',
		email: 'lucashoz@gmail.com',
	})

	return (
		<div>
			<h1>Usuarios</h1>
			<hr />
			<Card title={user.name} description={user.role} footer={user.email} />
		</div>
	)
}

export default Users
