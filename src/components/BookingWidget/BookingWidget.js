import React from 'react';

const BookingWidget = () => {
	return (
		<div className='container w-3/4 bg-light-gray rounded-3xl translate-y-n50 py-8 px-0 mx-auto my-0 hidden tablet:block'>
			<div className='container flex flex-row justify-evenly items-center mx-auto'>
				<div>
					<h4>Service</h4>
					<input
						className='bg-light-gray'
						placeholder='What treatment are you looking for?'
					/>
				</div>
				<div>
					<h4>Date &amp; Time</h4>
					<input className='bg-light-gray' placeholder='Select a date' />
				</div>
				<div>
					<h4>Duration</h4>
					<input className='bg-light-gray' placeholder='Select duration' />
				</div>
				<div>
					<h4>Technician</h4>
					<input className='bg-light-gray' placeholder='Select a technician' />
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
