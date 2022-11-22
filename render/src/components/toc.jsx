import style                     from './toc.module.scss'
import Sticky                    from 'react-stickynode'
import SiteNav, { ContentGroup } from 'react-site-nav'
import { slide as Menu }         from 'react-burger-menu'
import { useState, useEffect }   from 'preact/hooks'

const Desktop = ({ book, parts, width, color, background, ... props }) => {
	const columnWidth = width / parts.length;
	const rowHeight   = 40;

	return (
		<header class={ style.desktop } style={{ '--rowHeight' : rowHeight }}>
			<Sticky className={ style.sticky } innerZ={ 2 }>
				<a class={ style.book } href='/'>{ book }</a>
				<SiteNav
					columnWidth={ columnWidth }
					rowHeight={ rowHeight }
					color={ color }
					background={ background }
					contentColor={ color }
					contentBackground={ background }
					{ ... props }
				>
					{parts.map(({ part, chapters }, i, { length }) => {
						const isLast = i < length - 1;
						const group  = isLast ? style.part    : style.appendices;
						const item   = isLast ? style.chapter : style.appendix;

						return (
							<ContentGroup
								title={ <a class={ group }>{ part }</a> }
								width={ columnWidth * 1.75 }
								height={ rowHeight * chapters.length }
							>
								{chapters.map(({ chapter, href }) => (
									<a class={ item } href={ href }>{ chapter }</a>
								))}
							</ContentGroup>
						);
					})}
				</SiteNav>
			</Sticky>
		</header>
	);
}

const Mobile = ({ book, parts }) => (
	<header class={ style.mobile }>
		<Menu right styles={{ bmOverlay: { background: 'none' } }}>
			<a class={ style.book } href='/'>{ book }</a>
			{parts.map(({ part, chapters }, i, { length }) => {
				const isLast = i < length - 1;
				const group  = isLast ? style.part    : style.appendices;
				const item   = isLast ? style.chapter : style.appendix;

				return (
					<div class={ style.group }>
						<a class={ group }>{ part }</a>
						{chapters.map(({ chapter, href }) => (
							<a class={ item } href={ href }>{ chapter }</a>
						))}
					</div>
				);
			})}
		</Menu>
	</header>
)

const TOC = props => {
	const [ width, setWidth ] = useState(innerWidth);

	useEffect(() => {
		addEventListener('resize', () => setWidth(innerWidth));
	}, []);

	const color      = 'hsl( 0, 0%,  80% )';
	const background = 'hsl( 0, 0%,  30% )';
	const breakpoint = 760;

	return (
		<nav class={ style.toc } style={{
			'--color'      : color,
			'--background' : background,
		}}>
			{
				width > breakpoint
				? <Desktop
					color={ color }
					background={ background }
					breakpoint={ breakpoint }
					width={ width }
					{ ... props }
				/>
				: <Mobile background={ background }/>
			}
		</nav>
	);
}

export default TOC
