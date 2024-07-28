/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily:{
				'goblin': ["Permanent Marker", 'cursive', 'sans-serif'],
				'custom': ["Poppins", 'sans-serif']
			}
		},
	},
	plugins: [],
}
