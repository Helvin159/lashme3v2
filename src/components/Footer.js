import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full'>
			<div className='container flex flex-col tablet:flex-row basis-1/2 justify-between mx-auto py-8'>
				<div className='flex flex-col justify-between'>
					<div className='container'>
						<h4>LashBoutique</h4>
						<p>Your trusted brow and lash expert since 2019.</p>
					</div>
					<div className='container'>
						<p>
							LashBoutique <span>&#9400;</span>
						</p>
					</div>
				</div>
				<div>
					<div className='container'>
						<h4>FAQ</h4>
					</div>
					<ul className='px-0 py-1.5 list-none'>
						<li>Book an Appointment</li>
						<li>Contact Us</li>
						<li>How-to Guides</li>
						<li>Find a store</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
