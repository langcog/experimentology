import TOC                       from './components/toc'
import Box                       from './components/box'
import * as library              from 'preact'
import renderToString            from 'preact-render-to-string'
import parse, { domToReact, attributesToProps }     from 'html-react-parser'
import { JSDOM }                 from 'jsdom'
import { dangerouslySkipEscape } from 'vite-plugin-ssr/server'

const files = import.meta.glob('/r/*.html', { as: 'raw', eager: true });

const { window: { document } } = new JSDOM(files['/r/index.html']);

const name = [ '.title', '.subtitle' ]
.map(selector => document.querySelector(selector).textContent)
.join(': ');

const items = [ ... document.querySelectorAll('#TOC li') ]
.reduce((items, { firstChild: { textContent, href } }) => {
	const name = textContent.replace(/^\S+?\s/, '');

	if (! href) {
		items.push({ name, items: [] });
	} else {
		href = href.replace(/\.html.*$/, '');
		if (href.match(/^[0-9A-z]+-/)) { // only numbered chapters
			items.at(-1).items.push({ name, href });
		}
	}

	return items;
}, []);

const pages = Object.fromEntries([ '', '404', ... items
	.flatMap(({ items }) => items.map(({ href }) => href))
].map(path => {
	const route = `/${path}`;
	const file  = `/r/${path || 'index'}.html`;

	return [ route, files[file] ];
}));

const routes = Object.keys(pages);

export const passToClient = [ 'islands' ];

export const prerender = () => routes

export const onBeforeRender = ({ urlOriginal }) => {
	const route = urlOriginal.replace(/(index)?(\.html.*)?$/, '');
	const page  = pages[route];

	return { pageContext: { route, page } };
}

export const render = ({ route, page }) => {
	const islands = [];

	const island = node => {
		const { type: { name }, props } = node;

		islands.push({ name, props });

		return (
			<div island/>
		);
	}

	const id          = node => node.attribs?.id
	const className   = node => node.attribs?.class
	const textContent = node => node.children?.[0]?.data

	const replace = node => {
		const wrap = node => {
			const props    = attributesToProps(node.attribs);
			const children = domToReact(node.children, { library, replace });

			return { children, ... props };
		}

		const isBox      = /\bbox\b/.test(className(node))
		const isTOC      = id(node) == 'TOC'
		const isLastRefs = id(node) == 'refs' && route == routes.at(-1)

		return (
			isTOC      ? island(<TOC name={ name } items={ items }/>) :
			isBox      ? island(<Box { ... wrap(node) }/>)            :
			isLastRefs ? <></>                                        :
			null
		);
	}

	const vdom         = parse(page, { library, replace });
	const html         = renderToString(vdom);
	const documentHtml = dangerouslySkipEscape('<!DOCTYPE html>' + html);

	return { documentHtml, pageContext: { islands } };
}
