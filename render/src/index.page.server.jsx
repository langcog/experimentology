import TOC                       from './components/toc'
import Box                       from './components/box'
import contents, { routes }      from '/contents.json'
import parse, { domToReact }     from 'html-react-parser'
import renderToString            from 'preact-render-to-string'
import preact                    from 'preact'
import { readFile }              from 'fs/promises'
import { dangerouslySkipEscape } from 'vite-plugin-ssr'

export const passToClient = [ 'islands' ];

export const prerender = () => routes

export const onBeforeRender = async ({ url }) => {
	const [ , path ] = url.match(/^\/(.*?)(index)?(\.html.*)?$/);

	const route = `/${path}`;
	const file  = `r/${path || 'index'}.html`;
	const page  = await readFile(file, 'utf-8');

	return { pageContext: { route, page } };
}

export const render = ({ route, page }) => {
	const islands = [];

	const island = node => {
		const { type: { name }, props } = node;
		const id = `island_${islands.length}`;

		islands.push({ id, name, props });

		console.log({ node, id, name, props });

		return (
			<div id={ id }/>
		);
	}

	const box = ({ attribs, children }) => {
		let title;

		const [ , type ] = attribs.class.split(' ');

		const content = renderToString(domToReact(children, {
			library : preact,
			replace : ({ children: [ { data } = {} ] = [] }) => {
				const mark = '(TITLE) ';

				if (data?.startsWith(mark)) {
					title = data.replace(mark, '');
					return <></>;
				}
			},
		}));

		return { title, type, content };
	}

	const isBox      = node => node.attribs?.class?.match(/\bbox\b/)
	const isTOC      = node => node.attribs?.id == 'TOC'
	const isLastRefs = node => node.attribs?.id == 'refs' && route == routes.at(-1)

	const replace = node => {
		return (
			isBox(node)      ? island(<Box { ... box(node) }/>) :
			isTOC(node)      ? island(<TOC { ... contents  }/>) :
			isLastRefs(node) ? <></>                            :
			null
		);
	}

	const vdom         = parse(page, { library: preact, replace });
	const html         = renderToString(vdom);
	const documentHtml = dangerouslySkipEscape('<!DOCTYPE html>' + html);

	return { documentHtml, pageContext: { islands } };
}
