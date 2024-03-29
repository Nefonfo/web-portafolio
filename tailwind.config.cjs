/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Lato', defaultTheme.fontFamily.sans],
        		'serif': ['Ubuntu Mono', defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [],
}
