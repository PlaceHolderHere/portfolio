/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'page-color': '#E8EBFF',
				'dominant-color': '#6A67CE',
				'accent-color': '#2C3E50',
				'button-color': '#6DBAA1',	
				'button-hover-color': '#67ceb5',
			}
		},
	},
	plugins: [],
}
