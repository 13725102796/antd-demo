import React from 'react';
// 类型检测
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
	const columns = [{
		title: 'id',
		dataIndex: 'id'
	}, {
		title: 'Name',
		dataIndex: 'name',
	}, {
		title: 'Action',
		render: (text, record) => {
			return ( 
				<Popconfirm title="Delete?" onconfirm={() => onDelete(record.id)}>
					<Button type="danger" size="small" >Delete</Button>
				</Popconfirm>
			);
		}
	}];
	return (
		<Table
			dataSource={products}
			columns={columns}
		/>
	)
};

// 这里检测 onDelete  products 
// 使用 `isRequired' 链接上述任何一个，以确保在没有提供 prop 的情况下显示警告。
ProductList.PropTypes = {
	onDelete: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
}

export default ProductList;