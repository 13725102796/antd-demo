import React from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'dva';

const Products = ({ dispatch, products }) => {
	function handleDelete(id) {
		dispatch({
			type: 'products/delete',
			payload: id,
		})
	}
	return (
		<div>
			<h2>List of Products</h2>
			<ProductList onDelete={handleDelete} products={products} />
		</div>
  );
};


// export default Products;
export default connect(({products}) => ({
	products,
}))(Products)  