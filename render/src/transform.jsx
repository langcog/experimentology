import Box                   from './components/box'
import TOC                   from './components/toc'
import { routes }            from '/contents.json'
import parse, { domToReact } from 'html-react-parser'
import render                from 'preact-render-to-string'
import library               from 'preact'

const descendants = ({ children = [] }) => [
	children,
	children.map(descendants),
].flat(Infinity).filter(Boolean)

const isLastPage = url => url == routes.at(-1)

const isRefs = node => node.attribs?.id == 'refs'
const isTOC  = node => node.attribs?.id == 'TOC'
const isBox  = node => node.attribs?.class?.match(/\bbox\b/)

const isPageButton = node => node.name == 'p' && descendants(node)
.some(node => node.name == 'button' && descendants(node)
	.some(node => node.data.match(/^(Next|Previous)$/))
)

const convertBox = ({ attribs, children }) => {
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

	const replace = node => {
		if (isTOC(node)) return island(<TOC/>);

		if (isBox(node)) return island(<Box { ... convertBox(node) }/>);

		if (isPageButton(node)) return <></>;

		if (isRefs(node) && isLastPage(url)) return <></>;
	}

	const body = render(parse(html, { library, replace }));

	return { islands, body };
}