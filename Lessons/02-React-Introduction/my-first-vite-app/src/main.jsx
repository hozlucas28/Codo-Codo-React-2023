import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Lógica
const a = '¡Hola ',
	b = 'Mundo!';

// Componente
function MyComponent() {
	return (
		// Fragment (fragmento)
		<>
			<h1>{a + b}</h1>
			<h2>Título de tipo h2</h2>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyComponent></MyComponent>
	</React.StrictMode>
);
