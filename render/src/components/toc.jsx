import {
	toc,
	book_title,
	part,
	part_title,
	part_title_first,
	part_title_rest,
	dropdown,
	chapter_title,
} from './toc.module.scss'

import { title, subtitle, parts }      from '/contents.json'
import { useState, useEffect, useRef } from 'preact/hooks'

const TOC = () => (
	<header class={ toc } id='toc'>
		<a class={ book_title } href='/'>{ `${title}: ${subtitle}` }</a>
		<nav>
		{ parts.map(props => <Part { ... props }/>) }
		</nav>
	</header>
)

const Part = ({ first, rest, chapters }) => {
	const [ hover, setHover ] = useState(true);

	const node = useRef();
	const rect = useRef();
	const show = rect.current;
	const hide = { width: 0 };

	useEffect(() => {
		const { width } = node.current.getBoundingClientRect();
		rect.current    = { width };

		setHover(false);
	}, []);

	return (
		<div
			class={ part }
			onMouseEnter={ () => setHover(true)  }
			onMouseLeave={ () => setHover(false) }
		>
			<div class={ part_title }>
				<div class={ part_title_first }>{ first }</div>
				<div
					class={ part_title_rest }
					ref={ node }
					style={ hover ? show : hide }
				>{ rest }</div>
			</div>
			<div class={ dropdown }>
				{ chapters.map(props => <Chapter hover={ hover } { ... props }/>) }
			</div>
		</div>
	);
}

const Chapter = ({ title, href, hover }) => {
	const node = useRef();
	const rect = useRef();
	const show = rect.current;
	const hide = { width: 0, height: 0 };

	useEffect(() => {
		const { width, height } = node.current.getBoundingClientRect();
		rect.current            = { width, height };
	}, []);

	return (
		<a
			class={ chapter_title }
			ref={ node }
			href={ href }
			style={ hover ? show : hide }
		>{ title }</a>
	);
}

export default TOC
