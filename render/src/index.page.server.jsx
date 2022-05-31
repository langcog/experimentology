import TOC                       from '/src/toc'
import { routes }                from '/contents.json'
import { readFile }              from 'fs/promises'
import { basename, format }      from 'path'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'
import parse                     from 'html-react-parser'
import renderToString            from 'preact-render-to-string'
import * as library              from 'preact'

const replace = node => {
	if (node?.attribs?.id == 'TOC') return <TOC/>;
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