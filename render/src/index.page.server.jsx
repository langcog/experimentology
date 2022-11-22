import TOC                       from './components/toc'
import Box                       from './components/box'
import library                   from 'preact'
import renderToString            from 'preact-render-to-string'
import parse, { domToReact }     from 'html-react-parser'
import { JSDOM }                 from 'jsdom'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'

const parseContents = html => {
	const { window: { document } } = new JSDOM(html);

	const book = [ '.title', '.subtitle' ]
	.map(selector => document.querySelector(selector).textContent)
	.join(': ');

	const parts = [ ... document.querySelectorAll('#TOC li') ]
	.reduce((parts, { firstChild: { textContent, href } }) => {
		const title = textContent.replace(/^\S+?\s/, '');

		if (! href) {
			parts.push({ part: title, chapters: [] });
		} else {
			href = href.replace(/\.html.*$/, '');
			parts.at(-1).chapters.push({ chapter: title, href });
		}

		return parts;
	}, []);

	return { book, parts };
}

const files = import.meta.glob('/r/*.html', { as: 'raw', eager: true });

const contents = parseContents(files['/r/index.html']);

const pages = Object.fromEntries([ '', '404', ... contents.parts
	.flatMap(({ chapters }) => chapters.map(({ href }) => href))
].map(path => {
	const route = `/${path}`;
	const file  = `/r/${path || 'index'}.html`;

	return [ route, files[file] ];
}));

const routes = Object.keys(pages);

export const passToClient = [ 'islands' ];

export const prerender = () => routes

export const onBeforeRender = ({ url }) => {
	const route = url.replace(/(index)?(\.html.*)?$/, '');
	const page  = pages[route];

	return { pageContext: { route, page } };
}

export const render = ({ route, page }) => {
	const islands = [];

	const island = node => {
		const { type: { name }, props } = node;
		const id = `island_${islands.length}`;

		islands.push({ id, name, props });

		return (
			<div id={ id }/>
		);
	}

	const box = node => {
		const [ , type ] = classes(node);
		const content    = renderToString(domToReact(node.children, { library }));

		return { type, content };
	}

	const classes = node => node.attribs?.class?.split(' ') ?? []
	const id      = node => node.attribs?.id

	const isBox      = node => classes(node).includes('box')
	const isLastRefs = node => id(node) == 'refs' && route == routes.at(-1)
	const isTOC      = node => id(node) == 'TOC'

	const replace = node => (
		isBox(node)      ? island(<Box { ... box(node) }/>) :
		isTOC(node)      ? island(<TOC { ... contents  }/>) :
		isLastRefs(node) ? <></>                            :
		null
	)

	const vdom         = parse(page, { library, replace });
	const html         = renderToString(vdom);
	const documentHtml = dangerouslySkipEscape('<!DOCTYPE html>' + html);

	return { documentHtml, pageContext: { islands } };
}
