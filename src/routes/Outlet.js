import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router';

const Outlet = () => {
	return (
		<Fragment>
			<main>
				<Layout />
			</main>
		</Fragment>
	);
};

export default Outlet;
