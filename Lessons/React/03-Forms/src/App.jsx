import { useState } from 'react'

import { container } from './App.module.css'

function App() {
	const [form, setForm] = useState({
		user: '',
		email: '',
	})
	console.log(form)

	const handleChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value,
		})
	}

	return (
		<form
			className={container}
			onSubmit={(e) => {
				e.preventDefault()
			}}
		>
			<input type="text" name="user" onChange={handleChange} />
			<input type="email" name="email" onChange={handleChange} />
			<button type="submit">Enviar</button>
		</form>
	)
}

export default App
