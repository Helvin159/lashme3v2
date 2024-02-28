import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';

const PopularTreatments = ({ popularTreatments }) => {
	return (
		<section className='max-w-1250 mx-auto py-5 px-5 tablet:px-0 '>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl'>Popular Treatments</h2>
			</div>
			<div className='container flex flex-col tablet:flex-row basis-1/2 justify-evenly mx-auto'>
				{popularTreatments.map((i, k) => {
					return <PopularTreatmentsCard treatment={i} key={k} />;
				})}
			</div>
		</section>
	);
};

export default PopularTreatments;
