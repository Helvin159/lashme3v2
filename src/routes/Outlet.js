import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

const Outlet = () => {
	return (
		<Fragment>
			<Header />
			<MobileMenu />
			<main>
				<Layout />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Outlet;
