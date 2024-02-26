import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
	return (
		<header className='w-100 px-5'>
			<div className='flex flex-row justify-between py-7 px-14'>
				<div className='flex'>
					<div className='mr-14 text-2xl'>Logo</div>
					<div>
						<ul className='p-0 py-1.5 list-none'>
							<li className='inline-block mr-8'>
								<Link>Home</Link>
							</li>
							<li className='inline-block mr-8'>
								<Link>Book</Link>
							</li>
							<li className='inline-block'>
								<Link>Calendar</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='flex'>
					<Button variant={'light'}>Book Now</Button>
					<Button variant={'pink'}>Login</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
