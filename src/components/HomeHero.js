import React from 'react';

import heroImg from '../assets/png/Image.png';

const HomeHero = () => {
	return (
		<section className='contianer relative px-12'>
			<img
				src={heroImg}
				className=' w-100  mx-auto max-h-72 rounded-4xl object-cover object-center'
				alt='hero'
			/>
			<div className='bg-rgba-white-0.4 backdrop-blur-sm rounded-2xl h-72 absolute top-0 left-0 right-0 bottom-0 m-0'>
				<div className='absolute left-1/2 top-1/2 translate-y-n50 translate-x-n50 text-center '>
					<h1 className='text-3xl'>
						Enhance your natural beauty with Lash Me E.
					</h1>
					<p className='text-xl'>
						Discover a world of stunning lashes and brows!
					</p>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
