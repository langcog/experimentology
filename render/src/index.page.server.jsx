import TOC                       from '/src/toc'
import { routes }                from '/contents.json'
import { readFile }              from 'fs/promises'
import { basename, format }      from 'path'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'
import parse                     from 'html-react-parser'
import renderToString            from 'preact-render-to-string'
import * as library              from 'preact'

const descendants = node => [
	node.children,
	node.children?.map(descendants),
].flat(Infinity).filter(Boolean)

const textContent = node => descendants(node)
.filter(({ type }) => type == 'text')
.map(({ data }) => data)
.join('')

const replace = node => {
	if (node?.attribs?.id == 'TOC') return <TOC/>;

	if (
		node.name == 'p' && descendants(node)
		.some(node => node.name == 'button' && descendants(node)
			.some(node => node.data.match(/^(Next|Previous)$/))
		)
	) return <></>;
}

export const prerender = () => routes

export const onBeforeRender = async ({ url }) => {
	const dir  = 'r';
	const ext  = '.html';
	const name = basename(url, ext) || 'index';
	const page = format({ dir, name, ext });
	const html = await readFile(page, 'utf-8');

	return { pageContext: { html } };
}

export const render = ({ html }) => dangerouslySkipEscape(
	'<!DOCTYPE html>' + renderToString(parse(html, { library, replace }))
)