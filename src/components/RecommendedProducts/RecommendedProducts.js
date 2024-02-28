import React from 'react';
import RecProductCard from './components/RecProductCard';

const RecommendedProducts = ({ products }) => {
	return (
		<section className='max-w-1250 mx-auto py-5 px-5 tablet:px-0'>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl '>Reccomended Products</h2>
			</div>

			<div className='container flex flex-col tablet:flex-row basis-1/5 w-full mx-auto justify-between'>
				{products.slice(0, 5).map((i, k) => (
					<RecProductCard
						image={i.image}
						name={i.name}
						purpose={i.purpose}
						price={i.price}
						key={k}
					/>
				))}
			</div>
		</section>
	);
};

export default RecommendedProducts;
