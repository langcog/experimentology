import TOC                       from '/src/toc'
import { routes }                from '/contents.json'
import { readFile }              from 'fs/promises'
import { basename, format }      from 'path'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'
import parse                     from 'html-react-parser'
import renderToString            from 'preact-render-to-string'
import * as library              from 'preact'

export const prerender = () => routes

export const onBeforeRender = async ({ url }) => {
	const dir  = 'r';
	const ext  = '.html';
	const name = basename(url, ext) || 'index';
	const page = format({ dir, name, ext });
	const html = await readFile(page, 'utf-8');

	return { pageContext: { html } };
}

export const render = ({ url, html }) => {
	const descendants = node => [
		node.children,
		node.children?.map(descendants),
	].flat(Infinity).filter(Boolean)

	const textContent = node => descendants(node)
	.filter(({ type }) => type == 'text')
	.map(({ data }) => data)
	.join('')

	const isPageButton = node => node.name == 'p' && descendants(node)
	.some(node => node.name == 'button' && descendants(node)
		.some(node => node.data.match(/^(Next|Previous)$/))
	)

	const isLastPage = url == routes.at(-1);

	const replace = node => {
		if (node?.attribs?.id == 'TOC') return <TOC/>;

		if (isPageButton(node)) return <></>;

		if (isLastPage && node?.attribs?.id == 'refs') return <></>;
	}

	html = parse(html, { library, replace });
	html = renderToString(html)
	html = dangerouslySkipEscape('<!DOCTYPE html>' + html);

	return html;
}