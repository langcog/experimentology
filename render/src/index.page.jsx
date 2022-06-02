import '/src/global.scss'

import Box                   from '/src/box'
import TOC                   from '/src/toc'
import { routes }            from '/contents.json'
import parse, { domToReact } from 'html-react-parser'
import * as preact           from 'preact'

const descendants = ({ children = [] }) => [
	children,
	children.map(descendants),
].flat(Infinity).filter(Boolean)

const isTOC = node => node.attribs?.id == 'TOC'
const isBox = node => node.attribs?.class?.match(/\bbox\b/)

const isPageButton = node => node.name == 'p' && descendants(node)
.some(node => node.name == 'button' && descendants(node)
	.some(node => node.data.match(/^(Next|Previous)$/))
)

const isRefs = node => node.attribs?.id == 'refs'

const isLastPage = url => url == routes.at(-1);

const parseBox = node => {
	let title;

	const [ , type ] = node.attribs.class.split(' ');

	const children = domToReact(node.children, {
		library : preact,
		replace : ({ data = '' }) => {
			if (data.startsWith('(TITLE) ')) {
				title = data.replace('(TITLE) ', '');
				return <></>;
			}
		}
	});

	return { title, type, children };
}

export default ({ url, body }) => parse(body, {
	library : preact,
	replace : node => {
		if (isTOC(node)) return <TOC/>;

		if (isBox(node)) return <Box { ... parseBox(node) }/>;

		if (isPageButton(node)) return <></>;

		if (isRefs(node) && isLastPage(url)) return <></>;
	}
})