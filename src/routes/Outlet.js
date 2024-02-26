import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router';
import Header from '../components/Header';

const Outlet = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Layout />
			</main>
		</Fragment>
	);
};

export default Outlet;
