import TOC                   from './components/TOC'
import Box                   from './components/Box'
import { routes }            from '/contents.json'
import parse, { domToReact } from 'html-react-parser'
import render                from 'preact-render-to-string'
import library               from 'preact'

const descendants = ({ children = [] }) => [
	children,
	children.map(descendants),
].flat(Infinity).filter(Boolean)

const box = ({ attribs, children }) => {
	let title;

	const [ , type ] = attribs.class.split(' ');

	const replace = ({ children: [ { data } = {} ] = [] }) => {
		const mark = '(TITLE) ';

		if (data?.startsWith(mark)) {
			title = data.replace(mark, '');
			return <></>;
		}
	}

	const content = render(domToReact(children, { library, replace }));

	return { title, type, content };
}

export default ({ url, html }) => {
	const islands = [];

	const island = node => {
		const { type: { name }, props } = node;
		const id = `island_${islands.length}`;

		islands.push({ id, name, props });

		return <div id={ id } children={ node }/>;
	}

	const isBox       = node => node.attribs?.class?.match(/\bbox\b/)
	const isTOC       = node => node.attribs?.id == 'TOC'
	const isLastRefs  = node => node.attribs?.id == 'refs' && url == routes.at(-1)
	const isNavButton = node => node.name == 'p' && descendants(node)
	.some(node => node.name == 'button' && descendants(node)
		.some(node => node.data.match(/^(Next|Previous)$/))
	)

	const replace = node => (
		isBox(node)       ? island(<Box { ... box(node) }/>) :
		isTOC(node)       ? island(<TOC/>)                   :
		isLastRefs(node)  ? <></>                            :
		isNavButton(node) ? <></>                            :
		null
	)

	const body = render(parse(html, { library, replace }));

	return { islands, body };
}