import './box.scss'

import icons               from '/src/icons'
import Collapsible         from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import parse               from 'html-react-parser'

const Label = ({ type }) => (
	<>
		<FontAwesomeIcon icon={ icons[type] }/>
		{ type.replace('_', ' ').replace(/^./, s => s.toUpperCase()) }
		<FontAwesomeIcon icon={ icons.angles }/>
	</>
)

const Box = ({ title, type, content }) => (
	<div class={ `box ${type}` }>
		<Collapsible
			trigger={ <Label type={ type }/> }
			overflowWhenOpen='visible'
			transitionTime={ 300 }
			easing='ease'
		>
			{ title && <p class='title'>{ title }</p> }
			{ parse(content) }
		</Collapsible>
	</div>
)

export default Box