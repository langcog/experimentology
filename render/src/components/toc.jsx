import style        from './toc.module.scss'
import Collapsible  from 'react-collapsible'
import StickyBox    from 'react-sticky-box'
import { StickyContainer, Sticky } from 'react-sticky'
import { useState } from 'preact/hooks'

const TOC = ({ title, subtitle, parts }) => {
	const [ open, setOpen ] = useState(null);

	return (
		// <StickyContainer>
			<header class={ style.toc }>
				<a class={ style.book_title } href='/'>{title}: {subtitle}</a>
				{/*<Sticky>*/}
				<nav class={ style.parts } onMouseLeave={ () => setOpen(null) }>
					{parts.map(({ title, chapters }, index) => (
						<Collapsible
							classParentString={ style.part }
							// className={ style.part }
							// openedClassName={ style.part_open }
							triggerClassName={ style.part_title }
							triggerOpenedClassName={ style.part_title }
							contentOuterClassName={ style.outer }
							contentInnerClassName={ style.inner }
							// transitionTime={ 100 }
							// transitionCloseTime={ 100 }
							// easing='ease'
							// easing='step-start'
							// overflowWhenOpen='visible'
							trigger={ title }
							triggerElementProps={{ onMouseEnter: () => setOpen(index) }}
							open={ index == open }
							// open={ true }
						>
							{chapters.map(({ title, href }) => (
								<a class={ style.chapter_title } href={ href }>{ title }</a>
							))}
						</Collapsible>
					))}
				</nav>
				{/*</Sticky>*/}
			</header>
		// </StickyContainer>
	);
}

export default TOC
