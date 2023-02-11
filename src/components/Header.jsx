import React from 'react';

const Header = ({ category, title, className }) => (
	<div className='mb-10'>
		<p className='text-gray-400'>{category}</p>
		<p className={`text-3xl font-extrabold tracking-tight ${className}`}>
			{title}
		</p>
	</div>
);

export default Header;
