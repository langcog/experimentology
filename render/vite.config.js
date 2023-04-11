import preact from '@preact/preset-vite'
import ssr    from 'vite-plugin-ssr/plugin'

export default {
	publicDir: './r',

	plugins : [
		preact(),
		ssr({ prerender: { noExtraDir: true } }),
	],

	css : {
		devSourcemap : true,
	},
}
