import React from 'react';

const BookingWidget = () => {
	return (
		<div className='container w-3/4 bg-light-gray rounded-3xl translate-y-n50 py-8 px-0 mx-auto my-0 hidden tablet:block'>
			<div className='container flex flex-row justify-evenly items-center mx-auto'>
				<div>
					<label htmlFor='treatmentName' className='block px-2'>
						Service
					</label>
					<input
						id='treatmentName'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='What treatment are you looking for?'
					/>
				</div>
				<div>
					<label htmlFor='date' className='block px-2'>
						Date &amp; Time
					</label>
					<input
						id='date'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='Select a date'
					/>
				</div>
				<div>
					<label htmlFor='duration' className='block px-2'>
						Duration
					</label>
					<input
						id='duration'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='Select duration'
					/>
				</div>
				<div>
					<label htmlFor='technician' className='block px-2'>
						Technician
					</label>
					<input
						id='technician'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='Select a technician'
					/>
				</div>
				<div className='relative'>
					<button className='bg-variant-one text-white rounded-lg py-3 px-5'>
						&#8594;
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingWidget;
