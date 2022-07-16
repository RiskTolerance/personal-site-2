/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
			serif: ['Essonnes', 'serif']
		},
		extend: {
			colors: {
				appGrey: '#272727',
				appOrange: '#E0A926'
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			transitionProperty: {
				width: 'width'
			}
		}
	},
	plugins: []
};
