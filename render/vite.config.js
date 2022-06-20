import preact             from '@preact/preset-vite'
import reload             from 'vite-plugin-full-reload'
import ssr                from 'vite-plugin-ssr/plugin'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
	plugins : [
		viteStaticCopy({
			flatten : false,
			targets: [
				{
					src : [
						'r/experimentology_files',
						'r/images',
						'r/libs',
						'r/reference-keys.txt',
					],
					dest : '.',
				},
			],
		}),
		preact(),
		reload([ 'src/**' ]),
		ssr(),
	],

	css : {
		devSourcemap : true,
	},
}