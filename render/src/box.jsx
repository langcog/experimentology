import '/src/box.scss'

import icons               from '/src/icons'
import Collapsible         from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Label = ({ type }) => (
	<>
		<FontAwesomeIcon icon={ icons[type] }/>
		{ type.replace('_', ' ').replace(/^./, s => s.toUpperCase()) }
		<FontAwesomeIcon icon={ icons.angles }/>
	</>
)

const Box = ({ title, type, children }) => (
	<div class={ `box ${type}` }>
		<Collapsible
			trigger={ <Label type={ type }/> }
			transitionTime={ 300 }
			easing='ease'
		>
			{ title && <p class='title'>{ title }</p> }
			{ children }
		</Collapsible>
	</div>
)

export default Box