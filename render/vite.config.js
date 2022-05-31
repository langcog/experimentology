import preact from '@preact/preset-vite'
import reload from 'vite-plugin-full-reload'
import ssr    from 'vite-plugin-ssr/plugin'

export default {
	plugins : [
		preact(),
		reload([ 'src/**' ]),
		ssr(),
	],

	css : {
		devSourcemap : true,
	},
}