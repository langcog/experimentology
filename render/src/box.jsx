import '/src/box.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Interweave }      from 'interweave'
import render              from 'preact-render-to-string'
import icons               from '/src/icons'

const Box = ({ content, type }) => {
	const transform = (_, [ text ]) => {
		if (text?.startsWith?.('(TITLE) ')) {
			return <p class='title'>{ text.replace('(TITLE) ', '') }</p>
		}
	}

	const { [ type ]: icon } = icons;

	const name = type.replace('_', ' ').replace(/^./, s => s.toUpperCase());

	return (
		<>
		<div class='type'>
			<span class='icon'><FontAwesomeIcon icon={ icon }/></span>
			{ name }
		</div>
		<div class='content'>
			<Interweave noWrap content={ content } transform={ transform }/>
		</div>
		</>
	);
}

document.querySelectorAll('.box').forEach(box => {
	const { innerHTML: content, classList: [ , type ] } = box;

	box.innerHTML = render(<Box content={ content } type={ type }/>);
});