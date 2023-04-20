import PRODUCTS from '../constants/PRODUCTS.js'

import GeneralLayout from '../layouts/GeneralLayout.jsx'
import Product from '../components/Product/Product.jsx'

const ShoppingView = () => {
	return (
		<GeneralLayout>
			<div>
				{PRODUCTS.map((product) => {
					return (
						<Product
							key={product.title}
							title={product.title}
							description={product.description}
							price={product.price}
						/>
					)
				})}
			</div>
		</GeneralLayout>
	)
}

export default ShoppingView
