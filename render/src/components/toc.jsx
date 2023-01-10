import style                     from './toc.module.scss'
import Sticky                    from 'react-stickynode'
import SiteNav, { ContentGroup } from 'react-site-nav'
import { slide as Menu }         from 'react-burger-menu'
import { useWindowWidth }        from '@react-hook/window-size/throttled'

const TOC = ({ name, items }) => {
	const sections    = items.length;
	const width       = useWindowWidth();
	const breakpoint  = 760;
	const isDesktop   = width > breakpoint;
	const columnWidth = width / sections;
	const rowHeight   = 40;

	const [ background, color, hover ] = isDesktop
	? [ 'white',   'dimgray',   'black' ]
	: [ 'dimgray', 'lightgray', 'white' ];

	const title = (
		<a class={ style.book } href='/'>{ name }</a>
	);

	const children = items.map(({ name, items }, i) => {
		const subsections = items.length;

		const [ section, subsection ] = i < sections - 1
		? [ style.part,       style.chapter  ]
		: [ style.appendices, style.appendix ];

		const title = (
			<a class={ section }>{ name }</a>
		);

		const children = items.map(({ name, href }) => (
			<a class={ subsection } href={ href }>{ name }</a>
		));

		return isDesktop
		? <ContentGroup
			title={ title }
			height={ rowHeight * subsections }
			children={ children }
		/>
		: [ title, children ];
	});

	return (
		<header class={ style.toc } style={{
			'--background' : background,
			'--color'      : color,
			'--hover'      : hover,
			'--rowHeight'  : rowHeight,
		}}>
			<nav class={ isDesktop ? style.desktop : style.mobile }>
			{
				isDesktop
				? <Sticky className={ style.sticky } innerZ={ 1 }>
					{/*{ title }*/}
					<SiteNav
						breakpoint={ breakpoint }
						columnWidth={ columnWidth }
						rowHeight={ rowHeight }
						background={ background }
						color={ color }
						contentBackground={ background }
						contentColor={ color }
						children={ children }
					/>
				</Sticky>
				: <Menu
					right
					styles={{ bmOverlay: { background: 'none' } }}
					// children={[ title, children ]}
					children={ children }
				/>
			}
			</nav>
		</header>
	);
}

export default TOC
