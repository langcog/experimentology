import { routes } from '/contents.json'

export default ({ url }) => routes.includes(url
	.replace(/\.html$/, '')
	.replace(/index$/,  '')
)