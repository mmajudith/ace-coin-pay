/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			ss: '480px',
			xs: '330px',
			...defaultTheme.screens,
		},
		extend: {
			screens: {
				md: '821px',
			},
			colors: {
				'very-dark-blue': '#17254c',
				blue: '#035fff',
				'dark-blue': '#05365c',
				gray: '#8e96a3',
				'input-border': 'rgb(224 224 224 / 50%)',
				'active-border': '#0077B6',
			},
			fontFamily: {
				sans: ['Poppins'],
			},
		},
	},
	plugins: [],
};
