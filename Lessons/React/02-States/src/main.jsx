import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Counter } from './components/Counter.jsx'
import Users from './components/Users.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Counter /> */}
		<Users />
	</React.StrictMode>
)
