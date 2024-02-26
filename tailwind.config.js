/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			mobile: '575.5px',
			tablet: '768px',
			laptop: '992px',
			desktop: '1250px',
		},
		colors: {
			'variant-one': '#ea2178',
			'variant-one-light': '#f2cddd',
			'variant-two': '#121212',
			'variant-two-light': 'rgba(224, 224, 224, 0.58)',
			white: '#ffffff',
			black: '#000000',
			'rgba-white-0.4': 'rgba(255,255,255,.4)',
		},
		extend: {
			backgroundImage: {},
			spacing: {
				1250: '80rem',
				'98%': '98%',
			},
			translate: {
				n50: '-50%',
			},
		},
	},
	plugins: [],
};
