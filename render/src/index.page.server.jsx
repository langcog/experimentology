import transform                 from './transform'
import { routes }                from '/contents.json'
import { readFile }              from 'fs/promises'
import { basename, format }      from 'path'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'

export const passToClient = [ 'islands' ];

export const prerender = () => routes

export const onBeforeRender = async ({ url }) => {
	const dir  = 'r';
	const ext  = '.html';
	const name = basename(url, ext) || 'index';
	const page = format({ dir, name, ext });
	const html = await readFile(page, 'utf-8');

	const [ , head ] = html.match(/<head>([\s\S]+?)<\/head>/);
	const [ , body ] = html.match(/<body>([\s\S]+?)<\/body>/);

	return { pageContext: { head, ... transform({ url, html: body }) } };
}

export const render = ({ head, body }) => dangerouslySkipEscape(`
<!DOCTYPE html>
<html>
<head>${ head }</head>
<body>${ body }</body>
</html>
`)