import { ShopProvider } from './contexts/ShopContext.jsx'

import ShoppingView from './views/ShoppingView.jsx'

function App() {
	return (
		<ShopProvider>
			<ShoppingView />
		</ShopProvider>
	)
}

export default App
