import React from 'react';

const PopularTreatmentsCard = ({ treatment }) => {
	const { one, two, three } = treatment;
	return (
		<div className='flex'>
			<div className='flex pr-1'>
				<img src={one} alt='' />
			</div>
			<div className='flex flex-col p-0 justify-between align-baseline  px-2'>
				<div className='h-3/6'>
					<img
						src={two}
						className='object-cover object-center w-full h-98% rounded-xl'
						alt=''
					/>
				</div>
				<div className='h-3/6'>
					<img
						src={three}
						className='object-cover object-center w-full h-98% rounded-xl'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularTreatmentsCard;
