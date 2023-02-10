import React from 'react';
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Sort,
	Toolbar,
	Filter,
	Search,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Customers' category='Page' />
			<GridComponent
				id='gridcomp'
				dataSource={customersData}
        allowPaging
        toolbar={['Search', 'Delete']}
        editSettings={{ allowEditing: true, allowDeleting: true, mode: 'Dialog' }}
        allowSorting
        width='auto'
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[Sort, Filter, Page, Edit, Toolbar, Selection, Search]}
				/>
			</GridComponent>
		</div>
	);
};

export default Customers;
