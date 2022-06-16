/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	safelist: [
		'text-xs',
		'text-sm',
		'text-base',
		'text-lg',
		'text-xl',
		'text-2xl',
		'text-3xl',
		'text-4xl',
		'text-5xl',
		'text-6xl',
	],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			// Main Colors
			primary: '',
			secondary: '',
			specials: '',

			// background Colors
			'primary-background': '',
			'secondary-secondary': '',

			//  Texts
			'primary-text': '',
			'secondary-text': '',
			'placeholder-text': '',

			// Sections
			border: '',
			transparent: '',

			// Sementics
			error: '',
			info: '',
			success: '',
			warning: '',
		},
	},
	plugins: [],
};
