import '/src/global.scss'

import TOC         from './components/TOC'
import Box         from './components/Box'
import { getPage } from 'vite-plugin-ssr/client'
import { hydrate } from 'preact'

const render = async () => {
	const { islands } = await getPage();

	islands.forEach(({ id, name, props }) => {
		const { [ name ]: Component } = { TOC, Box };
		const container = document.getElementById(id);

		hydrate(<Component { ... props }/>, container);

		// document.querySelectorAll('a[href]')
		// .forEach(a => {
		// 	a.href = a.href.replace(/^(\w+-([^-].+))\.html#\2$/, '$1');
		// 	console.log(location);
		// 	// console.log(a);
		// 	console.log(
		// 		a.href
		// 		.replace(/^(\w+-([^-].+))\.html#\2$/, '$1')
		// 	);
		// });
	});
}

render();