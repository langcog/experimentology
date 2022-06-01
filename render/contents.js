import { JSDOM }     from 'jsdom'
import { writeFile } from 'fs/promises'

const dom = await JSDOM.fromFile('r/index.html');
const { window: { document } } = dom;

const url = 'about:blank';
dom.reconfigure({ url });

const [ title, subtitle ] = [ '.title', '.subtitle' ]
.map(_ => document.querySelector(_).textContent);

const parts = [ ... document.querySelectorAll('#TOC li') ]
.reduce((parts, { firstChild: { textContent: title, href } }) => {
	title = title.replace(/^\S+?\s/, '');
	href  = href.replace(url, '').replace(/(\.html)?#.+/, '');

	if (! href) {
		const [ , first, rest ] = title.match(/([A-z]+)(.*)/);

		parts.push({ first, rest, chapters: [] });
	} else {
		parts.at(-1).chapters.push({ title, href });
	}

	return parts;
}, []);

const routes = [ '', '404', ... parts
	.flatMap(({ chapters }) => chapters.map(({ href }) => href))
]
.map(route => `/${route}`);

await writeFile('contents.json', JSON.stringify({
	routes,
	title,
	subtitle,
	parts,
}, null, 2));