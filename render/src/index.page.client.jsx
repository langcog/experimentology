import '/src/global.scss'

import TOC         from './components/toc'
import Box         from './components/box'
import { hydrate } from 'preact'

export async function render({ islands }) {
	document.querySelectorAll('[island]').forEach((node, index) => {
		const { [ index ]: { name, props } } = islands;
		const { [ name ]: Island } = { TOC, Box };

		hydrate(<Island { ... props }/>, node);
	});

	document.querySelectorAll('a[href]').forEach(a => {
		if (new URL(a.href).origin == origin) {
			a.href = a.href
			.replace(location.origin, '')
			.replace(/^\/(\w+-([^-].+))\.html#\2$/, '$1');
		};
	});
}
