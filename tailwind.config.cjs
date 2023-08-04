import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				'primary1': '#01080E',
				'primary2': '#011627',
				'primary3': '#011221',
				'secondary1': '#607B96',
				'secondary2': '#3C9D93',
				'secondary3': '#4D5BCE',
				'secondary4': '#FFFFFF',
				'accent1': '#FEA55F',
				'accent2': '#43D9AD',
				'accent3': '#E99287',
				'accent4': '#C98BDF',
				'line': '#1E2D3D',
				'gradient1': '#4D5BCE',
				'gradient2': '#43D9AD',
			},
			fontFamily: {
				'fira-code' : ['Fira Code'],
			},
		},
	},
	plugins: [forms,typography,...skeleton()],
}
