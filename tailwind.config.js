/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  libre: ['"Libre Baskerville"', 'serif'],
		  inter: ['"Inter"', 'sans-serif'],
		  cinzel: ['"Cinzel"', 'serif'],
		},
		colors: {
		  'primary': '#fffaf2',
		  'primary-dark': '#F0EBE3',
		  'secondary-light': '#9e3e2c',
		  'secondary': '#781e0e',
		  'tertiary': '#333333',
		},
	  },
	},
  }