import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';

import imgOne from '../../assets/png/image-1.png';
import imgTwo from '../../assets/png/image-2.png';
import imgThree from '../../assets/png/image-3.png';
import imgFour from '../../assets/png/image-4.png';
import imgFive from '../../assets/png/image-5.png';
import imgSix from '../../assets/png/image-6.png';

const PopularTreatments = () => {
	const tempPopTreats = [
		{
			one: imgOne,
			two: imgTwo,
			three: imgThree,
		},
		{
			one: imgFour,
			two: imgFive,
			three: imgSix,
		},
	];
	return (
		<section className='py-10 mx-auto max-w-1250'>
			<div className='container'>
				<h2 className='text-xl py-4'>Popular Treatments</h2>
			</div>
			<div className='container'>
				<div className='flex flex-row justify-evenly'>
					{tempPopTreats.map((i, k) => {
						return <PopularTreatmentsCard treatment={i} key={k} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default PopularTreatments;
