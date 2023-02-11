import React from 'react';

import { Header, LineChart } from '../../components';
import { useStateContext } from '../../context/ContextProvider';

const Line = () => {
  const { currentMode } = useStateContext();

	return (
		<div className='m-4 md;m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header
				category='Chart'
				title='Inflation Rate'
				className={`${
					currentMode === 'Dark' ? 'text-[#F7F7F7]' : 'text-slate-900'
				}`}
			/>
			<div className='w-full'>
				<LineChart />
			</div>
		</div>
	);
};

export default Line;
