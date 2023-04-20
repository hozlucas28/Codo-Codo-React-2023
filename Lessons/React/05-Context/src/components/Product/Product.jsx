import { useContext } from 'react'

import { ShopContext } from '../../contexts/ShopContext.jsx'

const Product = ({ title, description, price }) => {
	const { products, setProducts } = useContext(ShopContext)

	const handleClick = ({ targer }) => {
		const newProduct = { title, description, price }
		setProducts([...products, newProduct])
	}

	return (
		<article>
			<header>
				<h2>{title}</h2>
			</header>
			<p>{description}</p>
			<footer>{price}</footer>
			<button onClick={handleClick}>Add</button>
		</article>
	)
}

export default Product
