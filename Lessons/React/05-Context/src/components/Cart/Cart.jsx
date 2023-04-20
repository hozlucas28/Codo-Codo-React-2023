import { useContext } from 'react'

import { ShopContext } from '../../contexts/ShopContext.jsx'

const Cart = () => {
	const { products } = useContext(ShopContext)
	console.log(products)

	return (
		<div>
			<button onClick={() => console.log(products)}>Cart</button>
			<span>{products.length}</span>
		</div>
	)
}

export default Cart
